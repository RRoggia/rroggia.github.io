---
title: 'Camel In Action'
language: 'en-US'
status: 'Reading'
coverPath: 'camel-in-action'
date: '2022-07-05'
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
