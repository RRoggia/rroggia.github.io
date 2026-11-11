---
title: 'Python Variable Scopes and Closures'
tags: [ 'python', 'closures', 'books' ]
published: true
date: '2026-11-09'
---

# Python Variable Scopes and Closures

I'm reading *Fluent Python* by Luciano Ramalho, and one of the topics that caught my attention is how Python decides the scope of a variable. These are my notes on it.

## Local vs global scope

Python does not require you to declare a variable. Since there is no declaration to look at, the scope is defined by how the variable is used inside the function, or by specific keywords.

A variable is considered local to a function if:

1. It is a parameter in the function definition.
2. A value is bound to it anywhere inside the function.

If neither of these match, Python looks for the variable in the global scope.

```python
counter = 10

def read_global():
    print(counter)  # not a parameter and never assigned, so it's global

def parameter_is_local(counter):
    print(counter)  # local, because it's a parameter

def assignment_is_local():
    counter = 99    # local, because a value is bound to it
    print(counter)

read_global()           # 10
parameter_is_local(1)   # 1
assignment_is_local()   # 99
print(counter)          # 10, the global was not changed
```

The word *anywhere* in the second rule matters. The decision is made for the whole function body, so an assignment on the last line also affects the lines before it:

```python
counter = 10

def broken():
    print(counter)  # UnboundLocalError
    counter = 99
```

Even though a global `counter` exists, the assignment makes `counter` a local variable in all of `broken`, and it has no value yet when `print` runs.

## The global keyword

To bind a value to the global variable from inside a function, use the `global` keyword to identify it as coming from the global scope:

```python
counter = 10

def with_global():
    global counter
    counter = 99

with_global()
print(counter)  # 99
```

## Closures

A closure is a function that holds bindings for its free variables. A free variable is a variable that is used in a function defined inside another function, and which is not part of the local scope nor the global scope.

For example, if `function_a` has a variable `ab` and the definition of `function_b`, and `function_b` uses `ab`, then `function_b` is a closure:

```python
def function_a():
    ab = 'hello from A'

    def function_b():
        return ab

    return function_b

b = function_a()
print(b())  # hello from A
```

`function_a` has already returned when `b()` is called, but `function_b` still holds the binding for `ab`. You can see it in the function attributes:

```python
print(b.__code__.co_freevars)             # ('ab',)
print(b.__closure__[0].cell_contents)     # hello from A
```

This also completes the lookup described earlier: for a variable that is not local, Python checks the enclosing functions before it gets to the global scope.

## Mutable and immutable values in a closure

The scope rules also change how you work with the values inside a closure, depending on whether they are mutable or immutable.

With a mutable value, such as a list, you change the internals of the object. There is no assignment to the variable, so it stays a free variable and you don't need any keyword:

```python
def make_history():
    history = []

    def add(value):
        history.append(value)  # changes the list, doesn't rebind the variable
        return history

    return add

add = make_history()
add(1)
print(add(2))  # [1, 2]
```

With an immutable value, such as a number, the only way to "change" it is to bind a new value to the variable. That assignment makes it a local variable, and the closure breaks:

```python
def make_counter():
    count = 0

    def increment():
        count += 1  # UnboundLocalError
        return count

    return increment
```

`count += 1` is the same as `count = count + 1`, so `count` is local to `increment` and has no value when it's read. The `nonlocal` keyword solves this by marking the variable as a free variable, even though it's being assigned:

```python
def make_counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    return increment

increment = make_counter()
increment()
print(increment())  # 2
```

## Summary

| Situation | Scope |
| --- | --- |
| Parameter of the function | Local |
| Value bound inside the function | Local |
| Declared with `global` | Global |
| Declared with `nonlocal` | Free variable from the enclosing function |
| Only read, and exists in an enclosing function | Free variable from the enclosing function |
| Only read, and doesn't exist in an enclosing function | Global |
