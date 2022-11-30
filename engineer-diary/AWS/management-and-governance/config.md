---
title: 'Config'
---

[Documentation](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)

## Overview

AWS Config is a regional service fully managed AWS service that allows you to continually assess, monitor and record resources configurations. When enabling the service, you can choose which AWS resources you want to record the changes in the configuration. These configuration changes are stored in a S3 bucket. You can also create Config Rules that determine what are the expected configuration for the resources. The resources are evaluated against the rules to determine whether they are compliant or not.

## Core Concepts

To start using the AWS Config, the first thing you need to do is to configure a **Configuration Recorder** which will be responsible for storing the Configuration Items in a S3 Bucket. **Configuration Items** represents a point-in-time view of the various attributes of a resource. The S3 Bucket stores a **Configuration History** which is the collection of the Configuration Items for a given resource over time.

When you Enable the AWS Config, you can also create **Config Rules** that represent the desired configuration setting for a given resource. There are two types of rules:

- **Managed Rules**: Predefined, customizable rules created by AWS.
- **Custom rules**: A rule you create using Lambda functions to evaluate the resource settings.

You can use the **Dashboard** to identify which resources are compliant or noncompliant with the config rules you defined. Important to notice that AWS Config doesn't prevent the changes to happen, but, it can be **trigger** to other AWS Services **to apply automatic remediation.**

AWS Config also provides a **Resource Inventory** which are items that config discovered including deleted resources or resources that aren't being recorded.

It's also possible to create **Aggregators** to aggregate data from multi-account and multi-region into one account, the aggregator account.