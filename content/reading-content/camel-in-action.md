---
id: '978-1617292934'
title: 'Camel In Action'
language: 'en-US'
status: 'Reading'
coverPath: 'camel-in-action'
date: '2022-07-05'
publishDate: '2018-02-18'
edition: '2nd'
authors: ['Claus Ibsen', 'Jonathan Anstey']
---

# Part 1 First Steps

> A pache Camel is an open source integration framework that aims to make integrating systems easier.

## Chapter 1 Meeting Camel

> At the core of the Camel framework is a routing engine—or more precisely, a routing-engine builder. It allows you to define your own routing rules, decide from which sources to accept messages, and determine how to process and send those messages to other destinations.

> One of the fundamental principles of Camel is that it makes no assumptions about the type of data you need to process.

> Camel isn’t an enterprise service bus (ESB), although some call Camel a lightweight ESB because of its support for routing, transformation, orchestration, monitoring, and so forth.

> The core feature of Camel is its routing and mediation engine. A routing engine selectively moves a message around, based on the route’s configuration.

> Camel was designed not to be a server or ESB but instead to be embedded in whatever runtime you choose.

> `org.apache.camel.Message`—The fundamental entity containing the data being carried and routed in Camel.

> `org.apache.camel.Exchange`—The Camel abstraction for an exchange of messages. This exchange of messages has an *in* message, and as a reply, an *out* message.

> Messages have a body (a payload), headers, and optional attachments,

> During routing, messages are contained in an exchange.

> An exchange in Camel is the message’s container during routing.

> - InOnly - A one-way message (also known as an event message). For example, JMS messaging is often one-way messaging.
>
> - InOut - A request-response message. For example, HTTP-based transports are often request-rep

> The exchange is the same for the entire lifecycle of routing, but the messages can change, for instance, if messages are transformed from one format to another.

> (About CamelContext) You can think of it as Camel’s runtime system, which keeps all the pieces together.

> The simplest way to define a route is as a chain of processors.

> The processor is a core Camel concept that represents a node capable of using, creating, or modifying an incoming exchange.

> (Component) they’re associated with a name that’s used in a URI, and they act as a factory of endpoints.

> An endpoint is the Camel abstraction that models the end of a channel through which a system can send or receive messages.

> A producer is the Camel abstraction that refers to an entity capable of sending a message to an endpoint.

> A consumer is the service that receives messages produced by some external system, wraps them in an exchange, and sends them to be processed. Consumers are the source of the exchanges being routed in Camel.

> (Event Driven Consumer) It’s also referred to as an asynchronous receiver in the EIP world. An event-driven consumer listens on a particular messaging channel, such as a TCP/IP port, JMS queue, Twitter handle, Amazon SQS queue, WebSocket, and so on. It then waits for a client to send messages to it. When a message arrives, the consumer wakes up and takes the message for processing.

> The polling consumer is also known as a synchronous receiver in EIP lingo, because it won’t poll for more messages until it’s finished processing the
> current message.

### My Summary

Apache Camel is an OSS that aims to ease integrations. It provides a routing engine that contains several tools to extract, process and load data. The data can be of any type.

Camel has some core concepts:

- Message: An entity that contains data and is routed by camel. A message has a body, headers and optional parameters. It's contained in an exchange.

- Exchange: An entity that contains in and out messages. It also supports in only message. It's the same during the lifecycle of a route.

- CamelContext: The runtime system. Keeps everything together.
- Route: Chain of processors.
- Processor: It can use, modify or create an incoming exchange.
- Component: Endpoint's factory.
- Endpoint: End of a channel that can receive or send messages.
- Producer: Sends messages to an endpoint.
- Consumer: Receives a message from an external system and wrap it in an exchange. Then, sends the exchange to be processed. Plays the role of endpoint.

## Chapter 2 Routing With Camel

> routing is the process by which a message is taken from an input queue and, based on a set of conditions, sent to one of several output queues

> (about messaging systems) The input and output queues are unaware of the conditions in between them. The conditional logic is decoupled from the message consumer and producer.

> With an endpoint URI, you can identify the component you want to use and the way that component is configured

> Java Message Service (JMS) is a Java API that allows you to create, send, receive, and read messages.

> In JMS, message consumers and producers talk to one another through an intermediary—a JMS destination

> Queues are strictly point-to-point; each message has only one consumer.

> Topics operate on a publish/subscribe scheme; a single message may be delivered to many consumers if they’ve subscribed to the topic.

> (about `jms:queue:incomingOrders`) The jms prefix indicates that you’re using the JMS component you configured before. By specifying queue, the JMS component knows to send to a queue named incomingOrders.

> The from method returns a RouteDefinition object, on which you can invoke various methods that implement EIPs and other messaging concepts.

> Another popular way of implementing internal DSLs is by using fluent interfaces (a.k.a. fluent builders). When using a fluent interface, you build up objects by chaining together method invocations. Methods of this type perform an operation and then return the current object instance.

> Each Java statement that starts with a from method in the RouteBuilder creates a new route.

> An IoC framework allows you to “wire” beans together to form applications. This wiring is typically done through an XML configuration file.

### My Summary

The chapter starts speaking about routing in camel (the process to take a message as input and based on a set of conditions sent to one or several inputs that match conditions).

Because, this chapter uses JMS and FTP, there's a quickly introduction on Messaging, but more specifically JMS and its queues and topics.

Then the chapter introduces the Camel Route creation through Java DSL and XML DSL.

In the XML DSL, there are several ways to import routes:

- Load the route `Bean` and pass the reference to `RouteBuilder`
- Define the routes using XML DSL
- Use a `packageScan`
- Tag the routes with `@Component` and use the Spring `ScanComponent`

It also explains how to create processors through the `Processor` interface.

Then it shows the usage of camel with IoC and later with Spring.

Use `toD` to dynamic endpoints. Together with the use of the Simple expression, for example `${headers.CamelFileName}`.

Use `{{}}` to access Camel Properties. See the code to see how to setup.

A lot of code in this chapter, it's a good idea to have a look at my implementation of the examples in the repository.

