---
title: 'S3 - Simple Storage Service'
---

[Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

## Overview

S3 is an fully managed service by AWS with regional resiliency. S3 is a type of Object storage, therefore, it stores objects in buckets with a flat structure, each object uploaded receives a key which can be used to retrieve or update the object later.

S3 offers a several features like static website hosting, object versioning, bucket replication across regions and on same region, life cycle configuration rules to choose the most appropriate storage class and more.

## Core Concepts

A **bucket** is a container for objects. By default, when you create a bucket, it's private and only the account root user has permissions to access it. You can add Identity or Resource policies to grant permission to access the bucket. However, only the Bucket policy, which is an resource policy, can grant access to different accounts and anonymous principal. S3 also supports ACLs which are a legacy way of granting permission that provides less flexibility, since it always applies to buckets and objects. 

When you create the bucket you need to choose a globally unique name. This name must be unique across all existing AWS accounts. In addition, you'll have to specify which region the bucket will reside, and unless explicit specified, the bucket data will remain on that region. The bucket is distributed across the several AZs of the chosen region.

You upload **Objects** and its metadata to the bucket, when you upload the object it will receive a key that can be used to retrieve the object later. An object is an atomic unit, therefore, uploading objects with existing keys will overwrite the existing object, with exception of buckets with versioning enabled. Object size can range from 0 to 5TB. In addition, a bucket have virtually no limits of how many objects it can store.

S3 has a flat structure, so it don't allows the creation of folders. However, you can use prefixes to logically group data, the AWS Management console will show the prefixes as folders, even though, in practice they aren't.

### Storage Classes

S3 provides several Storage classes that support several types of data usage. You can consider S3 having two families S3 and S3 Glacier (cold storage).

- **S3 Standard**: General purpose. Frequently accessed objects that contains important data and is not replaceable. This Storage classes will distribute the data in at least 3 AZs.
- **S3 Infrequent Access**: Objects that have infrequent access, but are long lived, important and not replaceable. Storage cost is cheaper than S3 Standard, but, you pay a retrieval fee each time you need to access the object. This Storage classes will distribute the data in at least 3 AZs.
- **S3 One Zone Infrequent Access**: Similar to S3 IA, however, it only distributes in 1 AZ. Therefore, should be used for non critical data with infrequent access that is easily replaceable.
- **S3 Glacier Instant Retrieval**: Similar to S3 IA, however, it offers a cheaper cost, but higher retrieval fee. For data that needs to be accessed once per quarter.
- **S3 Glacier Flexible Retrieval**: For archive, objects cannot be made public and are do not provide instant access. When accessing you need to go through the retrieve process:
  - Expedite: Moves data to IA temporary. Takes from 1 to 5 minutes.
  - Standard: Moves data to IA temporary. Takes from 3 to 5 hours.
  - Bulk: Moves data to IA temporary. Takes from 5 to 12 hours. 
- **S3 Glacier Deep Archive**: Similar to Flexible retrieval, but cheaper and longer retrieval processes.
  - Standard: 12 hours.
  - Bulk: Up to 48 hours.
- **S3 Intelligent-Tiering**: For unknown or changing access patterns. Moves data across storage tiers.
  - Standard, Infrequent Access, Glacier Archive Instant Retrieval
  - (Optional) Archive access, Deep Archive

In addition, consider that:

- S3 IA: 30 days of minimun duration of charge and 128KB per object.
- S3 Glacier Instant Retrieval: 90 days of minimun duration of charge and 128KB per object.
- S3 Glacier Flexible Retrieval: 90 days of minimun duration of charge and 128KB per object.
- S3 Glacier Deep Archive: 180 days of minimun duration of charge and 40KB per object.

### Versioning and MFA Delete

Because, Objects are an atomic unit, S3 provides **versioning** of objects. When the versioning is enabled, every new object uploaded to the bucket will receive a **Version id** property. Therefore, objects with the same key can have several versions and are differentiated by the version id. However, there's always only one current version of the object.

When working with versioning enabled, when you delete an object without specifying its version, it creates a **deletion marker**, which acts as a soft delete and you can delete the deletion marker to restore the object version. When you delete a specific version of an object, then you apply a hard delete.

A bucket has 3 versioning states.

- Unversioned: the default behavior
- Versioning enabled: Associates id to objects.
- Versioning suspended: Do not associates id to objects.

Once you enabled the versioning, you can only suspend it, therefore, only the new objects will not have the id attribute fulfilled. But, the existing objects will keep the versions created, this is important because the  several version of this objects are considered in the pricing.

Once you enable versioning, it's also possible to enable **MFA Delete** which adds a layer of security by requesting two authentication forms during the deletion of an object.

### Static Website hosting

Static Website hosting is an S3 feature that can be used to host websites. You can use  this feature for scenarios where you want to offload static media (move media from a server to S3) or for out of band pages (maintenance or any content that cannot rely on the servers). This feature is very powerful and supports even full client side applications like Single Page Applications.

When you enable the feature, you need to specify:

- index file: The initial html
- error file: An html for non existing routes

You cannot choose the website endpoint, it's based on the bucket name. But, you can use Route 53 and CloudFront to create custom urls.

Static website hosting adds to the pricing a fee for each 1000 requests.

### Encryption

S3 Supports different types of data encryption at rest that are categorized in two groups:

- **Server Side Encryption (SSE)**: Data moves from client to AWS without encryption (only SSL). Encrypts data in the server.
  - **Customer Provided Keys (SSE-C)**
    - Customer manages the keys in the client side
    - AWS manages the encryption/decryption in server side
  - **S3-Manages Keys (SSE-S3)**
    - AWS manages keys and the encryption/decryption in server side
    - Uses AES256 encryption algorithm
    - S3 creates Root Key to encrypt other keys
    - Each object will create a key for the object encryption
    - After encryption the key is encrypted by the root key and store with the object.
    - The key is discarded.
    - Doesn't support role separation 
  - **KMS (SSE-KMS)**
    - AWS manages keys and the encryption/decryption in server side
    - KMS provides a plain text key and a encrypted key to S3
    - DEK are used to encrypt objects, and are stored with it
    - Supports rotation and role separation
- **Client Side Encryption (CSE)**: Data already moves to AWS encrypted
  - The customer manages the keys in the client side
  - The customer encrypts the objects in the client side
  - The customer decrypts the objects in the client side

### Lifecycle configuration

### Replication

S3 are regional services, but the replication feature offers the possibility to replicate a Bucket to other regions or to the same region in the same or different accounts. The replication is not real-time, AWS tries to deliver in a 15 minutes range but doesn't provide guarantee. You can configure it to replicate the all objects or create a filter based on tags, prefixes or both and even change the storage class of the destination bucket.

There are two types of replication:

- Cross Region Replication (CRR)
- Same Region Replication (SRR)

Once the replication is activated it doesn't replicates objects retroactive, only new objects. It also requires versioning to be enabled in both source and destination buckets.

The replication works as a one way replication, changes in the destination bucket to not reflect in the source bucket.

### Pre signed URLs

### Object lock

### Select

It can be used to return parts of an object instead of the whole object. S3 Select uses SQL like statements to pre-filter data in server side and send only the filtered data to the client. Can be used with several formats file like csv, json or parquet.

### Access Logs

### S3 Events

### 



