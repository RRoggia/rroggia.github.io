---
title: 'Lambda'
---

[Documentation](https://docs.aws.amazon.com/lambda/index.html)

## Overview

It's one of the AWS compute services that enable you to run code without the need to provision or manage any servers. It's high-available, auto scalable, you don't pay for idle resources only for use, easy to use with little configurations.

## Core Concepts

The **Lambda function** is the basic unit of this service, the Lambda Function contains all the data and configuration required to execute your function's code. When you create a Lambda function you need to provide the **Function's** **Code**, the **Runtime** which provides the programming language environment your function expects and the **Handler**, the function's entry point.

When you are deploying your code there are two types of **Deployment Packages** you can choose:

- **Zip**: A `.zip` file containing your code and all its dependencies required to run. Instead of sending the `.zip` file, you can store the file in S3 and specify the S3 Bucket with the file S3 Key.
- **Image**: A Container Image following the OCI (Open Container Initiative) containing the OS, Runtime, the function's code and runtime. You provide the image through the Amazon Elastic Container Registry (ECR).

Even though you can use Docker Images to do the deployment, it still need to comply to the AWS Lambda programming model in order to work. Its advantage is that it allows you to run runtime environment that are not supported by AWS.

Now that you have a Lambda function, you can invoke it to execute your function. When a Lambda function is invoked, if no **Execution Environment** are free to be used, a new one is created. When the Lambda invocation requires a new Execution Environment we say it's a **Cold Start**. A Execution Environment only processes one invocation per time, but, after it finishing processing an invocation it can be reused and start to processing the next invocation. When the execution environment is reused we call it a **Warm Start**. Lambda supports concurrency by creating new Execution Environments. Because of Warm starts, it's possible to use storage or memory to speed up future invocations of an Execution Environment, however, the code must support Cold starts.

The Execution Environment manages the **Memory**, **Timeout** and **Ephemeral Storage** specified in the Lambda function's configuration. You increase your Lambda's compute power by increasing its memory.

During the Lambda Function execution the function assumes an **Execution Role**, an **IAM Role** that is specified during the Lambda Function creation. It specifies the permissions that the function has. Besides the IAM Role, you can also specify an **IAM Resource Policies** which enables you to add permissions to external Principals.

You can use several tools to invoke your function like the Lambda console, a function URL endpoint, AWS SDK, the AWS CLI and more. In addition, the Lambda function can have **Triggers**, a resource configured that allow another AWS Services to invoke the function if certain event or condition occur.

There are two types of Lambda function invocation Synchronous and Asynchronous.

**Synchronous** invocations you wait the lambda to process the event and respond. The API Gateway sends synchronous invocation.

For **Asynchronous** invocations, the Lambda queues the events for processing and returns a response immediately. This type of invocation supports **retries**, **Max Age of Event**, a **Dead Letter Queue** (DLQ) and you can configure it to send response to **Destinations** (SQS queue, SNS topic, Lambda or EventBrige). You can have different destinations in case of failure or success.

The DLQ is an alternative to the **on-failure Destination** their differences are that DLQ is tied to function's version specific configuration while the Destination is not, the destination also supports additional targets.

S3 and SNS are examples of AWS Services that invoke asynchronously.

There's a third way to invoke lambda functions using an **Event Source Mapping**. An Event source mapping is a Lambda managed resource that reads the data from an Event Source and invokes the Lambda function with the data. You can use it with services that do not invoke a Lambda function directly. For example, Amazon Kinesis streams or SQS. When using Event source mapping, by default it uses batch records together in a single payload. Similarly to the Asynchronous invocation it supports retrial of the whole batch, destinations and DLQ.

**Log**

**Alias**

**Version**

**Layer??**

**Env var**

**private networking**

**concurrency**

**provisioned** 



