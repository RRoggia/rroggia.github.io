---
title: 'Event Bridge'
---

[Documentation](https://docs.aws.amazon.com/eventbridge/)

Demo:

- [Publish to Event Bus and send to SQS Target](https://github.com/RRoggia/aws-workloads/tree/main/event-bridge)

## Overview

Event Bridge provides functionality to integrate applications using events. The event bridge is a regional service hosted by AWS where you can create your own Event Buses or Pipes and configure it to send the events to other services and applications.

AWS Event Bridge offers two types channels to process events:

- **Event Bus**: It receives events from multiple sources and sends to multiple targets accordingly to the Event Rules. Publish/Subscribe allowing many to many.
- **Pipes**: It receives events from a single source and sends to a single target. Point to point.

### Integrating with Event Buses

An Event bus is a router that receives **events** from multiple **sources** and evaluates the **Event Rules** for each event received to identify whether it should and how to process each event. There are 3 types of Event bus:

- AWS Service (**default**): Each region in a AWS Account has one. AWS services send its events to the default bus.
- Custom: Customer created event bus. Can be used to integrate your applications.
- SaaS provider: It's used to receive events from AWS Partners like Salesforce.

![Event bus types](/images/engineer-diary/AWS/application-integration/event-bridge/event-bus-types.png)

Each Event bus can have up to 300 Event rules, an event rule can be configured to send the event to other Event bus in the same and different accounts and in different regions.

An **Event Rule** matches incoming events and send to targets for processing. An event rule is assigned to an event bus. AWS provides managed rules which are created by them. There are two types of Event rules:

- **Event Pattern:** Event pattern allows to trigger actions based on matching the event's metadata, data structure or content.
  - `{ "source": ["app1"]}`: Triggers action if event's source attribute has value `app1`.
- **Schedule (only for default bus):** It allows to use rate expressions or cron expressions to trigger actions.
  - `rate(1 hour)`: Triggers action every hour.

Besides the event matching mechanism the Event Rule also expects from 1 to 5 targets. A **Target** is the resource that Event Bridge sends the event when it matches to a Event Rule pattern.  A target can be an AWS Services, another Event Bus or an **API Destination** (third party targets invoked through HTTP endpoints).

A Target provides some extra functionality, for example it allows you to configure **Input transformation** to manipulate the event data before sending it to its target, it allows to send the event to a SQS Dead Letter Queue in case the targets fails to receive the event and configure retrial policies. In case an Event rule is triggered and has multiple targets they run in parallel.

Event bus also supports **Archive**. An archive receives all events of a given event bus, or, you can specify Event Patterns to filter events that are sent to the archive. Archives can have indefinite retention periods or any custom time.

You can **Replay** events in an archive. When you create a Replay you specify a time frame, then, it uses an archive as source and replays the events in that time frame to the same event bus that initially recorded the event. You can configure which Event Rules should be evaluated in the target event bus during the replay.

### Integrating with Pipes

**Pipes** offer a similar functionality than Event Bus, however, it's a point to point channel. Therefore, only one source and one target are allowed.

In addition, pipes supports optional Filtering and Enhancement steps. In the **Filtering step**, you can use the Event Pattern to filter the events sent through the pipe. In the **Enhancement step**, you can configure AWS Lambda, API Gateway or a Step function or an API destination to enhance the event data. 

The pipes supports Input transformation before sending the event data to both the Enhancement step and to the target.

### Security

It's important to notice that for both pipes and Event Bus, the target needs to allow the Event Bridge to interact its resource. For example, if an Event Rule sends event data to a SQS queue. The queue needs to allow the Event rule to send message to the queue.