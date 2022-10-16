---
title: 'EC2 - Amazon Elastic Compute Cloud'
---

[Documentation](https://docs.aws.amazon.com/ec2/index.html)

## Overview

EC2 is one of the AWS compute offers. You can easily create a virtual infrastructure to run your workloads with EC2.

### Instance type

In EC2 you spin up **instances** (virtual computing environments) based on a **instance type**. The **instance type** is the hardware configuration that determines CPU, memory, storage, and networking capacity. The instance types can be categorized depending on the workload they best suit.

- General Purpose: A balance of compute, memory, and networking resources, and can be used for a wide range of workloads

- Compute Optimized: High-performance processors

- Memory Optimized: Workloads that process large data sets in memory

- Accelerated Computing: Uses hardware accelerators, or co-processors, to perform some functions, such as floating point number calculations, graphics processing, or data pattern matching, more efficiently than is possible in software running on CPUs

- Storage Optimized: High, sequential read and write access to very large data sets on local storage

Each category has **families**, a group of instance types within a family that have common workloads. A category can have several families each supporting a different workload.

Each family contains the **generations** of a instance type. Each new generation improves the existing and has slightly variations on the instance type. 

An instance also has a **size** which vary accordingly with the family and generation. Some examples are *nano*, *medium* and *xlarge*.

You read the instance type from left to right. For example the instance type *c5n.xlarge* reads as:

- Instance family: c - Compute Optimized
- Instance generation: 5
- Attribute: n - Network optimization
- Instance size: xlarge

