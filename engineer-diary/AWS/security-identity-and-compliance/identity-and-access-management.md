---
title: 'IAM - Identity and Access Management'
---

[Documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)

## Overview

AWS Identity and Access Management service, as the name suggests, is one of the core service for securing AWS accounts through Authentication (Identity) and Authorization (Access).

IAM is an AWS fully managed service that runs globally in an AWS Account. Therefore, the users, policies and other resources created in the service can be used across all the regions in an AWS account. In addition, because the service runs globally, it provides global resiliency, where all the regions must fail in order to the service have downtime.

## Core concepts

A **Principal** is a person or application that uses the AWS account root user, an IAM user, or an IAM role to sign in (authentication) and make requests to AWS.

IAM supports three types of **identities**:

- **Users**: They represent users or applications. Each user represents only by 1 principal. They can have two types of credentials (Management console credentials and access keys) that provide long-term access to AWS resources.
- **Groups**: Used to group a set of IAM users.
- **Roles**: An identity that can be assumed by multiple principals that need temporary access to AWS resources.

Both Users and Roles are considered **Entities** and can be used to identify a principal during the process of Authentication. Groups are not entities, and can't be used to identify principals.

Identities can have **Policies** attached to it. Policies are used to specify what identities are allowed and not allowed to do. The policies are evaluated in every entity's request to AWS resources to determine whether the entity has permissions (authorization) to access the requested resource.

### IAM Users

Anything requiring long-term access to AWS, for example, users and applications. Users will have two types of credentials.

- Management console: User and password to access the AWS Management console web application.
- Access Keys: For programmatically access of the AWS resources. User can have up to two access keys. Although, you generally will only use one key, the second key enables keys rotation without downtime.

IAM supports up to 5000 IAM users per account. Therefore, there is restrictions in any architectures using IAM as their user base.

Users can be member of up to 10 groups.

### IAM Groups

Containers for users. You create groups to centrally manage the permissions of a group of users.  They don't have credentials, you cannot use it as identity during authentication and they can't be referenced as principal in resource base policies.

### IAM Roles

Multiple principals that require short-term access to specific AWS resources, for example, several Lambda functions that need to access S3. A principal is not the role, it assumes the role.

Roles support two types of policies:

- **Permission Policy**: Like identity based permission they grant and deny privilege to execute actions on AWS resources.
- **Trust Policy**: It's a required resource-based policy that is attached to a role and specifies which principals are trusted to assume the role. The principals can be entities, accounts and services.

Use cases:

- AWS Service needs to use other AWS Service.
- Break glass for key: User has a set of permissions for daily basis, but can assume a role with more privilege in case of emergencies.
- Single Sign On or Organizations with more than 5000 identities: All developers could assume the development role to have access to the AWS Services required to develop.
- Cross account access

### IAM Policies

Policies are used to grant or deny permission to execute actions on AWS resources. The policies are used after the authentication during the authorization evaluation process. Policies are JSON documents that can be attached to Identities.

Policies can be inline or managed.

- **Inline** policies are added directly to a resource. And it has one to one relationship with that resource. Therefore, it does not allow reuse.
- **Managed** policies are standalone IAM resources. It's whole lifecycle is managed through IAM. You can create a policy and attach the same policy to several identities.
  - AWS Managed: AWS manages this Policies. A set is available by default.
  - Customer managed: You manage it.

There are several types of Policies:

- **Identity-based**: Identity-based policies grant permissions to an identity.
- **Resource-based**: Inline policies attached to a resource. They grant permission to the principal that is specified in the policy. An example is Role Trust Policy.
- **Service Control Policy**: Used by AWS Organizations to determine maximum permissions accounts, or organizational structures can have.

...

#### Policy Evaluation

Policies are evaluated following this rules:

1. Explicit Deny
2. Explicit Allow
3. Implicit Deny

During the evaluation, all the statements from all policies attached to the principal requesting the resource are merged and processed together following the rules described above.

Therefore, consider that if you don't Explicit Allow permissions, the default behavior is the Implicit Deny. And also, even if you had Explicit Allow permission for a resource, if you have an Explicit Deny, you'll not be able to access the resource.

## Examples

This is an example of an IAM Policy that gives admintrator access, meaning, all actions in all services are allowed.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        }
    ]
}
```

You read the JSON like this:

- (Optional) Sid: An identifier for the statement. It can be used to describe the statement.
- **Effect**: Either "Allow" or "Deny" access
- **Action**: Determines the API calls the policy is referring to
- **Resource**: Determines which AWS Resource the policy is referring to
- (Optional) **Condition**: It brings flexibility to the policies to support all scenarios





