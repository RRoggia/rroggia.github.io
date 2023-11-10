---
title: 'ECS - Elastic Container Service'
---

[Documentation](https://docs.aws.amazon.com/ecs/index.html)

Demo:

- [Fargate Cluster](https://github.com/RRoggia/aws-workloads/tree/main/ecs/fargate)

## Overview

ECS is an AWS fully managed container orchestration service that is hosted per region and allows you to run, schedule and manage your Docker Containers without having to worry with task scheduling.

## Core Concepts

ECS uses **Clusters** to run your workloads. The cluster can configure different types of **Capacity Providers**, the infrastructure where your containers run, which is responsible for providing the compute resources for the cluster. There are 3 types of Capacity:

- **Fargate**: "Serverless" where AWS manages the compute engines for you.
- **EC2**: You manage the EC2 instances in your cluster.
- **External**: Amazon ECS Anywhere supports VM and on-premise servers.

You can choose and configure more than one Capacity Provider for your cluster.

A **Task Definitions** is a blueprint that contains all the information required to run your application. A task definition describes all the containers and its configuration. For example, the resources required like CPU e memory, the container network mode, which are the capacity provides supported, the operating system, volumes, permissions and more.

The task definition is used to run either a **Standalone Task** or a **Service**. 

- **Standalone Tasks**: Batch jobs that perform and then stop.

- **Services**: Long running stateless applications services and applications that can scale in and out.

The **Service Scheduler** is responsible for the placement decisions based on the placement strategies and constraints. It also monitors and replaces unhealthy tasks.

### Task Definition

The task definition describes a self contained application that can be composed by multiple containers. When you create it there several aspects that you need to consider: 

- The **Family Name** is a unique identifier that groups several **Revisions** of a task definition. When you apply changes to a Task Definition a new revision is created. Each revision is a point in time snapshot.
- The **Launch Type** specifies which capacity providers the task definition supports. When you launch a Task or a Service only the values specified here are valid values.
- When configuring the **Network mode**, tasks definition with launch type `FARGATE` only support `awsvpc` while `EC2` support `bridge`, `host`, `default`  and `none`.
- The **Task Size** specifies the amount of CPU and memory reserved for your task.
- There are two types of roles that you can configure:
  - **Task Execution Role**: Used by ECS and its agents to grant permission to call AWS APIs. It's required to pull Images from ECR or create logs in Cloud Watch.
  - **Task Role**: When your container needs to access AWS Services, it can assume the role and its permissions.

- The **Container Images** describe all the images and how they are executed. It must have at least one image.
  - Container Repository: Either Dockerhub or Amazon ECR.
  - Port mapping: Maps ports from the instance to the container.
  - Resource allocation limits: Hard and soft limits for the resources the container consumes.
  - Environment variables
  - Health checks
  - Log collections: There are several types of Log collections for your container. One of the options is the Cloud Watch, you have to specify the Log Group and can configure the stream prefix for your container.

There's three possible states that a Task Definition can have:

- **ACTIVE**: Default state when you can create the task definition or new revisions.
- **INACTIVE**: When you deregister the task it moves to this state. Tasks and services can still scale up or down, however, you cannot create new tasks or services with the inactive task definition. Adding a new revision of an Inactive task definition moves it back to active.
- **DELETE_IN_PROGRESS**: Transitions from inactive to DELETE_IN_PROGRESS. You can't create or update tasks and services nor change existing services and task to use this task definition.

When Inactivating or deleting task definitions the tasks and services running are not disrupted. 

### EC2 Launch Type

When deploying a Service in a EC2 Launch Type (Fargate do not support it) the Service Scheduler applies first the **Task Placement constraints** and then the **Task Placement Strategies**.

The **Task Placement Constraints** are rules used to filter the existing EC2 instances. Therefore, only the instances that matches the constraint can have a task placed.

There are two types of constraints:

- **distinctInstance**: Places each task on a different instance.
- **memberOf**: Places each task on instances satisfying an expression.

The **Task placement strategy** is the algorithm used to determine the instances for placement or termination. You can have multiple strategies in your task placement.

The strategy types are:

- **Binpack**: Optimizes memory or CPU. Places task to leave the least amount of resource.
- **Random**: Places task randomly.
- **Spread**: Places tasks evenly based on an attribute. `InstanceId` or ECS attributes: `availabiltiy-zone`, `instance-type`, `os-type`, `ami-id` are the valid attributes fields.

By default the Service Scheduler uses the `spread` across `attribute:ecs.availability-zone` Task Placement strategy. It tries its best to spread evenly the instances across AZ. 

### Tasks

There are few options to start a new Task in ECS:

- `runTask`: Allows you to use Task Placement Strategies and Constraints.
- `createTask`: Allows you to specify directly the containers Id
- Scheduled Tasks: Integrate with EventBridge to trigger Tasks at a given schedule.
- Through the AWS console.

### Services

The Service Deployment configuration determines the deployment strategy your Service uses. You an use one of the following **Deployment Type** :

- **Rolling Update**: Uses both `minimumHealthyPercent` and `maximumPercent` to determine how many instances can be added/removed.
  - `minimumHealthyPercent`: The desired tasks times Percentage rounded up determines the minimum number of healthy tasks.
  - `maximumPercent`: The desired tasks times Percentage rounded down determines the maximum number of tasks that can be started.

- **Blue/Green with CodeDeploy**: Shifts traffic between blue and green instances accordingly to the algorithm.
  - Canary: Shifts traffic in 2 increments. The second increment X minutes after the first.
    1. `ECSCanary10percent5Minutes`: Shifts 10%, then after 5 minutes shifts the remaining 90%.
    2. `ECSCanary10percent15Minutes`: Shifts 10%, then after 15 minutes shifts the remaining 90%.
  - Linear: Shifts traffic in equal increments at every X minutes.
    - `ECSLinear10PercentEvery1Minutes`: Shifts 10% every 1 minute. After 10 minutes, all traffic is shifted.
    - `ECSLinear10PercentEvery3Minutes`: Shifts 10% every 3 minute. After 30 minutes, all traffic is shifted.
  - All at once: Shifts traffic all at once.
    - `ECSAllAtOnce`
- **External Deployment**: Third party deployment controller.



