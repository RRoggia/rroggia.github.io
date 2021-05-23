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

> The key challenge, which is the essence of the microservice architecture, is the functional decomposition of the application into services.

## What is the microservice architecture exactly?

> The architecture of a software application is its high-level structure, which consists of constituent parts and the dependencies between those parts.

> The reason architecture is important is because it determines the application’s software quality attributes or -ilities.

### What is software architecture and why does it matter?

> The software architecture of a computing system is the set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both.

> The 4+1 model, shown in Figure 2.1, defines four different views of a software architecture. Each describes a particular aspect of the architecture and consists of a particular set of software elements and relationships between them.

> Architecture is important because it enables an application to satisfy the second category of requirements: its quality of service requirements. These are also known as quality attributes and are the so-called -ilities.

> The quality of service requirements define the runtime qualities such as scalability and reliability. They also define development time qualities including maintainability, testability, and deployability

### Overview of architectural styles

> An architectural style, then, defines a family of such systems in terms of a pattern of structural organization. More specifically, an architectural style determines the vocabulary of components and connectors that can be used in instances of that style, together with a set of constraints on how they can be combined.

> the monolithic architecture is an architectural style that structures the implementation view as a single (executable/deployable) component. The microservice architecture structures an application as a set of loosely coupled services.

> A layered architecture organizes software elements into layers. Each layer has a well-defined set of responsibilities. A layered architecture also constraints the dependencies between the layers.

> hexagonal architecture style organizes the logical view in a way that places the business logic at the center.

> the application has one or more inbound adapters that handle requests from the outside by invoking the business logic... the application has one or
> more outbound adapters that are invoked by the business logic and invoke external applications.

> There are two kinds of ports: inbound and outbound ports. An inbound port is an API exposed by the business logic, which enables it to be invoked
> by external applications. ... An outbound port is how the business logic invokes external systems.

> Hexagonal architecture is a great way to describe the architecture of each service in a microservice architecture.

### The microservice architecture is an architectural style

> Monolithic architecture is an architectural style that structures the implementation view as a single component

> A monolithic application can, for example, have a logical view that’s organized along the lines of a hexagonal architecture.

> It structures the implementation view as a set of multiple components

> Each service has its own logical view architecture, which is typically a hexagonal architecture

> A key constraint imposed by the microservice architecture is that the services are loosely coupled. Consequently, there are restrictions on how the services collaborate.

> A service is a standalone, independently deployable software component that implements some useful functionality.

> A service has an API that provides its clients access to its functionality. There are two types of operations: commands and queries. The API consists of commands, queries, and events. A command, such as createOrder() , performs actions and updates data. A query, such as findOrderById() , retrieves data. A service also publishes events, such as OrderCreated , which are consumed by its clients.

> the microservice architecture enforces the application’s modularity.

> An essential requirement, however, is that a service has an API and is independently deployable.

> All interaction with a service happens via its API, which encapsulates its implementation details. This enables the implementation of the service to change without impacting its clients

> You must treat a service’s persistent data like the fields of a class and keep them private

> [About shared libraries] you need to ensure that you don’t accidentally introduce coupling between your services.

## Defining an application's microservice architecture

> A system operation is an abstraction of a request that the application must handle. It’s either a command, which updates data, or a query, which retrieves data. The behavior of each command is defined in terms of an abstract domain model, which is also derived from the requirements. The system operations become the architectural scenarios that illustrate how the services collaborate.

### Identifying the system operations

> The domain model is derived primarily from the nouns of the user stories, and the system operations are derived mostly from the verbs.

> The behavior of each system operation is described in terms of its effect on one or more domain objects and the relationships between them.

> an architecture consisting of services that are primarily organized around business rather than technical concepts.

### Defining services by applying the Decompose by business capability pattern

> An organization’s business capabilities capture what an organization’s business is.

> An organization’s business capabilities are identified by analyzing the organization’s purpose, structure, and business processes. Each business capability can be thought of as a service, except it’s business-oriented rather than technical.

> A key benefit of organizing services around capabilities is that because they’re stable, the resulting architecture will also be relatively stable. The individual components of the architecture may evolve as the how aspect of the business changes, but the architecture remains unchanged.

> They may evolve over time as we learn more about the application domain. In particular, an important step in the architecture definition process is investigating how the services collaborate in each of the key architectural services.

### Defining services by applying the Decompose by sub-domain pattern

> DDD avoids these problems (overly used and complex models) by defining multiple domain models, each with an explicit scope.

> DDD calls the scope of a domain model a bounded context. A bounded context includes the code artifacts that implement the model. When using the microservice architecture, each bounded context is a service or possibly a set of services. We can create a microservice architecture by applying DDD and defining a service for each subdomain.

> Also, the microservice architecture’s concept of autonomous teams owning services is completely aligned with the DDD’s concept of each domain
> model being owned and developed by a single team.

### Decomposition guidelines

> We can apply SRP when defining a microservice architecture and create small, cohesive services that each have a single responsibility. This will reduce the size of the services and increase their stability.

> We can apply CCP when creating a microservice architecture and package components that change for the same reason into the same service.

> A saga is a sequence of local transactions that are coordinated using messaging.

### Defining service APIs

> In order to fully define the service APIs, you need to analyze each system operation and determine what collaboration is required.

## My Summary

There are several definitions for software architecture. One way of describe it is to think of the architecture as the bigger picture that decomposes the elements and their relationships. Therefore, decomposition plays a important role because will define how the division of knowledge and work will be distributed between teams, the lifecycle of each element, with each other element they interact and so on.

Another point of view is to consider the 4+1 model. Where as the architecture is composed by 4 views:

- Logical: The software created by developers.
- Implementation: The output of the system and its relationships.
- Process: The components at runtime.
- Deployment: How the processes are mapped to machines.
- Scenarios: The most important requirement as use cases or scenarios.

The architecture is important because it will define the -ilities of the applications composing the architecture. The quality of service, aka quality attributes or the -ilities determine non functional requirements like scalability, performance, maintainability, testability, deployability and so on...

An architecture style defines patterns, vocabulary and a set of constraints. A very common architecture style is the layered architecture.

The popular three-tier architecture is the layered architecture applied to the logical view. Three tiers, the dependency goes top to bottom (constrain between layers).

- Presentation layer: UI
- Business logic layer: Business
- Persistence layer: Database

The hexagonal architecture is an alternative to the layered architectural style. It also applies to the logical view. And places the business logic in the center of the hexagon. The hexagonal architecture is composed by

- Adapters: Middleware between external code and business logic. 
  - Inbound: Handle request from the outside (HTTP, Queue, ...)
  - Outbound: Invoked by the business logic and invokes external application (Database, HTTP, ...)
- Ports: Set of operations exposed by the business logic
  - Inbound: Enables external applications to call the ports
  - Outbound: Enables business logic to invoke an external system

Monolithic and microservices are both architectural styles.

- Monolithic: Implementation view as a single component.
- Microservices: Implementation view as multiple components.
  - Each service has its own logical view which might be an hexagonal architecture.
  - Loosely coupled, there are restrictions on how services communicate (usually through APIs)
  - A service is a standalone, independently deployable software component that implements some useful functionality

The API is composed of:

1. Command: Performs action or updates data
2. Query: Retrieves data
3. Events: Events triggered by the API

Three-step process to to define a microservices architecture:

1. Describe the system operation
   1. Command: Create, update and delete data
      1. Operation
      2. Return
      3. Pre-condition
      4. Post-conditions
   2. Query: System operations that read (query) data
2. Decomposition into services:
   1. Services accordingly to business capabilities
   2. DDD Subdomains
3. Determine the service's API

A system operation is a more abstract notion of a request. It can be derived from User Stories or some other form of requirements. A system operation will be mapped to a High Level domain.

Once you have identified the system operations, we have to decompose the services by business capabilities or by domain driven design.

Business capabilities is something that the business does to generate value. Business capabilities captures the *what*, in opposition of the *how*, of a organization. You identify the organization's business capabilities by looking at the organization's purpose, structure and business processes. A business capability might have sub capabilities.

Once you have the capabilities you can define a service for each capability or group of capabilities. The benefit of this approach is that you end up with a stable architecture since the business capabilities are usually stable. The services that compose the a capability will of course evolve.

DDD fits extremely well to decompose services due to sub-domains and its bounded contexts. Once you identify the subdomains of your problem, each subdomain has its own bounded context, its scope. Each bounded context can be one or a set of services.

Obstacles to decomposition:

1. Network latency ( or Impractical due to too many round-trips)
2. Reduced availability due to synchronous communication
3. Maintaining data consistency across services
4. Obtaining a consistent view of the data
5. God classes preventing decomposition

Once we have decomposed the system operations and its respective sub-domain. The last step is to define a service API. To define the service API, you assign the system operations to Services. To have fully operating API, one should also map the relationship between the APIs.

# Chapter 3 -Interprocess communication in a microservice architecture



