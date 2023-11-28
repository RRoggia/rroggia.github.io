---
title: 'Key Management Service - KMS'
---

[Documentation](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)

## Overview

KMS is a regional service that eases the management of cryptographic keys and encryption/decryption of data. KMS integrates with several AWS services to encrypt data in transfer and at rest.

## Core Concepts

The core concept in KMS are the **Keys**, which are composed by metadata and the cryptographic material. There's three possibilities to whom manages a key:

- **Customer Managed**: You create and manages the keys. Highly configurable.
  - You are responsible for setting the security policies, rotating their cryptographic material and much more.
- **AWS Managed**: AWS creates and manages the keys in your account. You cannot use it, the services uses in your behalf. Has the visibility, but no control.
  - Keys rotates automatically every year
- **Owned Keys**: AWS manages the keys in their account. No visibility, and no control.

It's important to notice that the key cryptographic material never leaves AWS, with the exception of the key's public key.

When creating the key you need to specify the Key's **Encryption Type**, it varies from:

- **Symmetric**: You use the same key for encryption and decryption.
  - HMAC
- **Asymmetric**: You have two keys, one public and one private. You use both for encryption and decryption or signing and verifying messages.
  - Sign and Verify

You can also choose the Key's **Regionality** whether is going to be used in a **Single Region** or in **Multi Region**. In Multi Region keys, they are replicated in other regions.

### Encryption And Decryption

#### Symmetric

You can use the `KMS:Encrypt` and `KMS::Decrypt` methods to directly encrypt data. 

1. Send to the **encrypt** method the `KeyId`, the `Plaintext` (the data to be encrypted) and the `EncryptionAlgorithm` . The API returns the `CiphertextBlob` which is the data encrypted.
2. Call the **decrypt** method with the `KeyId` and `CiphertextBlob`. The API returns the data decrypted. 

### Data Keys (Data Encryption Keys)

KMS can generate **Data keys** to encrypt large amount of data outside KMS. The Data keys implement the pattern called **Envelope encryption**. 

1. Encrypts the data with a **Plaintext key**
2. Encrypts the **Plaintext key** with **KMS key**
3. Discard the **Plaintext key**
4. Store the **Encrypted plaintext key**
5. Decripts the **Encrypted plaintext key** with **KMS Key**
6. Decripts the data with plaintext key 

KMS do not uses data key to do cryptographic operations, however, you can data keys together with **AWS Encryption SDK**.

To generate the Data Keys you can use the `GenerateDataKey` API for immediate use or the `GenerateDataKeyWithoutPlaintext` to use together with `Decrypt` in a future use. Similarly, the `GenerateDataKeyPair` and `GenerateDataKeyPairWithoutPlaintext` can be used for asymmetric keys.
