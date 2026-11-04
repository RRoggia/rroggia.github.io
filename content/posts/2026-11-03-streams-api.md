---
title: 'Java Streams by Example'
tags: []
published: true
date: '2026-11-03'
---

# Java Streams by Example: 10 Exercises, Every Method Explained

My last serious Java was Java 7. To catch up, I'm working through every feature added since then, and the first stop was the **Streams API** from Java 8. I solved 10 exercises on a small online-shop dataset. This post explains every stream method I used, with the code I wrote.

## The data

All the examples use four simple classes:

- `Product`: id, name, `Category` (ELECTRONICS, BOOKS, CLOTHING, HOME) and price
- `Customer`: id, name, city
- `Order`: id, customer, `OrderStatus` (SHIPPED, DELIVERED, CANCELLED) and a list of `OrderLine`
- `OrderLine`: a product, a quantity, and `getSubtotal()` (price × quantity)

The dataset has 11 products, 6 customers and 10 orders.

## How a stream pipeline works

Every exercise follows the same three-part shape:

```java
products.stream()                       // 1. source: where the elements come from
        .filter(p -> p.getPrice() > 50) // 2. intermediate operations: each returns a new Stream
        .map(Product::getName)
        .collect(Collectors.toList());  // 3. terminal operation: produces the result
```

1. **Source**: `collection.stream()` turns a collection into a `Stream`.
2. **Intermediate operations** (`filter`, `map`, `sorted`, …) describe a transformation. They are *lazy*: nothing runs yet.
3. **Terminal operation** (`collect`, `count`, `max`, `sum`, …) runs the whole pipeline and produces a result. A stream can be consumed only once.

Compared to Java 7, the big change is that you describe *what* you want instead of writing the loop that does it. The rule I followed for all 10 exercises: one pipeline per method, no `for` loops, no mutable variables.

## Filter, map, sort: `filter`, `map`, `sorted`, `distinct`, `collect`

**Exercise 1: names of the products in a category, sorted alphabetically.**

```java
public static List<String> productNamesInCategory(List<Product> products, Category category) {
    return products.stream()
            .filter(p -> category == p.getCategory())
            .map(Product::getName)
            .sorted()
            .collect(Collectors.toList());
}
```

- **`filter(Predicate)`** keeps only the elements for which the condition is true.
- **`map(Function)`** turns each element into something else, here a `Product` into its name. `Product::getName` is a *method reference*, short for `p -> p.getName()`.
- **`sorted()`** sorts by natural order (alphabetical for `String`). `sorted(Comparator)` lets you choose the order.
- **`collect(Collectors.toList())`** gathers the results into a `List`.

Enums are compared with `==`: there is only one instance of each value, and `==` never throws a `NullPointerException`.

**Exercise 4: the cities of customers with an order in a given status, each city once, sorted.**

```java
public static List<String> citiesWithOrderStatus(List<Order> orders, OrderStatus status) {
    return orders.stream()
            .filter(o -> o.getStatus() == status)
            .map(Order::getCustomer)
            .map(Customer::getCity)
            .distinct()
            .sorted()
            .collect(Collectors.toList());
}
```

- Chaining two **`map`** calls walks through the objects step by step: order → customer → city.
- **`distinct()`** removes duplicates, using `equals`. Lisbon appears twice in the data but only once in the result.

## Counting and finding: `count`, `max`, `Comparator`, `Optional`

**Exercise 2: how many customers live in a city.**

```java
public static long countCustomersFromCity(List<Customer> customers, String city) {
    return customers.stream()
            .filter(c -> city.equals(c.getCity()))
            .count();
}
```

**`count()`** is a terminal operation that returns a `long`. Writing `city.equals(c.getCity())` instead of the other way round avoids a `NullPointerException` when a customer has no city.

**Exercise 3: the most expensive product.**

```java
public static Optional<Product> mostExpensiveProduct(List<Product> products) {
    return products.stream().max(Comparator.comparingDouble(Product::getPrice));
}
```

- **`max(Comparator)`** (and `min`) return an **`Optional`**, because the stream might be empty. `Optional.empty()` replaces the old habit of returning `null`.
- **`Comparator.comparingDouble(Product::getPrice)`** builds the comparator from a method reference.

Java 8 added factory methods to `Comparator` (`comparing`, `comparingInt`, `comparingDouble`) and methods to combine them (`reversed()`, `thenComparing()`). There's rarely a reason to write a comparator by hand anymore.

## Flattening and summing: `flatMap`, `mapToDouble`, `sum`

**Exercise 5: total revenue of all delivered orders.**

```java
public static double totalDeliveredRevenue(List<Order> orders) {
    return orders.stream()
            .filter(o -> o.getStatus() == OrderStatus.DELIVERED)
            .flatMap(o -> o.getLines().stream())
            .mapToDouble(OrderLine::getSubtotal)
            .sum();
}
```

- **`flatMap(Function)`** handles the one-to-many case. Each order has *several* lines. `map` would give a `Stream<List<OrderLine>>`; `flatMap` merges all those small streams into one flat `Stream<OrderLine>`.
- **`mapToDouble(...)`** switches to a `DoubleStream`, a stream of primitive `double` values. There are also `IntStream` and `LongStream`.
- **`sum()`** is available only on primitive streams. It returns `0.0` for an empty stream, so there's no `Optional` to unwrap. Primitive streams also offer `average()`, `max()` and `summaryStatistics()`.

## Grouping and partitioning: `groupingBy`, `mapping`, `averagingDouble`, `partitioningBy`, `summingInt`

This is where `Collectors` shines: some of the most useful work happens *inside* `collect`.

**Exercise 6: product names grouped by category.**

```java
public static Map<Category, List<String>> productNamesByCategory(List<Product> products) {
    return products.stream()
            .collect(groupingBy(Product::getCategory,
                    mapping(Product::getName, toList())));
}
```

- **`groupingBy(classifier)`** builds a `Map`: the classifier picks each element's key, and the elements with the same key go into a list. On its own, it would give `Map<Category, List<Product>>`.
- The second argument is a **downstream collector**: it decides what to do with the elements of each group. **`mapping(Product::getName, toList())`** turns each product into its name, then collects the names, giving `Map<Category, List<String>>`.

**Exercise 7: average price per category.**

```java
public static Map<Category, Double> averagePriceByCategory(List<Product> products) {
    return products.stream()
            .collect(groupingBy(Product::getCategory,
                    averagingDouble(Product::getPrice)));
}
```

The same `groupingBy`, with a different downstream collector: **`averagingDouble`**. Its relatives are `summingInt`/`summingDouble`, `counting()`, `minBy`/`maxBy` and `joining()` for strings.

**Exercise 8: split order ids into "total above a threshold" and "the rest".**

```java
public static Map<Boolean, List<String>> partitionOrderIdsByTotal(List<Order> orders, double threshold) {
    return orders.stream()
            .collect(partitioningBy(o -> total(o) > threshold,
                    mapping(Order::getId, toList())));
}

private static double total(Order o) {
    return o.getLines().stream().mapToDouble(OrderLine::getSubtotal).sum();
}
```

- **`partitioningBy(Predicate)`** is a special case of `groupingBy` with exactly two keys, `true` and `false`. Both keys are always present, even if one list is empty.
- It takes a downstream collector too, here `mapping` to keep only the ids.
- Moving the order total into a small `total(Order)` helper keeps the condition readable.

**Exercise 10: total quantity sold per product.**

```java
public static Map<String, Integer> quantitySoldPerProduct(List<Order> orders) {
    return orders.stream()
            .filter(o -> o.getStatus() == DELIVERED)
            .flatMap(o -> o.getLines().stream())
            .collect(groupingBy(line -> line.getProduct().getName(),
                    summingInt(OrderLine::getQuantity)));
}
```

This combines `flatMap` (order → lines) with `groupingBy` + **`summingInt`**. Another way is `Collectors.toMap`:

```java
.collect(toMap(line -> line.getProduct().getName(), OrderLine::getQuantity, Integer::sum));
```

The third argument is a **merge function**: it decides what happens when two elements map to the same key. Here, it adds the quantities.

## Streaming over a Map: `entrySet().stream()`, `comparingByValue`, `limit`

**Exercise 9: the top `n` customers by money spent.**

```java
public static List<String> topSpenders(List<Order> orders, int n) {
    return orders.stream()
            .filter(o -> o.getStatus() == OrderStatus.DELIVERED)
            .collect(groupingBy(o -> o.getCustomer().getName(),
                    summingDouble(StreamExercises::total)))
            .entrySet()
            .stream()
            .sorted(Entry.<String, Double>comparingByValue().reversed()
                    .thenComparing(Entry.comparingByKey()))
            .limit(n)
            .map(Entry::getKey)
            .collect(Collectors.toList());
}
```

This is two pipelines in one:

1. **Aggregate**: `groupingBy` + `summingDouble` builds a `Map<String, Double>` of customer name → total spent.
2. **Rank**: a `Map` isn't a stream, but **`entrySet().stream()`** gives a `Stream<Map.Entry<String, Double>>`, which can be sorted like anything else.

- **`Map.Entry.comparingByValue()`** / **`comparingByKey()`** are ready-made comparators for map entries.
- **`.reversed()`** flips the order, so the highest spender comes first.
- **`.thenComparing(...)`** breaks ties by name (more on that below).
- **`limit(n)`** keeps only the first `n` elements.
- **`map(Entry::getKey)`** keeps just the names.

## Pitfalls I hit along the way

- **`comparingByValue().reversed()` doesn't compile.** Once you chain `.reversed()`, Java can no longer infer the generic types. Spell them out with `Entry.<String, Double>comparingByValue().reversed()`, or write `Entry.comparingByValue(Comparator.reverseOrder())`.
- **`HashMap` order is undefined.** `groupingBy` returns a `HashMap`, so when two customers spend the same amount, their order in the result can change between runs or JDK versions. Add a tie-breaker with `thenComparing`. If you need the keys in order, `groupingBy(classifier, () -> new EnumMap<>(Category.class), downstream)` lets you choose the map type.
- **`toMap` throws on duplicate keys.** Without a merge function, `Collectors.toMap` throws `IllegalStateException: Duplicate key`.

## Cheat sheet

| Method | Kind | What it does | Exercise |
|---|---|---|---|
| `stream()` | source | Turns a collection into a stream | all |
| `filter(predicate)` | intermediate | Keeps the elements that match | 1, 2, 4, 5, 9, 10 |
| `map(function)` | intermediate | Transforms each element | 1, 4, 9 |
| `flatMap(function)` | intermediate | One element → many, flattened into one stream | 5, 10 |
| `distinct()` | intermediate | Removes duplicates (uses `equals`) | 4 |
| `sorted()` / `sorted(comparator)` | intermediate | Sorts naturally or by a comparator | 1, 4, 9 |
| `limit(n)` | intermediate | Keeps the first n elements | 9 |
| `mapToDouble(function)` | intermediate | Switches to a primitive `DoubleStream` | 5, 8 |
| `count()` | terminal | Number of elements, as a `long` | 2 |
| `max(comparator)` | terminal | Largest element, as an `Optional` | 3 |
| `sum()` | terminal (primitive streams) | Adds the values; 0 when empty | 5, 8 |
| `collect(collector)` | terminal | Gathers the results using a `Collector` | 1, 4, 6–10 |
| `Collectors.toList()` | collector | Collects into a `List` | 1, 4, 6, 8, 9 |
| `Collectors.groupingBy(key, downstream)` | collector | Builds a `Map` of key → group | 6, 7, 9, 10 |
| `Collectors.partitioningBy(predicate, downstream)` | collector | Splits into `true` / `false` groups | 8 |
| `Collectors.mapping(function, downstream)` | collector | Transforms elements inside a group | 6, 8 |
| `Collectors.averagingDouble(function)` | collector | Average of a group | 7 |
| `Collectors.summingInt` / `summingDouble` | collector | Sum of a group | 9, 10 |
| `Comparator.comparingDouble(function)` | comparator | Compares by a numeric property | 3 |
| `Map.Entry.comparingByValue()` / `comparingByKey()` | comparator | Compares map entries | 9 |
| `reversed()` / `thenComparing(...)` | comparator | Reverses the order / breaks ties | 9 |
