---
title: 'CloudTrail'
---

[Documentation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

## Overview

CloudTrail is a regional services that is fully managed by AWS that records activities by IAM entities and AWS Services as events to enable to follow any changes in your AWS account. It's common used for auditing, governance and compliance.

When you create an account CloudTrail starts to record the events that can be seen in the Events History. You can create Tails to customize the events being recorded and retention period.

Important to notice CloudTrail is not a real time service, the service logs the records usually within 15 minutes but without time delivery guarantee.

## Core concepts

The **Event History** is a viewable, searchable and downloadable record of the past 90 days. One Event History is created for each region during the account creation and stores Management Events for 90 days. You can use the event history to check any operational changes done to your AWS account for a specific region.

CloudTrail records the activities in the account, it calls it **events**. There are three types of events :

- **Management**: Control plane operations. Example, managing AWS Resources.
- **Data**: Data plane operations, information about the resource operations performed on or in a resource. Example, uploading file to s3.
- **Insight**: Unusual API call rate or error rate activity in your AWS account.

By default only the Management Events are recorded, but you can create custom Trails to record other data.

A **Trail** is a configuration that enables delivery of CloudTrail Events to S3, CloudWatch Logs and Events. When you create a tail you can specify its retention period and the events you want it to record.

You can create two types of trails:

- **One region**: It stores the events from the region you selected in the S3 bucket. 
- **All region**: It stores the events from all the regions in the S3 bucket. Trails created in the console are multi-region trails.

In both scenarios the bucket the events will be stored can be in any region. The trails support SS3-KMS encryption. And you can configure it to send log to CloudWatch logs.

There's also the opportunity to create an **organization trail,** only for accounts in using the AWS Organizations service, which will centralized the records from all accounts in an organization.

AWS CloudTrail records the regional and global services with different behaviors. While regional services, will record the events in the regional trails, global services will record the events to US East (N. Virginia). This applies to services like IAM, STS, CloudFront.