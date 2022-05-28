---
title: 'Algorithms'
language: 'en-US'
status: 'Reading'
date: '2022-05-09'
---

# One - Fundamentals

## 1.1 Basic Programming Model

> The basis of our approach is the scientific method: we develop hypotheses about performance, create mathematical models, and run experiments to test them, repeating the process as necessary.

> The term algorithm is used in computer science to describe a finite, deterministic, and effective problem-solving method suitable for implementation as a computer program

> When developing a huge or complex computer program, a great deal of effort must go into understanding and defining the problem to be solved, managing its complexity, and decomposing it into smaller subtasks that can be implemented easily.

> We should not use an algorithm without having an idea of what resources it might consume, so we strive to be aware of how our algorithms might be expected to perform.

> There are three important rules of thumb in developing recursive programs:
>
> - The recursion has a base case—we always include a conditional statement as the first statement in the program that has a return.
> - Recursive calls must address subproblems that are smaller in some sense, so that recursive calls converge to the base case. In the code below, the difference between the values of the fourth and the third arguments always decreases.
> - Recursive calls should not address subproblems that overlap. In the code below, the portions of the array referenced by the two subproblems are disjoint.

> The purpose of an API is to separate the client from the implementation: the client should know nothing about the implementation other than information given in the API, and the implementation should not take properties of any particular client into account. 

> Accordingly, programmers normally think of the API as a contract between the client and the implementation that is a clear specification of what each method is to do. Our goal when developing an implementation is to honor the terms of the contract. 

## 1.2 Data Abstraction

> The primary difference is that we associate data with the function implementations and we hide the representation of the data from the client.

> Objects are characterized by three essential properties: state, identity, and behavior.

> Java nomenclature makes clear the distinction from primitive types (where variables are associated with values) by using the term reference types for nonprimitive types.

> This situation is known as aliasing: both variables refer to the same object.

> In other words, the convention is to pass the reference by value (make a copy of it) but to pass the object by reference.

> A data type is a set of values and a set of operations defined on those values. We implement data types in independent Java class modules and write client programs that use them

> An object is an entity that can take on a data-type value or an instance of a data type.

> Whenever you have data of different types that logically belong together, it is worthwhile to contemplate defining an ADT as in these examples.

> - Specify an API. The purpose of the API is to separate clients from implementations, to enable modular programming. We have two goals when specifying an API. First, we want to enable clear and correct client code. Indeed, it is a good idea to write some client code before finalizing the API to gain confidence that the specified data-type operations are the ones that clients need. Second, we want to be able to implement the operations. There is no point specifying operations that we have no idea how to implement.
> - Implement a Java class that meets the API specifications. First we choose the instance variables, then we write constructors and the instance methods.
> - Develop multiple test clients, to validate the design decisions made in the first two steps.

> Encapsulation enables modular programming, allowing us to
>
> -  Independently develop of client and implementation code
> - Substitute improved implementations without affecting clients
> - Support programs not yet written (the API is a guide for any future client)
>
>  Encapsulation also isolates data-type operations, which leads to the possibility of
>
> - Limiting the potential for error
> - Adding consistency checks and other debugging tools in implementations
> - Clarifying client code

> We do so by insisting on the API being the only point of dependence between client and implementation

> You do not need to know how a data type is implemented in order to use it and you can assume that a client knows nothing but the API when implementing a data type

> Articulating an API might seem to be overkill when writing a small program, but you should consider writing every program as though you will need to reuse the code someday

> Within this broad outline, there are numerous pitfalls that every API design is susceptible to:
>
> - An API may be too hard to implement, implying implementations that are difficult or impossible to develop.
> - An API may be too hard to use, leading to client code that is more complicated than it would be without the API.
> - An API may be too narrow, omitting methods that clients need.
> - An API may be too wide, including a large number of methods not needed by any client. This pitfall is perhaps the most common, and one of the most difficult to avoid. The size of an API tends to grow over time because it is not difficult to add methods to an existing API, but it is difficult to remove methods without breaking existing clients.
> - An API may be too general, providing no useful abstractions.
> - An API may be too specific, providing abstractions so detailed or so diffuse as to be useless.
> - An API may be too dependent on a particular representation, therefore not serving the purpose of freeing client code from the details of using that representation. This pitfall is also difficult to avoid, because the representation is certainly central to the development of the implementation.

> Generally, immutable types are easier to use and harder to misuse than mutable types because the scope of code that can change their values is far smaller.

> The downside of immutability is that a new object must be created for every value

> Another downside of immutability stems from the fact that, unfortunately, final guarantees immutability only when instance variables are primitive types, not reference types

> Assertions are for debugging: your program should not rely on assertions for normal operation since they may be disabled

> The designer of a data type expresses a precondition (the condition that the client promises to satisfy when calling a method), a postcondition (the condition that the implementation promises to achieve when returning from a method), and side effects (any other change in state that the method could cause). During development, these conditions can be tested with assertions. 

> Subtyping makes modular programming more difficult for two reasons. First, any change in the superclass affects all subclasses. The subclass cannot be developed independently of the superclass; indeed, it is completely dependent on the superclass. This problem is known as the fragile base class problem.

## 1.3 Bags, Queues and Stacks

### Bags

> A bag is a collection where removing items is not supported—its purpose is to provide clients with the ability to collect items and then to iterate through the collected items (the client can also test if a bag is empty and find its number of items).

> The order of iteration is unspecified and should be immaterial to the client.

### FIFO queues

> A FIFO queue (or just a queue) is a collection that is based on the firstin-first-out (FIFO) policy

> A typical reason to use a queue in an application is to save items in a collection while at the same time preserving their relative order : they come out in the same order in which they were put in.

### Pushdown stacks

> A pushdown stack (or just a stack) is a collection that is based on the last-in-first-out (LIFO) policy.

### Loitering

> Java’s garbage collection policy is to reclaim the memory associated with any objects that can no longer be accessed.

> This condition (holding a reference to an item that is no longer needed) is known as loitering

> performance goals for any collection implementation:
>
> - Each operation should require time independent of the collection size.
> - The space used should always be within a constant factor of the collection size.

### Linked lists

> A linked list is a recursive data structure that is either empty (null) or a reference to a node having a generic item and a reference to a linked list. 

> The node in this definition is an abstract entity that might hold any kind of data, in addition to the node reference that characterizes its role in building linked lists.

> To emphasize that we are just using the Node class to structure the data, we define no methods and we refer directly to the instance variables in code: if first is a variable associated with an object of type Node, we can refer to the instance variables with the code first.item and first.next. Classes of this kind are sometimes called records.

> The standard solution to enable arbitrary insertions and deletions is to use a doubly-linked list, where each node has two links, one in each direction.

> (To go through the linked list elements) This process is known as traversing the list

> This implementation uses the same data structure as does Stack—a linked list—but it implements different algorithms for adding and removing items, which make the difference between LIFO and FIFO for the client. 

> Linked lists are a fundamental alternative to arrays for structuring a collection of data

> These two alternatives, often referred to as sequential allocation and linked allocation, are fundamental.

## 1.4 Analysis of Algorithms

> One of the key tenets of the scientific method is that the experiments we design must be reproducible, so that others can convince themselves of the validity of the hypothesis. Hypotheses must also be falsifiable, so that we can know for sure when a given hypothesis is wrong (and thus needs revision). As Einstein famously is reported to have said (“No amount of experimentation can ever prove me right; a single experiment can prove me wrong”), we can never know for sure that any hypothesis is absolutely correct; we can only validate that it is consistent with our observations.

> Our first qualitative observation about most programs is that there is a problem size that characterizes the difficulty of the computational task

> Intuitively, the running time should increase with problem size, but the question of by how much it increases naturally comes up every time we develop and run a program

> Knuth’s basic insight is simple: the total running time of a program is determined by two primary factors:
>
> - The cost of executing each statement
> - The frequency of execution of each statement

> To allow us to ignore insignificant terms and therefore substantially simplify the mathematical formulas that we work with, we often use a mathematical device known as the tilde notation (~).

> This notation allows us to work with tilde approximations, where we throw away low-order terms that complicate formulas and represent a negligible contribution to values of interest

| description  | function |
| ------------ | -------- |
| constant     | 1        |
| logarithmic  | log N    |
| linear       | N        |
| linearithmic | N log N  |
| quadratic    | N^2      |
| cubic        | N^3      |
| exponential  | 2^N      |

> A key observation from this exercise is to note that only the instructions that are executed the most frequently play a role in the final total—we refer to these instructions as the inner loop of the program.

> The algorithm that you are using (and sometimes the input model) determines the order of growth. Separating the algorithm from the implementation on a particular computer is a powerful concept because it allows us to develop knowledge about the performance of algorithms and then apply that knowledge to any computer.

> - Develop an input model, including a definition of the problem size.
> - Identify the inner loop.
> - Define a cost model that includes operations in the inner loop.
> - Determine the frequency of execution of those operations for the given input

> As it turns out, several important problems have natural solutions that are quadratic but clever algorithms that are linearithmic

> Typical computer systems are extremely complex and close analysis is best left for experts, but the same methods are effective for developing approximate estimates of the running time of any program.

> These guarantees are not absolute, but the chance that they are invalid is less than the chance your computer will be struck by lightning. Thus, such guarantees are as useful in practice as worst-case guarantees.

> when your program calls a method, the system allocates the memory needed for the method (for its local variables) from a special area of memory called the stack (a system pushdown stack), and when the method returns to the caller, the memory is returned to the stack

> When you create an object with new, the system allocates the memory needed for the object from another special area of memory known as the heap (not the same as the binary heap data structure we consider in Section 2.4), and you must remember that every object lives until no references to it remain, at which point a system process known as garbage collection reclaims its memory for the heap

> Perhaps the most common mistake made in programming is to pay too much attention to performance characteristics. Your first priority is to make your code clear and correct

## 1.5 Case Study: Union-Find

> The size of a tree is its number of nodes. The depth of a node in a tree is the number of links on the path from it to the root. The height of a tree is the maximum depth among its nodes. 

# Two - Sorting

## 2.1 Elementary Sorts

> Sorting cost model. When studying sorting algorithms, we count compares and exchanges. For algorithms that do not use exchanges, we count array accesses.

> The sorting algorithms divide into two basic types: those that sort in place and use no extra memory except perhaps for a small function call stack or a constant number of instance variables, and those that need enough extra memory to hold another copy of the array to be sorted.

> **Selection sort.** One of the simplest sorting algorithms works as follows: First, find the smallest item in the array and exchange it with the first entry (itself if the first entry is already the smallest). Then, find the next smallest item and exchange it with the second entry. Continue in this way until the entire array is sorted. This method is called selection sort because it works by repeatedly selecting the smallest remaining item.

> For example, the person using the sort client might be surprised to realize that it takes about as long to run selection sort for an array that is already in order or for an array with all keys equal as it does for a randomly-ordered array!

> **Insertion sort** The algorithm that people often use to sort bridge hands is to consider the cards one at a time, inserting each into its proper place among those already considered (keeping them sorted).

> consider what happens when you use insertion sort on an array that is already sorted. Each item is immediately determined to be in its proper place in the array, and the total running time is linear. 

> If the number of inversions in an array is less than a constant multiple of the array size, we say that the array is partially sorted

> Indeed, when the number of inversions is low, insertion sort is likely to be faster than any sorting method that we consider in this chapter.

> In summary, insertion sort is an excellent method for partially sorted arrays and is also a fine method for tiny arrays

