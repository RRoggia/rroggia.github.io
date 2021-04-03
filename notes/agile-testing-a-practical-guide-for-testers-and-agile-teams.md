---
title: 'Agile Testing - A practical guide for testers and agile teams'
language: 'en-US'
status: 'Read'
coverPath: 'agile-testing-a-practical-guide-for-testers-and-agile-teams'
date: '2015-06-01'
---

# Foreword by Mike Cohn

>  Build quality into the product rather than trying to test it in later.

# Preface

## Why We Wrote This Book

> delivering business value using tests that the business can understand. 

> Agile development isn’t the only way to successfully deliver software.

> The programmers write and automate unit and integration tests that provide good code coverage. They are disciplined in the use of source code control and code integration. Skilled testers are involved from the start of the development cycle and are given time and resources to do an adequate job of all necessary forms of testing. An automated regression suite that covers the system functionality at a higher level is run and checked regularly. The development team understands the customers’ jobs and their needs, and works closely together with the business experts.

## How to Use This Book

> Test automation is a central focus of successful agile teams, and it’s a scary topic for lots of people

## Just Start Doing It - Today!

> ... what he thought was the number one success factor for agile testing, he answered: “Start doing it—today!"

# Part I Introduction

## Chapter 1 What Is Agile Testing, Anyway?

>  The “whole team” approach promoted by agile development is central to our attitude toward quality and testing,

### What Dow We Mean by "Agile Testing"?

> With TDD, the programmer writes a test for a tiny bit of functionality, sees it fail, writes the code that makes it pass, and then moves on to the next tiny bit of functionality.

> Programmers also write code integration tests to make sure the small units of code work together as intended.

> (About unit or component testing) ...helping the programmers know what code to write next.

> Agile development encourages us to solve our problems as a team.

> we’re working together with a team of people who all feel responsible for delivering the best possible quality, and who are all focused on testing.

> When we say "agile testing" in this book, we're usually talking about business-facing tests, tests that define the business experts' desired features and functionalities. "Testing" in this book (...) includes just about everything beyond unit and component level testing: functional, system, load, performance, security, stress, usability, exploratory, end-to-end, and user-acceptance.

> Testing an application with a plan to learn about it as you go, and letting that information guide your testing,

### A Little Context for Roles and Activities on an Agile Team

#### Customer Team

> The customer team writes the stories or feature sets that the developer team delivers.

> They provide examples that will drive coding in the form of business-facing tests.

> helping elicit requirements and examples and helping the customers express their requirements as tests.

#### Developer Team

> Everyone involved with delivering code is a developer

> Many agile practitioners discourage specialized roles on teams and encourage all team members to transfer their skills to others as much as possible.

> Testers advocate for quality on behalf of the customer and assist the development team in delivering the maximum business value.

#### Interaction between Customer and Developer Teams

> The customer and developer teams work closely together at all times.

> Ideally, they’re just one team with a common goal.

> They’ll work together to define requirements with tests and examples, and write the code that makes the tests pass.

### Traditional vs Agile Testing

> someone will need to write tests that illustrate the requirements for each story days or hours before coding begins.

> The real difference is that we like to do these tests as early in the development process as we can so that they can also drive design and coding.

> The difference here is that all the testing is not left until the end.

### My Summary

This chapter explains what is agile testing and who are the person responsible for it and their roles.

Writing automated tests and applying TDD is not necessarily an agile testing practice. Even, teams that don't consider themselves agile could apply these techniques simply because they improve software design and prevent defects. This technology facing tests are part of the programmer's domain.

Agile development and testing is about working closely together and being responsible for delivering the best quality product to customers.

The author defines "Agile testing" as business facing tests. Tests that define the business expert domain.

They also define "Testing" is something more broad, from functional, system, load, performance, security, stress, usability, exploratory, e2e and user acceptance. And, all other types of tests.

Agile teams, composed of customer and developer teams, should collaborate as they are a whole team, in order to achieve business goals. The main difference from agile and phased (traditional ) development is that agile brings tests as early as possible in the development process, while in phased development tests are one of the last phases.

## Chapter 2 Ten Principles for Agile Testers

She’s ready to gather and share information, to work with the customer or product owner in order to help them express their requirements adequately so that they can get the features they need, and to provide feedback on project progress to everyone. 
Creativity, openness to ideas, willingness to take on any task or role, focus on the customer, and a constant view of the big picture are just some components of the agile testing mind-set. 
One of the agile tester’s most important contributions is helping the product owner or customer articulate requirements for each story in the form of examples and tests. 
run these tests early and often so they’re continually guided by meaningful feedback. 
Is management worried about how work is progressing? Display a big visible chart of tests written, run, and passing every day. 
If we let new features creep in, we risk delivering nothing on time. 
If we get too caught up with edge cases and miss core functionality on the happy path, we won’t provide the value the business needs. 
The worst-case scenario is that only the core functionality gets released. That’s better than delivering nothing or something that works only halfway. 
we still need to start by making sure the happy path works.  
and add negative and boundary tests later.                   
The agile tester should look for unique ways to facilitate communication. 
We found great success with the “Power of Three.” This meant that all discussions about a feature needed a programmer, a tester, and theproduct owner. 
They can help customers and developers achieve a common language. 
Brian Marick (2003) recommends that we use examples to develop this language. 
We need courage to allow others to make mistakes, because that’s the only way to learn the lesson. 
take a simple approach to ensuring that software meets the customer requirements. 
because it’s up to the customer team to decide what level of quality they want to pay for. 
The ultimate decisions are up to the customer. The team can help the customer make good decisions by its taking a simple, step-by-step approach to its work. 
Agile testing means doing the simplest tests possible to verify that a piece of functionality exists or that the customer’s quality standard (eg., performance) has been met. 
Simple doesn’t mean easy. For testers, it means testing “just enough” with the lightest-weight tools and techniques we can find that will dothe job. 
We need to automate regression tests, but we should push them down to the lowest level possible in order to encourage fast feedback. Evensimple smoke tests might be enough for business-facing test automation. 
but start with the basics, time-boxing side trips and evaluating how far to go with edge cases. 
Testers bring testing issues up for the whole team to address. 
Agile testers and their teams are always on the lookout for tools, skills, or practices that might help them add more value or get a better return on the customer’s investment. 
“AADD,” Agile Attention Deficit Disorder. Anything not learned quickly might be deemed useless. 
Agile testers use this opportunity to raise testing-related issues and ask the team to brainstorm ways to address them. 
I suggested keeping an “impediment backlog” of items that were keeping us from being as productive as we’d like to be. 
Stability is what testers crave so that they can say, “I’ve tested that; it’s done.” Continuously changing requirements are a tester’snightmare. However, as agile testers, we have to welcome change. 
Some teams have analysts who can spend more time with the business experts to do some advance planning. 
Automated testing is one key to the solution. One thing we know for sure: No agile team will succeed doing only manual testing. We need robust automation in order to deliver business value in a time frame that makes it valuable. 
Automating tests is hard, but it is much easier when you have the whole team working together. Any testing issue is easier to address when you have people with multiple skill sets and multiple perspectives attacking it. 
Story                                                        
share                                                        
The programmers would start implementing new stories in a new, testable architecture, using test-driven development. The testers would write manual regression test scripts, and the entire team—programmers, testers, the system administrator, and the DBA—would execute them on the last two days of every iteration. 
When an agile team faces a big problem, perhaps a production showstopper or a broken build, it’s everyone’s problem. 
When the team creates its own approach and commits to it, its members adopt a new attitude toward testing. 
In the history of software development, testers haven’t always enjoyed parity with other roles on the development team. Some people saw testers as failed programmers or second-class citizens in the world of software development. 
Testing knowledge is one component of any team’s ability to deliver value. 
In agile development, the whole team takes responsibility for delivering high-quality software that delights customers and makes the business more profitable. 
Even with short iterations and frequent releases, it’s easy to develop a gap between what the customer team expects and what the team delivers.Using tests to drive development helps to prevent this, but you still need the right tests. 
Programmers focus on making things work. If they’re coding to the right requirements, customers will be happy. 
Agile testers ask questions of both customers and developers early and often, and help shape the answers into the right tests. 
By the end of the iteration, testers verify that the minimum testing was completed. 
If a company tried agile and had poor results, people will be suspicious of trying it again, citing examples of why it didn’t work. They might even actively campaign against it. 
Does it tolerate poor quality? Does it take customers’ quality requirements into account, or is it just concerned with getting the product into the customers’ hands as fast as it can? 
A team that tries to use agile development in such an environment faces an uphill battle. 
what about testers who are used to building test scripts according to a requirements document? Can they learn to ask the questions as the codeis being built? Testers who don’t change their approach to testing have a hard time working closely with the rest of the development team. 
Most quality assurance professionals are eager to take what they’ve learned and make it better. These people are adaptable enough to not only survive, but to thrive in an agile project. 
Teams might need to work for short bursts of unsustainable pace now and then, but it should be the exception, not the norm. 
If overtime is required for short periods, the whole team should be working extra hours. 
An open relationship is critical to the success of an agile project, where the relationship between the customer team and the development teamis more like a partnership than a vendor-supplier relationship. 
Customers are critical to the success of your agile project. They prioritize what will be built and have the final say in the quality of the product. 
define acceptance tests that will prove that conditions of satisfaction are met. 
Act Now, Apologize Later                                     
large organization, the bureaucratic wheels turn so slowly that your team might have to figure out and implement its own solutions. 
It’s critical that you take the time to analyze what roles your product needs to be successful, and if you need to fill them from outside the team, do it. 
Plenty of teams simply adopt practices that work for them regardless of the original source, or they invent their own. 
For example, if you’re a tester who is pushing for the team to implement continuous integration, but the programmers simply refuse to try,you’re in a bad spot. If you’re a programmer who is unsuccessful at getting involved in some practices, such as driving development withbusiness-facing tests, you’re also in for conflict. 
ou situation                                                 
Many of the agile development practices are synergistic, so if they are used in isolation, they might not provide the benefits that teams are looking for. 
Diverse viewpoints are good for a team, but everyone needs to be headed in the same direction. 
“mini-waterfall” phenomenon that often occurs when a traditional software development organization implements an agile development process. 
Ask everyone to be part of the solution, and work together to find out what processes and practices work best for their particular situations. 
Customers need some way to know how development is progressing and whether their conditions of satisfaction are being met. 
Fear is a common response to change. Forcing people to do something they don’t want is detrimental to positive change. 
You have the right to the tools you need to perform testing tasks in a timely manner. 
You have the right to expect your entire team, not just yourself, to be responsible for quality and testing. 
He made sure that the business understood that quality was more important than quantity or speed. 
My better understanding of the application’s workings made me understand that the risk and cost of fixing it was potentially much more riskythan the benefit. I believe that thinking like this isn’t a bad thing as long as we are always mindful of the end customer impact, not just the internal cost. 
It is the team (which includes the customer) that defines the level of quality necessary to deliver a successful application. 
He said that in a traditional waterfall type project, the reports all showed that everything was going according to plan until the very end,and then everything was in a panic state and “nothing worked.” 
In the agile project, there were problems every day that needed to be addressed. Agile projects were more work on a consistent basis, but at least he was getting realistic reports. There were no surprises at the end of the project. 
testing is no longer a separate activity that occurs after development but that testing and coding are integrated activities. 
If you need time and funds to learn and implement an automated test tool, explain to management that over time, automated regression tests will let your team go faster and deliver more functionality in each iteration. 
Story                                                        
show to toriello                                             
Sometimes you just have to watch the train wreck. If your suggestions for improvement were rebuffed, and the team fails, bring your suggestionup again and ask the team to consider trying it for a few iterations. People are most willing to change in the areas where they feel the mostpain. 
Be a collaborator, not an enforcer.                          
Nobody cares about quality, and you feel invisible despite your best efforts. It might be time to look for a better team. Some teams are happy the way they are and simply don’t feel enough pain to want to change. 
Developers get training on pair programming, test-driven development, and other agile practices, while testers often seem to get no training at all. 
The pairing of programmers and testers can only improve communication about the quality of the product. 
One major advantage of an integrated project team is that there’s only one budget and one schedule. There is no “testing” time to cut if all of the functionality is not finished. If there is no time to test a new feature, then there is no time to develop it in the first place. 
To support agile values and principles, teams work better when they have ready access to all team members, easy visibility of all project progress charts, and an environment that fosters communication. 
One or two programmers wore a “tester hat” for each iteration, writing customer-facing tests ahead of coding and performing manual tests. 
The web-based financial application we produce has highly complex business logic, is high risk, and test intensive. Testing tasks often add upto the same amount of time as programming tasks. Even with a relatively high tester–programmer ratio, programmers do much of the functionaltest automation and sometimes pick up manual testing tasks. 
and there are times a coach needs to provide strong encouragement and lead the team when it needs leadership. 
Every team member has equal value to the team.               
If you’re a tester stuck on an automation problem, have the courage to ask a team member for help. 
Courage is especially important. Get up and go talk to people; ask how you can help. Reach out to team members and other teams with direct communication. Notice impediments and ask the team to help remove them. 
on an agile project, but we still need ways to measure progress, track defects, and plan testing. 
a fundamental lean measurement is the time it takes to go “from concept to cash,” from a customer’s feature request to delivered software. They call this measurement “cycle time.” 
Measurements such as cycle time that involve the whole team are more likely to drive you toward success than are measures confined to isolated roles or groups. 
Metrics that measure milestones along a journey to achieve team goals are useful. 
we don’t achieve the desired improvement, it’s more important to figure out why than to lament whatever amount our bonus was reduced as aresult. 
we’re using a burndown chart, and we’re burning up instead of down, that’s a red flag to stop, take a look at what’s happening, and make surewe understand and address the problems. 
However, it is important to recognize that the number itself means nothing. For example, the tests might be poorly written, or to have a well tested product, maybe we need 10,000 tests. Numbers don’t work in isolation. 
When you’re trying to figure out what to measure, first understand what problem you are trying to solve. 
Focus on the goal, not the metrics.                          
An increased number of defect reports might mean the team is doing a better job of testing, not that they are writing more buggy code. 
There’s not much value in knowing the rate of bugs found and fixed during development, because finding and fixing them is an integral part of development. 
We could write a test to show the failure, fix the code, and keep the test in our regression suite. 
According to lean principles, this inventory of defects is a waste. As a team, we should be thinking of ways to reduce this waste. 
As with all tools used by your agile development team, you should consider the whole team’s opinion. 
Whether or not you use a DTS, you want to make defects as visible as possible. 
If you choose the wrong tool, cut your losses and start researching alternatives. 
Concentrate on improving communication and building collaboration. If you encounter a lot of defects, investigate the source of the problem. 
We like to think of a test strategy as a static document that seldom changes, while a test plan is created new and is specific to each new project. 
If your organization wants documentation about your overall test approach to projects, consider taking this information and putting it in astatic document that doesn’t change much over time. 
A test strategy document can be used to give new employees a high-level understanding of how your test processes work. 
The power of planning is to identify possible issues and dependencies, to bring risks to the surface to be talked about and to be addressed,and to think about the big picture. 
If a requirement changed, we needed to know that we had changed the appropriate test cases. 
We build functionality in tiny, well-defined steps. We work with the team closely and know when something changes. 
We can then collaborate with the customer to define acceptance tests. We test each story as the programmer works on it, so we know that nothing goes untested. 
Documents such as traceability matrices might be needed to fulfill requirements imposed by the organization’s audit standards or qualitymodels. 
Quality assurance teams in traditional development organizations are often tasked with providing information for auditors and ensuringcompliance with audit requirements. 
Maintain the team’s focus on delivering high-quality software that provides real business value, and see how you can work within the model. 
Tools are easier to use when used with code that’s designed for testability. 
agile development starts with customer tests, which tell the team what to code. 
This concept of testing to help the programmers is new to many testers and is the biggest difference between testing on a traditional projectand testing on an agile project. 
The lower left quadrant represents test-driven development, which is a core agile development practice. 
Unit tests verify functionality of a small subset of the system, such as an object or method. Component tests verify the behavior of a larger part of the system, such as a group of classes that provide some service 
Both types of tests are usually automated                    
They enable the programmers to measure what Kent Beck has called the internal quality of their code [Beck, 2000, 2004]. 
The process of writing tests first helps programmers design their code well. These tests let the programmers confidently write code to delivera story’s features without worrying about making unintended changes to the system. They can verify that their design and architecture decisionsare appropriate. Unit and component tests are automated and written in the same programming language as the application. 
Programmer tests are normally part of an automated process that runs with every code check-in, giving the team instant, continual feedbackabout their internal quality. 
These business-facing tests, also called customer-facing tests and customer tests, define external quality and the features that the customers want. 
With agile development, these tests are derived from examples provided by the customer team. They describe the details of each story.Business-facing tests run at a functional level, each one verifying a business satisfaction condition. They’re written in a way businessexperts can easily understand using the business domain language. 
It’s possible this quadrant could duplicate some of the tests that were done at the unit level; however, the Quadrant 2 tests are orientedtoward illustrating and confirming desired system behavior at a higher level. 
Most of the business-facing tests that support the development team also need to be automated. One of the most important purposes of tests in these two quadrants is to provide information quickly and enable fast troubleshooting. They must be run frequently in order to give the team early feedback in case any behavior changes unexpectedly. 
Still, some automated tests must verify the user interfaces and any APIs that client applications might use. 
All of these tests should be run as part of an automated continuous integration, build, and test process. 
User interaction experts use mock-ups and wireframes to help validate proposed GUI (graphical user interface) designs with customers and to communicate those designs to the developers before they start to code them. 
The tests in this group are tests that help support the team to get the product built right but are not automated. 
Acceptance tests verify that all aspects of the system, including qualities such as usability and performance, meet customer requirements. 
The quick feedback provided by Quadrants 1 and 2 automated tests, which run with every code change or addition, form the foundation of an agile team. 
These tests first guide development of functionality, and when automated, then provide a safety net to prevent refactoring and the introduction of new code from causing unexpected results. 
Lisa’s Story                                                 
perfect example of continous integration and agile testing   
They verify that the business logic and the user interfaces behave according to the examples provided by the customers. 
critique can include both praise and suggestions for improvement. 
We review the software in a constructive manner, with the goal of learning how we can improve it. 
As we learn, we can feed new requirements and tests or examples back to the process that supports the team and guide development. 
The business experts might overlook functionality, or not get it quite right if it isn’t their field of expertise. The team might simply misunderstand some examples. Even when the programmers write code that makes the business-facing tests pass, they might not be delivering what the customer really wants. 
When we do business-facing tests to critique the product, we try to emulate the way a real user would work the application. This is manual testing that only a human can do. We might use some automated scripts to help us set up the data we need, but we have to use our senses, our brains, and our intuition to check whether the development team has delivered the business value required by the customers. 
User Acceptance Testing (UAT) gives customers a chance to give new features a good workout and see what changes they may want in the future,and it’s a good way to gather new story ideas. 
Focus groups might be brought in, studied as they use the application, and interviewed in order to gather their reactions. Usability testingcan also include navigation from page to page or even something as simple as the tabbing order. Knowledge of how people use systems is anadvantage when testing usability. 
Exploratory testing is central to this quadrant. During exploratory testing sessions, the tester simultaneously designs and performs tests,using critical thinking to analyze the results. 
This offers a much better opportunity to learn about the application than scripted tests. 
Exploratory testing is a more thoughtful and sophisticated approach than ad hoc testing. It is guided by a strategy and operates within defined constraints. 
Exploratory testing works the system in the same ways that the end users will. Testers use their creativity and intuition. As a result, it is through this type of testing that many of the most serious bugs are usually found. 
Nontechnical customer team members often assume that the developers will take care of concerns such as speed and security, and that the programmers are intent on producing only the functionality prioritized by the customers. 
If we know the requirements for performance, security, interaction with other systems, and other nonfunctional attributes before we startcoding, it’s easier to design and code with that in mind. 
Technology-facing tests that critique the product should be considered at every step of the development cycle and not left until the very end. 
In many cases, such testing should even be done before functional testing. 
unit tests didn’t test any nonfunctional requirements such as capacity, performance, scalability, and usability. 
If the iteration demo reveals that the team misunderstood the customer’s requirements, maybe you’re not doing a good enough job of writing customer tests to guide development. 
For most products, we need all four categories of testing to feel confident we’re delivering the right value. Not every story requires security testing, but you don’t want to omit it because you didn’t think of it. 
The technology-facing and business-facing tests that drive development are central to agile development, whether or not you actually write task cards for them. 
A combination of tests from all four quadrants will let the team know when each feature has met the customer’s criteria for functionality and quality. 
No matter what resources have to be brought in from outside the development team, the team is still responsible for getting all four quadrantsof testing done. 
We believe that a successful team is one where everybody participates in the crafting of the product and that everyone shares the team’sinternal pain when things go wrong. 
Implementing the practices and tools that enable us to address all four quadrants of testing can be painful at times, but the joy ofimplementing a successful product is worth the effort. 
Technical debt builds up when the development team takes shortcuts, hacks in quick fixes, or skips writing or automating tests because it’sunder the gun. 
The code base gets harder and harder to maintain. Like financial debt, “interest” compounds in the form of higher maintenance costs and lower team velocity. Programmers are afraid to make any changes, much less attempt refactoring to improve the code, for fear of breaking it.Sometimes this fear exists because they can’t understand the coding to start with, and sometimes it is because there are no tests to catchmistakes. 
However, we need to bear in mind that each organization, product, and team has its own unique situation, and each needs to do what works for it in its individual situation. 
A single product or project’s needs might evolve drastically over time. 
www.context-driven-testing.com                               
check it out                                                 
Without a foundation of test-driven design, automated unit and component tests, and a continuous integration process to run the tests, it’shard to deliver value in a timely manner. 
Unit tests and component tests ensure quality by helping the programmer understand exactly what the code needs to do, and by providing guidance in the right design. 
They help the team to focus on the story that’s being delivered and to take the simplest approach that will work. 
Unit tests verify the behavior of parts as small as a single object or method [Meszaros, 2007]. Component tests help solidify the overall design of a deployable part of the system by testing the interaction between classes or methods. 
She can pair with a tester to help make sure all aspects of that piece of code, and its communication with other units, are tested. 
The term test-driven development misleads practitioners who don’t understand that it’s more about design than testing. 
Code developed test-first is naturally designed for testability. 
When post-development testing time is occupied with finding and fixing bugs that could have been detected by programmer tests, there’s no timeto find the serious issues that might adversely affect the business. 
The more bugs that leak out of our coding process, the slower our delivery will be, and in the end, it is the quality that will suffer. 
Solid source code control, configuration management, and continuous integration are essential to getting value from programmer tests that guide development. 
Continuous integration saves time and motivates each programmer to run the tests before checking in the new code. 
The development cycles are shorter, but code is still being thrown “over the wall” to testers who run out of time to test because the code isof poor quality. 
Speed should never be the end goal of an agile development team. Trying to do things fast and meet tight deadlines without thinking about the quality causes us to cut corners and revert to old, bad habits. 
Happily, though, speed is a long-term side effect of producing code with the highest possible internal quality. 
A safety net of automated unit and code integration tests enables the programmers to refactor frequently. 
You might find so many bugs while testing the “happy path” that you never have time to test more complex scenarios and edge cases. 
Driving coding practices with tests means that the programmers probably understood the story’s requirements reasonably well. 
If we find a defect, we show it to the programmer, who writes a unit test to reproduce the bug and then fixes it quickly. 
After a development team has mastered TDD, the focus for improvement shifts from bug prevention to figuring out better ways to elicit andcapture requirements before coding. 
test-first development merely says that the tests are written before the production code; it does not imply that the production code is made to work one test at a time 
Writing tests and writing code with those tests in mind means programmers are always consciously making code testable. 
Test-driven development means that programmers will write each test before they write the code to make it pass. 
Writing “testable code” is a simple concept, but it’s not an easy task, especially if you’re working on old code that has no automated testsand isn’t designed for testability. 
common approach in designing a testable architecture is to separate the different layers that perform different functions in the application. 
“create your application to work without either a UI or a database so you can run automated regression tests against the application, work when the database becomes unavailable, and link applications together without any user involvement.” 
It’s hard to write unit tests for code that isn’t designed for testability, and it’s hard to change code that isn’t safeguarded with unittests. 
New stories were coded test-first in a new architecture while the old system was still maintained. Over time, much of the system has been converted to the new architecture, with the goal of eventually doing away with the old system. 
Teams should take time to consider how they can create an architecture that will make automated tests easy to create, inexpensive to maintain,and long-lived. 
Don’t be afraid to revisit the architecture if automated tests don’t return enough value for the investment in them. 
Lisa’s                                                       
example of automation and ci                                 
Regression bugs will be caught early, when they’re cheapest to fix. 
business-facing tests might cover a bit of the same ground as unit or code integration tests, but they have such different purposes that waste isn’t a worry. 
Each unit test is independent and tests one dimension at a time. This means that when a unit test fails, the programmer can identify theproblem quickly and solve the issue just as quickly. 
Push tests to lower levels whenever possible; if you identify a test case that can be automated at the unit level, that’s almost always abetter return on investment. 
if we aren’t programmers ourselves, we don’t necessarily have much credibility when we urge the programmers to adopt practices such as TDD. 
TDD is really more of a design activity, it’s essential that the person writing the code also write the tests, before writing the code. 
Fearless Change                                              
look for it                                                  
When I wanted my team to start using FitNesse, I identified the programmer who was most sympathetic to my cause and asked him to pair with meto write FitNesse tests for the story he was working on. 
Work with the product owner to make quality your goal, and communicate the quality criteria to the team. 
Encourage the programmers to take time to do their best work instead of worrying about meeting a deadline. 
Your job is to explain to the business managers how making quality a priority will ensure that they get optimum business value. 
Budget time for major refactoring, for brainstorming about the best approach to writing unit and code integration tests, and for evaluating,installing, and upgrading tools. 
At the retrospective, raise issues that are hampering successful delivery. For example, “We aren’t finishing testing tasks before the end ofthe iteration” is a problem for the whole team to address. If one reason for not finishing is the high number of unit-level bugs, suggest experimenting with TDD, but allow programmers to propose their own ways to address the problem. 
If the team isn’t doing an adequate job with the tests in this quadrant, the other types of testing will be much more difficult. This doesn’t mean you can’t get value from the other quadrants on their own—it just means it will be harder to do so because the team’s code will lack internal quality and everything will take longer. 
When you label or tag a build, make sure you label or tag the test code too, even if it doesn’t get released to production. 
integrate code changes from different programmers, run the unit tests to verify no regression bugs have occurred, and provide the code in a deployable format. 
manage the build but also provide easy ways to report and document build results, and they integrate easily with build automation and testtools. 
Without an automated build process you’ll have a hard time deploying code for testing as well as releasing. 
GUI code can and should be developed test-first as well.     
That’s not much information, and it’s not meant to be. Stories are a brief description of desired functionality and an aid to planning and prioritizing work. 
the customer team and development team strike up a conversation based on the story. The team needs requirements of some kind, and they needthem at a level that will let them start writing working code almost immediately. To do this, we need examples to turn into tests that willconfirm what the customer really wants. 
These tests help provide the big picture and enough details to guide coding. Business-facing tests express requirements based on examples anduse a language and format that both the customer and development teams can understand. 
The business-facing tests in Quadrant 2 are written for each story before coding is started, because they help the team understand what code to write. 
Quadrant 2 tests define and verify external quality, and help us know when we’re done. 
The customer tests to drive coding are generally written in an executable format, and automated, so that team members can run the tests asoften as they like in order to see if the functionality works as desired. These tests, or some subset of them, will become part of an automated regression suite so that future development doesn’t unintentionally change system behavior. 
As we discuss the stories and examples of desired behavior, we must also define nonfunctional requirements such as performance, security, and usability. 
It’s helpful if some members of the technical team can participate in story-writing sessions so that they can have input into the functionality stories and help ensure that technical stories are included as part of the backlog. 
Stories by themselves don’t give much detail about the desired functionality. They’re usually just a sentence that expresses who wants the feature, what the feature is, and why they want it. 
Stories are only intended as a starting point for an ongoing dialogue between business experts and the development team. 
If team members understand what problem the customer is trying to solve, they can suggest alternatives that might be simpler to use and implement. 
agile teams expand on stories until they have enough information to write appropriate code. 
These tests guide programmers as they write the code and help the team know when it has met the customers’ conditions of satisfaction. 
In agile development, we accept that we’ll never understand all of the requirements for a story ahead of time. 
Requirements changes are pretty much inevitable.             
We can also use our tests to provide a common language that’s understood by both the development team and the business experts. 
life examples of desired and undesired behavior can be expressed so that they’re understood by both the business and technical sides. 
The tests need to be written in a way that’s comprehensible to a business user reading them yet still executable by the technical team. 
Business-facing tests also help define scope, so that everyone knows what is part of the story and what isn’t. 
Worst-case scenarios tend to generate ideas. They also help us consider risk and focus our tests on critical areas. Another good question is,“What’s the best thing that could happen?” This question usually generates our happy path test, but it might also uncover some hidden assumptions. 
Most importantly, ask the customer to give you examples of how the feature should work. 
Our challenge is to capture examples, which might be expressed in the business domain language, as tests that can actually be executed. 
Each example or test has one point of view. Different people will write different tests or examples from their unique perspectives. We’d liketo capture as many different viewpoints as we can, so think about your users. 
Close, constant collaboration between the customer team and the developer team is key to obtaining examples on which to base customer teststhat drive coding. 
If we get several different versions of how a piece of functionality should work, we won’t know what to code. Let’s consider ways to get customers to agree on the conditions of satisfaction for each story. 
A Product Owner is a role in Scrum. He’s responsible not only for achieving advance clarity but also for acting as the “customerrepresentative” in prioritizing stories. 
Your development team can’t successfully deliver what the business wants unless conditions of satisfaction for a story are agreed to up front. 
It’s easy to lose track of the big picture when we’re focusing on a small number of stories in each iteration. 
make a list of all of the parts of the system that might be affected by a story. 
Take time to identify the central value each story provides and figure out an incremental approach to developing it. Plan small increments of writing tests, writing code, and testing the code some more. This way, your Quadrant 2 tests ensure you’ll deliver the minimum value as planned. 
Have the product owner and other interested stakeholders explain the stories. You might find that some stories need to be subdivided or that additional stories need to be written to fill in gaps. 
A smart incremental approach to writing customer tests that guide development is to start with the “thin slice” that follows a happy path from one end to the other. 
The sooner you can build the end-to-end path, the sooner you can do meaningful testing, get feedback, start automating tests, and start exploratory testing. 
Finishing stories a small step at a time helps spread out the testing effort so that it doesn’t get pushed to the end of the iteration. 
They start with the happy path and show that the story meets the intended need. They cover various user scenarios and ensure that other partsof the system aren’t adversely affected. 
When the tests all pass and any missed requirements have been identified, we are done for the purpose of supporting the programmers in their quest for code that does the “right thing.” 
Driving development with tests doesn’t mean we’ll identify every single requirement up front or be able to predict perfectly when we’re done. 
Coding to predefined tests doesn’t work well if the tests are for improbable edge cases. While we don’t want to test only the happy path, it’sa good place to start. After the happy path is known, we can define the highest risk scenarios—cases that not only have a bad outcome but alsohave a good possibility of happening. 
We might need to test the entire life cycle of the account. We don’t have time to test more than necessary, so decisions about what to test are critical. The right tests help us mitigate the risk brought by the change. 
Always consider how each individual story impacts other parts of the system. Use realistic test data, use concrete examples as the basis ofyour tests, and have a lot of whiteboard discussions (or their virtual equivalent) in order to make sure everyone understands the story. 
For example, many of the most serious issues are usually uncovered during manual exploratory testing. Performance, security, stability, and usability are also sources of risk. 
When programmers on an agile team get ready to do test-driven development, they use the business-facing tests for the story in order to knowwhat to code. 
They need to be clearly understood, easy to run, and provide quick feedback; otherwise, they won’t get used. 
Inexperienced agile teams might accept the need to drive coding with automated tests at the developer test level more easily than at thecustomer test level. However, without the customer tests, the programmers have a much harder time knowing what unit tests to write. 
Teams that automate only technology-facing tests find that they can have bug-free code that doesn’t do what the customer wants. Teams thatdon’t automate any tests will anchor themselves with technical debt. 
“role, function, business value” pattern for user stories that Mike Cohn describes in User Stories Applied, as in: As a (role), I want(function) so that (business value). 
Lean development teaches us to avoid waste while we develop software. 
The big difference in agile development is that we create and discuss the mock-ups just as we’re about to start writing the code, rather than weeks or months beforehand. 
In agile development, we create these diagrams as we’re about to start writing tests and code. 
because they use a more natural language for specifying the tests. 
with a focus on the domain rather than on the technology,    
Instead of the word “test” or “assert,” BDD uses the word “should.” By thinking in terms of behavior, it’s natural to write specificationsahead of code. Test specifications use a domain-specific language to provide tests that customers can read but that can also be easilyautomated. 
This line of code describes behavior in a more literal manner too—the code uses a normal everyday phrase like shouldBe, which is distinctly different than the previously written assertEquals. 
This is a fundamental point of the notion of behavior-driven development, which strives to more appropriately validate a software system by thinking in terms of the term “should” rather than test. 
behavior-driven development converges on the idea of executable documentation. Indeed, through leveraging a stakeholder’s language, there is a decreased impedance mismatch between what he wants and what he ultimately receives; 
facilitates a deeper level of collaboration between all parties. 
By leveraging the customer’s language, the customer has the ability to collaboratively facilitate in validating the system he or she wantsbuilt. 
there is a direct link between what stakeholders ask for and what they receive. 
executable documentation using a domain-specific language that everyone on both the customer and developer teams understands. 
The goal of business-facing tests that support the team is to promote communication and collaboration between customers and developers, and to enable teams to deliver real value in each iteration. 
manual exploratory testing that helps us learn about the functionality and provides immediate feedback gets pretty tedious and slow without any assistance from automation. 
Making tests easy for testers and customers to write, while keeping the automation framework designed for optimum maintainability, reduced the total cost of ownership of the tests. 
Implementing a new test automation tool usually requires some experimentation to get a good balance of testable code and well-designed test scripts. Involving the whole team makes this much easier. 
“home-brewed” for the tools agile teams create to meet their own unique testing needs. 
Make sure the most obvious use case is working first. Write a simple, happy path automated test to show the code accomplishes the most basic task that it should. After that test passes, you can start getting more creative. Writing the business-facing tests is an iterative process. 
Discussing the test often leads the programmer to realize he missed or misunderstood a requirement. 
Confine each test to one business rule or condition.         
After a test passes, it shouldn’t fail unless the requirements were changed. If that happens, the test should be updated before the code is altered. 
Whenever a test fails in a continuous integration and build process, the team’s highest priority (other than a critical production problem)should be to get the build passing again. 
We want our regression suite to run in a timely manner, and having too many tests for edge cases would slow it down. 
Testing with data in a real database can be a means of automating a test against legacy code whose data access and business logic layers aren’t easily separated. 
Finding the right pattern for each type of test ensures the test communicates clearly, is easy to maintain, and runs in an optimal amount of time. 
Bring programmers and testers together to brainstorm test approaches and to help decide what tests can be automated and how the code should be designed to support testing. 
Business logic and algorithms should be accessible by test fixtures, without having to go through a user interface or batch scheduling process. 
Data-driven testing is a tool that can help reduce test maintenance and enable you to share your test automation with manual testers. 
Keyword-driven testing is another tool used in automated testing, where predefined keywords are used to define actions. These actionscorrespond to a process related to the application. 
Business-facing tests built with appropriate design patterns and written ahead of any coding help the team achieve a testable code design. 
Not all code is testable using automation, but work with the programmers to find alternative solutions to your problems. 
Coding and testing are part of one process in agile development. 
You can’t write tests without a testable code design, and you can’t write code without well-designed tests that clearly communicaterequirements and are compatible with the system architecture. 
This is why we always consider coding and testing together. When we estimate stories, we include time for both coding and testing, and when we plan each iteration and story, we budget time to design both tests and code. 
We’ve assumed that at least a good-sized portion of the tests that guide programming will be automated. 
You might come up with one-off tests that are important to do but not important to repeat over and over in a regression suite. 
We want some way for all tests, even those that won’t be automated, to be accessible to everyone on the development team and understandable to our customers. 
business-facing tests are those you could describe in terms that would (or should) be of interest to a business expert. 
We recommend showing customers what you’re developing early and often. 
The incremental and iterative nature of agile development gives you a chance to demonstrate business value as you produce it, even before you release it. 
When testing different scenarios, both the data and the flow need to be realistic. 
and it enables you to go beyond the obvious variations that have already been tested. 
Exploratory testing is not a means of evaluating the software through exhaustive testing. It is meant to add another dimension to your testing. 
simultaneous test design, test execution, and learning.”     
Upon receiving new builds, the exploratory tester would tend to deemphasize repetition and emphasize variation in order to discover problems missed by older tests that are no longer revealing interesting information. 
Exploratory testing is characterized by the degree to which the tester is under her own control, making informed choices about what he or sheis going to do next, and where the last outcome of the last activity consciously informs the next choice. 
Good exploration requires continuous investigation of the product by engaged human testers, in collaboration with the rest of the project community, rather than following a procedurally structured approach, performed exclusively by automation. 
Exploration emphasizes individuals and interactions over processes and tools. 
Exploratory approaches use variation to drive an active search for problems instead of scripted manual or automated test cases that merely confirm what we already knew. 
And to be effective, good exploration requires frequent feedback between testers, developers, customers, and the rest of the project community,not merely repetition of tests that were prepared at the beginning of the iteration, before we had learned important things about the project. 
People unfamiliar with exploratory testing often confuse it with ad hoc testing. Exploratory testing isn’t sitting down at a keyboard andtyping away. 
Exploratory testing starts with a charter of what aspects of the functionality will be explored. It requires critical thinking, interpretingthe results, and comparing them to expectations or similar systems. 
Following “smells” when testing is an important component. Testers take notes during their exploratory testing sessions so that they can reproduce any issues they see and do more investigation as needed. 
Exploratory testing uses the tester’s understanding of the system, along with critical thinking, to define focused, experimental “tests” which can be run in short time frames and then fed back into the test planning process. 
Starting early in each development cycle, consider exploratory tests based on: • Risk (analysis): The critical things you and the customer/user think can go wrong or be potential problems that will make people unhappy. • Models (mental or otherwise) of how software should behave: You and/or the customer have a great expectation about what the newly produced function should do or look like, so you test that. • Past experience: Think about how similar systems have failed (or succeeded) in predictable patterns that can be refined into a test, and explore it.• What your development team is telling you: Talk to your developers and find out what “is important to us.” • Most importantly: What you learn(see and observe) as you test. As a tester on an agile team, a big part of your job is to constantly learn about your product, your team, andyour customer. As you learn, you should quickly see tests based on such things as customer needs, common mistakes the team seems to be making,or good/bad characteristics of the product. 
Some tests might be good candidates for automated regression suites. Some might just answer your exploratory charter and be “done.” The agileteam must critically think about what they are learning and “evolve” tests accordingly. 
Use automation for what it is good at (repetitive tasks) and use agile humans for what we are good at (seeing, thinking, and dealing with theunexpected). 
Each type of testing feeds into the other.                   
Too often as testers, we can go off track and end up chasing a bug that might or might not be important to what we are currently testing. 
Use automation to do test set up, data generation, repetitive tasks, or to progress along a workflow to the place you want to start. Then youstart using your testing skills and experience to find the really “good” bugs, the insidious ones that otherwise escape attention. 
Exploratory testing helps us learn about the behavior of an application. 
One approach to using personas is for your team to invent several different users of your application representing different experience levelsand needs. 
We can test the same scenario as each persona in turn and see what different experiences they might encounter. 
pick a fictional character or famous celebrity and imagine how they would use our application. 
You can also just assume the roles of novice, intermediate, and expert users as you explore the application. 
If your application is custom-built for specific types of users, it might need to be “smart” rather than intuitive. 
If a user has a choice of applications or websites, and has a bad first experience, they likely won’t use your application again. 
You can start with mock-ups and flows drawn on paper, get opinions, and try HTML mock-ups next, to get early feedback. 
If you can get access to competing software, take some time to research how those applications work and compare them with your product. 
An API (application programming interface) is a collection of functions that can be executed by other software applications or components. 
The more complicated testing patterns occur when the parameters work together to give many possible variations. Sometimes parameters areoptional, so it’s important that you understand the possibilities. 
Boundary conditions should be considered as well, for both the inputs and expected results. For example, use both valid and invalid strings forparameters, vary the content, and vary the length of the strings’ input. 
Changing the sequence might produce unexpected results and reveal bugs that would never be found through UI testing. 
We tested about 100 variations of both valid and invalid data. 
We didn’t keep all of these tests in the regression suite because they were just a means of quickly trying every combination we could think 
Valuable exploratory testing of APIs is possible with or without benefit of automation. 
Your testing will need to confirm the quality of service that the external customers expect. 
Make time for exploratory testing to simulate the different ways users might access the web services. 
domain-specific language that encapsulates implementation details “behind the scenes” works well for testing web services. 
As with all other components of the product, your whole team is responsible for the quality of the documentation, and that includes both hardcopy and electronic. 
Your team might do Quadrant 2 tests to support the team as they produce documentation; 
When testing, try out worst-case scenarios, which could eventually become the most common scenario. 
Use mock-ups to help the customers decide on report contents and formatting. Find the “thin slice” or “critical path” in the report, code thatfirst, and show it to your customer before you add the next slice. Incremental development works as well with reports as it does with othersoftware. 
Some of the best testing happens because a person is paying attention to details that often get missed if we are following a script. 
Tools shouldn’t replace human interaction; they should enhance the experience. 
Computers are good at doing repetitive tasks and performing calculations. These are two areas where they are much better than humans, so let’suse them for those tasks. 
We’ve found that one of the most time-consuming tasks is the test setup and getting to the right starting point for your actual test. If 
Automated functional test scripts can be run to set up data and scenarios to launch exploratory testing sessions. 
Many error messages are never displayed on the screen, so if you’re testing via the GUI, you never see them. Get familiar with tools likethese, because they can make your testing more effective and efficient. 
When testing this application, it is better for both the programmers and the testers to test various devices as early as possible. 
As you plan your releases and iterations, think about the types of tools that might help with creating production-like test scenarios. 
Driving development with tests is critical to any project’s success. 
we humans won’t always get all of the requirements for desired system behavior entirely correct. Our business experts themselves can missimportant aspects of functionality or interaction with other parts of the system when they provide examples of how a feature should work. 
After the code is written, we are no longer driving the development but are looking at ways to critique the product. 
The technology-facing tests that critique the product are more concerned with the nonfunctional requirements than the functional ones. 
We worry about deficiencies in the product from a technical point of view. Rather than using the business domain language, we describerequirements using a programming domain vocabulary. 
Nonfunctional requirements include configuration issues, security, performance, memory management, the “ilities” (e.g., reliability,interoperability, and scalability), recovery, and even data conversion. 
Our customer should think about all of the quality attributes and factors that are important and make informed trade-offs. However, manycustomers focus on the business side of the application and don’t understand the criticality of many nonfunctional requirements in their roleof helping to define the level of quality needed for the product. They might assume that the development team will just take care of issuessuch as performance, reliability, and security. 
We believe that the development team has a responsibility to explain the consequences of not addressing these nonfunctional or cross-functionalrequirements. 
However, when you are planning your project, you should think about the risks in each of these areas, address them in your test plan, andinclude the tools and resources needed for testing them in your project plan. 
My theory is that it’s because agile development is driven by customers, from user stories. Customers simply assume that software will bedesigned to properly accommodate the potential load, at a reasonable rate of performance. 
“How many concurrent users should the application support?” and “What’s the average response time required?” 
All of the agile literature talks about teams being generalists; anyone should be able to pick up a task and do it. We know that isn’t alwayspractical, but the idea is to be able to share the knowledge so that people don’t become silos of information. 
We’re not talking about security within an application, such as who has access rights to administer it. Because that type of security is reallypart of the functional requirements and will be covered by regular stories, verifying that it works falls within the first three quadrants.We’re talking about probing for external security flaws and knowing the types of vulnerabilities in systems that hackers exploit. 
When teams understand the priority of qualities such as performance and reliability, they figure out how to improve their code to ensure them. 
PSR testing is a combination of math, science, analysis, programming, and problem solving. 
PSR testing is really just telling me “How fast?” (performance), “How long?” (stability), “How often?” (reliability), and “How much?”(scalability). So, as long as the awareness is there and the organization is seriously asking those questions with everything they develop,then PSR testing is successfully integrated into a team. 
Regardless of whether or not your team brings in additional resources for these types of tests, your team is still responsible for making surethe minimum testing is done. 
Just because this is the fourth out of four agile testing quadrants doesn’t mean these tests come last. Your team needs to think about when todo performance, security, and “ility” tests so that you ensure your product delivers the right business value. 
As with functional testing, the sooner technology-facing tests that support the team are completed, the cheaper it is to fix any issues thatare found. However, many of the cross-functional tests are expensive and hard to do in small chunks. 
“As user Abby, I need to retrieve report X in less than 20 seconds so that I can make a decision quickly.” 
You should be able to create a performance test that can be run and continue to run as you add more and more functionality to the workflow. 
For many applications, correct functionality is irrelevant without the necessary performance. 
The time to think about your nonfunctional tests is during release or theme planning. Plan to start early, tackling small increments as needed. 
In the rush to deliver functionality, both business experts and development teams in newly started organizations may not be thinking ofsecurity first. They just want to get some software working so they can do business. 
Testers who are skilled in security testing can perform security risk-based testing, which is driven by analyzing the architectural risk,attack patterns, or abuse and misuse cases. 
As a security tester, you need to have the same mind-set that attackers do, which means that you have to use your creativity in discovering andexploiting vulnerabilities in your own application. 
As with any automated testing effort, running these tools is no guarantee that your code and your application will be free of security defects. 
Agile teams often use pair programming,                      
We encourage development teams to develop standards and guidelines that they follow for application code, the test frameworks, and the teststhemselves. 
The kinds of standards we mean include naming conventions for method names or test names. All guidelines should be simple to follow and makemaintainability easier. 
Standards for developing the GUI also make the application more testable and maintainable, because testers know what to expect and don’t needto wonder whether a behavior is right or wrong. 
Simple standards such as, “Use names for all GUI objects rather than defaulting to the computer assigned identifier” or “You cannot have twofields with the same name on a page” help the team achieve a level where the code is maintainable, as are the automated tests that providecoverage for it. 
Maintainable code supports shared code ownership.            
Interoperability testing looks at end-to-end functionality between two or more communicating systems. 
The API you develop for your system might enable your users to easily set up a framework for them to test easily. Easier testing for yourcustomer makes for faster acceptance. 
Consider all of the systems with which yours needs to communicate, and make sure you plan ahead to have an appropriate environment for testingthem together. 
When you start a new theme or project, think about the resources you might need to verify compatibility. 
Make sure your team gets information on your end users’ hardware, operating systems, browsers, and versions of each. 
Reliability of software can be referred to as the ability of a system to perform and maintain its functions in routine circumstances as well asunexpected circumstances. 
To do a reliability test, we simply need to use those same tests and run them over and over. Ideally, you would use statistics gathered thatshow daily usage, create a script that mirrors the usage, and run it on a stable build for however long your team thinks is adequate to provestability. 
You can input random data into the tests to simulate production use and make sure the application doesn’t crash because of invalid inputs. Ofcourse, you might want to mirror peak usage to make sure that it handles busy times as well. 
Running a thousand tests without any serious problems doesn’t mean you have reliable software. You have to run the right tests. 
To make a reliability test effective, think about your application and how it is used all day, every day, over a period of time. 
Ask the customer team for their reliability criteria in the form of measurable goals. 
Driving development with the right programmer and customer tests should enhance the application’s reliability, because this usually leads tobetter design and fewer defects. 
This means that a build is ready for testing anytime during the day. 
Whatever “ility” you need to test, use an incremental approach. Start by eliciting the customer team’s requirements and examples of theirobjectives for that particular area of quality. 
Write business-facing tests to make sure the code is designed to meet those goals. 
The next step might be to create a suitable test environment, to research tools, or to start with some manual tests. 
Scalability testing verifies the application remains reliable when more users are added. What that really means is, “Can your system handle thecapacity of a growing customer base?” 
Ideally, the organization would have replaced the old system before it was an issue. This is an example of why it is important to understandyour system and its capability, as well as future growth projections. 
Load testing evaluates system behavior as more and more users access the system at the same time. Stress testing evaluates the robustness ofthe application under higher-than-expected loads. 
you don’t know where you want to go in terms of the system, then it matters little which direction you take (remember Alice and the CheshireCat?).” 
Performance tuning can turn into a big project, so it is essential to provide a baseline that you can compare against new versions of thesoftware on performance. 
For accurate results, tests need to be run on equipment that is similar to that of production. 
You should be aware of memory usage and watch for leaks, because they can cause catastrophic failures when the application is in productionduring peak usage. 
Your team can evaluate what tests it needs from this quadrant. Talk about these tests as you plan your release; you can create a test planspecifically for performance and load if you’ve not done it before. 
Every time they touched a piece of code in the legacy system, they added unit tests and refactored the code as necessary. 
Gradually, the legacy system became more stable and was able to withstand major refactoring when it was needed. 
The team found that examples helped clarify the expectations for many of the stories. 
These acceptance tests served three purposes. They were business-facing tests that supported development because they were given to the teambefore coding started. Secondly, they were used by the test team as the basis of automation that fed into the regression suite and providedfuture ideas for exploratory testing. The third purpose was to confirm that the implementation met the needs of the customer. The productengineer did this solution verification. 
Classes written in Ruby contained code that could perform certain functions in the AUT, 
For example, the log-in class didn’t know what username to log in with. 
Quadrant 2 tests that support the team may incorporate a variety of technologies, as they did in this project. 
The team performed exploratory testing to supplement the automated test suites and get the best coverage possible. This human interaction withthe system found issues that automation didn’t find. 
Use the quadrants to help identify all of the different types of testing that will be needed and when they should be performed. 
Invest in a test architecture that accommodates the complexity of the system under test. 
For each type of test, your team should work together to choose tools that solve your testing problems. 
Test automation is a core agile practice. Agile projects depend on automation. Good-enough automation frees the team to deliver high-qualitycode frequently. 
The most basic reason a team wants to automate is that it simply takes too long to complete all of the necessary testing manually. 
Agile teams are able to deliver production-ready software at the end of each short iteration by having production-ready software every day. 
If you execute your regression testing manually, it takes more and more time testing every day, every iteration. 
the testers will probably spend much of their time researching, trying to reproduce and report those simple bugs, and less time findingpotentially serious system level bugs. 
code design is more likely to be less testable and may not provide the functionality desired by the business. 
Setting up data for a variety of complex scenarios can be an overwhelming task if you have no automated way to speed it up. 
Manual testing gets repetitive, especially if you’re following scripted tests, and manual tests get boring very quickly. 
Because manual testing is slow, you might still be testing at midnight on the last day of the iteration. How many bugs will you notice then? 
Having continual builds run all of the unit tests and the functional regression tests means more time to do interesting exploratory testing. 
Automating the setup for exploratory tests means even more time to probe into potentially weak parts of the system. 
Automating tests can actually help with consistency across the application. 
Projects succeed when good people are free to do their best work. 
Knowing the code has sufficient coverage by automated regression tests gives a great feeling of confidence. 
a change might produce an unexpected effect, but we’ll know about it within a matter of minutes 
Teams that have good coverage from automated regression tests can make changes to the code fearlessly. 
The tests will tell them right away whether or not they broke anything. They can go lots faster than teams relying exclusively on manualtesting. 
After an automated test for a piece of functionality passes, it must continue to pass until the functionality is intentionally changed. 
Running an automated suite of tests every time new code is checked in helps ensure that regression bugs will be caught quickly. 
Quick feedback means the change is still fresh in some programmer’s mind, so troubleshooting will go more quickly than if the bug weren’t founduntil some testing phase weeks later. 
Failing fast means bugs are cheaper to fix.                  
having an automation framework in place enabled us to start focusing on doing a better job of capturing requirements in up-front tests. 
The team also doesn’t accrue too much technical debt, and their velocity is bound to be stable or even increase over time. 
When tests that illustrate examples of desired behavior are automated, they become “living” documentation of how the system actually works. 
They get into the mode of fixing the “bug of the day,” instead of looking at the root cause of the bug and redesigning the code accordingly. 
Education is the key to getting programmers and the rest of the team to understand the importance of automation. 
Poor practices produce tests that are hard to understand and maintain, and may produce hard-to-interpret results or false failures that taketime to research. 
You want to automate tests so you can refactor some of the legacy code, but the legacy code isn’t designed for testability, so it is hard toautomate tests even at the unit level. 
The agile whole-team approach is the foundation to overcoming automation challenges. 
development is oriented more toward design than testing, so business-facing tests may still not enter their consciousness. 
Getting the whole team involved in test automation may be a cultural challenge. 
After a team has mastered the art of TDD, these tests are by far the quickest and least expensive to write. They provide the quickest feedback,too, making them highly valuable. They have the biggest ROI by far of any type of test. 
These are the functional tests that verify that we are “building the right thing.” 
These tests operate at the API level or “behind the GUI,” testing the functionality directly without going through the GUI. We write test casesthat set up inputs and fixtures that feed the inputs into the production code, accept the outputs, and compare them to expected results. 
We try to write them in a domain-specific language that the customers can understand, so they take more work than unit-level tests. They alsogenerally run more slowly, because each test covers more ground than a unit test and may access the database or other components. 
The top tier represents what should be the smallest automation effort, because the tests generally provide the lowest ROI. 
They are written after the code is completed, and so are usually written to critique the product and go directly to the regression suite. 
Because components of the user interface tend to be changed often, these tests are much more brittle than tests that work at a functional orunit level. 
No matter how many automated tests they have, most systems also need manual testing activities, such as exploratory testing and user acceptancetesting. 
Patrick Wilson-Welsh [2008] adds a descriptive dimension to the test automation pyramid with a “three little pigs” metaphor. 
chek th note later                                           
Most new agile teams don’t start with this shape pyramid—it’s usually inverted, a left-over from previous projects. 
Because tests drive development, the whole team is always designing for maximum testability, and the pyramid can grow to the right shape. 
When programmers can’t run tests quickly at the touch of a button, they may not be motivated enough to run tests at all. 
Any tedious or repetitive task involved in developing software is a candidate for automation. 
Your team needs the immediate feedback from the unit-level tests to stay on 
Peril: Waiting for Tuesday’s                                 
great story                                                  
Most agile teams find an ongoing build longer than eight to ten minutes to be unworkable. 
A fast-running continuous integration and build process gives the greatest ROI of any automation effort. 
If your programmers are using TDD as a mechanism to write their tests, then they are not only creating a great regression suite, but they areusing them to design high-quality, robust code. 
A point about testability here—make sure the programmers name their objects or assign IDs to them. If they rely on system-generatedidentifiers, then every time a new object is added to the page, the IDs will change, requiring changes to the tests. 
Check things like making sure the buttons really work and do what they are supposed to. Don’t try to try to test business functionality. 
Automation isn’t just for testing.                           
If you are constantly setting up your data, automate the process. 
Cleaning up test data is as important as generating it.      
We don’t think you should automate “look and feel” testing, because an automated script can only look for what you tell it to see. 
One major goal of exploratory testing is to learn more about the product by doing, and then use that information to improve future development. 
If a requirement is so obvious that there’s only one way to implement it, and no programmer will ever look at that code later without knowingexactly what it should do, the chances of someone introducing a defect in that code are next to nothing. 
If you feel comfortable that one-time manual testing does the job and that the risk of future failures doesn’t justify automating regressiontests, don’t automate them. 
your decision turns out to be wrong, you’ll get another chance to automate them later. 
Weigh the automation cost against the amount of valuable time eaten up by manually doing the test. If it’s easy to do manually, and automatingwouldn’t be quick, just keep it manual. 
The team members started “strangling” the legacy code by writing all new features in a new test-friendly architecture. They’re graduallyreplacing all of the old code with code written test-first. When they do work on old code to fix bugs, or in the cases where the old code needsupdating, they simply add unit tests for all of the code they change. 
Test automation won’t pay off unless other good development practices are in place. Continuous integration 
Refactoring                                                  
good unit test coverage.                                     
primary reason to write tests is to help guide development.  
Approach automation just as programmers approach coding. Get one small unit of the steel thread working, and then move on to the next. 
Limit the scope of each test case to one test condition or one business rule. 
Avoid dependencies between tests, because they quickly increase complexity and maintenance expense. 
If you have good coverage in your unit and code integration tests, you don’t need to automate as many functional tests. 
If you do automate at the higher levels, don’t go overboard and automate every possible path through the system. You don’t have to keep everyautomated test created during the development phase in the regression suite; consider tradeoffs of build time and the chance of findingdefects. 
Striking a balance isn’t an agile principle, it’s just common sense. You need a good-enough solution right now, but it doesn’t have to beperfect. 
The most important factor is whether your automation tools fit your particular situation right now. 
Find a balance between “It finds the bugs we need to know about and doesn’t cost too much to maintain” and “This is the most elegant and coolsolution we can find.” 
Stay away from recorded scripts, invest in maintainability, and minimize the required GUI testing with a good architecture of the application. 
When everyone on the team collaborates on a test automation solution, there’s a much better chance it’s going to succeed. 
Every so often, step back and take a look at the tools you’re using. Is everyone on the team happy with them? Are you missing problems becauseyou don’t have the right tools? Budget time to explore new tools and see if they might fill gaps or replace a tool that isn’t paying off. 
Don’t expect to be able to deliver much business value if you’re still creating your test infrastructure. 
Concepts such as courage, feedback, simplicity, communication, continuous improvement, and responding to change aren’t just agile ideas—they’requalities that are common to all successful teams. 
The agile maxim of “do the simplest thing that could possibly work” applies to tests as well as code. Keep the test design simple, keep thescope minimal, and use the simplest tool that will do the job. 
Short iterations allow us to experiment with various automation approaches, evaluate results, and change course as quickly as needed. 
Agile development can’t work without automation.             
Solving problems and implementing good solutions takes time. 
We must help our management understand that without enough time to do things the right way, our technical debt will grow, and our velocity willslow. Implementing solutions the “right” way takes time up front but will save time in the long term. 
There is never enough time to go back and fix things.        
Take the time to refactor as you go or you’ll end up with a mess eventually. 
What are the risks? How much will a production problem cost? What are the benefits of releasing a quick hack? How much technical debt will itadd? What’s the long-term return on investment of a solid design supported with automated tests? How will each approach affect companyprofitability and customer satisfaction? What about the intangible costs, such as the effect that doing poor-quality work has on team morale? 
talk to the “rubber ducky”: Imagine you’re describing the problem to a coworker. The process of explaining can often make the cause of theproblem jump into view. Simply reading a test aloud to yourself can help you find the weaknesses in it. 
Any solution that removes enough tedium to let you discover potential issues about the application is worth trying. 
Your first choice for testing should try to have tests that can run completely in-memory. 
A fake object such as an in-memory database lets the test do what it needs to do and still give instant feedback. 
If you’re testing business logic, algorithms, or calculations in code, you’re interested in the behavior of the code itself given certaininputs; you don’t care where the data comes from as long as it accurately represents real data. 
This supports the idea that tests are independent of each other. 
We try to design the tests to keep maintenance costs down.   
Generally, when you’re talking about functional or end-to-end testing, a clone of the production database is most useful for manual exploratorytesting. 
The first step in choosing an automation tool is to make a list of everything the tool needs to do for you. 
Reducing your technical debt and establishing a good testing infrastructure will improve your velocity in the future and free time forexploratory testing. 
Be open to the idea that it might not be right and that you have to throw it out and start over. 
Lower your expectations and open your mind. Creative solutions rely on art as much as science. 
Record/playback scripts are notoriously costly from a maintenance perspective. 
Using a DSL that employs the nouns and verbs of the application allows an engineer writing a test to focus on the test, not the underlyingcomplexity of interacting with on-screen controls. 
Not everything can be automated, because of budgetary or technical reasons. 
Brainstorm ways to cope in the short term, while you plan how to put together the infrastructure you really need to minimize risk, maximizevelocity, and deliver the best possible product. 
Test management systems, like the tests themselves, should promote communication and collaboration among team members and between differentteams. 
Everyone involved with delivering software needs easy access to tests and test results. 
simply keep new tests out of the integration and build process until they pass for the first time. 
Don’t be afraid to get something—anything—in place, even if it’s somewhat deficient. 
If you don’t start somewhere, you’ll never get traction on automation. 
need the right test automation to deliver business value frequently. 
A year or two from now, you’ll wonder why you thought test automation was so hard. 
We’ll show how coding and testing are part of one integrated process of delivering software, 
Over time, variations on individual story sizing will average out, and we find that a theme or related group of stories takes about the amountof time expected. 
“No story is done until it’s tested.”                        
There are many times when a story will have a large testing component, and the coding effort is small. 
The customers prioritize the stories, but there may be dependencies, so it makes sense to do certain stories first, even if they aren’t thehighest priority. 
One of the basic premises of agile is to deliver working software, so it is important to have the highest-value stories completed first so thatthe software we do deliver meets the customer’s needs. 
The team needs to develop in small, testable chunks in order to help decide what stories are tentatively planned for which iteration. 
Agile teams continually manage scope in order to meet business deadlines while preserving quality. 
If you’re using a third-party product as part of your solution, you might assume it has been tested, but that might be a poor assumption. 
If you’ll be working with other teams developing different components of the same system, or related systems, budget time to coordinate withthem. 
Detailed test planning needs to wait for iteration planning. Still, we need to think about testing at a high level, and try to budget enoughtime for it. We might even take time separately from the release planning meeting to strategize our testing for the release. 
During release planning, it’s helpful to know the business conditions of satisfaction for each story or high-level user acceptance test case. 
what’s in scope, and what assumptions we’re making. We do some quick risk analysis and plan our test approach to address those risks. Weconsider automation and what we need for test environments and test data. We certainly want to identify milestones and deliverables. 
For those of you who are starting a brand new project with no previous processes in place, now is the time to consider what testing you willneed. We don’t mean you have to decide how to test each story, but look at the big picture and think about the quadrants. 
If you’re planning your first release, test environments are a key consideration. You might need a story or iteration just to set up theinfrastructure you need. 
because the environment is never stable enough for effective testing. 
Using test data that closely resembles real data is generally a good practice. 
Real data provides a good base for different scenarios for exploratory testing. 
Test data tends to get stale and out of date over time. Older data, even if it came from production, may no longer accurately reflect currentproduction data. 
Understand your needs so that you can choose the approach that is right for your team. 
A test plan should not cover every eventuality or every story, and it is not meant to address traceability. It should be a tool to help youthink about testing risks to your project. 
high-level test matrix can be used by the team to show the customer team or management what has been tested already and what is left. A moredetailed test matrix can be used by the team to show what is planned for testing and track the progress of the testing. 
Test results are one of the most important ways to measure progress, see whether new tests are being written and run for each story, andwhether they’re all passing. 
These metrics should give you continual feedback about how development is proceeding, so that you can respond to unexpected events and changeyour process as needed. Remember, you need to understand what problem you are trying to solve with your metrics so that you can track the rightones. 
If some functionality was missed, your code coverage report will not bring that to light. You might have 80% code coverage with your tests, butyou’re missing 10% of the code you should have. Driving development with tests helps avoid this problem, but don’t value code coveragestatistics more than they deserve. 
Good metrics require some good planning.                     
It doesn’t tell you how good your tests are but only if a certain chunk of code was run during the test. 
Don’t get caught up with committing to your plans—the situation is bound to change. 
Plan for extra testing time and resources when features may affect systems or subsystems developed by outside teams. 
We sure don’t want to spend all our time in meetings, or planning for stories that might be re-prioritized. However, if we can make ouriteration planning go faster, and reduce the risk of the stories we’re about to undertake, it’s worth doing some research and brainstormingbefore we start the iteration. 
After many experiences of misunderstanding stories and having them far exceed estimations, and finding most “bugs” were missed requirements, wedecided to budget time in the iteration to start talking about the next one. 
We found that to go fast, we needed to slow down first.      
A deeper understanding of the feature behavior can speed up testing and coding, and can help make sure you deliver the right functionality. 
Because there are many ways to implement any given story, someone has to decide the specific requirements and capture them in the form ofexamples, conditions of satisfaction, and test cases. 
Help participants stay focused on concrete examples that crystallize the meaning of the stories. 
you’re considering each story from multiple points of view. It helps to know what the story means to people in different roles. 
Sometimes it is important for the whole team to understand the need, and sometimes it is sufficient for one or two of the team members to dothe research. 
We know there will always be discoveries along the way, but if we can catch the big “gotchas” first, that will help the team work aseffectively as possible. 
While agile principles say to collaborate closely with the customer, in some situations you have to be creative and find another way to getclear business requirements. 
This keeps the discussion at a concrete level and is a fast way to learn how the new features should work. 
Ask your customers to write down examples and high-level test cases before the iteration. This can help them think through the stories more andhelp define their conditions of satisfaction. It also helps them identify which features are critical, and which might be able to wait. It alsohelps to define when the story is done and manage expectations among the team. 
Mock-ups are essential for stories involving the UI or a report. Ask your customers to draw up their ideas about how the page should look.Share these ideas with the team. 
Sometimes we have legacy system defects to worry about, and sometimes fixing a defect is just not high enough value for the business to fix. 
Before the next iteration is an ideal time to review outstanding issues with the customer and triage the value of fixing versus leaving them inthe system. Those that are deemed necessary to be fixed should be scheduled into the next iteration. 
When we get small stories to test on a regular basis, we do not have them all finished at once and stacked up at the end of the iterationwaiting to be tested. 
It’s better to address uncertainty early on and then do more research or a spike to get more information. 
When writing programmer task cards, make sure that coding task estimates include time for writing unit tests and for all necessary testing byprogrammers. 
Certainly think about it as you prep for the next iteration. When the iteration starts, whatever test data is missing must be created orobtained, so don’t forget to allow for this in estimates. 
In XP, we can’t exceed the number of story points we completed in the last iteration. In Scrum, we commit to a set of stories based on theactual time we think we need to complete them. 
make sure enough time is allocated to testing, and to remind the team that testing and quality are the responsibility of the whole team. 
When you are looking at stories, and the programmers start to think about implementation, always think how you can test them. 
think about what kind of variations you will need to test.   
When testability is an issue, make it the team’s problem to solve. Teams that start their planning by writing test task cards probably have anadvantage here, because as they think about their testing tasks, they’ll ask how the story can be tested. 
They may include examples of both desired and undesired behavior. 
What’s important as you begin the iteration is that you quickly learn the basic requirements for each story and express them in context in away that works for the whole team. 
They might produce code that’s technically bug-free but doesn’t quite match the customer’s desired functionality. 
The great advantage of having executable tests as part of your requirements document is that it’s hard to argue with their results. 
However, if we’re using tests to guide coding, we have to start with the basics. Write the simplest happy path test you can in order to showthat the core functionality works. 
We’re working on an extremely tight schedule, and neither the programmers nor the testers have time to stop and run manual tests over and over.They do have time to click a button and run an automated test. That test needs to fail in a way that makes the cause as obvious as possible.Ideally, we would give these tests to the programmers so that they could execute them as they code. That is one reason why picking the rightautomation framework is so important. 
However, to be successful in the long run, these tests do need to be automated. 
Get the basics working first. If you think of more cases based on some risk analysis, you can always add extra tests later. 
When disagreements or questions arise, having three different viewpoints is an effective way to make sure you get a good solution and you won’thave to rehash the issue later. 
Be aware that some of what you learn in testing the final story may be considered “nice to have,” 
“Rubber Ducking” and “Thinking Out Loud” are surprisingly effective ways to solve your own problems. 
We want to keep the process as simple as possible; simplicity is a core value. 
Missing some functionality from a release is better than missing the entire release because testing couldn’t be completed on all or moststories. 
We stress testing early in order to catch as many bugs as possible while the programmers are still working on the story. 
The more bugs you can fix immediately, the less technical debt your application generates and the less “defect” inventory you have. 
the cost to fix an error found after product release was four to five times as much as one uncovered during design, and up to 100 times morethan one identified in the maintenance phase 
Janet finds that having both may seem like a duplication of effort, but the visibility of progress to the team far outweighs the extra overheadof writing up the task cards and moving them as they are completed. Having the story board gives your team focus during the stand-ups or whenyou are talking to someone outside the team about your progress. 
Work through as many examples as you need until the team understands enough different aspects of the system. 
We have unit tests for a reason, so whenever one fails, the team’s highest priority (apart from a showstopper production issue) should be tofix it and get the build working again. 
If the build takes longer than the average frequency of code check-ins, builds start to stack up, and testers can’t get the code they need totest. The XP guideline for build time is ten minutes 
Know what problem you are trying to solve before you start measuring data points and going to all the work of analyzing the results. 
Don’t be afraid to stop using metrics when they are no longer useful. 
Janet encourages rotating this honor.                        
Taking time to celebrate successes lets your team take a step back, get a fresh perspective, and renew its energy so it can keep improving yourproduct. 
In agile development, we get a chance to stop and get a new perspective at the end of each short iteration. We can make minor coursecorrections, 
Before we release, we want to make sure all of the deliverables are ready and polished up appropriately. 
Because testing and coding are part of one process in agile development, 
Most teams accumulate some technical debt, despite the best intentions, especially if they’re working with legacy code. 
It’s the time when the team applies the finishing touches to the product. 
and if you have a test integration system, we recommend that you be sure that you have tried to integrate long before the end game. 
If you have identified these risks early and done as much up-front testing as possible, the testing done during the end game should be finalverification only. 
Constant communication between different development team members is always important, but it’s especially critical as we wrap up the release. 
Did the testing needs change, or is the team taking a chance and sacrificing quality to meet a deadline? The team should cut the release scopeif the delivery date is fixed and in jeopardy. 
The customers have the ultimate say in what will work for the business. 
It’s performed by all affected business departments to verify usability of the system and to confirm existing and new (emphasis on new)business functionality of the system. 
If that is the case, then try moving the UAT cycle up to run parallel with your end game. The application should be stable enough so that yourteam could deploy to the customer’s test system at the same time as they deploy to staging. 
Both of us have found it helpful to provide customers involved in doing UAT with a report of all of the testing done during development, alongwith the results. That helps them decide where to focus their own testing. 
Your team will want to get feedback on new features from your real customers, and this is one mechanism for doing so. 
Alpha testing is to get feedback on the features—not to report bugs. 
Beta testing is closer to UAT. It is expected that the release is fairly stable and can actually be used. 
While plans rarely work as expected, planning ahead can still help you make sure the right people are in place to deliver the product in atimely manner. 
Who is accepting the product, and what are their expectations? 
The problem is that the number by itself is just a number, and there are so many reasons why it might be high or low. 
They don’t downgrade the severity of bugs to medium so they can say they achieved the criterion of no high-severity bugs. Instead, theyfrequently look at bug trends and think of ways to ensure that high-severity bugs don’t occur in production. 
Your quality level should be negotiated with your customer up front so that there are no unpleasant surprises. 
If your customer has a very low tolerance for bugs, and 100% of those acceptance tests must be passing, your iteration velocity should takethat into consideration. If new features are more important than bug fixes, well, maybe you will be shipping with bugs. 
“Doneness” includes testing, and testing is often the thing that gets postponed when time is tight. Make sure your success criteria at everylevel includes all of the necessary testing to guide and validate development. 
We must be sure they know what new functionality to expect and that they have some means to deal with problems that arise. 
New releases should be as transparent as possible to the customer. The fewer emergency releases or patches required after a release, the moreconfidence your customer will have in both the product and the development team. 
When testing is a team priority, and anyone can sign up for testing tasks, the team designs testable code. 
Make your problems the team’s problems, and make their problems yours. Ask your teammates to adopt a whole-team approach. 
We don’t mean that you should put on your Super Tester cape and go protect the world from bugs. 
Be courageous in seeking help and experimenting with new ideas. Focus on delivering value. Communicate as directly and as often as possible. Beflexible in responding to change. Remember that agile development is people-centric, and that we should all enjoy our work. 
When you’re faced with problems that impact testing, bring those problems to the team. Ask the team to brainstorm ways to overcome theseobstacles. 
Can an agile team succeed with no test automation? Maybe, but the successful teams that we know rely on automated regression tests. 
Without the short feedback cycle and safety net regression that suites provide, your team will soon become mired in technical debt, with agrowing defect queue and ever-slowing velocity. 
Testers are in a unique position to help provide feedback in the form of automated test results, discoveries made during exploratory testing,and observations of actual users of the system. 
Most agile practices are valuable because they create feedback loops that allow teams to adapt. 
If you don’t have meaningful feedback, then you’re not agile. You’re just in a new form of chaos. 
While we think of these as agile practices, they’ve been around longer than the term “agile development,” and they’re simply core practices ofsuccessful software development. 
Implementing a continuous integration process should be one of the first priorities of any software development team. 
You can’t test productively without a test environment that you control. 
Even good software development teams, feeling time pressure, neglect refactoring or resort to quick fixes and hacks to solve a problem quickly. 
As the code becomes more confusing and hard to maintain, more bugs creep in, and it doesn’t take long before the team’s velocity is consumed bybug fixes and trying to make sense out of the code in order to add new features. 
Businesses need their software development teams to remain consistently productive. They may have to reduce the scope of their desired featuresin order to allow enough time for good, test-guided code design and good practices such as continual small refactoring. 
If a story is tested in the iteration after which it was coded and bugs are found, the programmer has to stop working on the new story,remember how the code worked for the last iteration’s story, fix it, and wait for someone to test the fix. 
There are few facts in software development, but we know for sure that bugs are cheaper to fix the sooner they’re found. 
If your team doesn’t share this view, ask everyone to think about their focus on quality, their desire to deliver the best possible product,and what steps they can take to ensure that the team achieves its goals. 
the combination of multiple agile practices is greater than the sum of the parts. 
It’s easy for everyone on the team to narrowly focus only on the task or story at hand. That’s a drawback of working on small chunks offunctionality at a time. 
the value of any practice depends on its context.            
A legacy system is one that does not have any (or few) automated regression tests. 
Product Backlog is a Scrum term for the prioritized master list of all functionality desired in the product. 
can be defined as actions taken to ensure compliance with a quality standard. 
A regression test verifies that the behavior of the system under test hasn’t changed. 
Regression tests should be automated to ensure continual feedback. 
short description of functionality told from the perspective of the user that is valuable to either the user or the customer team. 
Technical Debt Ward Cunningham first introduced this metaphor. When a team produces software without using good practices such as TDD,continuous integration, and refactoring, it may incur technical debt. Like financial debt, technical debt accrues interest that will cost theteam more at a later date. Sometimes this debt may be worthwhile, such as to take advantage of a sudden business opportunity. Usually, though,technical debt compounds and slows the team’s velocity. Less and less business value can be produced in each iteration because the code lacks asafety net of automated regression tests or has become difficult to understand and maintain. 
an XML format for describing network services as a set of endpoints operating on messages 