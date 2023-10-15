---
title: 'You Dont know JS - this & Object Prototypes'
language: 'en-US'
status: 'Reading'
coverPath: 'you-dont-know-js-this-object-prototypes'
date: '2022-12-26'
---

# Chapter 1: `this` Or That?

> However, the `this` mechanism provides a more elegant way of implicitly "passing along" an object reference, leading to cleaner API design and easier re-use.

> To be clear, `this` does not, in any way, refer to a function's **lexical scope**. 

> You cannot use a `this` reference to look something up in a lexical scope. It is not possible.

> It is contextual based on the conditions of the function's invocation. `this` binding has nothing to do with where a function is declared, but has instead everything to do with the manner in which the function is called.

>When a function is invoked, an activation record, otherwise known as an execution context, is created. This record contains information about where the function was called from (the call-stack), *how* the function was invoked, what parameters were passed, etc. One of the properties of this record is the `this` reference which will be used for the duration of that function's execution.

## My Summary

# Chapter 2: `this` All Makes Sense Now!

> the call-site: the location in code where a function is called (**not where it's declared**).

> The first rule we will examine comes from the most common case of function calls: standalone function invocation.

> even though the overall `this` binding rules are entirely based on the call-site, the global object is **only** eligible for the *default binding* if the **contents** of `foo()` are **not** running in `strict mode`

> Regardless of whether `foo()` is initially declared *on* `obj`, or is added as a reference later (as this snippet shows), in neither case is the **function** really "owned" or "contained" by the `obj` object.

> However, the call-site *uses* the `obj` context to **reference** the function, so you *could* say that the `obj` object "owns" or "contains" the **function reference** at the time the function is called.

> When there is a context object for a function reference, the *implicit binding* rule says that it's *that* object which should be used for the function call's `this` binding.

> We create a function `bar()` which, internally, manually calls `foo.call(obj)`, thereby forcibly invoking `foo` with `obj` binding for `this`. No matter how you later invoke the function `bar`, it will always manually invoke `foo` with `obj`. This binding is both explicit and strong, so we call it *hard binding*.

> In JS, constructors are **just functions** that happen to be called with the `new` operator in front of them. They are not attached to classes, nor are they instantiating a class. They are not even special types of functions. They're just regular functions that are, in essence, hijacked by the use of `new` in their invocation.

> there's really no such thing as "constructor functions", but rather construction calls *of* functions.

> When a function is invoked with `new` in front of it, otherwise known as a constructor call, the following things are done automatically:
>
> 1. a brand new object is created (aka, constructed) out of thin air
> 2. *the newly constructed object is `[[Prototype]]`-linked*
> 3. the newly constructed object is set as the `this` binding for that function call
> 4. unless the function returns its own alternate **object**, the `new`-invoked function call will *automatically* return the newly constructed object.

> It should be clear that the *default binding* is the lowest priority rule of the 4.

> So, *explicit binding* takes precedence over *implicit binding*, which means you should ask **first** if *explicit binding* applies before checking for *implicit binding*.

> *new binding* is more precedent than *implicit binding*.

> One of the capabilities of `bind(..)` is that any arguments passed after the first `this` binding argument are defaulted as standard arguments to the underlying function (technically called "partial application", which is a subset of "currying").

> If you pass `null` or `undefined` as a `this` binding parameter to `call`, `apply`, or `bind`, those values are effectively ignored, and instead the *default binding* rule applies to the invocation.

> Instead of using the four standard `this` rules, arrow-functions adopt the `this` binding from the enclosing (function or global) scope.

## My Summary

There are four types of rules for determining `this`. They follow these rules:

1. `new` binding: `this` is the newly created object. Using `new` keyword. `var bar = new foo()`
2. Explicit binding: `this` is the specified object during binding.  Using `call` or `apply`, for instance, `var bar = foo.call(obj2)`
3. Implicit binding: `this` is the object that contains the function reference at the time the function is called. With context object, for instance, `obj.foo()`.
4. Default binding: `this` is undefined or the `global` object. Standalone function invocation, for instance, `foo()`.

# Chapter 3: Objects

> Objects come in two forms: the declarative (literal) form, and the constructed form.

> The only difference really is that you can add one or more key/value pairs to the literal declaration, whereas with constructed-form objects, you must add the properties one-by-one.

> Objects are the general building block upon which much of JS is built. They are one of the 6 primary types (called "language types" in the specification) in JS:
>
> - `string`
> - `number`
> - `boolean`
> - `null`
> - `undefined`
> - `object`

> Note that the *simple primitives* (`string`, `number`, `boolean`, `null`, and `undefined`) are **not** themselves `objects`. 

> `function` is a sub-type of object (technically, a "callable object"). Functions in JS are said to be "first class" in that they are basically just normal objects (with callable behavior semantics bolted on), and so they can be handled like any other plain object.

> Arrays are also a form of objects, with extra behavior. The organization of contents in arrays is slightly more structured than for general objects.

> There are several other object sub-types, usually referred to as built-in objects. For some of them, their names seem to imply they are directly related to their simple primitives counter-parts, but in fact, their relationship is more complicated, which we'll explore shortly.
>
> - `String`
> - `Number`
> - `Boolean`
> - `Object`
> - `Function`
> - `Array`
> - `Date`
> - `RegExp`
> - `Error`

> Each of these built-in functions can be used as a constructor (that is, a function call with the `new` operator -- see Chapter 2), with the result being a newly *constructed* object of the sub-type in question.

> the language automatically coerces a `"string"` primitive to a `String` object when necessary, which means you almost never need to explicitly create the Object form

> The `.a` syntax is usually referred to as "property" access, whereas the `["a"]` syntax is usually referred to as "key" access.

> One subset solution is that objects which are JSON-safe (that is, can be serialized to a JSON string and then re-parsed to an object with the same structure and values) can easily be *duplicated* with:

> This approach is the highest level of immutability that you can attain for an object itself, as it prevents any changes to the object or to any of its direct properties (though, as mentioned above, the contents of any referenced other objects are unaffected).

> The default built-in `[[Get]]` operation for an object *first* inspects the object for a property of the requested name, and if it finds it, it will return the value accordingly.

> When invoking `[[Put]]`, how it behaves differs based on a number of factors, including (most impactfully) whether the property is already present on the object or not.

> The default `[[Put]]` and `[[Get]]` operations for objects completely control how values are set to existing or new properties, or retrieved from existing properties, respectively.

> Getters are properties which actually call a hidden function to retrieve a value. Setters are properties which actually call a hidden function to set a value.

> When you define a property to have either a getter or a setter or both, its definition becomes an "accessor descriptor" (as opposed to a "data descriptor").

> You'll notice that `myObject.b` in fact **exists** and has an accessible value, but it doesn't show up in a `for..in` loop (though, surprisingly, it **is** revealed by the `in` operator existence check). That's because "enumerable" basically means "will be included if the object's properties are iterated through".

> Whereas `in` vs. `hasOwnProperty(..)` differ in whether they consult the `[[Prototype]]` chain or not, `Object.keys(..)` and `Object.getOwnPropertyNames(..)` both inspect *only* the direct object specified.

> The `for..of` loop asks for an iterator object (from a default internal function known as `@@iterator` in spec-speak) of the *thing* to be iterated, and the loop then iterates over the successive return values from calling that iterator object's `next()` method, once for each loop iteration.

> `@@iterator` is **not the iterator object** itself, but a **function that returns** the iterator object -- a subtle but important detail!

## My Summary

# Chapter 4: Mixing (Up) "Class" Objects

> "Class/Inheritance" describes a certain form of code organization and architecture -- a way of modeling real world problem domains in our software.

> Another key concept with classes is "polymorphism", which describes the idea that a general behavior from a parent class can be overridden in a child class to give it more specifics. In fact, relative polymorphism lets us reference the base behavior from the overridden behavior.

> Syntactic sugar and (extremely widely used) JS "Class" libraries go a long way toward hiding this reality from you, but sooner or later you will face the fact that the *classes* you have in other languages are not like the "classes" you're faking in JS.

> You must **instantiate** the `Stack` class before you have a concrete data structure *thing* to operate against.

> This technique is called "polymorphism", or "virtual polymorphism". More specifically to our current point, we'll call it "relative polymorphism".
>
> Polymorphism is a much broader topic than we will exhaust here, but our current "relative" semantics refers to one particular aspect: the idea that any method can reference another method (of the same or different name) at a higher level of the inheritance hierarchy. We say "relative" because we don't absolutely define which inheritance level (aka, class) we want to access, but rather relatively reference it by essentially saying "look one level up".

> **Note:** Another thing that traditional class-oriented languages give you via `super` is a direct way for the constructor of a child class to reference the constructor of its parent class. This is largely true because with real classes, the constructor belongs to the class. However, in JS, it's the reverse -- it's actually more appropriate to think of the "class" belonging to the constructor (the `Foo.prototype...` type references). Since in JS the relationship between child and parent exists only between the two `.prototype` objects of the respective constructors, the constructors themselves are not directly related, and thus there's no simple way to relatively reference one from the other (see Appendix A for ES6 `class` which "solves" this with `super`).

> When classes are inherited, there is a way **for the classes themselves** (not the object instances created from them!) to *relatively* reference the class inherited from, and this relative reference is usually called `super`.

> Let's examine this statement: `Vehicle.drive.call( this )`. This is what I call "explicit pseudo-polymorphism". Recall in our previous pseudo-code this line was `inherited:drive()`, which we called "relative polymorphism".

> Since the two objects also share references to their common functions, that means that **even manual copying of functions (aka, mixins) from one object to another doesn't \*actually emulate\* the real duplication from class to instance that occurs in class-oriented languages**.

