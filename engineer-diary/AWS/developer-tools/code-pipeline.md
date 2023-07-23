---
title: 'Code Pipeline'
---

[Documentation](https://docs.aws.amazon.com/codepipeline/index.html)

## Overview

AWS CodePipeline is a continuous delivery service. It's used together with Code Commit, Code Build and Code Deploy to automate the release of your software. This service runs for an AWS Region.

## Core Concepts

CodePipeline has the base unit as the **Pipeline**. When you create it, you specify its name, and assign an IAM Role that is going to be assumed during the execution. In addition, you can choose a S3 Bucket to store the Pipeline's Artifact as well as an encryption key (either AWS Managed Key or a Customer Managed key).

A Pipeline has a **Source stage**, which integrates with CodeCommit, ECR, S3 or market VCS. When using CodeCommit as its source you can choose how to detect the changes in the source (CloudWatch Events or CodePipeline periodic pulls).

A Pipeline can have a **Build stage**, which integrates with CodeBuild or Jenkins. In the build step you can also configure environment variables (Plain Text, Parameter Store or SSM).

A Pipeline can also have a **Deploy stage**, which integrates with CodeDeploy.

A Pipeline must have at least two Stages. The source stage is required, but you can choose with build, deploy or both.

The Pipeline execution is trigerred automatically based on the source configuration, through the **Pipeline History** you can list the pipeline's executions. Each pipeline's execution shows details about the actions executed (stages) and their state.

Similar to the other AWS Services you can configure notifications based on Events to SNS Topics, Slack or Microsoft teams.