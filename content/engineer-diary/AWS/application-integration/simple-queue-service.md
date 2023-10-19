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

### Sending a message

The queue receive events through the SQS `sendMessage` or `sendMessageBatch` API. The **message size** can be up to 256 KB for a single message or in the Batch API the number of message times the maximum message size. 

### Storing a message and handling its lyfecicle

A message remains in the queue until it is deleted, is moved or expires. Messages expire when reach the maximum **retention period**. It can range between 1 minute to 14 days. To move a message you configure a **Redrive policy** to send undeliverable messages (could not be processed after up to 1000 attempts or expired messages) to a **Dead Letter Queue (DLQ)**. The Redrive policy specifies the source queue, the DLQ where the message is going to be moved and the number of times a consumer attempts to process a message (`maxReceiveCount`).

DLQ are used to handle the lifecycle of unconsumed messages . By default, all queues can be used as DLQ. However, the source and DLQ must have the same type both standard or both FIFO). You can also enable the **Redrive allow policy** in a queue to detail the source queues you want to allow or deny sources queues to move messages to the queue.

A queue can have a **Delivery Delay** of up to 15 minutes, these are called delay queues. When the message arrives it starts to count the delay time, while the message is within the delay time it's not visible to the consumers to retrieve it. If you configure a delay to an existing queue there are two different behaviors depending on the queue type.

- Standard: The delay do not applies retroactively on messages
- FIFO: The delay do not applies retroactively on messages.

Standard queues also support **Message Timers**, which enable to send per message delivery delay by specifying the `DelaySeconds` in the `sendMessage` or `sendMessageBatch` API.

### Reading a message

To read messages from the queue you can use the `receiveMessage` API. There is two options to consume this API that vary depending on the queue's attribute **Receive Message Wait time** or the SDK.

- **Short pooling**: When no `WaitTimeSeconds` is specified or equals to `0`. The default behavior. Sends the response right away from a subset of all distributed servers. You might receive empty responses even though there are messages to be consumed.
- **Long poling**: When the `WaitTimeSeconds` is between `1` and `20`. SQS sends the response after it can find all the messages before the time elapses or returns the messages it got when the specified time elapses.

Long pooling is a cheaper approach because it reduces the number of false empty responses and the number of HTTP requests.

The `receiveMessage` response returns the messages from the queue to process that requested it, the process needs to send a `deleteMessage` or `deleteMessageBatch` to acknowledge the queue the message was processed and should be deleted. The **Visibility Timeout** configuration specifies the time the message is going to be hidden in the queue once it's returned in the `receiveMessage`, the process has the visibility timeout time to send the delete request with the message **Receipt Id**, otherwise, the message is visible again in the queue.

When a Redrive policy is configured for the queue, each time the message is received the `receiveCountAttribute` is increased, when it reaches the maximum attempts it moves the message to the DLQ. When the message is moved to the DLQ its enqueue time, which is used to compute its expiration continues the same, therefore, you want the DLQ retention period to be higher than the source queue's retention period.



# TODO

- ASG can scale based on queue size
- Lambdas can be triggered by messages in queue
- SNS send to SQS





