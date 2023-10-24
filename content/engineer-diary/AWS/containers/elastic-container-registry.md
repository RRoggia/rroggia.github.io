---
title: 'ECR - Elastic Container Registry'
---

[Documentation](https://docs.aws.amazon.com/ecr/index.html)

Demo:

- [Private Repository](https://github.com/RRoggia/aws-workloads/tree/main/ecr)

## Overview

ECR is an AWS fully managed Container Image Service that is hosted per region and allows you to manage your Docker Container Images.

## Core Concepts

By default ECR provides two types of **registries** private or public. The registries store the **Repositories** that manage the Docker or OCI (open container initiative) images. See the differences between both:

- **Private**: User require permission in order to call the APIs or fetch/push images. In addition, offers **image replication** between regions or accounts, image scanning or to **cache public registries** in your private registry.
- **Public**:

Each AWS account is provided with a default private and public Amazon ECR registry. For private repositories, you can configure tag **Immutability** to your repository to ensure you don't override existing tags. By default, ECR uses **AES-256 encryption** algorithm to encrypt the contents of your repository, however, it integrates with AWS KMS add flexibility to configure the encryption.

You can use **Life cycle policies** in your repository to automate the image life cycle management. You can specify Life cycle Rules that will expiry you images based on two factors:

- `sinceImagePushed`: Time limit that images exist in the repository.
- `imageCountMoreThan`: Number of images for a given prefix tag.

For example, after 10 days expire an image or after 10 images of the tag with prefix prod expire the oldest image.

Your repository can **scan** your images to protect from vulnerabilities. There are two types of Scan:

- **Basic**: Scans for the Common Vulnerabilities and Exposures (CVEs). It can be configured per repository (deprecated), at private registry level or triggered manually. At registry level you can configure filters to which repositories should apply the basic scans.
- **Enhanced**: Integrates with Amazon Inspector to scan both the operating system and programming language package vulnerabilities.

Each repository can have multiple image tags.





