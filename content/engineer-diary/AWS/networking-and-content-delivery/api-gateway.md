---
title: 'API Gateway'

---

[Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)

Demo:

- [Rest API](https://github.com/RRoggia/aws-workloads/tree/main/api-gateway)

## Overview

API Gateway is a region based AWS Service that allows you to manage your APIs.

## Core Concepts

API Gateway supports three types of APIs:

- **Rest API**
- **HTTP**
- **WebSocket**

### Rest API

Your Rest API exposes a collection of **Resources**, a representation of your business entities. A Resource has a **Path** and its possible to attach documentation to it. A resource can have multiple **Methods**, each method defines one possible interface used to access that resource. Each method specifies one of the HTTP Verb (GET, POST, ...) as a **Method Type**.

A method has two components a **Method Request** and a **Method Response**. The Method Request defines the resource's interface by specifying the required or expected **URL Query String Parameters**, **Request Headers** and **Request Body**. You can also add a **Authorization** or configure the method to require an API key, in addition you can configure a **Request Validator**, which can validate query, headers and body.

The method also contains information about the **Integration** between the Method and a backend service, which can be AWS services, services running within or outside AWS or even a Mock. Similar to the Method an integration is also composed by a Request and a Response.

When the API Gateway receives an HTTP requesting a resource, it follows the following steps:

1. Method Request
2. Integration Request
3. Integration Response
4. Method Response

When using **Mock Integration** configure both the **Integration Request** with a **Template Model** containing a status code and the **Integration Response** with the mock data.

When using the **AWS_PROXY** Integration you can configure the API Gateway to send the an event object to the service being requested. The AWS service can then use this data to process and return a response. Using this integration API Gateway might require permissions to access the AWS Service they are trying to reach.

It's also possible to setup an **HTTP_PROXY** integration, in which you configure the service URL and ports, this is useful for services running outside AWS. When API Gateway receives requests it sends the Integration request as configured and waits it response to send it back to the API Gateway's client.

API Gateway also supports **AWS** and **HTTP** integrations. Both can be used when you want to do more than only proxying the requests, for example, providing data transformation.

In order to make the API available for the end users you have to create a **Deployment**, which acts like a point in time for all your resources. The Deployments is made to a **Stage** which could act as an environment, you can have several Stages and each stage can contain several deployments. In a Stage you can configure which is the active deployment, and configure deployment strategies for new deployments. Other functionalities like Cache, Logging and tracing are also available per Stage.

# Todo

- [ ] Rest API
  - [ ] Endpoint:
    - [ ] Public and private Rest APIs regional, edge?
    - [ ] default is edge
  - [ ] Usage plans
  - [ ] API Keys
- [ ] HTTP API
- [ ] WebSocket API