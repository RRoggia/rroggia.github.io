---
title: 'Microservices Patterns'
language: 'en-US'
status: 'Reading'
coverPath: 'microservices-patterns'
date: '2021-05-04'
---

# Chapter 1 - Escaping monolithic hell

> (Abour Big ball of Mud) “haphazardly structured, sprawling, sloppy, duct-tape and bailing wire, spaghetti code jungle.”

> Despite having a logically modular architecture, ... The application is an example of the widely used monolithic style of software architecture, which structures a system as a single executable or deployable component.

> On the one hand, a disciplined team can slow down the pace of its descent toward monolithic hell. Team members can work hard to maintain the modularity of their application. They can write comprehensive automated tests. On the other hand, they can’t avoid the issues of a large team working on a single monolithic application. Nor can they solve the problem of an increasingly obsolete technology stack. The best a team can do is delay the inevitable.

> Adrian Cockcroft, formerly of Netflix, defines a microservice architecture as a service-oriented architecture composed of loosely coupled elements that have bounded contexts.

> Note that this definition doesn’t say anything about size. Instead, what matters is that each service has a focused, cohesive set of responsibilities.

> The microservice architecture uses services as the unit of modularity. A service has an API, which is an impermeable boundary that is difficult to violate. You can’t bypass the API and access an internal class as you can with a Java package.

> A key characteristic of the microservice architecture is that the services are loosely coupled and communicate only via APIs. One way to achieve loose coupling is by each service having its own datastore.

> Each one can be independently developed, tested, deployed, and scaled. Also, this architecture does a good job of preserving modularity.

> One challenge with using the microservice architecture is that there isn’t a concrete, well-defined algorithm for decomposing a system into services.

> if you decompose a system incorrectly, you’ll build a distributed monolith, a system consisting of coupled services that must be deployed together.

> The microservice architecture also introduces significant operational complexity. Many more moving parts—multiple instances of different types of service—must be managed in production.

> Using the microservice architecture makes it much more difficult to iterate rapidly. A startup should almost certainly begin with a monolithic application.

> But in addition to having the right architecture, successful software development requires you to also have organization, and development and delivery processes.

> It’s important, therefore, to apply Conway’s law in reverse and design your organization so that its structure mirrors your microservice architecture. By doing so, you ensure that your development teams are as loosely coupled as the services

> A key characteristic of continuous delivery is that software is always releasable. It relies on a high level of automation, including automated testing. Continuous deployment takes continuous delivery one step further in the practice of automatically deploying releasable code into production.

## My Summary

Monolithic hell is an application's state where it has become too large and too complex. It might be written with obsolete technology. To make changes is almost impossible and take too much time.

The initial benefits of using a monolithic approach:

- Simple to develop - Less complexity
- Easy to make radical changes - code and its lifecycle tools are all together
- Straightforward to test - Only one service to setup and test ( e2e + ui )
- Straightforward to deploy - Only one service to deploy. 
- Easy to scale - Run multiple instances behind and load balancer.

As the application evolves:

- The code grows
- The size of the application team grows
- One team becomes several teams
- Complexity increases. Eventually becoming too large to someone to fully understand. Leading to more time fixing bugs and longer lead time
- The project goes through a downwards spiral. The more complex, the harder to maintain the healthy of the application, which leads to adding even more complexity
- Development is slow. Longer build time, startup time and so on. Longer the feedback for the developer
- The longer the frequency between deployments
- The more frequent an unreliable state in the version control system
- The higher is the effort on manual testing and the time to run all the battery of tests
- The harder to optimize the hardware when scaling
- The reliability decreases, since all the application run in one process. A problem in the process stops everything
- The more common is to use a non optimal tool for a given task

A team can delay, but cannot avoid the problems of a large team working on a monolithic application.

Microservices is a service-oriented architecture composed of loosely coupled elements that have bounded contexts.

Another definition is to consider a 3D cube with the following axis:

*X*: Cloning. Multiple identical instances behind a Load Balancer

*Z*: Partitioning. Multiple identical instances behind a Load Balancer. Which distributes the traffic depending on the **data**.

*Y*: Functional decomposition. Each service is a mini application with a narrowly focused functionality. A focused and cohesive set of responsibilities.

Even though you can have a monolithic architecture with modularity. There is only a soft boundary. And a developer is still able to access some internal behavior of another module. With microservices, services are the smallest unit, and the API protects the code. Making it transparent and establishing a hard boundary.

To achieve the loosely coupling it's important that services communicate through APIs. Meaning that each service should have its own datastore.

Loosely coupled services enable to develop, test and deploy isolated services.

SOA and Microservices diverge in:

- SOA uses heavyweight protocols such as SOAP. Microservices uses message brokers or direct service to service through REST or gRPC.
- SOA has global model and shared databases. Microservices uses data models and have a database per service.
- SOA is usually used to integrate large, complex and monolithic applications. Microservices consist of dozens or hundreds of smaller services.

The Benefits of Microservices:

- It enables the continuous delivery and deployment of large, complex applications:
  - Testability for CI/CD
  - Deployability for CI/CD
  - Autonomous and independent teams.
- Services are small and easily maintained: Smaller and less complex scope.
- Services are independently deployable and scalable: Independent X and Z axis.
- It allows easy experimenting and adoption of new technologies: Smaller scope and reduced risk to test new tech.
- It has better fault isolation: Several processes running.

The Drawbacks of Microservices:

- Finding the right set of services is challenging: There is no one algorithm. You might create a distributed monolith.
- Distributed systems are complex, which makes development, testing, and deployment difficult: More complex, requires interprocess communication. Harder to implement transactional queries that span services. Operational complexity due to the several parts running.
- Deploying features that span multiple services requires careful coordination: Coordination between several development teams. Roll-out plan.
- Deciding when to adopt the microservice architecture is difficult: It's better to start with a monolith, since it's faster. But it's harder to break it down later.

The author then explains about patterns and it's useful because it describes the context it applies.

The microservices patterns consists of a group of patterns that are solution to problems encountered in microservices. The groups are part of 3 layers:

1. Infrastructure patterns - Infrastructure issues
2. Application Infrastructure - Infrastructure issues that impact development
3. Application patterns - Application issues

The groups are:

- Decomposition: How to break the microservices
- Communication:
  - Communication Style: Choose mechanism to communicate
  - Discovery: Client and Service recognition
  - Reliability: reliable communication even when servers might be unreliable.
  - Transactional Messaging: Applying database transaction with messaging and events 
  - External API: Clients and Service communication
- Data consistency: Maintain consistency with distributed databases
- Queries: With data distributed how to retrieve data scattered.
- Deployment: Deploying microservices
- Observability: Runtime behavior and troubleshooting problems
- Testing: Testing smaller pieces but a more complex system.
- Cross-cutting: External configuration
- Security: Securing the whole system.

When the organization starts to succeed it's expected that the number of developers will  increase. Applying the inverse Conway's, and structuring the organization in a manner to have small, cross-functional and autonomous teams, the system will mirror this structure. Enabling to add more people and maintain the productivity by avoiding communication overhead.

In addition, it's ideal to use microservice with a agile / DevOps mindsets. Microservices eases to apply concepts like CD by reducing the size of the services you make it easier to apply changes to production faster. 

During a transition to microservice architecture, you have to consider the human side of the developers in order to ensure a good transition.

# Chapter 2 - Decomposition Strategies

