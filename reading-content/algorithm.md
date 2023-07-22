---
id: '978-0321573513'
title: 'Algorithms'
language: 'en-US'
status: 'Reading'
coverPath: 'algorithm'
date: '2022-05-09'
edition: '4th'
publishDate: '2011-03-19'
authors: ['Robert Sedgewick', 'Kevin Wayne']
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

### Selection Sort

> **Selection sort.** One of the simplest sorting algorithms works as follows: First, find the smallest item in the array and exchange it with the first entry (itself if the first entry is already the smallest). Then, find the next smallest item and exchange it with the second entry. Continue in this way until the entire array is sorted. This method is called selection sort because it works by repeatedly selecting the smallest remaining item.

> For example, the person using the sort client might be surprised to realize that it takes about as long to run selection sort for an array that is already in order or for an array with all keys equal as it does for a randomly-ordered array!

### Insertion Sort

> **Insertion sort** The algorithm that people often use to sort bridge hands is to consider the cards one at a time, inserting each into its proper place among those already considered (keeping them sorted).

> consider what happens when you use insertion sort on an array that is already sorted. Each item is immediately determined to be in its proper place in the array, and the total running time is linear. 

> If the number of inversions in an array is less than a constant multiple of the array size, we say that the array is partially sorted

> Indeed, when the number of inversions is low, insertion sort is likely to be faster than any sorting method that we consider in this chapter.

> In summary, insertion sort is an excellent method for partially sorted arrays and is also a fine method for tiny arrays

### Shell Sort

> **Shellsort** is a simple extension of insertion sort that gains speed by allowing exchanges of array entries that are far apart, to produce partially sorted arrays that can be efficiently sorted, eventually by insertion sort.

> The idea is to rearrange the array to give it the property that taking every *h*th entry (starting anywhere) yields a sorted subsequence. Such an array is  said to be h-sorted. Put another way, an h-sorted array is h independent sorted subsequences, interleaved together.

> achieving speedups that enable the solution of problems that could not otherwise be solved is one of the prime reasons to study algorithm performance and design.

## 2.2 Mergesort

> combining two ordered arrays to make one larger ordered array.

> to sort an array, divide it into two halves, sort the two halves (recursively), and then merge the results.

> most attractive properties is that it guarantees to sort any array of N items in time proportional to N log N. Its prime disadvantage is that it uses extra space proportional to N.

> In the merge, there are four conditions:
>
> - left half exhausted (take from the right),
> - right half exhausted (take from the left),
> - current key on right less than current key on left (take from the right),
> - current key on right greater than or equal to current key on left (take from the left).

> The tree has precisely n levels.

> If space is at a premium, we need to consider another method.

> When addressing a new problem, your best bet is to use the simplest implementation with which you are comfortable and then refine it if it becomes a bottleneck.

## 2.3 Quicksort

> The quicksort algorithm’s desirable features are that it is in-place (uses only a small auxiliary stack) and that it requires time proportional to N log N on the average to sort an array of length N.

> Quicksort is complementary to mergesort: for mergesort, we break the array into two subarrays to be sorted and then combine the ordered subarrays to make the whole ordered array; for quicksort, we rearrange the array such that, when the two subarrays are sorted, the whole array is ordered.

> Ultimately, the efficiency of the sort depends on how well the partitioning divides the array, which in turn depends on the value of the partitioning item’s key.

> The best case for quicksort is when each partitioning stage divides the array exactly in half.

> it can be extremely inefficient if the partitions are unbalanced

> Quicksort is slower than insertion sort for tiny subarrays.

> ( Improving quicksort) It turns out that most of the available improvement comes from choosing a sample of size 3 and then partitioning on the middle item

> It was a classical programming exercise popularized by E. W. Dijkstra as the Dutch National Flag problem, because it is like sorting an array with three possible key values, which might correspond to the three colors on the flag.

> A carefully tuned version of quicksort is likely to run significantly faster on most computers for most applications than will any other compare-based sorting method.

## 2.4 Priority Queues

> (computer running several apps) This effect is typically achieved by assigning a priority to events associated with applications, then always choosing to process next the highest-priority event.

> An appropriate data type in such an environment supports two operations: remove the maximum and insert. Such a data type is called a priority queue.

> Some important applications of priority queues include simulation systems, where the keys correspond to event times, to be processed in chronological order; job scheduling, where the keys correspond to priorities indicating which tasks are to be performed first; and numerical computations, where the keys represent computational errors, indicating in which order we should deal with them

> We can use any priority queue as the basis for a sorting algorithm by inserting a sequence of items, then successively removing the smallest to get them out, in order.

> Using **unordered sequences** is the prototypical lazy approach to this problem, where we defer doing work until necessary (to find the maximum);

> Using **ordered sequences** is the prototypical eager approach to the problem, where we do as much work as we can up front (keep the list sorted on insertion) to make later operations efficient.

> For stacks and queues, we were able to develop implementations of all the operations that take constant time; for priority queues, all of the elementary implementations just discussed have the property that either the insert or the remove the maximum operation takes linear time in the worst case. The heap data structure that we consider next enables implementations where both operations are guaranteed to be fast.

> A binary tree is **heap-ordered** if the key in each node is larger than or equal to the keys in that node’s two children (if any).

> (**Complete binary tree**) We draw such a structure by placing the root node and then proceeding down the page and from left to right,
> drawing and connecting two nodes beneath each node on the previous level until we have drawn N nodes.

> A **binary heap** is a collection of keys arranged in a complete heap-ordered binary tree, represented in level order in an array (not using the first entry).

> In a heap, the parent of the node in position k is in position ⎣k /2⎦ and, conversely, the two children of the node in position k are in positions 2k and 2k + 1.

> Complete binary trees represented as arrays (heaps) are rigid structures, but they have just enough flexibility to allow us to implement efficient priority-queue operations.

> (Travel up or down to restore the heap order) We refer to this process as **reheapifying**, or **restoring heap order**

> Where elementary implementations using an ordered array or an unordered array require linear time for one of the operations, a heap-based implementation provides a guarantee that both operations complete in logarithmic time.

> (Multiway heaps) There is a tradeoff between the lower cost from the reduced tree height (log d N) and the higher cost of finding the largest of the **d** children at each node

> Immutability of keys. The priority queue contains objects that are created by clients but assumes that client code does not change the keys (which might invalidate the heap-order invariant)

### Heapsort

> We can use any priority queue to develop a sorting method. We insert all the items to be sorted into a minimum-oriented priority queue, then repeatedly use remove the minimum to remove them all in order.

> Using a priority queue represented as an unordered array in this way corresponds to doing a selection sort; using an ordered array corresponds to doing an insertion sort.

> Heapsort breaks into two phases: heap construction, where we reorganize the original array into a heap, and the sortdown, where we pull the items out of the heap in decreasing order to build the sorted result.

> This process is a bit like selection sort (taking the items in decreasing order instead of in increasing order), but it uses many fewer compares because the heap provides a much more efficient way to find the largest item in the unsorted part of the array.

> Although the loops in this program seem to do different tasks (the first constructs the heap, and the second destroys the heap for the sortdown), they are both built around the sink() method.

> Heapsort is significant in the study of the complexity of sorting (see page 279) because it is the only method that we have seen that is optimal (within a constant factor) in its use of both time and space—it is guaranteed to use ~2N lg N compares and constant extra space in the worst case.

## 2.5 Applications

> It stands to reason that an array might not remain sorted if a client is allowed to change the values of keys after the sort.

> The reference approach makes the cost of an exchange roughly equal to the cost of a compare for general situations involving arbitrarily large items (at the cost of the extra space for the references).

> The Java Comparator interface allows us to build multiple orders within a single class. It has a single public method compare() that compares two objects.

> A sorting method is stable if it preserves the relative order of equal keys in the array. ... To begin, suppose that we store events in an array as they arrive, so they are in order of the timestamp in the array. Now suppose that the application requires that the transactions be separated out by location for further processing. One easy way to do so is to sort the array by location. If the sort is unstable, the transactions for each city may not necessarily be in order by timestamp after the sort.

> Some of the sorting methods that we have considered in this chapter are stable (insertion sort and mergesort); many are not (selection sort, shellsort, quicksort, and heapsort).

| algorithm       | stable? | running time          | extra space | notes                                                     |
| --------------- | ------- | --------------------- | ----------- | --------------------------------------------------------- |
| selection sort  | no      | N²                    | 1           |                                                           |
| insertion sort  | yes     | between N and N²      | 1           | depends on order of items                                 |
| shellsort       | no      | N log N / N ^ 6/5     | 1           |                                                           |
| quicksort       | no      | N log N               | lg N        | probabilistic guarantee                                   |
| 3-way quicksort | no      | between N and N log N | lg N        | probabilistic, also depends on distribution of input keys |
| mergesort       | yes     | N log N               | N           |                                                           |
| heapsort        | no      | N log N               | 1           |                                                           |

> Perhaps the best way to interpret Property T is as saying that you certainly should seriously consider using quicksort in any sort application where running time is important.

> Java’s systems programmers have chosen to use quicksort (with 3-way partitioning) to implement the primitive-type methods, and mergesort for reference-type methods. The primary practical implications of these choices are, as just discussed, to trade speed and memory usage (for primitive types) for stability (for reference types).

> A reduction is a situation where an algorithm developed for one problem is used to solve another.

> (Duplicates) first sort the array, then make a pass through the sorted array, taking note of duplicate keys that appear consecutively in the ordered array.

> An effective alternative to TopM when you have the items in an array is to just smallest values in the array are in the first k array positions for all k less than the array length.

> (Data sorted) You will also see that the same scheme makes it easy to quickly handle many other kinds of queries. How many items are smaller than a given item? Which items fall within a given range?

# Three - Searching

>  We use the term **symbol table** to describe an abstract mechanism where we save information (a value) that we can later search for and retrieve by specifying a key.

> Symbol tables are sometimes called dictionaries, by analogy with the time-honored system of providing definitions for words by listing them alphabetically in a reference book.

## 3.1 Symbol Tables

> A **symbol table** is a data structure for key-value pairs that supports two operations: insert (put) a new pair into the table and search for (get) the value associated with a given key.

> (Only one value per key and duplicates key overwrite the old value) These conventions define the associative array abstraction, where you can think of a symbol table as being just like an array, where keys are indices and values are array entries.

### Ordered Symbol tables

> More important, in such implementations, we can think of the symbol table as keeping the keys in order and consider a significantly expanded API that defines numerous natural and useful operations involving relative key order.

> When studying symbol-table implementations, we count compares (equality tests or key comparisons).

> For basic (unordered) implementations, the order of the keys in the output of this test client is not specified (it depends on characteristics of the implementation);

> One straightforward option for the underlying data structure for a symbol table is a linked list of nodes that contain keys and values

> One useful measure is to compute the total cost of searching for all of the keys in the table, divided by N. This quantity is precisely the expected number of compares required for a search under the condition that searches for each key in the table are equally likely. We refer to such a search as a random search hit.

> we use the term search hit to refer to a successful search and search miss to refer to an unsuccessful search.

> (About ordered array binary search) The underlying data structure is a pair of parallel arrays, one for the keys and one for the values. Algorithm 3.2 (BinarySearchST) on the facing page keeps Comparable keys in order in the array, then uses array indexing to enable fast implementation of get() and other operations.

## 3.2 Binary Search Trees (BST)

> a symbol-table implementation that combines the flexibility of insertion in a linked list with the efficiency of search in an ordered array.

> Specifically, using two links per node (instead of the one link per node found in linked lists) leads to an efficient symbol-table implementation based on the binary search tree data structure, which qualifies as one of the most fundamental algorithms in computer science.

> In a binary tree, we have the restriction that every node is pointed to by just one other node, which is called its parent (except for one node, the root, which has no nodes pointing to it), and that each node has exactly two links, which are called its left and right links, that point to nodes called its left and right child, respectively.





# Four - Graphs

## 4.1 Undirected Graphs

> A **graph** is a set of vertices and a collection of edges that each connect a pair of vertices.

> Our definition allows two simple anomalies:
>
> - A self-loop is an edge that connects a vertex to itself.
> - Two edges that connect the same pair of vertices are parallel.

> When there is an edge connecting two vertices, we say that the vertices are *adjacent* to one another and that the edge is *incident* to both vertices.

> The **degree** of a vertex is the number of edges incident to it.

> A **path** in a graph is a sequence of vertices connected by edges

> A **simple path** is one with no repeated vertices.

> A **cycle** is a path with at least one edge whose first and last vertices are the same.

> when we want to allow repeated vertices, we refer to general paths and cycles.

> A **graph is connected** if there is a path from every vertex to every other vertex in the graph. A **graph that is not connected** consists of a set of connected components, which are maximal connected subgraphs.

> An **acyclic** graph is a graph with no cycles.

> A **tree** is an acyclic connected graph.

> A **spanning tree** of a connected graph is a subgraph that contains all of that graph’s vertices and is a single tree.

> A disjoint set of trees is called a **forest**.

> For example, a graph G with V vertices is a tree if and only if it satisfies any of the following five conditions:
>
> - G has V1 edges and no cycles.
> - G has V1 edges and is connected.
> - G is connected, but removing any edge disconnects it.
> - G is acyclic, but adding any edge creates a cycle.
> - Exactly one simple path connects each pair of vertices in G.

> A **sparse** graph has relatively few of the possible edges present; a **dense** graph has relatively few of the possible edges missing.

> A **bipartite** graph is a graph whose vertices we can divide into two sets such that all edges connect a vertex in one set with a vertex in the other set.

> An adjacency matrix, where we maintain a V-by-V boolean array, with the entry in row v and column w defined to be true if there is an edge adjacent to both vertex v and vertex w in the graph, and to be false otherwise.

> An array of edges, using an Edge class representations with two instance variables of type int.

> An array of adjacency lists, where we maintain a vertex-indexed array of lists of the vertices adjacent to each vertex.

> **Tremaux exploration**. To explore all passages in a maze:
>
> - Take any unmarked passage, unrolling a string behind you.
> - Mark all intersections and passages when you first visit them.
> - Retrace steps (using the string) when approaching a marked intersection.
> - Retrace steps when no unvisited options remain at an intersection encountered while retracing steps.

> To visit a vertex:
>
> - Mark it as having been visited.
> - Visit (recursively) all the vertices that are adjacent to it and that have not yet been marked.
>
> This method is called **depth-first search (DFS)**

> in DFS of an undirected graph, we either do a recursive drawing with both edges call when we encounter an edge v-w (if w is not marked) or skip the edge (if w is marked)

> **Connectivity**. Given a graph, support queries of the form Are two given vertices connected ? and How many connected components does the graph have ?

> **Single-source paths**. Given a graph and a source vertex s, support queries of the form Is there a path from s to a given target vertex v? If so, find such a path.

> **Single-source shortest paths.** Given a graph and a source vertex s, support queries of the form Is there a path from s to a given target vertex v? If so, find a shortest such path (one with a minimal number of edges).

> DFS is analogous to one person exploring a maze. BFS is analogous to a group of searchers exploring by fanning out in all directions, each unrolling his or her own ball of string. When more than one passage needs to be explored, we imagine that the searchers split up to expore all of them;

> We put the source vertex on the data structure, then perform the following steps until the data structure is empty:
>
> - Take the next vertex v from the data structure and mark it.
> - Put onto the data structure all unmarked vertices that are adjacent to v.
>
> The algorithms differ only in the rule used to take the next vertex from the data structure (least recently added for BFS, most recently added for DFS).

> **Cycle detection.** Support this query: Is a given graph acylic ?

> **Two-colorability.** Support this query: Can the vertices of a given graph be assigned one of two colors in such a way that no edge connects vertices of the same color ? which is equivalent to this question: Is the graph bipartite ?

> **Symbol graphs**. Typical applications involve processing graphs defined in files or on web pages, using strings, not integer indices, to define and refer to vertices.
