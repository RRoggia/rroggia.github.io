---
title: 'Shield'
---

[Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html)

## Overview

AWS Shield is an AWS fully managed service that provides protection against DDoS attacks for AWS resources at the layers network, transport and application (respectively 3,4 and 7) of the OSI Model.

## Core Concepts

AWS Shield offers two types of service **Standard** and **Advanced**.

The **Shield Standard** service is a managed threat protection service that protects the perimeter of your application. The perimeter an AWS Region in case of a VPC, or edge of the AWS network when using Route 53, Cloud Front or Global Accelerator. Standard Shield provides DDoS detection for network and transport layers automatically and at no additional cost.

The **Shield Advanced** service provides higher levels of protection against attacks. When you subscribe to the Advanced service, you add resources to protect. These resources range from EC2, ELB, Route 53 hosted zones, Cloud Front distributions and more.

Shield integrates with WAF to create Web ACLs, rules and rule groups. In addition, uses WAF to **automatic mitigate and respond DDoS at the application layer**. It also enhances the visibility into DDoS events and attacks with real-time metrics and reports of your protected resources.

Perhaps, two of the most important feature of Advanced are the **Proactive Engagement and the Shield Response Team (SRT)**. The SRT is experienced in protecting AWS and they are a point of contact for you at any time for assistance during an attack. The proactive engagement goes one step further with the SRT contacting you when the Health based checks you created are unhealthy. 