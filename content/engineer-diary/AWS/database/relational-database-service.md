---
title: 'RDS - Relational Database Service'
---

## Overview

AWS RDS is a AWS fully managed Database server as a service (DBSaaS) that runs in a AWS region. RDS takes care of most of the management and maintenance tasks making easy to setup any of the 6 Database Engines RDS offers.

## Core Concepts

AWS RDS is a private service with AZ resilience, but it can be configured to be have regional, or even global resilience. In RDS you configure **Database Instances**, isolated database environment. One Database Instance can contain several Databases, and each database several tables. 

When you are going to launch a Database instance you need to specify the **Database Engine**. AWS RDS supports several Database Engines, which are the relational database software that runs in the Database Instance:

- MySQL
- MariaDB
- PostgresSQL
- Oracle
- Microsoft SQL Server

A database instance also have different Deployment options:

- **Single DB Instance**: Runs a single instance of the database. Lowest level of resilliency.

- **Multi-AZ DB Instance:** Runs a **primary** and a **standby** instances in different AZs of the same region. Applies **Synchronous replication** to the standby. A transaction is only committed when also applied to the stand-by. The stand-by instance **cannot be accessed** unless a failure occurs and it's promoted, with exception of backups. In case of failures the **CNAME** is automatically change to the failover instance.

- **Multi-AZ DB Cluster**: Runs a primary **write/read** instance and 2 **read-only** in 3 different AZs of the same region. It applies Asynchronous replication to the read instances. A transaction is considered committed when applied to at least 1 read replica. Read replicas can be accessed by clients through their own endpoints. They are useful to distribute load and improve read workload. In cases of primary's failure, RDS manages failover to one of the readers DB instances. 

  Multi AZ cluster provides 3 types of endpoints:

  - Cluster endpoint: The primary instance with write/read access
  - Reader endpoint: Endpoint to connect to one of the read only instances
  - Instance endpoint: Endpoint to a specific instance.

You also need to choose the Instance type of our database instance, this will determine the instance's resources.

- **Standard**:  ...
- **Memory Optimized**: ...
- **Burstable Performance**: ...

Each instance has its own storage. This also applies to standby and read replicas. There are also different offering instance classes for storage.

- **General Purpose SSD**:...
- **Provisioned IOPS SSD**:...
- **Magnetic**:...

