---
title: 'First look at Dart variables'
tags: [ 'dart' ]
published: true
date: '2020-08-16'
---

Hi there, so this is basically me, trying to summarize some hours I spent reading the [tour section of the Dart documentation](https://dart.dev/guides/language/language-tour). At the beginning I was trying to write something entertaining but after some time failing at it, I simply went to a more straight forward approach.

I’m not a Dart developer, this is in fact the first time I have a look at the language. There might be wrong assumptions here, the majority of these examples are me trying different hypotheses and seeing how Dart reacts to it. As I progress with the language, if I do, I might come back here to update it. Also, fell free to reach me and help me to update some wrong perception about the topic. All examples can be executed in the [dartpad](https://dartpad.dev/).

# First look at Dart variables

Dart has some variations to create variables. In this post, I’ll be focusing on describing the behaviors of some variations. Although, I do give some hints to when to use each variation, if you need guidance related to when to use each variation, I suggest reading their [design guide for types](https://dart.dev/guides/language/effective-dart/design#types).

## Using the `dynamic` type

Using the `dynamic` keyword creates variables with `dynamic` type. Dart is a strongly typed language that can infer the type of variables. When using the `dynamic` keyword you are explicitly saying no type is expected for that variable. Therefore, variables with type `dynamic` accept any type and any value.

*Example 1: Declaring and initializing a dynamic variable, then assigning a different value and type*

```dart
main () {

  dynamic alphaNumeric = "A";
  print( alphaNumeric );

  alphaNumeric = 1;
  print( alphaNumeric );
  
}
```

In the example above, when declaring the `alphaNumeric`, it’s being initialized with the value `"A"` and type `dynamic`. When assigning the value `1` to `alphaNumeric`, the value changed to `1` but the type remained `dynamic`.

Notice that it’s also possible to declare variables without initializing it.

*Example 2: First declaring and then initializing a dynamic variable. After, change its value and type*

```dart
main () {

  dynamic alphaNumeric;
  print( alphaNumeric );
  
  alphaNumeric = "A";
  print( alphaNumeric );

  alphaNumeric = 1;
  print( alphaNumeric );
  
}
```

This example is very similar to the first example, the only difference being the `alphaNumeric` declaration without the initialization.

Two important things to consider when using any sort of lazy initialization:

1. You can store anything that is an object to a variable ( numbers, functions, and even `null` are objects )
2. **All variables uninitialized** have an initial value of `null`.

That’s why the first `print( alphaNumeric );` prints `null` in the example 2.

Variables with `dynamic` type do have access to the methods of its object current type.

*Example 3: Using current type object’s methods with dynamic variable*

```dart
main() {

  dynamic alphaNumeric;

  alphaNumeric = "A";
  print( alphaNumeric.toLowerCase() );

  alphaNumeric = 1;
  print( alphaNumeric.toDouble() );
}
```

Although you can, you most likely shouldn’t do this to avoid losing all the type safety benefits.

## `var`iables

When using the `var` keyword to declare and initialize a variable, Dart will infer the type of the variable.

*Example 4: Declaring and initializing a variable, then changing its value*

```dart
main () {
  var name = "Pele";
  print( name );

  name = "Edson";
  print( name );
}
```

Dart will implicitly infer the type of `name` as `String` due to the initialization’s value. Since Dart is a strongly typed language, every next assignment to that variable must have its same type, or the program will face a compilation error. The example below demonstrates the error:

*Example 5: Compilation error when changing the type of a initialized variable during an assignment*

```dart
main() {
  var name = "Renan"
  name = 42 // A value of type 'int' can't be assigned to a variable of type 'String'.
}
```

Based on the examples 4 and 5, one might consider that, when using the `var` keyword you can always change the value but never the type of a variable. With that in mind, consider the example below:

*Example 6: Creating a variable with the `var` keyword and lazily initializing it. Then trying to change its value and type.*

```dart
main() {
  var name;
  
  name = "Pele";
  print( name );

  name = 42;
  print ( name );  
}
```

Example 6 is a completely valid dart code. That happens because the Dart doesn’t have enough information to infer a specific type during the `name` declaration, therefore, it uses the `dynamic` type as fallback. As we saw previously, variables with `dynamic` type can change its value and type and, therefore, the code compiles correctly. However, as mentioned above, if you try to access the `String` or `int` methods you’ll not be under the type safety and you might face runtime errors.

Since, the `var` lazy initialization behaves slightly differently than most would expect, it’s probably a good idea to be very careful when using it.

## Using dart types

Another variation to create variables is to explicitly specify its type.

*Example 7: Specifying the variable type*

```dart
main() {
  String name = "pele";
  print( name );  
}
```

This is equivalent as if declared with the `var` keyword and initialized with a value of type `String` ( `var name = "pele";`). The big difference here is that the type is explicitly annotated in the code.

It’s also possible to apply lazy initialization. in this example, Dart will expect every assignment to the variable `name` to be of type `String`. As stated in the `dynamic` section, while the variable is not initialized its initial value is `null`.

Trying to initialize an annotated type variable with a value different than the type, will occur in compilation error.

## `final` variables

You use the `final` keyword if you are not intending to change the reference of the variable.

You can either use final to replace `var` or use `final` followed by a type.

*Example 8: declaring and initializing final variable*

```dart
main () {
  final name = "Edson";
  print( name );
    
  final String lastName = "Nascimento";
  print( lastName );
    
  final name2 = name;
}	
```

Both `name` and `lastName` are `String` types, Dart implicitly infers the `name`’s type while `lastName` is explicitly written in the code. The `name2` shows a `final` variable being initialized by another variable.

`final` variables must be declared and initialized at once. Lazy initialization throws a compiler error.

*Example 9: Compile error not initializing the final variable*

```dart
main() {
  final name; // Error: The final variable ';' must be initialized. final name;
  name = "renan";
  print( name );
}
```

Trying to assign a new value once the `final` variable is declared and initialized also throws a compilation error.

*Example 10: Assigning new value to final variable*

```dart
main() {
  final name = "Edson";
  name = "pele"; //  Can't assign to the final variable 'name'. name = "pele";
}
```

Although you are not able to assign a new value to a `final` variable, as shown in example 10, you can still change its value if the reference of the object being held in the variable provides an operation that changes its state.

*Example 11: Changing the state of a final variable*

```dart
main() {
  final list = [];
  list.add( 'b' );
  print( list );
}
```

It’s also possible to combine the `final` with the `dynamic` keyword. Combining both enables the variable to be initialized with any type and any value, but once the variable is declared and initialized it’s not possible to assign new values to it.

*Example 12: A final and dynamic variable.*

```dart
final dynamic name = "name";
```

A `final dynamic` variable also does not allow lazy initialization.

## `const`ants

The `const` defines variables that are compile-time constants. The `const` variables are implicitly `final`, therefore, most examples that applies to `final` applies to `const` as well, with an addition that a `const` must be initialized with a value at compile-time ( a number or string literal, a `const` variable, or the result of an arithmetic operation on constant numbers ).

*Example 13: Creating const variables*

```dart
main() {
  const pi = 3.14;
  const double piTimesTwo = pi * 2;
  print( pi );
  print( piTimesTwo );
}
```

In the example 13, Dart infers the type of `pi` to `double` while `piTimesTwo` is explicitly annotated in the code. If the variable is a `const` its value and state will always remain the same as the initialized during compile-time.

*Example 14: Runtime error changing the state of a const variable*

```dart
main() {
  const list = [];
  list.add( 'b' ); // Unsupported operation: Cannot add to an unmodifiable list
  print( list );  
}
```

You can also use the `const` keyword to create constant values and assign it to `var` or `final` variables.

*Example 15: `var` holding a not mutable array*

```dart
main() {
  var list = const [];
  // list.add( 'a' ); // invalid
  list = [];
  list.add( 'a' );
  print( list );
}
```

The example above shows that if you try to change the variable `list` while it has a `const` value you’ll face a runtime error ( same as example 14 ). But, since `list` is a variable declared with `var` you can change its value to a mutable array and change its state without getting any error.

This same example, won't work if you change the `var` to a `final`, because you won’t be able to change the immutable array to mutable array. And, since `const` defines a constant you’ll be facing a runtime error just like shown in Example 14.

### Summarizing

There are a lot of variations to creating variables in dart. The table below is an attempt to summarize most of the behaviors described in the examples above.

| Keyword use for declaration            | Is lazily initialized?                                       | Type                                                         | Is value changeable?                                         | Is type changeable?                                          |
| -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dynamic`                              | It can be declared with or without initialization. In both cases, it can be initialized with any value of any type. Holds `null` while not initialized. | Explicitly saying no type is expected for this variable. Its type is `dynamic` and during assignment Dart implicitly infers the subtype. | Yes                                                          | The type is always `dynamic`. But it accepts values of any type. |
| `var`                                  | Yes. Holds `null` while not initialized.                     | Dart implicitly infers the type as `dynamic`. See `dynamic` above. | Yes                                                          | The type is `dynamic`. But, it accepts values of any type.   |
| `var`                                  | No                                                           | Dart implicitly infers the type during initialization based on value. | Yes                                                          | No                                                           |
| type (e.g. `String`, `int`, `bool`, …) | It can be declared with or without initialization. In both cases, it can only be initialized with a value of the type annotated. Holds `null` while not initialized. | The type is explicitly annotated in code.                    | Yes                                                          | No                                                           |
| `final`                                | It must be initialized during declaration. It can be initialized with a variable or value. | Dart implicitly infers the type during initialization based on value. | No. However, even though it can only be assigned once ( during initialization) operations that change the state of an object without assignment are still valid. | No                                                           |
| `final`+ type                          | It must be initialized during declaration. It can be initialized with a variable or value of the same type annotated. | The type is explicitly annotated in code.                    | No. However, even though it can only be assigned once ( during initialization) operations that change the state of an object without assignment are still valid. | No                                                           |
| `const`                                | It must be initialized during declaration. It must be initialized with a compile-time constant. | Dart implicitly infers the type during initialization.       | No                                                           | No                                                           |
| `const` + type                         | It must be initialized during declaration. It must be initialized with a compile-time constant of the same type annotated. | The type is explicitly annotated in code.                    | No                                                           | No                                                           |