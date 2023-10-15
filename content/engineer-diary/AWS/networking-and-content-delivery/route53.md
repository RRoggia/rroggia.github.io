---
title: 'Route 53'
---

## Overview

Route 53 is a global service fully managed by AWS that offers domain registration and domain hosting. It's globally resilient, so it take all the regions to fail to have downtime.

## Core concepts

R3 offers Domains Name Service, translates domains to IP addresses. You can create **Hosted zones** on R53. A Hosted zones is a DNS database for a domain.  It stores **records** and make them available in 4 **name servers**. Public hosted zones determine how traffic is routed in the internet. Private determine how traffic is routed within a VPC.

AWS Supports all the DNS Record types, and in addition it allows you to use **Aliases**, which map to an AWS Resource.

Route 53 **Resolver** is the default DNS server that responds to DNS queries from AWS resources. In a VPC the resolver runs in one of the reserved IP addresses VPC+2 IP address.

You can use Route 53 only as domain registrar, only as a domain host or both. Because, it's very well integrated with AWS it works best when being used at least only as domain host. In addition, it's possible to use R53 to implement DNSSEC.

R53 also offers **health checks** that are located globally and trigger every 30 seconds, with support to several protocols like TCP, HTTP and HTTPS. It can be used to monitor endpoints, CloudWatch alarms and checks of checks (calculated).

Route 53 supports several types of routing:

- **Simple Routing**: You create one Record per Name that returns multiple values. Values are returned in random order, the client chooses which to use. Do not support Health checks.

- **Failover Routing**: You can create multiple Records for the same name. For each record you need to choose whether it's **primary or secondary**. Route 53 applies health checks on the primary record, if it fails, changes traffic to secondary record. It's a form of **Active/Passive** failvoer.

- **Multi Value Routing**: Allows multiple records with same name. Each record can have **multiple values**. Health checks run for each value of the  record. It only returns the records that are healthy. Chooses up to 8 healthy records randomly to return to client, the client chooses which to use.

- **Weighted Routing**: Allows multiple records with same name. Each records has a **weight**. The traffic is distributed to the records based on the record's weight divided by the sum all weights for a given name. Weight 0 is never returned, unless all records have the 0 weight. The health checks run after the evaluation, if the record chosen is not healthy, the process repeats.

- **Latency Routing**: Allows multiple records with same name, each record specifies determines **a region**. DNS stores tables with source and destination and **estimated latencies**. Based on the table chooses the record with lowest latency. If lowest latency is unhealthy, the process repeats.

- **GeoLocation Routing**: Allows multiple records with same name, each record specifies a Location like US States, countries, continent or the default. It only returns the **records relevant** to the source. Starts evaluating the State, Country, Continent and the default option at last. If no records match, no answers is returned. It can be used to deliver content or services to a specific location or to specify resources over regional endpoints. If most specific resource is unhealthy, the process repeats.

- **GeoProximity Routing**: Allows multiple records with same name, each record is tagged with an AWS Region or latitude and longitude coordinates for external resources. The **actual distance** between the customer and the record is used to determine the record. However, you can add **biases** to increase or decrease the geographic region size.

