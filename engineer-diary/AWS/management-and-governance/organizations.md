---
title: 'Organizations'
---

[Documentation](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

## Overview

AWS Organizations is a global service fully managed by AWS that enhances the multi-account experience in AWS by providing features that eases and centralizes the management of several accounts like consolidated billing, controlling organization policies with Service control policies and hierarchical grouping of accounts.

## Core concepts

When you enable the AWS Organizations with a Standard AWS Account (not a member of an AWS Organization) an **Organizational Root** is created, this represents the very top of the organizational hierarchical structure. Below the root, you can add member accounts, the master account or organizational units.

The **master account**, or management account, is the same AWS Standard Account that enabled the organization. This account becomes the management account upon the enablement. Through this account you can invite other standard account to your organization or even create new member accounts. This account is also known as payer account, due to the **consolidated billing** Organizations provide, all the payment information and billing are managed/accessed through this account.

AWS Organization also adds the concept of **Organizational Units** which can be used to group member accounts and other OU. These containers can only have 1 parent.

In addition, AWS Organizations adds **Service Control Policies** that can restrict which permissions are allowed in the organizational root, organizational unit and accounts. The SCP do not grant access they work like permissions boundaries limiting what the account can do. Even though the root user cannot be denied access, SCP can reduce the scope of accounts, which will ignore the privileges an root user.

SCP can be used in two ways:

- Deny List: Default behavior. SCP gives full access. Adds rules denying services in the account.
- Allow List: Remove SCP full access. Adds rules allowing specific services in the account.



