---
id: '978-0134757599'
title: 'Refactoring 2nd edition - Improving the design of existing code'
language: 'en-US'
status: 'Read'
coverPath: 'refactoring-2nd-edition-improving-the-design-of-existing-code'
date: '2021-03-16'
references:
 - 978-8582600320
 - 978-1942788331
 - 978-8573076103
---

# Foreword to the First Edition

> Frameworkers know that a framework won't be right the first time around - it must evolve as they gain experience. They also know that the code will be read and modified more frequently than it will be written. The key to keeping code readable and more modifiable is refactoring - for frameworks, in particular, but also for software in general.

> So what's the problem ? Simply this: Refactoring is risky. It requires changes to working code that can introduce subtle bugs. Refactoring if not done properly, can set you back days, even weeks. And refactoring becomes riskier when practiced informally or ad hoc. You start digging in the code. Soon you discover new opportunities for change, and you dig deeper. The more you dig, the more stuff you turn up ... and the more changes you make. Eventually you dig yourself into a hole you can't get out of.

# Preface

> Yes, the design was a bit more "pure" an a bit more "clean". But the project had to ship code that -worked, not code that would please an academic.

> Refactoring is the process of changing a software system in a way that does not alter the external behavior of the code yet improves its internal structure. It is a discipled way to clean up code that minimizes the changes of introducing bugs.

> In essence, when you refactor, you are improving the design of the code after it has been written.

# Chapter 1 - Refactoring: A first example

> A poorly designed system is hard to change - because it is difficult to figure out what to change and how these changes will interact with the existing code to get the behavior I want. And if it is hard to figure out what to change, there is a good chance that I will make mistakes and introduce bugs.

> When you have to add a feature to a program but the code is not structured in a convenient way, first refactor the program to make it easy to add the feature, then add the feature.

> Let me stress that it's these changes that drive the need to perform refactoring. If the code works and doesn't ever need to change, it's perfectly fine to leave it alone. It would be nice to improve it, but unless someone does need to understand it, it isn't causing any real harm. Yet as soon as someone does need to understand how that code works and struggles to follow it, then you have to do something about it.

> Whenever I do refactoring, the first step is always the same. I need to ensure I have a solid set of tests for that section of code. The tests are essential because even though I will follow refactorings structured to avoid most of the opportunities for introducing bugs, I'm still human and still make mistakes.

> This is the essence of the refactoring process: small changes and testing after each change.

> Is this renaming worth the effort? Absolutely. Good code should clearly communicate what it is doing and variable names are a key to clear code.

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.

> It's hard to get names right the first time, so I use the best name I can think of for the moment, and don't hesitate to rename it later.

> The performance of software usually depends on just a few parts of the code, and changes anywhere else don't make an appreciable difference.

> At the moment, I'm just making a copy of the performance object, but I'll shortly add to this new record. I take a copy because I don't want to modify the data passed into the function. I prefer to treat data a immutable as much as I can - mutable state quickly becomes something rotten.

> Brevity is the soul of wit, but clarity is the soul of evolvable software. Adding this modularity allows to me to support the HTML version of the code without any duplication of the calculation.

> When programming, follow the camping rule: Always leave the code base healthier than when you found it.

> Read the code, gain some insight, and use refactoring to move that insight from tour head back into the code. The clearer code then makes it easier to understand it, leading to deeper insights and a beneficial positive feedback loop.

> I believe however that we can go beyond taste and say that the true test of good code is how easy it is to change it. Code should be obvious: When someone needs to make a change, they should be able to find the code to be changed easily and to make the change quickly without introducing any errors.

> The key to effective refactoring is recognizing that you go faster when you take tiny steps, the code is never broken, and you can compose those small steps into substantial changes. Remember that - and the rest is silence.

# Chapter 2 - Principles in Refactoring

## Defining Refactoring

> Refactoring (noun): a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior

> Refactoring(verb): to restructure software by applying a series of refactorings without changing its observable behavior.

> I use "restructuring" as a general term to mean any kind of reorganization or cleaning up of a code base, and see refactoring as a particular kind of restructuring.

> If someone says their code was broken for a couple of days while they are refactoring, you can be pretty sure they were not refactoring

> Refactoring is very similar to performance optimization, as both involve carrying out code manipulations that don't change the overall functionality of he program. Refactoring is always done to make the "easier to understand and cheaper to modify".

## The Two Hats

> Kent beck came up with a metaphor of the two hats. When i use refactoring to develop software, I divide my time between two distinct activities: adding functionality and refactoring. When I add functionality, I shouldn't be changing existing code; I'm just adding new capabilities.

## Why Should We Refactor?

> Without refactoring, the internal design - the architecture - of software tends to decay. As people change code to achieve short-term goals, often without a full comprehension of the architecture, the code loses its structure. It becomes harder for me to see the design by reading the code. Loss of the structure of code has a cumulative effect. 

> The harder it is to see the design in the code, the harder it is for me to preserve it, and the more rapidly it decays. Regular refactoring helps keep the code in shape.

> By eliminating duplication, I ensure that the code says everything once and only once, which is the essence of good design.

> That user, who we often forget, is actually the most important. Who cares if the computer takes a few more cycles to compile something? Yet it does matter if it takes a programmer a week to make a change that would have taken only an hour with proper understanding of my code.

> By clarifying the structure of the program, I clarify certain assumptions I've made - to a point where even I can't avoid spotting the bugs.

> In the end, all the earlier points come down to this: Refactoring helps me develop code more quickly.

> I refer to this effect as the Design Stamina Hypothesis: By putting our effort into a good internal design, we increase the stamina of the software effort, allowing us to go faster for longer.

## When Should We Refactor?

> The Rule of Three
>
> Here's a a guideline Don Roberts gave me: The first time you do something you just do it. The second time you do something similar, you wince at duplication, but you do the duplicate thing anyway. The third time you do something similar, you refactor. 
>
> Or for those who like baseball: Three strikes, then you refactor.

> The best time to refactor is just before I need to add a new feature to the code base.

> The same happens when fixing a bug, Once I've found the cause of the problem, I see that it would be much easier to fix should I unify the three bits of copied code causing the error into one.

> Before I can change some code, I need to understand what it does. This code may have been written by me or by someone else. Whenever I have to think to understand what the code is doing, I ask myself if I can refactor the code  to make that understanding more immediately apparent.

>  ... by refactoring I move the understanding from m head into the code itself. I then test that understanding by running the software to see if it still works. If I move my understanding into the code, it will be preserved longer and be visible to my colleagues.

> There's a bit of tradeoff here. I don't want to spend a lot of time distracted from the task I'm currently doing, but I also don't want to leave the trash lying around and getting in the way of future changes. If it's easy to change, I 'll do it right away, If it's a bit more effort to fix, I might make a note of it and fix it when I'm done with my immediate task.

> This is an important point that's frequently  missed. Refactoring isn't an activity that's separated from programming - any more than you set aside time to write if statements. I don't put time on my plans to do refactoring most refactoring happens while I'm doing other things.

> You have to refactor when you run into ugly code - but excellent code needs plenty of refactoring too.

> To add new features, we should be mostly adding new code. But good developer know that, often, the fastest way to add a new feature is to change the code to make it easy to add. Software should thus be never thought of as "done". As new capabilities are needed, the software changes to reflect that. Those changes can often be greater in the existing code than in the new code.

 >One bit of advice I've heard is to separate refactoring work and new feature additions into different version-control commits. The big advantage of this is that they can be reviewed and approved independently. I'm not convinced of this, however. Too often, the refactorings are closely interwoven with adding new features, and it's not worth the time to separate them out.

> (about long-term refactoring) Even in such cases, I'm reluctant to have a team do dedicated refactoring. Often a useful strategy is to agree to gradually work on the problem over the course of the next few weeks, Whenever anyone goes near any code that's in the refactoring zone, they move it a little way in the direction they want to improve.

> Code reviews help spread knowledge through a development team . Reviews help more experienced developers pass knowledge to those less experienced. They help more people understand more aspects of a large software system, They are also very important in writing clear code.

> The common pull request model, where a reviewer looks at code without the original author, doesn't work too well. It's better to have the original author of the code present because the author can provide context on the code and fully appreciate the reviewers' intentions for their changes. I've had my best experiences with this by sitting one-on-one with the original author, going through the code and refactoring as we go. The logical conclusion of this style is pair programming: continuous code review embedded within the process of programming.

> To a manager who is genuinely savvy about technology and understands the design stamina hypothesis , refactoring isn't hard to justify. Such managers should be encouraging refactoring on a regular basis and be looking for signs that indicate a team isn't doing enough.

> It may sound like I always recommend refactoring - but there are cases when it's not worthwhile.

> If I run across code that is a mess, but I don't need to modify it, then I don't need to refactor it. Some ugly code that I can treat as an API may remain ugly. It's only when I need to understand how it works that refactoring gives me any benefit.

> Another case is when it's easier to rewrite it than to refactor it. This is a tricky decision. Often, I can't tell how easy it is to refactor some code unless I spend some time trying and thus get a sense of how difficult it is. The decision to refactor or rewrite requires good judgment and experience, and I can't really boil it down into a piece of simple advice.

## Problems With Refactoring

> Although many people see time spent refactoring as slowing down the development of new features, the whole purpose of refactoring is to speed thing up. But, while this is true, it's also true that the perception of refactoring as slowing this down is still common- and perhaps the biggest barrier to people doing enough refactoring.

> If you are a tech lead in a team, it's important to show team members that you value improving the health of a code base. That judgment I mentioned earlier on whether to refactor or not is something that takes lots of years of experience to build. The less experience in refactoring need lots of mentoring to accelerate them through the process.

> We refactor because it makes us faster - faster to add features, faster to fix bugs. It's important to keep the in front of your mind and in front of communication with others. The economic benefits of refactoring should always be the driving factor and the more that is understood by developers, managers, and customers, the more of the "good design" curve we'll see.

> Such function are part of a published interface - an interface that is used by clients independent of those who declare the interface.

> Code ownership boundaries get in the way of refactoring because I cannot make the kinds of changes I want without breaking my clients.

> My preference is to allow team ownership of code - so that anyone in the same team can modify the team's code, even if originally written by someone else.

> The problem of complicated merges gets exponentially worse as the length of features branches increases. Integrating branches that are four weeks old is more than twice as hard as those that are a couple of weeks old. Many people, therefore, argue for keeping feature branches short - perhaps just a couple of days. Others, such as me, want them even shorter that that. This is an approach called Continuous Integration (CI), also known as Trunk-Based Development. With CI, each team member integrates with mainline at least once per day. This prevents any branches diverting too far from each other and this greatly reduces the complexity of merges. CI doesn't come for free: It means you use practices to ensure the feature toggles (aka feature flags) to switch off any in-process features that can't be broken down.

> Refactorings often involve making lots of little changes all over the code base—which are particularly prone to semantic merge conflicts (such as renaming a widely used function). Many of us have seen feature-branching teams that find refactorings so exacerbate merge problems that they stop refactoring. CI and refactoring work well together, which is why Kent Beck combined them in Extreme Programming.

> The key here is being able to catch an error quickly. To do this, realistically, I need to be able to run a comprehensive test suite on the code—and run it quickly, so that I'm not deterred from running it frequently. This means that in most cases, if I want to refactor, I need to have self-testing code.

> The obvious answer to this problem is that you add tests. But while this sounds a simple, if laborious, procedure, it's often much more tricky in practice. Usually, a system is only easy to put under test if it was designed with testing in mind—in which case it would have the tests and I wouldn't be worrying about it.

> Even when I do have tests, I don't advocate trying to refactor a complicated legacy mess into beautiful code all at once. What I prefer to do is tackle it in relevant pieces. Each time I pass through a section of the code, I try to make it a little bit better—again, like leaving a camp site cleaner than when I found it. If this is a large system, I'll do more refactoring in areas I visit frequently—which is the right thing to do because, if I need to visit code frequently, I'll get a bigger payoff by making it easier to understand.

> One difference from regular refactorings is that database changes often are best separated over multiple releases to production. This makes it easy to reverse any change that causes a problem in production. So, when renaming a field, my first commit would add the new database field but not use it. I may then set up the updates so they update both old and new fields at once. I can then gradually move the readers over to the new field. Only once they have all moved to the new field, and I've given a little time for any bugs to show themselves, would I remove the now-unused old field.

## Refactoring, Architecture, and Yagni

> The real impact of refactoring on architecture is in how it can be used to form a well-designed code base that can respond gracefully to changing needs. The biggest issue with finishing architecture before coding is that such an approach assumes the requirements for the software can be understood early on. But experience shows that this is often, even usually, an unachievable goal. Repeatedly, I saw people only understand what they really needed from software once they'd had a chance to use it, and saw the impact it made to their work.

> With refactoring, I can use a different strategy. Instead of speculating on what flexibility I will need in the future and what mechanisms will best enable that, I build software that solves only the currently understood needs, but I make this software excellently designed for those needs. As my understanding of the users' needs changes, I use refactoring to adapt the architecture to those new demands. I can happily include mechanisms that don't increase complexity (such as small, well-named functions) but any flexibility that complicates the software has to prove itself before I include it.

> Yagni doesn't imply that architectural thinking disappears, although it is sometimes naively applied that way. I think of yagni as a different style of incorporating architecture and design into the development process—a style that isn't credible without the foundation of refactoring.

## Refactoring and the Wider Software Development Process

> To really operate in an agile way, a team has to be capable and enthusiastic refactorers—and for that, many aspects of their process have to align with making refactoring a regular part of their work.

> The first foundation for refactoring is self-testing code.

> To refactor on a team, it's important that each member can refactor when they need to without interfering with others' work. This is why I encourage Continuous Integration.

> With this trio of practices in place, we enable the Yagni design approach that I talked about in the previous section. Refactoring and yagni positively reinforce each other: Not just is refactoring (and its prerequisites) a foundation for yagni—yagni makes it easier to do refactoring. This is because it's easier to change a simple system than one that has lots of speculative flexibility included. Balance these practices, and you can get into a virtuous circle with a code base that responds rapidly to changing needs and is reliable.

> Stated like this, it all sounds rather simple—but in practice it isn't. Software development, whatever the approach, is a tricky business, with complex interactions between people and machines. The approach I describe here is a proven way to handle this complexity, but like any approach, it requires practice and skill.

## Refactoring and Performance

> The secret to fast software, in all but hard real-time contexts, is to write tunable software first and then tune it for sufficient speed.

> Here, every programmer, all the time, does whatever she can to keep performance high. This is a common approach that is intuitively attractive—but it does not work very well. Changes that improve performance usually make the program harder to work with. This slows development. This would be a cost worth paying if the resulting software were quicker—but usually it is not.

> The lesson is: Even if you know exactly what is going on in your system, measure performance, don’t speculate. You’ll learn something, and nine times out of ten, it won’t be that you were right!

> The interesting thing about performance is that in most programs, most of their time is spent in a small fraction of the code. If I optimize all the code equally, I'll end up with 90 percent of my work wasted because it's optimizing code that isn’t run much. The time spent making the program fast—the time lost because of lack of clarity—is all wasted time.

## My Summary

Refactoring can be either a noun or a verb, respectively:

- A change made to the internal structure to make it cleaner and that do not change its observable behavior
- to restructure software by applying a series of refactorings without changing its observable behavior

Refactoring is different from restructuring. Restructuring do not imposes any specific technique while refactoring does. Refactoring is one of a set of possible restructuring. Usually if someone has a broken code for a long time, it's not refactoring.

Refactoring and performance optimization are similar, since both change internal structures without changing the observable behavior.

There are two types of hats one for adding functionalities another for refactoring.

We should refactor because:

- Software tends to decay.
- Software's decay is cumulative. The worst the code, more rapidly it decays.
- The worst the code, harder to add functionalities to it.
- The worst the code, more difficult to spot bugs

Refactoring helps to develop more quickly. The Design Stamina Hypotesis states that the bigger the effort we put into good internal design, we increase the stamina of the software effort, allowing us to go faster for longer.

The Rule of the three helps to identify when to refactor:

1. do it
2. you wince at duplication, but, do it anyway
3. Refactor

Three strikes, then you refactor.

Refactor as a preparatory activity. Just before I need to add a new feature to the code base, or before fixing a bug.

You should also refactor to gain understand of the code and to make it easier to share this understanding with your colleagues.

We refactor as we do other things. Refactoring should be an activity just like adding ifs to the code. We avoid long-term refactoring, we try to improve it gradually as people have to go near the refactoring zone. 

Applying the boy scout rule, if the refactoring is small, do it together with the task. If it's big enough, postpone it to immediate after the task is done.

When refactoring, you can either create two separate changes in two pull requests or just one change with refactoring + new feature. It's important to understand what is more worthy. One might be little slower, but you can review it separately, the other might be faster (and sometimes the only option).

Clean code, as well, as ugly code, requires refactoring. The code is never done, as we add more features, we might have more changes to the existing code than new code.

Code review foster knowledge sharing, and eases the writing of clear code. Refactoring works best with a pair-programming-like exercise. Author and reviewer together, on one-on-one, discussing code, refactoring code, and continuously reviewing code.

The managers should be encouraging refactoring on a regular basis and be looking for signs of lack of it.

There are cases where refactoring is not worthwhile:

- If you don't have to understand it, don't do it. Code that may remain as API, may remain ugly.
- Whenever is easier to rewrite than to refactor. Although, that's a though question to answer.

It is a common perception that refactoring is slows down, in fact, the whole purpose of refactoring is to speed things up. As a Tech lead  it's important to show team members that you value improving the health of the code base. Not only value, but support less experience to do it. It's common that not only management, but also developers sacrifice quality. The economic benefit of refactoring is the driving factor do it. 

Code ownership boundaries make it harder to refactor some pieces of code. Code that is a published interface may be used by several independent clients. Most of the time, we should try to have a culture where everyone can do modify the team's code, even if originally written by someone else.

Besides code ownership and difficulties with management, refactor has a difficult relationship with long lived feature branches. The longer it takes to integrate higher the effort to integrate it. This difficulty increases when we do lots of little semantic changes all over the code base. Therefore, a better approach is to use a trunk based development, with everyone integrating several times a day in the master branch.

Self-testing code is very important to be able to have a fast feedback when refactoring. For legacy codes, where you don't have the tests and it's difficult to add tests, because the system wasn't designed since the beginning with it, there is no simple routing. But, even with tests, it's important to go slowly when working with legacy code, and start with the areas where you visit the most.

The perspective for refactoring databases evolve a lot in the last 20 years (since the first edition). When refactoring databases, it's better to have multiple releases to production. This makes easier to revert any changes that caused harm.

Refactoring does a great impact in the architecture, it's an way to maintain a well-designed code base that flexible enough to respond to changes. Refactor enables you to avoid big complex architecture, because you can start with a simple architecture that resolves the actual problem and you don't have to try to guess the future requirements. When the future comes, you can refactor to apply changes to evolve your system as required by your requirements. The greatest difference that know you know the requirements and you can create a better design. Therefore, refactor enables YAGNI.

Yagni (you ain't gonna need it) is not about not having architectural thinking. But, perhaps, to postpone big architectural decisions to when you have enough information to take it.

In the wider development process, a team needs to look for self-testing code. Once the team have that the team is enabled to refactor and evolve the system internal design overtime, as a regular part of their work. To avoid interfering with other's work, it's important to have a CI that integrates constantly the work done by everyone. In addition to that, as said previously, the team may be using pair programming to have a continuously reviewd/refactored code.

With theses practices, you enable the Yagni design approach, which ease decision making and creates a less complex software. Less complex software that is easier to refactor. Although, it sounds rather simple, it isn't.  But this approach, is a proven approach to handle software development complexity.

At last when we consider refactoring and performance. The secret to fast software, is to write tunable software first and then tune it for sufficient speed.

If every developer sacrifices the code design over performance, it is likely that will slow down development. Which would make code more complex and more costly to add more features. Most programs, spend most of their time in a small fraction of the code. Therefore, is better to look for those bottlenecks instead of trying to make 100% of the code with a better performance.

In addition to that, always measure your system before trying to apply performance optimizations. You should never speculate.

# Chapter 3 - Bad Smells in Code





