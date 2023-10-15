---
title: 'Mathematical Structure for Computer Science'
language: 'en-US'
status: 'Reading'
coverPath: 'mathematical-structure-for-computer-science'
date: '2022-08-29'
---

# Preface

> If you do not see at first how to solve a problem, don’t give up, think about it some more; be sure you understand all the terminology used in the problem, play with some ideas. If no approach presents itself, let it be and think about it again later. Repeat this process for days on end. When you finally wake up in the middle of the night with an idea, you’ll know you are putting in the right amount of effort for this course.”

# 1 - Formal Logic

> ![new concept](/images/concept.png) A **statement** (or **proposition**) is a sentence that is either true or false.

> ...A, B, and C, are used to represent statements and are called statement letters;

> the symbol `^` is a logical connective representing *and*

> ![new concept](/images/concept.png) The expression `A ^ B` is called the **conjunction** of A and B, and A and B are called the **conjuncts** of this expression

> Another connective is the word *or*, denoted by the symbol `V`.

> ![new concept](/images/concept.png) The expression `A V B` (read “A or B”) is called the **disjunction** of A and B, and A and B are called the **disjuncts** of this expression

> ![new concept](/images/concept.png) The logical connective here is **implication**, and it conveys the meaning that the truth of A implies or leads to the truth of B. In the implication `A -> B`, A stands for the **antecedent** statement and B stands for the **consequent** statement.

> By convention, `A -> B` is considered true if A is false, regardless of the truth value of B.

Implication: Either both are true (like an if statement) or if the antecedent is false the result is true.

> The **equivalence** connective is symbolized by `<->`. 

> (It's a shortcut) The expression `A <-> B` stands for `(A -> B) ^ (B -> A)`.

> ![new concept](/images/concept.png) The connectives we’ve seen so far are called **binary connectives** because they join two expressions together to produce a third expression.

> ![new concept](/images/concept.png) a **unary connective**, a connective acting on one expression to produce a second expression

> ![new concept](/images/concept.png) **Negation** is a unary connective.

> The negation of A—­symbolized by `A′`—is read “not A.”

“If there is smoke, then there is fire.”

- If there is smoke (T) then there is fire (T) -> true
- If there is smoke (T) then there is fire (F)  -> false
- If there is smoke (F) then there is fire (T)  -> true
- If there is smoke (F) then there is fire (F)  -> true

> This
> order of precedence is
> 1. connectives within parentheses, innermost parentheses first
> 2. `'`
> 3. `V ^`
> 4. `->`
> 5. `<->`

