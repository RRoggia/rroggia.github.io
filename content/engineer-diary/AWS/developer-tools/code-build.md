---
title: 'Code Build'
---

[Documentation](https://docs.aws.amazon.com/codebuild/index.html)

## Overview

Code Build is AWS build service. It provides compute resources to compile, run unit tests and  to produce your artifacts. This service runs for an AWS Region.

## Core Concepts

You start creating a **Build Project**, in it you specify which and where is the **Source code** . Currently it supports S3, CodeCommit, GitHub (public and enterprise) and BitBucket. Each source has to specify one branch.

The Build project has an **Environment**, it determines the base image and the IAM Service Role that is going to be used. An environment can also have **Environment Variables** that can be consumed during the build, certificates, compute type specification and VPC connectivity configuration.

The build logs can be configured to use both CloudWatch and S3.

A build's **Artifact** can be published to a S3 Bucket.

You can generate Notification based on the Build State Events (Failed, Succeeded,...) this can send notifications to a SNS Topic, Slack or Microsoft Teams.

A `buildspec` file needs to be provided by the source or in the Build Project. It specifies the commands to be executed during the build phases. There are 4 phases:

- `install`: Installing packages in the build environment
- `pre_build`: Install build dependencies
- `build`: Run the build steps
- `post_build`: Generate or publish artifacts generated in build phase

The `buildspec` file can also specify environment variables or retrieve values from the Parameter Store or Secrets Manager.

Everytime you run the build project, it generates a log in the **Build History**. You can start the build manually, create **Build Triggers** to run with a frequency or integrate with CodePipeline.

