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

## Overview of interprocess communication in a microservice architecture
### Defining API in microservices architecture

> A well-designed interface exposes useful functionality while hiding the implementation. It enables the implementation to change without impacting clients.

> A service’s API is a contract between the service and its clients.

> Doing this up-front design increases your chances of building a service that meets the needs of its clients.

> Ideally, you should strive to only make backward-compatible changes. Backward compatible changes are additive changes to an API:
>
> - Adding optional attributes to request
> - Adding attributes to a response
> - Adding new operations

> Services should provide default values for missing request attributes. Similarly, clients should ignore any extra response attributes. In order for this to be painless, clients and services must use a request and response format that supports the Robustness principle.

> Because you can’t force clients to upgrade immediately, a service must simultaneously support old and new versions of an API for some period of time.

> In order to support multiple versions of an API, the service’s adapters that implement the APIs will contain logic that translates between the old and new versions.

### Message formats

> In either case, it’s essential to use a cross-language message format.

## Communicating using the synchronous Remote procedure invocation pattern

> a client sends a request to a service, and the service processes the request and sends back a response. Some clients may block waiting for a response, and others might have a reactive, non-blocking architecture. But unlike when using messaging, the client assumes that the response will arrive in a timely fashion.

### Using REST

> A key concept in REST is a resource, which typically represents a single business object, such as a Customer or Product, or a collection of business objects

> REST uses the HTTP verbs for manipulating resources, which are referenced using a URL

> - Level 0—Clients of a level 0 service invoke the service by making HTTP POST requests to its sole URL endpoint. Each request specifies the action to perform, the target of the action (for example, the business object), and any parameters.
> - Level 1—A level 1 service supports the idea of resources. To perform an action on a resource, a client makes a POST request that specifies the action to perform and any parameters.
> - Level 2—A level 2 service uses HTTP verbs to perform actions: GET to retrieve, POST to create, and PUT to update. The request query parameters and body, if any, specify the actions' parameters. This enables services to use web infrastructure such as caching for GET requests.
> - Level 3—The design of a level 3 service is based on the terribly named HATEOAS (Hypertext As The Engine Of Application State) principle. The
>   basic idea is that the representation of a resource returned by a GET request contains links for performing actions on that resource. For example, a client can cancel an order using a link in the representation returned by the GET request that retrieved the order. The benefits of HATEOAS include no longer having to hard-wire URLs into client code

> Consequently, a common problem when designing a REST API is how to enable the client to retrieve multiple related objects in a single request

> This has led to the increasing popularity of alternative API technologies such as GraphQL and Netflix Falcor, which are designed to support efficient data fetching.

> A REST API should use PUT for updates, but there may be multiple ways to update an order, including cancelling it, revising the order, and so on.

### Using gRPC

> A gRPC API consists of one or more services and request/response message definitions

> As well as supporting simple request/response RPC, gRPC support streaming RPC.

> gRPC uses Protocol Buffers as the message format.

> Each field of a Protocol Buffers message is numbered and has a type code. A message recipient can extract the fields that it needs and skip over the fields that it doesn’t recognize.

### Handling partial failure using the Circuit breaker pattern

> In a distributed system, whenever a service makes a synchronous request to another service, there is an ever-present risk of partial failure.

> - Network timeouts—Never block indefinitely and always use timeouts when waiting for a response. Using timeouts ensures that resources are never tied up indefinitely.
> - Limiting the number of outstanding requests from a client to a service—Impose an upper bound on the number of outstanding requests that a client can make to a particular service. If the limit has been reached, it’s probably pointless to make additional requests, and those attempts should fail immediately.
> - Circuit breaker pattern —Track the number of successful and failed requests, and if the error rate exceeds some threshold, trip the circuit breaker so that further attempts fail immediately. A large number of requests failing suggests that the service is unavailable and that sending more requests is pointless. After a timeout period, the client should try again, and, if successful, close the circuit breaker.

> Service discovery is conceptually quite simple: its key component is a service registry, which is a database of the network locations of an application’s service instances.

> One drawback of platform-provided service discovery is that it only supports the discovery of services that have been deployed using the platform.

## Communicating using the Asynchronous messaging pattern

> A messaging-based application typically uses a message broker, which acts as an intermediary between the services, although another option is to use a brokerless architecture, where the services communicate directly with each other. A service client makes a request to a service by sending it a message. If the service instance is expected to reply, it will do so by sending a separate message back to the client. Because the communication is asynchronous, the client doesn’t block waiting for a reply

### Overview of messaging

> A sender (an application or service) writes a message to a channel, and a receiver (an application or service) reads messages from a channel.

> message consists of a header and a message body

> - Document—A generic message that contains only data. The receiver decides how to interpret it. The reply to a command is an example of a document message.
> - Command—A message that’s the equivalent of an RPC request. It specifies the operation to invoke and its parameters.
> - Event—A message indicating that something notable has occurred in the sender. An event is often a domain event, which represents a state change of a domain object such as an Order , or a Customer .

> There are two kinds of channels:
>
> - A point-to-point channel delivers a message to exactly one of the consumers that is reading from the channel. Services use point-to-point channels for the one-to-one interaction styles described earlier. For example, a command message is often sent over a point-to-point channel.
> - A publish-subscribe channel delivers each message to all of the attached consumers. Services use publish-subscribe channels for the one-to-many interaction styles described earlier. For example, an event message is usually sent over a publish-subscribe channel.

### Creating an API specification for a messaging-based service API

> specify the names of the message channels, the message types that are exchanged over each channel, and their formats. You must also describe the format of the messages using a standard such as JSON, XML, or Protobuf

### Using a message broker

> You can also use a brokerless-based messaging architecture, in which the services communicate with one another directly.

> In fact, some of these drawbacks, such as reduced availability and the need for service discovery, are the same as when using synchronous, response/response.

> A message broker is an intermediary through which all messages flow. A sender writes the message to the message broker, and the message broker delivers it to the receiver.

> - Supported programming languages—You probably should pick one that supports a variety of programming languages.
> - Supported messaging standards—Does the message broker support any standards, such as AMQP and STOMP, or is it proprietary?
> - Messaging ordering—Does the message broker preserve ordering of messages?
> - Delivery guarantees—What kind of delivery guarantees does the broker make?
> - Persistence—Are messages persisted to disk and able to survive broker crashes?
> - Durability—If a consumer reconnects to the message broker, will it receive the messages that were sent while it was disconnected?
> - Scalability—How scalable is the message broker?
> - Latency—What is the end-to-end latency?
> - Competing consumers—Does the message broker support competing consumers?

> Explicit interprocess communication—RPC-based mechanism attempts to make invoking a remote service look the same as calling a local service. But due to the laws of physics and the possibility of partial failure, they’re in fact quite different.

### Competing receivers and message ordering

> Using multiple threads and service instances to concurrently process messages increases the throughput of the application. But the challenge with processing messages concurrently is ensuring that each message is processed once and in order.

### Handling duplicate messages

> A message broker should ideally deliver each message only once, but guaranteeing exactly-once messaging is usually too costly. Instead, most message brokers promise to deliver a message at least once.



## My Summary

Two dimensions to characterize client server communication

1. Interactions
   1. One-to-one
   2. One-to-many
2. Sincronicity
   1. Synchronous
   2. Asynchronous

- One-to-one
  - Request and Response: One to one and synchronous communication. The client requests and awaits for the response. (Tightly coupled services).
  - Asynchronous Request and Response: The client requests, the response is sent asynchronously. The client doesn't block while waiting.
  - One-way notifications: The request is sent, but no response is expected
- One-to-many
  - publish/subscribe: Client publishes a message. Zero or more consumers consume it.
  - Publish/async response: The client publishes a message and awaits for a certain time for the response from interested services.

When defining APIs a good approach is to use a API first approach. Designing the API and aligning with the clients of the API, once it's aligned you start the implementation.

As the APIs evolve with time it's a good idea to use a SemVer to version your API, you can use it in the URI, through a HTTP header, or in the message body. In addition to SemVer, apply the Robustness principle to enable backward compatible changes. Servers should provide default values, and clients ignore any additional fields in the request.

When applying a major change, which are incompatible for clients, you should maintain two version concurrently, since you cannot ensure the client speed to change to the new API. You can then create an adapter that maps the logic from one API to another.

Message format:

1. Text
   1. JSON
   2. XML
2. Binary
   1. Protocol buffers
   2. Avro
   3. Thrift

Text message format are verbose and require an overhead to parse the text.

Binary message format provide a Interface definition language (IDL) for defining the structure of the message.

Remote Procedure Invocation: Sends a request and expects a response.

The book covers two models of RPI: REST and gRPC

1. *REST*

Models the APIs based on the resources of the domain. And have well defined usage of HTTP methods.

There's the Richardson maturity model for REST's APIs. See in the quotes.

The main problems with REST APIs are:

1. Fetching data from multiple resources at the same time (E.g. Customer, orders, contractors, ...)
2. Mapping HTTP verbs to business operations (E.g. Create/update lead)



2. *gRPC*

It's a binary based protocol, that unlike REST it's not restricted by the HTTP methods. It uses a Protocol Buffer to create to generate client-side stubs and server side skeleton.

The gRPC API is composed of a set of services and request/response messages definitions.  It can only be used as synchronous communication.

Since RPI invocations are synchronous they have the problem of partial failure, where either the server does not respond within an expected time and blocking the client meanwhile.

To handle this problem

1. Use network timeouts
2. Limiting the number of outstanding requests from a client to a service
3. Circuit breaker pattern. Track requests and if exceeds a threshold, trip the circuit breaker so that following requests fails.

To recover from an unavailable service, you have some options:

- Respond with an error
- Respond with cached information
- Respond with default information

Service discovery:

- Application level - the services and their clients interact directly with the service registry.
- The deployment infrastructure handles service discovery.

The author describes the basics of messaging system described in the Enterprise Integration Patterns.

Messaging systems enable several Interaction Styles:

- request/response
- async request/response
- one way notification
- publish/subscribe
- publish/ async responses

Differently from HTTP APIs messaging APIs do not have a standardized tool for documentation. One should focus on document the channels (both command and reply), the message expected and events channels.

Messaging can have two different architecture

- broker based
  - Loose coupling
  - Message buffering: Store the messages until a consumer consumes it
  - Flexible communication
  - Explicit interprocess comunication: very explicit RPC
  - Potential performance bottleneck
  - Potential single point of failure
  - Additional operational complexity
- brokerless
  - Better latency (less nodes to traffic the message)
  - avoid the broker performance bottleneck
  - less complexity
  - Requires 'service discovery'
  - reduced availability

Must consider the points highlighted above in the notes when considering a message broker tool.

A common solution to avoid competing receivers and messages out of order is to use *sharded* (partitioned) channels. A channel is a set of shards ( channels). The client sends the shard key. The messaging routes to the shards of a channel based on the shard key.

**I need to finish notes from the chapter 3**

# Chapter 4 - Managing transactions with sagas

> ACID (Atomicity, Consistency, Isolation, Durability) transactions greatly simplify the job of the developer by providing the illusion that each transaction has exclusive access to the data. In a microservice architecture, transactions that are within a single service can still use ACID transactions.

> an operation that spans services must use what’s known as a saga, a message-driven sequence of local transactions, to maintain data
> consistency.

> They lack the isolation feature of traditional ACID transactions. As a result, an application must use what are known as countermeasures, design techniques that prevent or reduce the impact of concurrency anomalies caused by the lack of isolation.

## Transaction management in a microservice architecture

### The trouble with distributed transactions

> The traditional approach to maintaining data consistency across multiple services, databases, or message brokers is to use distributed transactions. The de facto standard for distributed transaction management is the X/Open Distributed Transaction Processing (DTP) Model (X/Open XA).

> XA uses two-phase commit (2PC) to ensure that all participants in a transaction either commit or rollback.

> One problem is that many modern technologies, including NoSQL databases such as MongoDB and Cassandra, don’t support them

> Another problem with distributed transactions is that they are a form of synchronous IPC, which reduces availability. In order for a distributed transaction to commit, all the participating services must be available.

### Using the Saga pattern to maintain data consistency

> You define a saga for each system command that needs to update data in multiple services. A saga is a sequence of local transactions. Each local transaction updates data within a single service using the familiar ACID transaction frameworks and libraries mentioned earlier.

## Coordinating sagas

> - Choreography—Distribute the decision making and sequencing among the saga participants. They primarily communicate by exchanging events.
> - Orchestration—Centralize a saga’s coordination logic in a saga orchestrator class. A saga orchestrator sends command messages to saga participants telling them which operations to perform.

### Choreography-based sagas

> When using choreography, there’s no central coordinator telling the saga participants what to do. Instead, the saga participants subscribe to each other’s events and respond accordingly

> The first issue is ensuring that a saga participant updates its database and publishes an event as part of a database transaction.

> The second issue you need to consider is ensuring that a saga participant must be able to map each event that it receives to its own data.

> choreography distributes the implementation of the saga among the services. Consequently, it’s sometimes difficult for a developer to understand how a given saga works.

> The saga participants subscribe to each other’s events, which often creates cyclic dependencies

### Orchestration-based sagas

> When using orchestration, you define an orchestrator class whose sole responsibility is to tell the saga participants what to do

> A good way to model a saga orchestrator is as a state machine. A state machine consists of a set of states and a set of transitions between states that are triggered by events. Each transition can have an action, which for a saga is the invocation of a saga participant. The transitions between states are triggered by the completion of a local transaction performed by a saga participant. The current state and the specific outcome of the local transaction determine the state transition and what action, if any, to perform. There are also effective testing strategies for state machines. As a result, using a state machine model makes designing, implementing, and testing sagas easier.

> One benefit of orchestration is that it doesn’t introduce cyclic dependencies.

> This results in a design where the smart orchestrator tells the dumb services what operations to do. Fortunately, you can avoid this problem by designing orchestrators that are solely responsible for sequencing and don’t contain any other business logic.

## Handling the lack of isolation

> The isolation property of ACID transactions ensures that the outcome of executing multiple transactions concurrently is the same as if they were executed in some serial order.

> First, other sagas can change the data accessed by the saga while it’s executing. And other sagas can read its data before the saga has completed its updates, and consequently can be exposed to inconsistent data. You can, in fact, consider a saga to be ACD:
>
> - Atomicity—The saga implementation ensures that all transactions are executed or all changes are undone.
> - Consistency—Referential integrity within a service is handled by local databases. Referential integrity across services is handled by the services.
> - Durability—Handled by local databases.

### Overview of Anomalies

> - Lost updates—One saga overwrites without reading changes made by another saga.
> - Dirty reads—A transaction or a saga reads the updates made by a saga that has not yet completed those updates.
> - Fuzzy/nonrepeatable reads—Two different steps of a saga read the same data and get different results because another saga has made updates.

### Countermeasures for handling the lack of isolation

> It’s the responsibility of the developer to write sagas in a way that either prevents the anomalies or minimizes their impact on the business.

> - Semantic lock—An application-level lock.
> - Commutative updates—Design update operations to be executable in any order.
> - Pessimistic view—Reorder the steps of a saga to minimize business risk.
> - Reread value—Prevent dirty writes by rereading data to verify that it’s unchanged before overwriting it.
> - Version file—Record the updates to a record so that they can be reordered.
> - By value—Use each request’s business risk to dynamically select the concurrency mechanism.

> - Compensatable transactions—Transactions that can potentially be rolled back using a compensating transaction.
> - Pivot transaction—The go/no-go point in a saga. If the pivot transaction commits, the saga will run until completion. A pivot transaction can be a transaction that’s neither compensatable nor retriable. Alternatively, it can be the last compensatable transaction or the first retriable
> - Retriable transactions—Transactions that follow the pivot transaction and are guaranteed to succeed.

> when migrating to microservices, the monolith must sometimes participate in sagas and that it’s significantly simpler if the monolith only ever needs to execute retriable transactions.

> When using the semantic lock countermeasure, a saga’s compensatable transaction sets a flag in any record that it creates or updates.

> The flag can either be a lock that prevents other transactions from accessing the record or a warning that indicates that other transactions should treat that record with suspicion. It’s cleared by either a retriable transaction—saga is completing successfully—or by a compensating transaction: the saga is rolling back.

> (about managing the lock) One option is for the cancelOrder() system command to fail and tell the client to try again later

> (about managing the lock) Another option is for cancelOrder() to block until the lock is released.

> One straightforward countermeasure is to design the update operations to be commutative. Operations are commutative if they can be executed in any order

> It reorders the steps of a saga to minimize business risk due to a dirty read

> A saga that uses this countermeasure rereads a record before updating it, verifies that it’s unchanged, and then updates the record. If the record has changed, the saga aborts and possibly restarts 

> it records the operations that are performed on a record so that it can reorder them. It’s a way to turn noncommutative operations into commutative operations

> An application that uses this countermeasure uses the properties of each request to decide between using sagas and distributed transactions

## My Summary

**I need to finish notes from the chapter 4**

# Chapter 5 - Designing business logic in a microservice architecture

> First, a typical domain model is a tangled web of interconnected classes. Although this isn’t a problem in a monolithic application, in a microservice architecture, where classes are scattered around different services, you need to eliminate object references that would otherwise span service boundaries. The second challenge is designing business logic that works within the transaction management constraints of a microservice architecture.

> The Aggregate pattern structures a service’s business logic as a collection of aggregates. An aggregate is a cluster of objects that can be treated as a unit. There are two reasons why aggregates are useful when developing business logic in a microservice architecture:
>
> - Aggregates avoid any possibility of object references spanning service boundaries, because an inter-aggregate reference is a primary key value rather than an object reference.
> - Because a transaction can only create or update a single aggregate, aggregates fit the constraints of the microservices transaction model.

## Business Logic organization patterns

### Designing business logic using the Transaction script pattern

> an important characteristic of this approach is that the classes that implement behavior are separate from those that store state.

### Designing business logic using the Domain model pattern

> Organize the business logic as an object model consisting of classes that have state and behavior.

> In an object-oriented design, the business logic consists of an object model, a network of relatively small classes. These classes typically correspond directly to concepts from the problem domain.

> In such a design some classes have only either state or behavior, but many contain both, which is the hallmark of a well-designed class.

> Moreover, its state is private and can only be accessed indirectly via its methods.

## Designing a domain model using the DDD aggregate pattern

### Aggregates have explicit boundaries

> An aggregate is a cluster of domain objects within a boundary that can be treated as a unit.

> It consists of a root entity and possibly one or more other entities and value objects.

> Aggregates decompose a domain model into chunks, which are individually easier to understand.

> A service, for example, uses a repository to load an aggregate from the database and obtain a reference to the aggregate root. It updates an aggregate by invoking a method on the aggregate root.

> The use of identity rather than object references means that the aggregates are loosely coupled. It ensures that the aggregate boundaries between aggregates are well defined and avoids accidentally updating a different aggregate.

> Another rule that aggregates must obey is that a transaction can only create or update a single aggregate.

### Aggregate granularity

> When developing a domain model, a key decision you must make is how large to make each aggregate. On one hand, aggregates should ideally be small. Because updates to each aggregate are serialized, more fine-grained aggregates will increase the number of simultaneous requests that the application can handle, improving scalability. It will also improve the user experience because it reduces the chance of two users attempting conflicting updates of the same aggregate. On the other hand, because an aggregate is the scope of transaction, you may need to define a larger aggregate in order to make a particular update atomic.

## Publishing domain events

> In the context of DDD, a domain event is something that has happened to an aggregate. It’s represented by a class in the domain model. An event usually represents a state change.

### What is a domain event?

> A domain event is a class with a name formed using a past-participle verb. It has properties that meaningfully convey the event. Each property is either a primitive value or a value object.

> A domain event typically also has metadata, such as the event ID, and a timestamp. It might also have the identity of the user who made the change, because that’s useful for auditing. The metadata can be part of the event object, perhaps defined in a superclass. Alternatively, the event metadata can be in an envelope object that wraps the event object

### Event enrichment

> An alternative approach known as event enrichment is for events to contain information that consumers need. It simplifies event consumers because they no longer need to request that data from the service that published the event

> Although event enrichment simplifies consumers, the drawback is that it risks making the event classes less stable.

### Identifying domain events

> Event storming is an event-centric workshop format for understanding a complex domain. It involves gathering domain experts in a room, lots of sticky notes, and a very large surface—a whiteboard or paper roll—to stick the notes on.



## My Summary

Two main patterns for organizing business logic:

- Transaction script pattern
  - One script (method) for each system operation which contains the business logic.
  - Classes that store state are not the same that implement behavior
- Object oriented domain model pattern

# Chapter 6 - Developing business logic with event sourcing

> event sourcing, an event-centric way of writing business logic and persisting domain objects.

## Developing business logic using event sourcing

> It persists an aggregate as a sequence of events. Each event represents a state change of the aggregate. An application recreates the current state of an aggregate by replaying the events.

### The trouble with traditional persistence

> The traditional approach to persistence maps classes to database tables, fields of those classes to table columns, and instances of those classes to rows in those tables.

> - Object-Relational impedance mismatch.
> - Lack of aggregate history.
> - Implementing audit logging is tedious and error prone.
> - Event publishing is bolted on to the business logic.

> There’s a fundamental conceptual mismatch between the tabular relational schema and the graph structure of a rich domain model with its complex relationships.

> Another limitation of traditional persistence is that it only stores the current state of an aggregate.

> rather than store each Order as a row in an ORDER table, event sourcing persists each Order aggregate as one or more rows in an EVENTS table.

### Overview of event sourcing

> Every state change of an aggregate, including its creation, is represented by a domain event.

> What’s more, an event must contain the data that the aggregate needs to perform the state transition.

> The business logic handles a request to update an aggregate by calling a command method on the aggregate root.

> The first method takes a command object parameter, which represents the request, and determines what state changes need to be performed. It validates its arguments, and without changing the state of the aggregate, returns a list of events representing the state changes. This method typically throws an exception if the command cannot be performed.
>
> The other methods each take a particular event type as a parameter and update the aggregate. There’s one of these methods for each event. It’s important to note that these methods can’t fail, because an event represents a state change that has happened. Each method updates the aggregate based on the event.



# TODO

- CAP Theorem
- BASE 