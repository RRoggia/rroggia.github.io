---
title: 'ECS - Elastic Container Service'
---

[Documentation](https://docs.aws.amazon.com/ecs/index.html)

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

### Services

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







# TODO

ECS Anywhere

**Controller** 

**Provisioning**

task group


- [ ] Cluster
  - [ ] Within a VPC
  - [ ] multi AZ
  - [ ] Modes
    - [ ] EC2
      - [ ] Uses auto scaling groups to manage cluster instances
      - [ ] you are responsible for the cluster sizing
      - [ ] Large workload - price conscious
        - [ ] can use reserved instances

    - [ ] FARGATE
      - [ ] tasks and services run from a fargate share infrastructure
      - [ ] tasks and services have network interfaces within the vpc
      - [ ] Large workload - overhead conscios

- [ ] Tasks
  - [ ] Scheduled tasks

- [ ] Service
  - [ ] High availability
  - [ ] Restarts
  - [ ] how we want the task to scale 
  - [ ] Deployment options
  - [x] it can deploy a lb in front of the service
- [ ] Service connect

  - [ ] namespaces




