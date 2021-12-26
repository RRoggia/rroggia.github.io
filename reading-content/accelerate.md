---
title: 'Accelerate'
language: 'en-US'
status: 'Read'
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

With those outcomes we can also conclude that investing in technology is investing in people. And, applying CD can also be linked to the agile manifest principle: "*Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a Technical praticeconstant pace indefinitely*".

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

> We found that High performance is possible with all kinds of systems, provided that systems -and the teams that build and maintain them - are loosely coupled

### Types of systems and delivery performance

> We discovered that low performers were more likely to say that the software they were building - or the set of services they had to interact with - was custom software developed by another company (e.g., an outsourcing partner). Low performers were also more likely to be working on mainframe systems.

> It's possible to achieve these characteristics even with packaged software and "legacy" mainframe systems - and, conversely, employing the latest whizzy microservices architecture deployed on containers is no guarantee of higher performance if you ignore these characteristics.

> testability and deployability, are important in creating high performance.

### Focus on deployability and testability

> To enable this, we must also ensure delivery teams are cross-functional, with all the skills necessary to design, develop, test, deploy, and operate the system on the team.

> Architectural approaches that enable this strategy include use of bounded context and APIs as a way to decouple large domains into smaller, more loosely coupled units, and the use of test double and virtualization as a way to test services or components in isolation.

> Of course DevOps is all about better collaboration between teams, and we don't mean to suggest teams shouldn't work together.

### A loosely coupled architecture enables scaling

> Second, we can substantially grow the size of our engineering organization and increase productivity linearly - or better than linearly - as we do so.

> (Scaling the frequency of deployments per day) This allows our business to move *faster* as we add more people, not slow down, as is more typically the case.

### Allow teams to choose their own tools

> However, there is a downside to this lack of flexibility: it prevents teams from choosing technologies that will be most suitable for their particular needs, and from experimenting with new approaches and paradigms to solve their problems.

> When the tools provided actually make life easier for the engineers who use them, they will adopt them of their own free will.

### Architects should focus on engineers and outcomes, not tools or technologies

> What is important is enabling teams to make changes to their products or services without depending on other teams or systems.

### My Summary

The architecture of your system can be a barrier to apply continuous delivery practices and increase both tempo and stability.

Loose coupling is the key architectural property that enables teams to test, deploy, and scale with ease. Also, it's the responsible for ensuring the organization productivity scales as the organization scales.

The type of system is not a key factor to team's performance. You can achieve either good performance with legacy systems or bad performance with latest microservices architecture. It all depends whether you achieve a loose coupled architecture. In order, to decouple the architecture you could use bounded context and APIs.

The authors found two main characteristics that are more likely to be found on high performers:

- Testing without required integrated environment (testability)
- Independent Deploy (deployability)

To achieve that you'll need cross functional teams (designer, ops, sec, devs, ...).

Organizations should evolve their organization structure to achieve the desired architecture (inverse Conway law). The intent of DevOps is not to avoid collaboration, but that the communication is not a bottleneck for delivering value.

In addition to delivery performance, a loosely coupled architecture enables linear or better than linear productivity at scale. High performers deploy at a significantly increasing frequency at scale, which allows company to move faster as they add more people.

Even though, restricting the technologies to a approved list has benefits like reducing the technological complexity, that the teams have all the skills to manage technology's lifecycle and so on. It also means that teams will be restricted without experimentation and they might lack the most suitable tools for their needs.

The organization must work closely to team, providing tools, libraries, and what they need with a great developer experience. This way organization's developer will choose by their will the tools provided by the organization.

Architects should be focusing on collaborate closely with teams to enable them to change their products and services without depending on other teams.

## Chapter 6 - Integrating infosec into delivery lifecycle
> (Referring to bring people together) However this kind of behavior is not limited to just development and operations, it occurs wherever different functions within the software delivery value stream do not work effectively together.

### Shifting Left On Security

> Information security should be integrated into the entire software delivery lifecycle from development through operations.

> We found that high performers were spending 50% less time remediating security issues than low performers.

### My Summary

Whenever different functions of the value stream does not work effectively together, you should work to bring together these functions.

The role of Infosec is downplayed in the organizations.

Shifting security left, or bringing to the beginning of the development increases software delivery performance.

There are 3 aspects that represent shift left:

1. Security reviews are conducted for all major features.
2. Security is integrated with the development lifecycle.
3. Security team provide tools and processes required to the development and operation team.

The Rugged manifest describes the practices or the mindset behind organization building survivable, defensible, secure and resilient software.

## Chapter 7 - Management Practices For Software

### Lean Management Practices

> Limit Work In Progress (WIP)
>
> Visual Management
>
> Feedback from Production
>
> Lightweight Change Approvals

> WIP limits are no good if they don't lead to improvements that increase flow.

> The central concepts here are the types of information being displayed, how broadly it is being shared, and how easy it is to access. Visibility, and the high-quality communication it enables are key.

### Implement a Lightweight Change Management Process

> We found that approval for high-risk changes was not correlated with software delivery performance. Teams that reported no approval process or used peer review achieved higher software delivery performance.

> Our recommendation based on these results is to use a lightweight change approval process based on peer review, such as pair programming or intra team code review, combined with a deployment pipeline to detect and reject bad changes.

> This idea is a form of risk management theater: we check boxes so that when something goes wrong, we can say that at least we followed the process.

### My Summary

Consider as Lean Management practices the following:

1. Limiting WIP: Use it to drive process improvements and increase throughput.
2. Visual management: Key quality, productive metrics and current status of work visible to everyone. Also, aligning metrics with operational goals.
3. Feedback from production: Application performance and infrastructure monitoring.
4. Lightweight process

Limiting WIP by itself does not strongly predict delivery performance. But combined with points 2 and 3 they found a strong effect in delivery performance.

The teams should focus on using the WIP to highlight the bottlenecks and work to improve the overall stream value.

The visual management together with feedback from production brings visibility to people working on software and enables a high-quality communication.

The researchers found that is better a lightweight process for changes such as peer review, pair programming or intra team code review.

## Chapter 8 - Product Development

### Lean Product Development Practices

> Improving your software delivery effectiveness will improve your ability to work in small batches and incorporate customer feedback along the way.

> The key to working in small batches is to have work decomposed into features that allow for rapid development, instead of complex features developed on branches and released infrequently.

> Working in small batches enables short lead times and faster feedbacks loops.

### Team Experimentation

> Many development teams working in organizations that claim to be Agile are nonetheless obliged to follow requirements created by different teams. This restriction can create some real problems and can result in products that don't actually delight and engage customers and won't deliver the expected business results.

> Our analysis showed that the ability of teams to try out new ideas and create and update specifications during the development process, without requiring the approval of people outside th team, is an important factor in predicting organizational performance as measured in terms of profitability, productivity and market share.

### My Summary

Working in small batches, making a flow of work visible, Gather and implement customer feedback and team experimentation are statistically significant to predict higher software delivery performance and organizational performance, as well as improving organizational culture and decreasing burnout.

- *Working in small batches*: Short lead time and reduced feedback loop.
- *Visible flow of work*: Stream of value from business to customer.
- *Customer feedback*: Actively and regularly seeking customer feedback.
- *Team experimentation*: The team uses small batches and the visible flow of work to implement the customer feedback. Increasing the probability of delivering delight to customers.

## Chapter 9 - Making Work Sustainable

### Deployment Pain

> The fear and anxiety that engineers and technical staff feel when they push code into production can tell us a lot about a team's software delivery performance.

> And the barriers that hide the work of deployment from developers are rarely good, because they isolate developers from the downstream consequences of their work.

> ... the technical practices that improve our ability to deliver software with both speed and stability also reduce the stress and anxiety associated with pushing code to production.

> First, software is often not written with deployability in mind. A common symptom here is when complex, orchestrated deployments are required because the software expects its environment and dependencies to be set up in a very particular way and does not tolerate any kind of deviation from these expectations, giving little useful information to administrators on what is wrong and why it is failing to operate correctly.

> Second, the probability of a failed deployment rises substantially when manual changes must be made to production environments as part of the deployment process.

> Finally, complex deployments often require multiple handoffs between teams, particularly in siloed organizations where database administrators, network administrators, system administrators, infosec, testing/QA and developers all work in separate teams.

### Burnout

> Burnout can make the things we once loved about our work and life seem insignificant and dull.

> Job stress also affects employers, costing the US economy $300 billion per year in sick time, long-term disability, and excessive job turnover.

> Technology managers, like so many other well-meaning managers, often try to fix the person while ignoring the work environment, even though changing the environment is far more vital for long-term success.

> Managers are ultimately responsible for fostering a supportive and respectful work environment, and they can do so by creating a blame-free environment, striving to learn from failures and communicating a shared sense of purpose.

> Managers and leaders should ask their teams how painful their deployments are and fix the things that hurt the most.

> Responsibility of a team leader include limiting work in process and eliminating roadblocks for the team so they can get their work done.

> Investing in training and providing people with the necessary support and resources (including time)to acquire new skills are critical to the successful adoption of DevOps.

> This means creating a work environment that supports experimentation, failure, and learning, and allows employees to make decisions that affect their jobs.

> When organizational values and individual values aren't aligned, you are more likely to see burnout in employees, particularly in demanding and high-risk work like technology.

> (Lack of alignment between individuals and organizational values) This is an area of potential impact that organizations neglect at their own peril

### My Summary

Deployment pain is the fear and anxiety that engineers feel to push code to production.

The Microsoft team, found an increase of 38% in work/life balance satisfaction score, after they started to apply CD practices.

The development team should be aware of the software deployment process. If they don't, it could be an warning that software delivery performance could be low.

CD reduces the deployment pain, which creates a better IT performance, organizational performance and organizational culture.

Deployments outside business hours are a good signal of deployment pain.

Pillars of deployment pain:

- Software not build with deployability in mind: Requires the environments to be in a very specific state otherwise won't work. The system don't provide enough information to troubleshoot.
- Manual changes in production: Human are prone to errors. Manual steps allow a deviation between environments.
- Handoffs between teams: Loss of information, delay in delivery, complex deployment process.

To reduce deployment pain:

- Reproducibility: Build systems that are able to be easily reproduced in multiple environments.
- Fault tolerant: The system can detect and tolerate failures.
- Automate: Ideally it should have near to none manual steps.

To avoid burnout, manager should concentrate on:

- Learning with failure
- Communicating a strong sense of purpose
- Investing in employee development
- Removing obstacles
- Giving employee time, space and resources to experiment and learn

Six organizational risk factors that predict burnout:

1. Work Overload: excessive job demands
2. Lack of control: unable to change influence decisions
3. Insufficient reward: financial, institutional or social rewards.
4. Breakdown of community: unsupportive workplace.
5. Absence of fairness: lack of fairness in decision making.
6. Value conflicts: mismatch organizational values.

Improving technical practices contribute to reduce the feelings of burnout.

According to their own research, to reduce or fight burnout:

1. Organizational Culture: 
   1. Avoid pathological or power-oriented culture.
   2. Create a blame-free environment with a transparent purpose (human error is never the root cause).
2. Deployment pain:
   1. Avoid out of business hour deploy.
   2. Tackle the deployment pain. Managers should hear the team's pain and help to fix it.
3. Effectiveness of leaders:
   1. Reduce WIP
   2. Remove obstacles of teams
4. Organizational investments in DevOps:
   1. Investing in training
   2. Providing people the necessary support (including time)
5. Organizational performance:
   1. Create work environment with support to experimentation, failure and learning
   2. Enable employees to change their reality

It's also very important to have the organization's values aligned with the employee values. This lessens the effects of the burnout.

## Chapter 10 -  Employee satisfaction, identity and engagement

> With market pressures to deliver technologies and solutions even faster the importance of hiring, retaining, and engaging our workforce is greater than ever.

### Employee Loyalty

> Our research found that employees in high-performing organization were 2.2 times more likely to recommend their organization as a great place to work.

> ... when employees see the connection between the work they do and its positive impact on customers, they identify more strongly with the company's purpose, which leads to better software delivery and organizational performance.

### Changing organizational culture and identity

> People are an organization's greatest asset - yet so often they're treated like expendable resources.

> by creating higher levels of software delivery performance, we increase the rate at which teams can validate their ideas, creating higher levels of job satisfaction and organizational performance.

> This is in contrast to the way many companies still work: requirements are handed down to development teams who must then deliver large stacks of work in batches. In this model , employees feel little control over the products they build and the customer outcomes they create, and little connections to the organizations they work for.

> Our analysis is clear: in today's fast-moving and competitive world, the best thing you can do for your products, your company, and your people is institute a culture of experimentation and learning, and invest in the technical and management capabilities that enable it.

### How does job satisfaction impact organizational performance?

> The cycle of continuous improvement and learning is what sets successful companies apart, enabling them to innovate, get ahead of the competition - and win.

> Automation matters because it gives over to computers the things computers are good at- rote tasks that require no thinking and that in fact are done better when you don't think too much about them.

### Diversity in tech - what our research found

> It is also important to note that diversity is not enough. Teams and organizations must also be inclusive. An inclusive organization is one where "all organizational members feel welcome and valued for who they are and what they 'bring to the table'."

> - 33% reported working on teams with no women.
> - 56% reported working on teams that were less than 10% female
> - 81% reported working on teams that were less than 25% female

> Women and underrepresented minorities report harassment, microaggressions, and unequal pay. These are all things we can actively watch for and improve as leaders and peers.

### My Summary

The people are the most important asset of an organization. Therefore, you should ensure hiring, retaining and engaging workforce is as smooth as possible. You can use the employee Net Promoter Score (eNPS) to measure employee loyalty.

Enabling workers to do their best, fostering continuous delivery and lean practices, creates an identity between the employee and the organization, which leads to organizational performance. Employees are more likely to go get the extra mile to achieve success.

There are two virtuous cycle to look for:

- The higher the software delivery performance the faster the teams can validate ideas and deliver software, this creates a higher level of job satisfaction which leads to better organizational performance and software delivery performance
- Investments in technology, like CD and Lean help to reduce burnout, which lead to higher level of job satisfaction which leads to better organizational performance and enables more investments in technology.

The default work model for many companies is the exact opposite of the virtuous cycle. Where there are lots of top down decisions and handover of work. The teams have little to none autonomy to experiment and learn.

You should aim for a culture with high experimentation and learning. In addition, applying continuous improvement enables the teams to innovate and get ahead of competition.

Diversity also plays a role in better performance. Other research shows that teams with more diversity achieve better performance and better business outcomes. Organizations must be not only diverse but also inclusive. Everyone in the organization should feel welcome and valued.

91% of the respondents considered themselves Male. 6% Female and 3% Non-binary or others. 77% of the respondents don't consider to be part of a underrepresented group. These numbers are an example of the lack of diversity in the technology field.

Not only there are few women and underrepresented groups, but they also suffer from harassment, microaggressions and unequal pay.

## Chapter 11 - Leaders and Managers

### Transformational Leadership

> A good leadership affects a team's ability to deliver code, architect good systems, and apply Lean principles to how the team manages its work and develops products.

> ...transformational leadership is essential for:
>
> - Establishing and supporting generative and high-trust cultural norms.
> - Creating technologies that enable developer productivity, reducing code deployment lead times and supporting more reliable infrastructures
> - Supporting team experimentation and innovation, and creating and implementing better products faster.
> - Working across organizational silos to achieve strategic alignment

> Leaders are those who set the tone of the organization and reinforce the desired cultural norms.

> ...the five characteristics of a transformational leader are:
>
> - Vision. Has a clear understanding of where the organization is going and where it should be in five years.
> - Inspirational communication. Communicates in a way that inspires and motivates, even in an uncertain or changing environment.
> - Intellectual stimulation. Challenges followers to think about problems in new ways.
> - Supportive leadership. Demonstrates care and consideration of followers' personal need and feelings.
> - Personal recognition. Praises and acknowledges achievement of goals and improvements in work quality; personally compliments others when they do outstanding work.

> High-performing teams reported having leaders with the strongest behaviors across all dimensions: vision, inspirational communication, intellectual stimulation, supportive leadership and Personal recognition.

> Though we often hear stories of DevOps and technology transformation success coming from the grassroots, it is far easier to achieve success when you have leadership support.

> This makes sense, because *leaders cannot achieve goals on their own* .

### The Role of Managers

> Managers, in particular, play a critical role in connecting the strategic objectives of the business to the work their teams do.

### Tips to improve culture and support your teams

> As the real value of a leader or manager is manifest how they amplify the work of their teams, perhaps the most valuable work they can do is growing and supporting a strong organizational culture among those they serve: their teams.

### My Summary

A good leadership eases the technological transformation of a company. It's possible to achieve it, without a good leadership, but the research found that is far easier when you have a leadership that sets a clear the vision with a inspirational communication. The leadership and it's vision challenges the intellectual of the organization's staff, but also supports and recognize their needs and contributions.

The leaders cannot achieve by their own the results, they have to amplify their team's results in order tho achieve the transformation.

**Investing in your team :**

- Existing resource made available and accessible to everyone.
- Dedicated training budget
- Foster participation in tech conferences
- Internal hack-days
- "Yak days" - slack time.
- Regular DevOps mini conference
- Dedicated time to experiment new tools and technologies - PDI.

# Part Two - The Research

## Chapter 12 - The Science Behind This Book

> Secondary research reports can be valuable, particularly if the existing data is difficult to find, the summary is particularly insightful or the reports are delivered at regular intervals.

> In contrast, primary research involves collecting new data by the research team.

> Qualitative research is any kind of research whose data isn't in numerical form.

> Quantitative research is any kind of research with data that includes numbers.

> descriptive findings are only as good as the underlying research design and data collection methods.

> Many people have heard the phrase "correlation doesn't imply causation" but what does that mean? The analyses done in the exploratory stage include correlation but not causation. Correlation looks at how closely two variables move together - or don't - but it doesn't tell us if one variable's movement predicts or causes the movement in another variable.

> (Causal analysis) This type of analysis generally requires randomized studies. A common type of causal analysis done in business is A/B testing in prototyping or websites, when randomized data can be collected and analyzed.

## Chapter 13 - Introduction to Psychometrics

> (About surveys) Common weaknesses are:
>
> - Leading questions. Survey questions should let the respondent answer without biasing them in a direction. For example, "How would you describe Napoleon's height?" is better than "Was Napoleon short?"
> - Loaded questions. Questions should not force respondents into an answer that isn't true for them. For example, "Where did you take your certification exam?" doesn't allow for the possibility that they didn't take a certification exam.
> - Multiple questions in one. Questions should only ask one thing. For example, "Are you notified of failures by your customers and the NOC?" doesn't tell you which part of the quest your respondent was answering for. Customers? the NOC? Both? Or if no, neither?
> - Unclear language. Survey questions should use language that your respondents are familiar with, and should clarify and provide examples when necessary.

> A good example of something that can't be measured directly is organizational culture. We can't take a team's or an organization's organizational culture "temperature" - we need to measure culture by measuring its component parts (called manifest variables), and we measure these component parts through survey questions.

> 1. Latent constructs help us think carefully about what we want to measure and how we define our constructs.
> 2. They give us several views into the behavior and performance of the system we are observing, helping us eliminate rogue data.
> 3. They make it more difficult or a single bad data source(whether through misunderstanding or a bad actor) t skew our results.

> Take a step back and think about *what* it is you are truing to measure and how you will measure.

## Chapter 14 - Why Use a Survey

> But if you want to know how they *feel* about the work environment and how supportive it is to their work and their goals - if you want to know *why* they're behaving in the way you observe - you have to ask them.

## Chapter 15 - The Data for the Project

> Similarly, having an organizational culture that values transparency, trust and innovation is likely to have positive impacts in technology organizations regardless f software development paradigm

# Part Three - Transformation

## Chapter 16 - High-Performance Leadership and Management
