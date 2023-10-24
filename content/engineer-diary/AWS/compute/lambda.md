---
title: 'Lambda'
---

[Documentation](https://docs.aws.amazon.com/lambda/index.html)

Demo:

- [Asynchronous Invocation](https://github.com/RRoggia/aws-workloads/tree/main/lambda/sam-async-invocation)
- [Event Source invocation](https://github.com/RRoggia/aws-workloads/tree/main/lambda/sam-event-source-invocation)

## Overview

It's one of the AWS compute services that enable you to run code without the need to provision or manage any servers. It's high-available, auto scalable, you don't pay for idle resources only for what you use, easy to use with little configurations.

## Core Concepts

The **Lambda function** is the basic unit of this service, it contains all the data and configuration required to execute your function's code. When you create a Lambda function you need to provide the **Function's** **Code**, the **Runtime** which provides the programming language environment your function expects and the **Handler**, the function's entry point.

When you are deploying your code there are two types of **Deployment Packages** you can choose:

- **Zip**: A `.zip` file containing your code and all its dependencies required to run. Instead of sending the `.zip` file, you can store the file in S3 and specify the S3 Bucket with the file S3 Key.
- **Image**: A Container Image following the OCI (Open Container Initiative) containing the OS, Runtime, the function's code and runtime. You provide the image through the Amazon Elastic Container Registry (ECR).

Even though you can use Docker Images to do the deployment, it still need to comply to the AWS Lambda programming model in order to work. Its advantage is that it allows you to run runtime environment that are not supported by AWS.

Now that you have a Lambda function, you can invoke it to execute your function. When a Lambda function is invoked, if no **Execution Environment** are free to be used, a new one is created. When the Lambda invocation requires a new Execution Environment we say it's a **Cold Start**. A Execution Environment only processes one invocation per time, but, after it finishing processing an invocation it can be reused and start to processing the next invocation. When the execution environment is reused we call it a **Warm Start**. Lambda supports concurrency by creating new Execution Environments. Because of Warm starts, it's possible to use storage or memory to speed up future invocations of an Execution Environment, however, the code must support Cold starts.

The Lambda's Execution environment provides a secure and isolated runtime to execute an invocation. The runtime provides the **Environment Variables** you configured together with additional reserved environment variables. These variables are useful to change code behavior without changing your code. Once you publish a version the Environment variables are locked with that version.

The Execution Environment manages the **Memory**, **Timeout** and **Ephemeral Storage** specified in the Lambda function's configuration. You increase your Lambda's compute power by increasing its memory.

You can configure two policies in a Lambda:

-  **Execution Role:** What the function can do. During the Lambda Function execution the function assumes an **Execution Role**, an **IAM Role** that is specified during the Lambda Function creation. It specifies the function's permissions to access other AWS services.
- **IAM Resource Policies**: Who can invoke the function. Identifies which resources can invoke the lambda, including external Principals.

You can use several tools to invoke your function like the Lambda console, a function URL endpoint, AWS SDK, the AWS CLI and more. In addition, the Lambda function can have **Triggers**, a resource configured that allow another AWS Services to invoke the function if certain event or condition occur.

There are three types of invocation model that you can use to trigger a Lambda function:

1. **Synchronous** invocations wait the lambda to process the event and respond. No built-in retries the application code needs to handle it. The API Gateway sends synchronous invocation. It's also possible to create a **Function URL** for your lambda, and use it to consume it synchronously your function. Once created the URL never changes. This feature is ideal for a single-function microservices without needs of advanced requirements.

2. For **Asynchronous** invocations, the Lambda queues the events for processing and returns a response immediately. This type of invocation supports **retries**, **Max Age of Event**, a **Dead Letter Queue** (DLQ) and you can configure it to send response to **Destinations** (SQS queue, SNS topic, Lambda or EventBrige). You can have different destinations in case of failure or success.
   The DLQ is an alternative to the **on-failure Destination** their differences are that DLQ is tied to function's version specific configuration while the Destination is not, the destination also supports additional targets.
   S3 and SNS are examples of AWS Services that invoke the Lambda function asynchronously.
3. You can also use **Pooling** as a third way to invoke lambda functions is using an **Event Source Mapping**. An Event source mapping is a Lambda managed resource that reads the data from an Event Source and invokes the Lambda function with the data. You can use it with services that do not invoke a Lambda function directly. For example, Amazon Kinesis streams or SQS. When using Event source mapping, by default it uses batch records together in a single payload. Similarly to the Asynchronous invocation it supports retrial of the whole batch, destinations and DLQ.

You can create Function's **Versions** to manage deployments of your code by locking its code and most of its settings (runtime, handler, code, environment variables and more). You can also use its ARN to invoke an specific version of a function. The **$LATEST** version pointing to the last unpublished code in your lambda. Once you publish a new version you need to deploy changes to the **$LATEST**  to be able to deploy more versions.

You can create **Aliases** in your function to point to a Lambda's specific version. You can use the Alias to your trigger configuration, and later you can change the version the alias is pointing which would reflect to the triggers invocation. It's also possible to use Aliases to **weight traffic** between 2 versions, but they must have the same execution role, DLQ and cannot be the $LATEST.

All lambda functions always are executed inside AWS Lambda Service VPC (not your account), this adds public networking, security, monitoring by default. It's possible to configure your function to **Private networking**, meaning, accessing your account's VPC. Even having connectivity to your VPC the lambda always runs inside AWS VPC. 

The private networking uses Hyperplane ENI to provide NAT capabilities which is allocated in each subnet in your VPC. Multiple lambda can share the same Network Interface if they share subnet and security group.

As mentioned above Lambdas handle concurrency, multiple invocations at same time, spanning new Execution Environments for each invocation up to a regional limit of 1000 for all functions in that region (which is possible to request quota increase). There's a formula to calculate the concurrency of a function. `Concurrency = (average requests per second) * (average request duration in seconds)`. When you start to receive more Concurrency than the supported you start to experience **Throttling** (dropping requests).

Lambda offers two features to help you to deal with concurrency:

- **Reserved**: Reserves a portion of the Concurrency pool for a specific function. Avoiding that less important functions cause disruption in more important functions.
- **Provisioned**: Pre-initializes a number of Execution Environment ensuring its piece in the concurrency pool and reducing cold starts.

##  TO DO

**Log**

**Layer??**

