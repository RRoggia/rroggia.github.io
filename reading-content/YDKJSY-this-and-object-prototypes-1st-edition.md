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

