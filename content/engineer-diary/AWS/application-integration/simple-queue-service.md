---
title: 'SQS - Simple Queue Service'

---

[Documentation](https://docs.aws.amazon.com/sqs/index.html)

## Overview

SQS is a regional fully managed queue service commonly used to integrate distributed systems in a decoupled, highly available and highly durable manner. It's a public service, therefore, it's possible to access from anywhere where you have access to the AWS public space.

## Core Concept

The main core concept of SQS are the queues. It supports two types of **Queues**:

- **FIFO**: The messages are **delivered exactly once** using the First In, First Out as the **ordering mechanism**. However, it has a limit of 3000 messages per second. Its performance is reduced due to the order and delivery guarantees. It supports up to 300 messages per second or using batch (10 events in a message) 3000 messages. Queues require the **.fifo** suffix.
- **Standard**: Best effort ordering mechanism (**order is not guaranteed**), and a message is delivered **at least once** (potentially more times).

Once you create the queue you can't change its type.

The queue receive events through the SQS `sendMessage` or `sendMessageBatch` API. The **message size** can be up to 256 KB for a single message or in the Batch API the number of message times the maximum message size. 

A message remains in the queue until it is deleted, is moved or expires. Messages expire when reach the maximum **retention period**. It can range between 1 minute to 14 days. To move a message you configure a **Redrive policy** to send undeliverable messages (could not be processed after up to 1000 attempts or expired messages) to a **Dead Letter Queue (DLQ)**. The Redrive policy specifies the source queue, the DLQ where the message is going to be moved and the number of times a consumer attempts to process a message (`maxReceiveCount`).

DLQ are used to handle the lifecycle of unconsumed messages . By default, all queues can be used as DLQ. However, the source and DLQ must have the same type both standard or both FIFO). You can also enable the **Redrive allow policy** in a queue to detail the source queues you want to allow or deny sources queues to move messages to the queue.



# TODO



# Simple Queue Service



Pooling

- short (immediate)
  - 1 request and can receive zero or more messages
- Long (wait Time Seconds)
  - up to 20 seconds

visibility timeout

- default is 30 seconds

- the time the message is hidden in the queue
- retries if not explicit delete



ASG can scale based on queue size

Lambdas can be triggered by messages in queue

# SQS Delay Queues

visivility timeout can vary from 0 to 12hours

- per queue or per message



DelaySeconds

- invisible for the specified amount of time
- 0 to 15 min
- messages are invisible when they join the queue

# SQS Dead-Letter Queues

receiveCountAttribute is increased every time the message is received

retention period should be longer than queue



