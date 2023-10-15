---
id: '978-1732102217'
title: 'A Philosophy of Software Design'
language: 'en-US'
status: 'Reading'
coverPath: 'a-philosophy-of-software-design'
edition: '2nd'
publishDate: '2021-07-25'
authors: ['John K. Ousterhout']
---

# Preface
> The most fundamental problem in computer science is *problem decomposition*: how to take a complex problem and divide it up into pieces that can be solved independently.

## My Summary
The author starts proposing that there's little discussion about how design programs and what good programs are. 
I believe its hard to create metrics to determine wether a program has a good or bad design, however, I do think each programming model have its own a set of best practices that together with an iterative approach can be used to output good programs. Therefore, it's not clear to me which are the "largely untouched" core problems of software design.

Once you know what problem you are trying to solve, seems right to state that problem decomposition is the most fundamental task of computer science.

# Chapter 1 - Introduction
## (It's all about complexity)
> ...the greatest limitation in writing software is our ability to understand the systems we are creating.

> Complexity increases inevitably over the life of any program.

> Complexity will still increase over time, in spite of our best effort, but simpler designs allow us to build larger and more powerful systems before complexity becomes overwhelming

> The first approach is to eliminate complexity by making code simpler and more obvious

> The second approach to complexity is to encapsulate it, so that programmers can work on a system without being exposed to all of its complexity at once. This approach is called *modular design*. 

> In modular design, a software system is divided up into module, such as classes in an object-oriented language.

> Incremental development means that software design is never done.

> (developers should always be) thinking about design issues

> Incremental development also means incremental redesign.

## 1.1 How to use this book

> One of the best ways to improve your design skills is to learn to recognize red flags: signs that a piece of code is probably more complicated than it needs to be.

> Beautiful designs reflect a balance between competing ideas and approaches

## My Summary

Software complexity starts with the developer understanding of the problem they are trying to tackle. The developer's understanding to the problem is the lower bound to the complexity.

If we consider that all software has a minimum amount of complexity, software has a tendency to increase complexity over time. The author even suggests it's inevitable. Even, if we can consistently reduce the complexity by gaining more understanding of the problem or by simplifying the design, eventually we reach the minimum amount of complexity and the complexity starts to increase again.

There are two possible approaches to reduce complexity:

1. Making code simpler and more obvious
2. Use Modular design to hide complexity within modules. 

At last, the system design must be continually taken care of. Big upfront designs are a big effort and hardly can output an useful description of the system. Incremental design is a better approach, we consider the design is never done and we are constantly improving it.

One great advice the author gives is to learn about *red flags* and use this red flags to signal possible places for improvement in the code.

# Chapter 2 - The Nature of Complexity

> It is easier to tell whether a design is simple than it is to create a simple design.

> Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system

## 2.1 Complexity defined

> Complexity is what a developer experiences at a particular point in time when trying to achieve a particular goal.

> The overall complexity of a system (C) is determined by the complexity of each part p (cp) weighted by the fraction of time developers spend working on that part (tp).

> Isolating complexity in a place where it will never be seen is almost as good as eliminating the complexity entirely.

> Your job as a developer is not just to create code that you can work with easily, but to create code that others can also work with easily.

## 2.2 Symptoms of complexity

> **Change amplification:** The first symptom of complexity is that a seemingly simple change requires code modifications in many different places.

> One of the goals of good design is to reduce the amount of code that is affected by each design decision, so design changes don't require very many modifications.

> **Cognitive load:** The second symptom of complexity is cognitive load, which refers to how much a developer needs to know in order to complete a task.

> Cognitive load arises in many ways, such as APIs with many methods, global variables, inconsistencies, and dependencies between modules.

> **Unknown unknowns:** The third symptom of complexity is that it is not obvious which pieces of code must be modified to complete a task or what information must have to carry out the task successfully.

> One of the most important goals of good design is for a system to be obvious.

## 2.3 Causes of complexity

> Complexity is caused by two things: *dependencies and obscurity*

> For the purposes of this book, a dependency exists when a given piece of code cannot be understood and modified in isolation

> Obscurity occurs when important information is not obvious,

> Inconsistency is also a major contributor to obscurity: if the same variable name is used for two different purposes, it won't be obvious to developers which of these purposes a particular variable serves.

> Dependencies lead to change amplification and a high cognitive load. Obscurity creates unknown unknowns, and also contributes to cognitive load.

## 2.4 Complexity is incremental

> Complexity isn't caused by a single catastrophic error; it accumulates in lots of small chunks.



