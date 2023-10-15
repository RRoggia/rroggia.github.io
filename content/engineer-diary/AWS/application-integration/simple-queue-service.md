---
title: 'SQS - Simple Queue Service'

---

[Documentation](https://docs.aws.amazon.com/sqs/index.html)

## Overview

SQS is a regional fully managed queue service commonly used to integrate distributed systems in a decoupled, highly available and highly durable manner. It's a public service, therefore, it's possible to access from anywhere where you have access to the AWS public space.

## Core Concept

SQS supports two types of Queues:

- **FIFO**: The messages are **delivered exactly once** using the First In, First Out as the **ordering mechanism**. However, it has a limit of 3000 messages per second. Its performance is reduced due to the order and delivery guarantees. It supports up to 300 messages per second or using batch (10 events in a message) 3000 messages. Queues require the **.fifo** suffix.
- **Standard**: Best effort ordering mechanism (**order is not guaranteed**), and a message is delivered **at least once** (potentially more times).

# Simple Queue Service



Pooling

- short (immediate)
  - 1 request and can receive zero or more messages
- Long (wait Time Seconds)
  - up to 20 seconds

messages can live up to 14 days in queue

messages up to 256

visibility timeout

- default is 30 seconds

- the time the message is hidden in the queue
- retries if not explicit delete

DLQ

ASG can scale based on queue size

Lambdas can be triggered by messages in queue

#  SQS Standard vs FIFO Queues

fifo queue must have the .fifo suffix

# SQS Delay Queues

visivility timeout can vary from 0 to 12hours

- per queue or per message



DelaySeconds

- invisible for the specified amount of time
- 0 to 15 min
- messages are invisible when they join the queue

# SQS Dead-Letter Queues

receiveCountAttribute is increased every time the message is received

redrive policy

- specifies source queue
- where the messages will be moved
- defines the maxReceiveCOunt

retention period should be longer than queue



