---
title: 'Accelerate'
language: 'en-US'
status: 'Reading'
coverPath: 'accelerate'
date: '2021-03-25'
---

# Praise for accelerate

> Whether they recognize it or not, most organization today are in the business of software development in one way, shape, or form. And most are being dragged down by slow lead times, buggy output, and complicated features that add expense and frustrate users. It doesn't need to be this way.

# Foreword by Martin Fowler

> Their evidence refutes the bimodal IT notion that you have to choose between speed and stability - instead, speed depends on stability, so good IT practices gives you both.

# Preface

> improvements in software delivery are possible for every team and in every company, as long as leadership provides consistent support - including time, actions, and resources - demonstrating a true commitment to improvement, and as long as team members commit themselves to work.

> We also found that throughput and stability move together, and that an organization's ability to make software positively impacts profitability, productivity, and market share. We saw that culture and technical practices matter, ...

# Part One - What We Found

## Chapter 1 - Accelerate

> ... they are using small teams that work in short cycles and measure feedback from users to build products and services that delight their customers and rapidly deliver value to their organizations. These high performers are working incessantly to get better at what they do, letting no obstacles stand in their path, even in the face of high levels of risk and uncertainty about how they may achieve their goals.

> DevOps emerged from a small number of organizations facing a wicked problem: how to build secure, resilient, rapidly, evolving distributed systems at scale.

### Focus on capabilities, not maturity

> The key to successful change is measuring and understating the right things with a focus on capabilities - not on maturity.

> ... capabilities are multidimensional and dynamic, allowing different parts if the organization to take a customized approach to improvement, and focus on capabilities that will give them the most benefits.

> capabilities models focus on key outcomes and how the capabilities, or levers, drive improvements in those outcomes - that is, they are outcome based.

> Our own research and data have confirmed that the industry is changing: what is good enough and even "high performing" today is no longer good enough in the next year.

### The value of adopting DevOps

> - 46 times more frequent code deployments
> - 440 times faster lead time from commit to deploy
> - 170 times faster mean time to recover from downtime
> - 5 times lower change failure rate (1/5 as likely for a change to fail)

> High performers understand that they don't have to trade speed for stability or vice versa, because by building quality in they got both.

### My Summary

The initial assumption is that companies need to accelerate their businesses to remain competitive, otherwise, they will fail. In the attempt to transform and accelerate their businesses using software, these high performer companies reached a problem. How to build systems that are scalable, reliable, stable, secure, ..., while maintaining their agility. That's the beginning of the DevOps movement.

Even though there are companies exceeding with DevOps, this is not a true for the whole market. And even for the companies that are part of the movement, there is a disconnection between the leadership and the DevOps practitioners. Meaning the potential for value delivery and business acceleration might be greater than expected.

How to measure the maturity of DevOps?

Four reasons not to use maturity model:

1. Once on mature state, declare the journey done
2. Maturity level is not the same across teams and organizations
3. Maturity model do not measure the outcome. It usually only measures the technical profit.
4. Maturity model do not consider the ever changing nature of IT.

Use capability model:

1. Endless journey. Continually improving and progressing technology and business.
2. Customized approach enabling to focus on key capabilities to achieve the most benefit.
3. Outcome based.
4. Focus on the right capabilities. Never settling for yesterday's accomplishment.

*Which* capabilities to focus varies. But, it's not because of age and technology, because or developers or operations doing deployments.

It's astonishingly to see the gap between high performers that are applying DevOps with those that aren't. It was never about stability or speed. By adding quality in the process you achieve both.

## Chapter 2 - Measuring Performance

> Measuring performance in the domain of software is hard - in part because, unlike manufacturing, the inventory is invisible.

### The flaws in previous attempts to measure performance

> First, they focus on outputs rather than outcome. Second, they focus on individual or local measures rather than team or global ones.

> Ideally, we should reward developers for solving business problems with the minimum amount of code - and it's even better if we can solve a problem without writing code at all or by deleting code ( perhaps by a business process change).

> Velocity is designed to be used as a *capacity planning tool*; for example, it can be used to extrapolate how long it will take the team to complete all the work that has been planned and estimated. However, some managers have also used it as a way to measure team productivity or even to compare teams.

> Since lead time - a measure of how fast work can be completed - is a productivity metric that doesn't suffer from the drawbacks of the other metrics we've seen, it's essential that we manage utilization to balance it against lead time in an economically optional way.

### Measuring software delivery performance

> In our search for measures of delivery performance that meet these criteria, we settled on four: delivery lead time, deployment frequency, time to restore service and change fail rate.

> Lead time is the time it takes to go from a customer making a request being satisfied.

> Strictly, deployment frequency is the reciprocal of batch size - the more frequently we deploy, the smaller the size of the batch.

> Reducing batch sizes reduces cycle times and variability in flow, accelerates feedback, reduces risk and overhead, improves efficiency, increases motivation and urgency, and reduces costs and schedule growth.

> ... in modern software products and services, which are rapidly changing complex systems, failure is inevitable, so the key question becomes: How quickly can service be restored?

> Astonishingly, these results demonstrate that there is no trade-off between improving performance and achieving higher levels of stability and quality. Rather, high performers do better at all of these measures. This is precisely what the Agile and Lean movements predict, but much dogma in our industry still rests on the false assumption that moving faster means trading off against other performance goals, rather than enabling and reinforcing them.

### The impact of delivery performance on organizational performance

> Analysis over several years shoes that high-performing organizations were consistently twice as likely to exceed these goals as low performers. This demonstrates that your organization's software delivery capability can in fact provide a competitive advantage to your business.

> Whatever the mission, how a technology organization performs can predict overall organizational performance.

> The fact that software delivery performance matter provides a strong argument against outsourcing the development of software that is strategic to your business, and instead bringing this capability into the core of your organization.

### My summary

There are tons of frameworks and methodologies that state that they create better software and services. The second chapter tries to establish a scientific definition of what 'good' means in the context software and services, and the processes to create it. After that, they question whether having a  good delivery performance has impact on organizational performance.

Previous measurement of performance focus productivity. And this have two drawbacks:

1. Focus on *outputs* rather than *outcome*
2. Focus on *Individual measures* rather than *global measures*

Examples:

- Lines of code: Rewarding developer for most lines of code is bad, because we would rather have a solution with less lines of code (or even none, improvement in the business process)
- Velocity: It's a *Capacity Planning Tool*. The measures are relative from team to team and eventually teams will try to booster it, which might destroy the collaboration and the ability to use this tool in planning.
- Utilization: High utilization is good until a certain point. The closer to 100% lead time approaches infinity.

Lead time doesn't suffer from the drawbacks above. It's important to balance utilization with lead time.

A successful measure of performance must have two characteristics:

1. Outcome based: Code that helps to achieve business goals
2. Global: Teams are not fighting each other

Their research points to 4 measures of delivery performance:

- Delivery lead time

- Deployment frequency
- Time to restore service
- Change fail rate

#### Lead time

From Lean Theory.

Two parts:

- discovery ( Fuzzy front end ):
  - Hypothesis driven delivery, UX and design thinking
  - Work that has never done before
  - Estimates are highly uncertain
  - Outcomes are highly variable
- delivery: 
  - Flow from development to production. Standardized work.
  - Integration, test, deployment must be performed continually as quick as possible
  - Cycle times are well known and predictable
  - Outcomes should have low variability.

The shorter the better. Faster feedback, and to adapt plans and change more quickly. Important to fix defects.

It's measured as the time from code committed to code successfully running in production. The range in their research vary from "*less than one hour*" to "*more than six months*".

#### Batch size

From Lean Theory.

Because the inventory in software development is invisible they used deployment frequency as a proxy. Meaning that the more frequent you deploy software to production smaller are the batches of the changes.

This metric ranges from "*On demand( multiple deploys per day)*" and "*fewer than once every six months*".

#### Tempo

Is composed by the metrics of delivery lead time and deployment frequency.

#### Time to restore service

Failure is inevitable in modern systems, therefore, the question changes to how quickly can the system be restored to a healthy state?

This metric is measured by the same metrics used in lead time. From "*less than one hour*" to "*more than six months*".

#### Change fail percentage

What is the percentage of changes to production that introduces fail?

The same as the *Percent complete and accurate* in lean.

This metric is measured by the *percentage of changes that cause fail*.

#### No trade-off

The results in the their research achieve by clustering the data shows that there is no trade off between improving performance and achieving higher levels of stability and quality.

High-performance excel in all four of the measurement of delivery performance.

#### Twice as likely

Organization that are high performers on delivery performance are twice as likely to exceed profitability, market share and productivity, which is highly correlated with ROI.

Even for non commercial organization, how technology performs can predict overall organizational performance.

#### Outsourcing

Because, delivery performance impacts on organizational performance, you have a strong argument to avoid outsourcing the development of software that is strategic to your business, most likely this software should be considered a core of your company.

## Chapter 3 - Measuring and Changing Culture

### Modeling and measuring culture

> Organizational culture can exist at three levels in organizations: basic assumptions, values, and artifacts (Schein 1985).

> ... further insight was that the organizational culture predicts the way information flows through an organization.

### Measuring Culture

> First, in organizations with a generative culture, people collaborate more effectively and there is a higher level of trust both across the organization and up and down the hierarchy. Second, "generative culture emphasizes the mission, an emphasis that allows people involved to put aside their personal issues and also the departmental issues that are so evident in bureaucratic organizations. The mission is primary. And third, generativity encourages a 'level playing filed,' in which hierarchy plays less of a role"

> ... the goal of bureaucracy is to "ensure fairness by applying rules to administrative behavior. The rules would be the same for all cases - no one would receive preferential or discriminatory treatment. Not only that, but the rules would represent the best products of the accumulated knowledge of the organization: Formulated by bureaucrats who were experts in their fields, the rules would impose efficient structures and processes while guaranteeing fairness and eliminating arbitrariness".

> Westrum's description of a rule-oriented culture is perhaps best thought of as one where following the rules is considered more important than achieving the mission.

### What does Westrum organizational culture predict?

> Westrum's theory posits that organizations with better information flow function more effectively.

### Consequences of Westrum's theory for technology organizations

> Analysis showed that only lead time, release frequency and time to restore together form a valid and reliable construct.

> Our goal should be to discover how we could improve information flow, or to find better tools to help prevent catastrophic failures following apparently mundane operations.

### How do we change culture?

> What my ... experience taught me that was so powerful was that the way to change culture is not to first change how people think, bu instead to start by changing how people behave - what they do".

> ... implementing the practices of these movements (Lean and agile) can have an effect on culture

### My Summary

This chapter the authors are looking for a scientific definition of culture.

Culture is formed by three levels in organizations:

- Basic assumptions: 
  - Formed over time as members of a group make sens of relationships, events and activities.
  - Least visible. The things we know.
- Values
  - A lens through which group members view and interpret the relationships, events and activities around them.
  - Values establish social norms which impact the interactions and practices
  - More visible than *"Basic assumptions"*.
  - The culture we think of when we talk about the culture of a group of people.
- Artifacts
  - Written mission statements or creeds, technology, formal procedures or even heroes and rituals.
  - The most visible.

Their research choose the Westrum model of culture in the second level (Values).

Westrum describes the following typology of organizational culture:

- Pathological (power-oriented): 
  - Large amount of fear and threat.
  - People hoard information or withhold it for political reasons, or distort it.
- Bureaucratic (rule-oriented):
  - Protect departments.
  - Departments wants to maintain their autonomy and their rules.
- Generative (performance-oriented):
  - Focus on the mission.
  - Everything is subordinated to good performance, to doing what we are supposed to do.

The organizational culture predicts the information flow and performance outcomes.

A good information flow must have 3 characteristics:

1. It provides answers to the questions that the receiver needs answered.
2. It is timely.
3. It is presented in such a way that it can be effectively used by the receiver.

Generative culture enables information processing through 3 mechanisms:

1. Effective collaboration and trust across different layers of the hierarchy
2. Emphasis on the mission to put aside personal or department issues
3. Level playing field. Hierarchy plays less of a role.

In order to a organization culture to impact the information flow there are some requisites:

1. Trust and cooperation between people across the organization
2. Higher quality decision making due to more information available and the ability to easily reverse wrong decisions, since the culture is more transparent and open.
3. The cultural norms are likely to do a better job with people. Problems are more rapidly discovered and improved.

When trying to build a construct they found that the only valid and reliable construct didn't consider *Change fail rate*. So software delivery performance only considers *Delivery lead time*, *Deployment frequency* and *Time to restore*. But, consider that *Change fail rate* is highly correlated with the construct.

Reliability and ability to quickly innovate are two culture characteristics that are connected. These culture characteristics positively impacts software delivery and organizational performance. For example, a company that uses failures to improve their information flow instead of looking for a responsible for the problem are more likely due to their culture to have better software delivery and organizational performance.

At last the authors propose that by applying Lean and agile practices you can change the culture of your organization.

## Chapter 4 - Technical Practices

### What is continuous delivery?

> Continuous delivery is a set of capabilities that enable us to get changes of all kinds - features, configuration changes, bug fixes, experiments - into production or into the hands of users *safely*, *quickly* and *sustainably*.

> A key objective for management is making the state of these system-level outcomes transparent, working with the rest of the organization to set measurable, achievable, time-bound goals for these outcomes, and then helping their teams work toward them.

> Implementing continuous delivery means crating multiple feedback loops to ensure that high-quality software gets delivered to users more frequently and more reliably.

### The impact of continuous delivery

> However, they also have other significant benefits: they help to decrease deployment pain and team burnout.

> By giving developers the tools to detect problems when they occur, the time and resources to invest in their development, and the authority to fix problems straight away, we create an environment where developers accept responsibility for global outcomes such as quality and stability.

> This means that investments in technology are also investments in people, and these investments will make our technology process more sustainable.

### The impact of continuous delivery on quality

> Furthermore, continuous delivery predicts lower levels of unplanned work and rework in a statistically significant way.

> Unplanned work and rework are useful proxies for quality because they represent a failure to build quality into our products.

> ( Analogy to the car with low fuel alert, and running out of gas in the highway) ... the organization can fix the problem in a planned manner, without much urgency or disruption to other scheduled work. In the second case, they must fix the problem in a highly urgent manner, often requiring all hands on deck - for example, have six engineers drop everything ...

> demand for work caused by the failure to do the right thing the first time by improving quality of service we provide.

### Continuous delivery practices: What works and what doesn't

> Too many test suites are flaky and unreliable, producing false positives and negatives - it's worth investing ongoing effort into a suite that is reliable.

> First, the code becomes more testable when developers write tests. This is one of the main reasons why test-driven development (TDD) is an important practice - it forces developers to create more testable designs.

> In our data, successful teams had adequate test data to run their fully automated test suites and could acquire test data for running automated tests on demand.

> We should note that GitHub Flow is sustainable for open source projects whose contributors are not working on a project full time.

### Adopting Continuous Delivery

> A critical obstacle to implementing continuous delivery is enterprise and application architecture.

### My Summary

This chapter demonstrates the impact of technical practices on software delivery performance, organizational culture, team burnout and deployment pain.

Continuous delivery is a set of practices that enable us to ship code into production quick,  safely and sustainably. Continuous delivery creates several feedback loops to ensure shipped code is high-quality and reliable.

CD Practices are Version control, Deployment automation, Continuous integration, Trunk-based development, Test automation, Test data management, Shift left on security, Loosely coupled architecture, Empowered teams, Monitoring, Proactive notification.

The 5 key principles of continuous delivery:

- Build quality in:
  - We invest in building a cultured supported by people and tools that can detect and fix issues quickly and cheaply.
- Work in small batches:
  -  Smaller chunks provide faster feedback.
  - It's easier to adapt the plans.
  - Avoid delivering zero or non value items.
- Computers perform repetitive tasks; people solve problems:
  - Automate repetitive work to reduce cost and errors
  - Free people to higher value tasks
- Relentlessly pursue continuous improvement:
  - Continuous improvement
- Everyone is responsible:
  - Close collaboration and everyone involved in the software delivery process

In order to create Continuous delivery, we must build this foundation:

- Comprehensive configuration management:
  - Infrastructure as a code
  - Config, the 3rd principle of the Twelve-factor app
- Continuous integration (CI):
  - short lived feature branches or trunk based development
  - Pipelines that ensure code quality and project standard
- Continuous testing:
  - Test as integral part of development
  - High amount of test automation 
  - Testers doing exploratory testing

Their research shows that Continuous Delivery capabilities have the following outcomes:

- A strong positive impact on software delivery performance, which leads to organizational performance.
- Reduces the deployment pain and team burnout.
- Stronger identification with the organization.
- A generative, performance-oriented, culture.
- Lower change fail rate ( Less rework )

With those outcomes we can also conclude that investing in technology is investing in people. And, applying CD can also be linked to the agile manifest principle: "*Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely*".

Then the authors also answer the question *whether CD increases quality*. And the answer is also yes. Not only by reducing the change fail rate. But, also,  High performers applying CD, have more time to spent on New Work, 11% more than lower performers which have to spent more time working on Unplanned Work or Rework.

Unplanned Work or Rework has a great analogy about a car with low fuel warning, and running out of gas on the highway.

About the CD practices:

- Version Control: Handle not only code but also configuration as a primary concern for versioning.
- Test automation: 
  - Reliable automated tests. You have to fix flaky and unreliable tests.
  - Developers as responsible for test automation.
    - TDD, and achieve a more testable design
    - Invest more effort maintaining the tests
- Test Data Management: 
  - Successful teams must had adequate test data
- Trunk-based development: 
  - Short feature branches (less than a day) or trunk based
  - No code freezes or stabilization period
- Information security:
  - Integrating security practices into the delivery process contributed to software delivery performance.

Although those practices do have a lot of positive points they do require rethink architecture, how the teams works, relationships, tools, processes and so on...

## Chapter 5 - Architecture

