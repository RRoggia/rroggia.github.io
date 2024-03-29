---
title: 'EC2 - Amazon Elastic Compute Cloud'
---

[Documentation](https://docs.aws.amazon.com/ec2/index.html)

## Overview

EC2 is one of the AWS compute offers. You can easily create a virtual infrastructure to run your workloads with EC2. EC2 is a AZ Resilient service.

## Core Concepts

In EC2 you spin up **instances** (virtual computing environments) based on a **instance type**. The **instance type** is the hardware configuration that determines CPU, memory, storage, and networking capacity. The instance types can be categorized depending on the workload they best suit.

- **General Purpose**: A balance of compute, memory, and networking resources, and can be used for a wide range of workloads

- **Compute Optimized**: High-performance processors

- **Memory Optimized**: Workloads that process large data sets in memory

- **Accelerated Computing**: Uses hardware accelerators, or co-processors, to perform some functions, such as floating point number calculations, graphics processing, or data pattern matching, more efficiently than is possible in software running on CPUs

- **Storage Optimized**: High, sequential read and write access to very large data sets on local storage

Each category has **families**, a group of instance types within a family that have common workloads. A category can have several families each supporting a different workload.

Each family contains the **generations** of a instance type. Each new generation improves the existing and has slightly variations on the instance type. 

An instance also has a **size** which vary accordingly with the family and generation. Some examples are *nano*, *medium* and *xlarge*.

You read the instance type from left to right. For example the instance type *c5n.xlarge* reads as:

- Instance family: c - Compute Optimized
- Instance generation: 5
- Attribute: n - Network optimization
- Instance size: xlarge

EC2 Instances are private services, they run within VPC's subnet. They are AZ resilient, if an AZ fails the whole subnet with the EC2 instances fail. EC2 instances run in a **EC2 Host**, which is are the racks with servers in AWS datacenter. Usually one EC2 Host is shared by several customers but the EC2 instances are isolated. However, it's possible to allocate **Dedicated host**.

When you launch a EC2 machine you need to select a **Amazon Machine Image, or AMI**. AMI provides the information required to launch an instance. There are several AMI Types which are Quick Start, AWS Marketplace, My and Community. You can search for AMIs using the  **AMI Catalog**.

An AMI is a region specific resource and it's composed by:

- **Root Volume Template**: which is the drive that boots the OS.
- **Launch Permissions**: Who is allowed to use the AMI to launch instances.
- **Block Device Mapping**: Specifies the volumes to attach to the instance when it's launched.

A AMI's Launch Permission can be **Public**, where all AWS accounts can access it. It can be **Implicit**, only the owner has access to launch EC2 instances. Or it can also be **Explicit**, where you can choose which AWS Accounts can access it. An AMI can be baked by using EBS or EC2 instance store.

You can create an AMI from a running EC2 instance. When you create it, it creates a EBS Snapshot. AMIs cannot be changed once they are created. But, you can create a copy, and you can even change the region of the copy. If you are finished using the AMI you can deregister it.

The EC2 Instance can assume the following states:

- **Pending**: When launched or restarted. Moves to running
- **Running**: Moves to Rebooting, Stopping or shutting-down.
- **Rebooting**: Moves to Running.
- **Stopping**: Moves to Stopped.
- **Stopped**: Moves to pending.
- **Shutting-down**: Moves to terminated.
- **Terminated**: Ends life cycle.

EC2 offers several **Launch types** that apply different charge rates. But, in general you are going to be charged for compute capacity per hour or per second, data transfer out to the internet and within the same region are also charged and additional Elastic IP addresses are also charged.You are only charged during the running or in the stopping state when it's preparing for hibernation. This is because EC2 needs to copy the memory to the EBS root volume.

**On demand** EC2 instances you pay per second of the compute capacity you use without long-term commitment or up front costs, however, you also don't have the benefit of discounts, you pay the full price. These instances run on a shared EC2 host but are isolated from other instances. On demand instances do not suffer interruption, and do not offer capacity reservation. You can change the instance type of an EC2 instance if it's stopped.

**Reserved Instances** provide a discounted hourly rate for EC2 instances, but it requires a long-term **commitment of 1 or 3 years**. You can choose to pay **All upfront**, **Partial Upfront** or **No Upfront** depending on your option you might get a better fee rate discount. There are two scopes of Reserved Instances:

- **Regional**: Reservation applies to a region. It doesn't reserve capacity. But, the discount applies regardless of the AZ you deploy your instance and as regardless of the size of the instance, as long it using the reserved family.
- **Zonal**: Reservation applies to an AZ. It reserves capacity. The discounts only apply if the reservation's AZ, instance type and size matches the EC2 instance type.

In addition to the scope you also have to choose a offering class for the reservation instance. There's also two options:

- **Standard**: Higher discount, don't allow exchange. Allows to buy and sell in Marketplace.
- **Convertible**: Lower discount, allows exchange. Don't allow to buy and sell in Marketplace.

RI allow you to modify the instance size(within same family and generation), the AZ and the scope. You can also modify a subset of a RI or merge two RIs. Convertible RI also allow you to exchange the RI to another RI with different configuration.

You can also choose to launch **Spot instances**, this option takes advantage of unused EC2 capacity in the AWS Cloud. It works as an auction, you set a limit on how much you would pay for the instance hour, and as long the Spot instance fee is lower than the amount you specified you can use the EC2 instance. The fee is determined based on usage of the AWS Cloud. Because, this type of instance has interruption, applications running on spot instances should be able to tolerate interruptions. AWS gives you 2 minutes warning before interrupts the instance.
