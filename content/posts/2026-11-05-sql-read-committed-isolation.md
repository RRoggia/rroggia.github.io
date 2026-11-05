---
title: "PostgreSQL's Read Committed isolation"
tags: ['sql', 'postgres', 'concurrency', 'isolation', 'acid', 'database']
published: true
date: '2026-11-05'
---

# PostgreSQL's Read Committed isolation

I've used PostgreSQL for years without thinking much about its default isolation level, Read Committed. This week I spent a session getting it to misbehave: two `psql` terminals, one Docker container running Postgres 18, and ten small exercises. In each one, I predicted the result before running the steps.

Here's what I learned.

## The setup

Two terminals, labelled T1 and T2, and three small tables: bank accounts, a website hit counter, and a doctors' on-call roster. Each exercise is a script of steps that alternate between the two sessions. Some steps hang, and those waits turned out to be where most of the learning happened.

## 1. Every statement gets a new snapshot

This is the main rule. In Read Committed, each **statement** sees the data that was committed when the statement started. The snapshot isn't taken per transaction.

Two things follow from this:

- **No dirty reads, ever.** Uncommitted changes from another session are invisible. PostgreSQL accepts `READ UNCOMMITTED` but treats it as Read Committed, which is stricter than the SQL standard requires.
- **Non-repeatable reads and phantoms are normal.** If I read a balance, another session commits a change, and I read it again in the same transaction, I get a different value. Re-run a `count(*)` and a new row can appear.

**Exercise 1: uncommitted changes.** Both sessions open a transaction. T2 changes Alice's balance from 100 to 999 without committing, and then each session reads the same row.

<video controls playsinline preload="metadata" width="1040" height="762" poster="/images/posts/sql-read-committed-isolation/exercise-01-uncommitted-changes.png" aria-label="T2 updates a balance to 999 without committing; T1 still reads 100">
  <source src="/images/posts/sql-read-committed-isolation/exercise-01-uncommitted-changes.mp4" type="video/mp4">
</video>

This exercise demonstrates that another session's uncommitted changes are invisible to other transactions, but you always see your own. PostgreSQL never allows dirty reads.

**Exercise 2: non-repeatable read.** T1 reads Alice's balance inside a transaction. T2 then sets it to 150 and commits straight away, and T1 runs the same query again.

<video controls playsinline preload="metadata" width="1040" height="896" poster="/images/posts/sql-read-committed-isolation/exercise-02-non-repeatable-read.png" aria-label="T1 reads a balance twice in one transaction and gets 100, then 150">
  <source src="/images/posts/sql-read-committed-isolation/exercise-02-non-repeatable-read.mp4" type="video/mp4">
</video>

Each statement takes a new snapshot, so reading a row twice in one transaction can return different values (non-repeatable read).

**Exercise 3: phantom read.** T1 counts and sums the accounts with a balance of at least 100. T2 then inserts an account for Carol and commits, and T1 repeats the query.

<video controls playsinline preload="metadata" width="1040" height="866" poster="/images/posts/sql-read-committed-isolation/exercise-03-phantom-read.png" aria-label="T1 repeats a range query and finds a third row after T2 inserts it">
  <source src="/images/posts/sql-read-committed-isolation/exercise-03-phantom-read.mp4" type="video/mp4">
</video>

The set of rows matching a condition can change between two queries in one transaction (phantom read), which can make multi-query reports inconsistent.

**Exercise 10: when a statement takes its snapshot.** T1's query sleeps 5 seconds per row, so it takes about 10 seconds. While it runs, T2 sets Bob's balance to 0 and commits. T1 then runs a second query without the sleep.

<video controls playsinline preload="metadata" width="1040" height="918" poster="/images/posts/sql-read-committed-isolation/exercise-10-statement-snapshot.png" aria-label="T2 commits while T1&#x27;s slow SELECT runs; T1 still shows bob at 200, then 0 on its next statement">
  <source src="/images/posts/sql-read-committed-isolation/exercise-10-statement-snapshot.mp4" type="video/mp4">
</video>

The snapshot is fixed when a statement starts, so changes committed while it runs stay invisible to it, and readers and writers don't block each other. I ran a slow `SELECT ... pg_sleep(5)` and, while it was running, committed an update from the other session. The slow query still returned the old value: the snapshot is fixed when the statement **starts**, even for rows it reads later.

## 2. Uncommitted changes are invisible, but they still hold locks

 Uncommitted changes are invisible to **readers**, but they hold **row locks**, and other **writers** have to wait on those locks. Readers and writers never block each other; writers block writers of the same row.

## 3. When a write has to wait, PostgreSQL re-checks just that row

T1 updates a row and hasn't committed. T2 tries to update the same row and blocks. When T1 commits, T2 does **not** start over with a new snapshot. PostgreSQL takes the **newest committed version of that one row**, re-checks the `WHERE` clause against it, and recalculates the `SET` expressions. This mechanism is called **EvalPlanQual**.

That's why this works:

```sql
UPDATE accounts SET balance = balance - 30 WHERE id = 1;
```

Two concurrent updates of this kind both apply correctly. No update is lost, because the arithmetic runs on the latest value after the lock is acquired.

**Exercise 4: relative update on the same row.** T1 adds 50 to Alice's balance of 100 and holds the row lock without committing. T2 tries to subtract 30 from the same row and has to wait for T1.

<video controls playsinline preload="metadata" width="1040" height="762" poster="/images/posts/sql-read-committed-isolation/exercise-04-relative-update.png" aria-label="T2 blocks on T1&#x27;s row lock, then applies its update to the new value, ending at 120">
  <source src="/images/posts/sql-read-committed-isolation/exercise-04-relative-update.mp4" type="video/mp4">
</video>

It's also why this is a safe overdraft check without any explicit locking:

```sql
UPDATE accounts SET balance = balance - 50 WHERE id = 1 AND balance >= 50;
-- UPDATE 0  →  insufficient funds
```

**Exercise 7: overdraft guard.** Alice has 100. T1 withdraws 80 and hasn't committed when T2 tries to withdraw 50 with the check above. T2's snapshot still shows 100, which passes the check, but T2 has to wait for T1's lock.

<video controls playsinline preload="metadata" width="1040" height="788" poster="/images/posts/sql-read-committed-isolation/exercise-07-overdraft-guard.png" aria-label="T2 waits for T1, re-checks the row at balance 20, and reports UPDATE 0">
  <source src="/images/posts/sql-read-committed-isolation/exercise-07-overdraft-guard.mp4" type="video/mp4">
</video>

**Exercise 8: the disappearing row.** The same re-check can also miss rows. The `website` table has two rows, `hits = 9` and `hits = 10`. T1 adds 1 to both without committing, and T2 tries to delete the row where `hits = 10`. T2 only considers the row that matched in its snapshot, so it never looks at the other row, which becomes 10 when T1 commits.

<video controls playsinline preload="metadata" width="1040" height="788" poster="/images/posts/sql-read-committed-isolation/exercise-08-disappearing-row.png" aria-label="T2&#x27;s DELETE waits for T1, finds the row is now 11, and deletes nothing, even though a row with hits = 10 now exists">
  <source src="/images/posts/sql-read-committed-isolation/exercise-08-disappearing-row.mp4" type="video/mp4">
</video>

EvalPlanQual re-checks only the rows the statement originally matched and doesn't re-scan the table. Rows can drop out of the result after a wait but can't join it, so the DELETE removes nothing.

## 4. The lost update: when the calculation happens in the application

The bug it's most likely to be written in real code is depicted in Exercise 5:

**Exercise 5: lost update.** T1 deposits 50 and T2 withdraws 30. Both read a balance of 100 and write back a value calculated from it. T2 sends its write before T1 commits, so it waits on T1's lock first.

<video controls playsinline preload="metadata" width="1040" height="944" poster="/images/posts/sql-read-committed-isolation/exercise-05-lost-update.png" aria-label="T1 and T2 both read 100; T2&#x27;s write of 70 overwrites T1&#x27;s 150, losing the deposit">
  <source src="/images/posts/sql-read-committed-isolation/exercise-05-lost-update.mp4" type="video/mp4">
</video>

The final balance is **70** when it should be **120**. T2's write blocked until T1 committed, then went through anyway, with no error and no warning. Waiting on the lock didn't help, because T2 had calculated its value from data it read before the wait.

Writing back a value calculated from an earlier read silently overwrites the other transaction's change (lost update), even though the write waited on the lock.

There are three ways to fix it:

| Approach | How | Trade-off | Exercise |
|---|---|---|---|
| Calculate in SQL | `SET balance = balance + 50` | Simplest, but only if the logic fits in one statement | Exercise 4 |
| Pessimistic locking | `SELECT ... FOR UPDATE`, then update | Others wait; watch out for long transactions and deadlocks | Exercise 6 |
| Optimistic locking | `UPDATE ... WHERE balance = 100` (or a `version` column) | `UPDATE 0` means someone changed it first, so **you must check the row count and retry** | Similar to Exercise 7 |

**Exercise 6: `SELECT ... FOR UPDATE`.** This is the pessimistic locking fix from the table, with the same deposit and withdrawal. Both sessions now lock the row when they read it, so T2's read waits for T1 to commit and T2 calculates from the new balance.

<video controls playsinline preload="metadata" width="1040" height="762" poster="/images/posts/sql-read-committed-isolation/exercise-06-select-for-update.png" aria-label="With SELECT FOR UPDATE, T2 waits, reads 150, and the balance ends at 120">
  <source src="/images/posts/sql-read-committed-isolation/exercise-06-select-for-update.mp4" type="video/mp4">
</video>

Locking the row when you read it makes the second transaction wait and then read the latest value, which fixes the lost update.

 For contrast, I re-ran Exercise 5 with T2 in REPEATABLE READ. Instead of silently losing the update, PostgreSQL aborted T2 with:

```
ERROR: could not serialize access due to concurrent update
```

Here a higher isolation level doesn't stop the conflict; it **turns a silent bug into an error** that the application must catch and retry.

## 5. Write skew: row locks don't protect rules that span several rows

This was my favourite exercise. The rule: **at least one doctor must stay on call.** Alice and Bob are both on call, and both decide to go off call at the same time:

1. Each transaction counts the on-call doctors and gets 2.
2. Each updates **its own row** to off call.
3. Both commit.

**Exercise 9: write skew.** T1 acts for Alice and T2 acts for Bob. Each session checks the rule by counting the on-call doctors, then updates its own row.

<video controls playsinline preload="metadata" width="1040" height="944" poster="/images/posts/sql-read-committed-isolation/exercise-09-write-skew.png" aria-label="Both transactions count 2 doctors on call and each goes off call; nobody is left on call">
  <source src="/images/posts/sql-read-committed-isolation/exercise-09-write-skew.mp4" type="video/mp4">
</video>

Nothing blocks, because they wrote different rows. In the end, nobody is on call. No lock conflict occurs and a rule spanning several rows breaks (write skew).

The fix is to take an exclusive lock on every row the decision depends on, and count **after** getting the lock:

```sql
WITH locked AS (SELECT name FROM doctors WHERE on_call FOR UPDATE)
SELECT count(*) FROM locked;
```

**Exercise 9, fixed.** This re-run uses that query as the check in both sessions. T1 locks both on-call rows and takes Alice off call, while T2's check waits on T1's locks.

<video controls playsinline preload="metadata" width="1040" height="892" poster="/images/posts/sql-read-committed-isolation/exercise-09b-write-skew-fix.png" aria-label="T2&#x27;s locking check blocks on T1, then counts 1, so bob stays on call">
  <source src="/images/posts/sql-read-committed-isolation/exercise-09b-write-skew-fix.mp4" type="video/mp4">
</video>

The second transaction blocks. When it resumes, EvalPlanQual drops Alice (she's no longer on call), so the count is **1**, and the application refuses the request. The database doesn't make that decision; the business rule still lives in my code. It just finally gets accurate data. The other option is `SERIALIZABLE`, which detects write skew automatically and makes one transaction fail, so the application can retry it.

## Takeaways

- **Read Committed = a new snapshot per statement.** Two queries in the same transaction can disagree.
- **Writers of the same row block each other, but never readers**. A plain SELECT never waits on row locks."
- **Writers block writers, never readers.** A plain `SELECT` never waits.
- **After a lock wait, PostgreSQL re-checks only that row** (EvalPlanQual). It doesn't re-scan the table.
- **Read-then-write in application code is the dangerous pattern.** Move the calculation into SQL, use `FOR UPDATE`, or use optimistic locking, and always check the row count.
- **Row locks only protect rows that both transactions write.** Rules across several rows need you to lock every row the decision reads, or `SERIALIZABLE`.
- **Higher isolation levels can replace silent anomalies with errors**, so retry logic for SQLSTATE `40001` stops being optional.
