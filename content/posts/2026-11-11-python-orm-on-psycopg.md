---
title: "Building a Tiny ORM on psycopg to See What an ORM Does"
date: 2026-11-11
tags: [python, postgres, psycopg, orm, architecture, homelab]
draft: true
---

# Building a Tiny ORM on psycopg to See What an ORM Does

I use ORMs all the time without thinking much about what happens between my objects and the database. To find out, I wrote a small Python app against the Postgres cluster in my homelab. It started with raw SQL and no abstraction. I added layers one at a time, each time something hurt.

This post walks through those steps: raw psycopg, a generic data access object, a decorator that describes tables, and finally mappers and repositories. Each step fixes a problem the previous one exposed. At the end I'm left with a decent picture of what an ORM does for me, and a clear reason to stop building my own.

## The setup

| Item | Value |
|---|---|
| Language | Python 3.12+, managed with `uv` |
| Driver | psycopg 3 |
| Database | Postgres on my homelab Kubernetes cluster |
| Domain | Users, items and orders, a small order-management app |

## Step 1: raw SQL with psycopg

psycopg makes the first step easy. Open a connection, get a cursor and run SQL:

```python
with psycopg.connect(settings.pg_url) as conn, conn.cursor() as cursor:
    cursor.execute(
        "SELECT * FROM users WHERE national_identifier = %s", ("111111111",)
    )
    user = cursor.fetchone()          # a tuple: (id, name, national_identifier)

    cursor.execute(
        "INSERT INTO orders (user_id, status) VALUES (%s, %s)",
        (user[0], "IN_PROGRESS"),
    )
    conn.commit()
```

This works, and it shows clearly what goes to the database. Two problems appear quickly:

- **Nothing is reusable.** Every query is a one-off string. Inserting into `items` means writing a new `INSERT` with a new column list, even though it follows the same pattern as `users`.
- **Results are tuples.** `user[0]` is the id only because of the column order in the table. Add a column and that code silently breaks.

What I wanted was one API to interact with any table, so the rest of the code doesn't build SQL strings.

## Step 2: dataclasses and a generic data access object

The first abstraction has two parts.

The first part is a set of **dataclasses that mirror the tables**, one per table, with one field per column:

```python
@dataclass
class User:
    name: str
    national_identifier: str
    id: UUID | None = None
```

The second part is a **generic data access object** that builds SQL from those dataclasses. It's generic over the row type `T` and the primary-key type `K`, so one class serves every table:

```python
class DBAPI[T, K]:
    def __init__(self, conn: Connection, model_class: type[T]) -> None: ...

    def insert(self, entity: T) -> T: ...
    def fetch_all(self) -> Iterable[T]: ...
    def fetch_by_id(self, id: K) -> T | None: ...
    def delete_all(self) -> None: ...
```

Two psycopg features do most of the work:

- **`psycopg.sql` composes queries safely.** Table and column names go through `sql.Identifier`, which quotes them, and values go through placeholders, so nothing is concatenated into the query text. `insert` reads the column list from `dataclasses.fields(entity)` and skips fields that are `None`. That lets the database fill defaults like generated ids, and `RETURNING *` hands them back.
- **`class_row` turns rows into objects.** With `row_factory=class_row(model_class)`, psycopg builds the dataclass from each row, so code reads `user.id` instead of `user[0]`.

```python
names = [f.name for f in dataclasses.fields(entity) if getattr(entity, f.name) is not None]
values = [getattr(entity, n) for n in names]

statement = sql.SQL("insert into {table} ({fields}) values ({}) returning *").format(
    sql.SQL(", ").join(sql.Placeholder() * len(names)),
    table=sql.Identifier(table_name),
    fields=sql.SQL(", ").join(map(sql.Identifier, names)),
)
```

This alone gives a lot of flexibility. Inserting a user and inserting an item now go through the same code:

```python
users = DBAPI[User, UUID](conn, User)
items = DBAPI[Item, int](conn, Item)

users.insert(User("Test user", "123456789"))
items.fetch_all()
```

## Step 3: describing tables with a decorator

The generic version soon hits the places where tables differ. The `K` type parameter already covers different primary-key types, such as a `UUID` for users and an `int` for items. The SQL also needs two facts the dataclass doesn't carry:

- **The table name.** The class is `User`, but the table is `users`. Items live in `items` and order lines in `orders_items`.
- **The primary-key column.** `fetch_by_id` needs to know which column to filter on. It's `id` for users but `code` for items.

I could pass these into every `DBAPI` constructor, but then each call site has to know schema details. Instead I attached the metadata to the class with a decorator, much like the table and column annotations that ORMs such as JPA use:

```python
@table("items", "code")
@dataclass
class Item:
    name: str
    description: str
    value: Decimal
    quantity: int
    code: int | None = None
```

The decorator doesn't change the class. It records the metadata in a module-level registry and returns the class unchanged:

```python
registry: dict[str, TableMetadata] = {}

def table(name: str, pk: str = "id"):
    def decorate(cls):
        registry[cls.__qualname__] = TableMetadata(name, pk, cls)
        return cls
    return decorate
```

`DBAPI` looks the class up in the registry when it's created, and raises if the class was never decorated. Every query then reads the table and primary-key column from that metadata:

```python
statement = sql.SQL("select * from {table} where {id} = {id_value}").format(
    table=sql.Identifier(self._tableMetadata.table_key),
    id=sql.Identifier(self._tableMetadata.table_p_key),
    id_value=sql.Literal(id),
)
```

The call site stays `DBAPI[Item, int](conn, Item)`, with no schema arguments. The class describes itself, and the data access object reads that description. That is the core pattern behind declarative ORMs.

## Step 4: mappers and a repository layer

With table access sorted, a different problem showed up. The objects the application wants to work with aren't the same as the rows in the database.

| Concept | Application object | Table row |
|---|---|---|
| Item code | `str`, with validation rules | `int` identity column starting at 10000 |
| Order owner | a whole `User` | a `user_id` foreign key |
| Timestamps | optional, set by the app or the database | filled by column defaults |

If the application used the row dataclasses directly, every business rule would be shaped by the table layout. So I split them in two:

- **Domain objects** in `domain/`. They're plain dataclasses with business rules, such as `Item.validate()` and `Order.create_order()`, and no database knowledge.
- **Row models** in `models/`. They're decorated with `@table` and match the tables exactly.

Something has to convert between the two. That's a **mapper**, a small class with two methods:

```python
class UserMapper:
    def to_table(self, input: User) -> UserRow:
        return UserRow(name=input.name, national_identifier=input.national_identifier)

    def from_table(self, output: UserRow) -> User:
        return User(id=output.id, name=output.name,
                    national_identifier=output.national_identifier)
```

On top of the mapper and the `DBAPI` sits a **repository**. It takes domain objects in, converts them, calls the `DBAPI` and converts the results back. The rest of the app never sees a row model:

```python
class ItemRepository:
    def __init__(self, dao: DBAPI[ItemRow, int], mapper: Mapper[Item, ItemRow]): ...

    def insert(self, entity: Item) -> Item:
        if entity.code is not None and self._dao.fetch_by_id(int(entity.code)):
            raise ValueError("Item already exists")
        inserted = self._dao.insert(self._mapper.to_table(entity))
        return self._mapper.from_table(inserted)
```

The repository is also where the API starts to speak the application's language instead of generic database operations. It works in domain types, and it holds rules like "an item code must be unique". Above it, managers such as `UserManager.create_user` and `OrderManager.place_order` expose business operations. They depend on a `Repository` `Protocol` instead of a concrete class, so a test can swap in an in-memory version.

A single call now flows through every layer:

```
UserManager.create_user(User)                  application
  -> UserRepository.insert(User)               repository
       -> UserMapper.to_table(User) -> UserRow mapper
       -> DBAPI[UserRow, UUID].insert(UserRow) data access
            -> INSERT ... RETURNING *          psycopg -> Postgres
       <- UserRow -> UserMapper.from_table -> User
```

## Where this leaves me

Building these layers by hand showed the behind the scenes of what an ORM does for me: it generates SQL from class metadata, turns rows into objects, and keeps the domain separate from the schema. It also showed me what's still missing, and every gap is a large piece of work:

- **Relationships.** An order row can hold `user_id`, but not a `User`. Loading related objects without N+1 queries is a feature of its own.
- **A unit of work.** `DBAPI` commits after every statement, so placing an order with several line items can't be atomic.
- **Queries and migrations.** There's no filtering, ordering or pagination, and the tables are created with raw `CREATE TABLE` strings.

Building those isn't the goal of my project, so the next step is moving to SQLAlchemy. The domain, the application layer and the mappers stay as they are. The `@table` registry, `DBAPI` and the commit-per-statement model are what get replaced.
