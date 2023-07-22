---
title: 'Code Commit'
---

[Documentation](https://docs.aws.amazon.com/codecommit/index.html)

## Overview

Code Commit is a version control system (VCS) service  that enables you to store and manage Git repositories in your AWS Account.

It offers similiar functionalities like the most known VCS products like GitHub.

## Core Concepts

The **repository**, represents a git repository, is its base unit. For the developers to clone the repository locally they need to setup either the SSH or HTTPS security credentials in the IAM serivce. The user authorization is also managed by the IAM.

You can create **Approval rule** templates for pull request (PR) and assign it to repositories, you can define a **minimum number of approvals** and a **pool of approval members**, which only their approval are count for the minimum number of approvals. These rules can be applied only for PRs of a specific destination branch.

Code Commit can send notifications based on events (PR created, comments on PR, ...) to SNS topics, slack or microsoft teams.

Code Commit also offers the possibility to trigger either a SNS Topic or a Lambda Function everytime an Event is triggered 

It also integrates with Amazon CodeGuru Reviewer which sends recommendations on how to improve your code in the PRs.

Besides it also offers the common functionality expected like creating PR, managing branches, navigating through the code,...
