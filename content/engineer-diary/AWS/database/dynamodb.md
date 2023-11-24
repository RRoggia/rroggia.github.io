---
title: 'Dynamo DB'
---

[Documentation](https://docs.aws.amazon.com/dynamodb/)

Demo:

- [Private Repository](https://github.com/RRoggia/aws-workloads/tree/main/dynamodb)

## Overview

DynamoDB allows you to create **Tables** (a collection of Items) to store your **Items**, each Item contains a collection of **Attributes**. There are two types of tables:

- **Table**: Replicated in multi AZ within a Region.
- **Global Table**:  Replicated in multi Region. Only supports Eventually consistent reads.

Tables also have a class:

- **Standard**: General purpose
- **Standard Infrequent Access**: Long term data with infrequent access data

Because, DynamoDB is a NoSQL database items do not require to have a specific schema, each item can have its own attributes, however, all the items must have the **Primary Key**. The primary keys are used to identify each item of a Table. There's two types of primary keys:

- **Simple**: Partition Key
- **Composed**: Partition Key + Sort Key

The partition key is one of the table's attribute and it's used as input in an internal HASH function used to determine which partition the item is going to be store. Partition keys are also known as **Hash attribute**. For composed Primary keys, the same logic described previously applies, but, in addition to that the items with same Partition key are stored in the same partition and sorted by the Sort key attribute. The Sort keys is also known as **Range attribute**.

In addition to the primary key, you can also create secondary **Indexes** to improve the search patterns in your table. There are two types of secondary indexes:

- **Local Secondary index** (LSI): It uses the same Partition Key but you can specify a different Sort Key. It must be specified during the Table creation. Maximum 5 LSI.
- **Global Secondary Index** (GSI): It can use completely different Partition and Sort keys. Maximum 20 GSI.

You can create **Backups** for your table or activate the **Point in time recovery** which automatically manages the back for you allowing to restore your data to any point in time during the previous 35 days.

By default all data is **fully encrypted at rest** the AWS KMS keys are managed by Dynamo. You can configure it to use AWS managed keys in KMS.

### Capacity Mode

The capacity mode determines how you are going to be charged for reading and writing data. There is two options to capacity mode

- **On Demand**: No need to provision, pay per request
- **Provisioned**: You specify the Read and Write Capacity and auto scaling rules based on percentage of utilization.

For the Provisioned mode you need to calculate the **Read Capacity Unit** (RCU) and **Write Capacity Unit** (WCU) see below how to estimate their values.

#### Read Capacity Unit

Each RCU can reads items up to 4 KB, items that exceed use more RCUs. Depending on the Request read mode the **Read Request Unit** also changes:

- For **Strongly consistent read** you spend **1 RCU** per request.

- For **Eventually consistent read** you spend **0,5 RCU** per request.

To calculate the RCU for a given item you use the following formula:

`Item size / 4KB * Read Request unit `

Therefore, an Item of 12KB you would spend:

- `12 / 4 * 1 = 3`
- `12 / 4 * 0,5 = 1,5 `, rounded up to `2`.

#### Write Capacity Unit

Each Write Capacity Unit writes up to 1KB, therefore, it's simpler to use calculate the amount of WCU required. See the formula below:

`Item Size / 1KB`

Therefore, an Item with 12KB would require 12 WCU.

### Reading Data

Dynamo DB API offers different methods to fetch data from the database:

- **GetItem**: Returns the Item identified with the given Primary Key in the Table.
  - By default, it uses **eventual consistency reads**, however, it supports **consistent reads**.
  - Unless you specify a `ProjectionExpression` with the item's attributes that you want, all item's attributes are returned.

- **Scan**: The scan operation scan all items of a Table, secondary index or global index. When creating the request consider:
  - By default, it uses **eventual consistency reads**, however, it supports **consistent reads**.
  - Unless you specify a `ProjectionExpression` with the item's attributes that you want, all item's attributes are returned.
  - You can use a  `FilterExpression` to filter the items. 
  - ` ExpressionAttributeNames` and `ExpressionAttributeValues` are used together with other Expressions to create placeholders for values and attributes.
  - For pagination using the `Limit` or when the request exceeds 1 MB, you can send the `ExclusiveStartKey` in your next request, to start the scan from after the last key read.
  - The `Limit` specifies how many items are going to be scanned. If you apply a `FilterExpression` together with a `Limit`, the number of items returned can be lower than the `Limit` even if there's more items that match the `FilterExpression`.
  - You can use the `TotalSegment`and `Segment` to run a parallel scan for big tables.

- **Query**: Returns all items with that partition key value. 

### Streaming item-level changes

You can configure Dynamo to capture and push the item-level changes to both:

- Dynamo DB streams: Stores information in a log for 24h
  - Supports different view types
    - Only key attributes
    - New item
    - Old item
    - New and Old item
- Kinesis data stream

