---
title: 'Introduction to Variables'
---

In programming languages a variable is placeholder for data. Variables need to be declared in your program, we use a special keyword to declare it together with a name, also called identifier. After you declared a variable in your program, you can use its identifier to access the data within the variable.

### Declaring a variable

In javaScript there are three keywords used to declare a variable:

- `var`
- `let`
- `const`

Each one of this keywords creates a variable with different behaviors. Most of the times you can use `var` and `let` interchangeably, but `const` has a different usage. For now let's just use the `let` keyword in the variables declaration.

The code below creates the variables `variable1`, `variable2` and `variable3` that are not initialized.

```javascript
let variable1;
let variable2;
let variable3;
```

### Initializing a variable

When you declare a variable you can choose to assign an initial value to it. If you don't, JavaScript automatically assigns the `undefined` value to the variable. Variables declared with `const` are required to be initialized during its declaration.

The code below creates the variable `name` with the value `"renan"`.

```javascript
let name = "renan";
```

### Data types

All data in your program is going to be represented with a type. The `undefined` value is the only value of the Undefined type. In the example above, the value `"renan"` is a String. JavaScript supports eight types:

- Undefined
- Null
- Boolean
- String
- Number
- BigInt
- Symbol
- Object

You should not have to worry with this big list, later we'll cover each one of these types. What is important to notice in the examples above, is that when you create a variable you don't have to specify the type of the data the variable will be storing. JavaScript does that automatically and that is a key difference from JavaScript to other programming languages. 

JavaScript is said to be loosely typed language, meaning you do not have to explicitly specify the data types you'll be handling in your programs. Just for your curiosity, programming languages like Java are considered strongly typed, meaning they have to explicitly specify the data types they are working in their programs. There are pros and cons between these two types of language but this is out of the scope.

### Assigning a new value to a variable

Variables hold values, the value of a variable can be changed in any point in time by using an assignment operation. In the code below we define the variable `name` initialized with the value `"renan"` and later change it to `"SomethingElse"`.

```javascript
let name = "renan"
name = "SomethingElse"
```

We can also assign values of different types to the same variable.

```
let age = 30
age = "30"
```

In the example above, the first line declares and initialize the variable `age` with the value `30` (Number), in the second line we change the `age`'s value to `"30"` (String).

Notice that in both examples , we only use the `let` keyword once, during the declaration. After you declare it you can access or modify the variable's value through its identifier. In fact, if you try to declare a variable with an identifier that already exists you'll receive an error.

```javascript
//This will not work.
let name = "renan"
let name = "SomethingElse"
//SyntaxError: Identifier 'name' has already been declared
```

There's another difference that needs clarification, variables declared with `const` not only need to be initialized during its declaration, but they cannot have any other assignments. That's why they are called constants. For some data types, this mean that you can achieve immutable variables during the execution of your program, but, because this behavior does not stand for all the types not all constants are immutable.

```javascript
const name = "Renan"
```

### Summary

There's plenty more to learn about variables, but, this initial glance should give you enough information to enable you to create, initialize and modify variables.

For now, you should keep using `let` keyword to declare variables. But, you already now that both `var` and `const` are also keywords that can declare variables.

`const` requires initialization and cannot have assignments of values after it. `let` variables are flexible and you can choose to initialize its value during the declaration and even change its value later.

You also know that all the data managed in your program has a type.

With this knowledge, we should have the bare minimum to start developing small applications, without having to learn about variables life cycle, their scopes, inner workings and so on. These are all important aspects that you'll have to master, but for now, we'll skip it to start to create programs.

