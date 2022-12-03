---
title: 'WAF - Web Application Firewall'
---

[Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html)

## Overview

WAF is a web application firewall fully managed by AWS regionally. WAF runs in the application layer L7 of the OSI Model and it can be used to verify all the traffic entering the regional and global resources. It can be used to reduce the attack scope for SQL Injections, scripting or DDoS attacks. WAF integrates with CloudFront, API Gateway, ALB, APP Sync and Cognito.

## Core Concepts

WAF allows you to create **Web Access Control List**. When creating a WACL you define the resource type you are going to protect either **global** (CloudFront Distributions) or **regional** for (ALB, API Gateways, APP Sync and Cognito) and which are the resources you want to protect.

You can configure WACL's default behavior for requests that do not match rules. You can either allow all traffic or block it. A WACL contains a protection strategy that is defined by **rules** and **rules groups**.

A Rule describe what the firewall will evaluate in the traffic. Rules can be created in a rule group for reuse, or within a WACL. There are two types of rules, it can be either **regular**, something occurred, or **rate** based, something occurred at certain rate. The rule's **statement** describes what the firewall will inspect in the request and it can use almost any component of HTTP requests like headers, body, query strings, the HTTP method, and the IP or where's the traffic origin. You can use AND, OR , NOT or a single statements to create a rule.

If a request matches the statement of a rule the WAF will trigger the rule's **action**. They can be as simple as Allow or Block which will terminate the rules evaluation. They can be Challenges or Captcha to determine the requests aren't coming from a bot, the requests are blocked if they fail the puzzle/challenge. I can also be a Count which the firewall triggers the action but continues the processing after it.

Allow, Count and Captcha allow you to add request headers to the request. All actions support the addition of labels that can be used of a multi-stage flow. The allow action do not support rate based rules.

A rule groups is a set of rules that can be reused across several WACL. Roule groups can be custom or a Managed (AWS or AWS Marketplace sellers) groups.

The **WCU** is the capacity unit that WAF uses to size the resources that will evaluate the rules. When you create a rule AWS assigns a rule capacity that determines the **WCU**. Rule groups must specify how much capacity they'll use and it cannot be changed later. WACL has a limit of 1500 WCU.

You can also enable the WACL to send **logging data** to S3, CloudWatch Logs or Kinesis Data Firehose. This data describes the time, resources, detailed information on the request and about the rules that matched.

