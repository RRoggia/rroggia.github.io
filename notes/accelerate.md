---
title: 'Accelerate'
language: 'en-US'
status: 'Reading'
coverPath: 'accelerate'
date: '2021-03-25'
---

## Praise for accelerate

> Whether they recognize it or not, most organization today are in the business of software development in one way, shape, or form. And most are being dragged down by slow lead times, buggy output, and complicated features that add expense and frustrate users. It doesn't need to be this way.

## Foreword by Martin Fowler

> Their evidence refutes the bimodal IT notion that you have to choose between speed and stability - instead, speed depends on stability, so good IT practices gives you both.

## Preface

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

It's astonishingly to see the gap between high performers that are applying devops with those that aren't. It was never about stability or speed. By adding quality in the process you achieve both.

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









