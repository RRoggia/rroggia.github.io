---
id: '978-0321200686'
title: 'Enterprise Integration Patterns'
language: 'en-US'
status: 'Reading'
coverPath: 'enterprise-integration-patterns'
date: '2022-12-25'
publishDate: '2003-10-10'
---

# Chapter 7

## Scatter Gather

> How do you maintain the overall message flow when a message must be sent to multiple recipients, each of may send a reply?

> We can either determine the list of approved suppliers centrally or we can let any interested supplier participate in the bid. Since we have no (or little) control over the recipients, we must be prepared to receive responses from some, but not all, recipients.

> It makes sense to combine the routing logic, the recipients, and the post-processing of the individual messages into one logical component.

> The Scatter-Gather routes a request message to a number of recipients. It then uses an Aggregator (268) to collect the responses and distill them into a single response message.

> 1. Distribution. via a Recipient List (249) allows the Scatter-Gather to control the list of recipients but requires the Scatter-Gather to be aware of each recipient's message channel.
> 2. Auction-style. Scatter-Gather uses a publish subscribe channel (106) to broadcast the request to any interested participant. This option allows the Scatter-Gather to use a single channel but also forces it to relinquish control.

### My Summary

This pattern publishes a message to multiple recipients and then aggregates all or some of their responses in order to continue the processing. The book uses an order example, where the order requests from several warehouses their availability to fulfill the order, based on the aggregated responses it takes a decision.

You can break down this pattern in two parts:

1. Communicating with recipients. There are two strategies:
   1. Distribution. Uses a Recipient List. You control the list, but you are aware of the recipients
   2. Auction-style. Uses a Publish Subscribe Channel. You are not aware of the recipients, but you also have less control over them. 
2. Aggregating their response. Uses business rules to aggregate the responses.

Scatter-Gather has similarities with Composed Message Processor, both can be combined to break down a list of items, process each item using the Scatter-Gather and then aggregating twice (one for the Scatter-Gather and one for the Composed Message Processor).





