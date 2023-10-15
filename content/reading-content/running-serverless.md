---
title: 'Running Serverless'
language: 'en-US'
status: 'Planning'
coverPath: 'running-serverless'
date: '2021-01-01'
---

## 1. Serverless in five minutes

> Serverless applications are, at the most basic technical level, software that runs in an environment where the hosting provider is fully responsible for infrastructural and operational tasks such as receiving network requests, scaling the computing infrastructure on demand, monitoring and recovery.

> Serverless applications only need to provide the code that should run when an event happens and configure the triggers in the execution environment to call that code.

Two main benefits:

1. Short time to market
2. Reduced operational costs

### The pricing model

>  (AWS Lambda) provides standardized execution environments ... and algorithms to automatically scale containers according to the workload.

> The serverless pricing model is a lot more important than the technology for application developers.

> ... you pay for actual usage ... You never pay for idle infrastructure or when tasks are waiting on user requests.

> The maximum memory allowed for a task, and the time it spent executing

> When companies pay for reserved capacity, copies of the production environment usually multiply the operational costs, even though they are idle most of the time. That is why staging and acceptance testing environments usually end up being slimmed-down versions of the real thing.

> With billing based on actual usage, environments don’t cost anything if they are idle.

#### How request pricing affects deployment architecture

> serverless is effectively platform-as-a-service - Simon wardley

> The three critical aspects of a serverless application:
> • Infrastructure providers are responsible for handling incoming network requests.
> • Operational cost is based on actual utilization, broken down by individual requests.
> • Technical operations (deployment, scaling, security and monitoring) are included in the price.

> The number of requests matters, not the number of environments.

#### How request pricing affects security

> each Lambda function can do a focused task and work under significantly restricted access privileges. It becomes easy to apply the principle of least privilege, allowing a task access only to resources and information required for its legitimate purpose

> Because the service provider takes care of containers, it was able easily to drain traffic from old versions, send new requests to patched containers and just manage the whole thing for us.

#### How request pricing affects product decisions

> With Lambda, you can launch a new version for the specific customer as soon as the feature is ready, and keep everyone else on the old version until the feature is fully developed. Running two environments doesn’t really cost any more than a single one.

> Just create an experimental version of the application and send % of the traffic there. he number of users and requests is still the same, so running two versions costs the same as working with a single version.

### Important AWS Lambda technical constraints

> The four important technical limitations that you needed to consider when evaluating whether something should run in Lambda:
>
> * No session affinity
> * Non-deterministic latency
> * Execution time limited to 15 minutes
> * No direct control over processing power

#### No session affinity

> Purely on Lambda, there is no way to control request routing or somehow ensure that requests from the same source arrive in sequence to the same destination.

> There are no guarantees about preserving state across requests, and application developers have no control over the routing.

> Don’t design for stateless execution, design for a share-nothing architecture.

> You can still cache or pre-calculate things that do not depend on a particular user, but user sessions and state have to be somewhere else

#### Non-deterministic latency

> Lambda is optimized for maximizing throughput, not for minimizing latency.

> The latency of processing a single request isn’t really deterministic.

> A cold start, in the serverless jargon, is when an incoming request needs to wait for a new Lambda instance for processing

> empirical tests suggest that with JavaScript or Python, the cold start is less than half a second. With Java and C#, it still may take a bit longer depending on the application size,

#### Limited execution time

> Currently, a Lambda function is allowed to run for three seconds by default, and you can configure it to allow up to 15 minutes.

> instead of using Lambda to start a remote task and then wait for it to complete, split that into two Lambdas

#### No direction control over processing power

> The only container choice you can make is the amount of memory, from 128MB to about 3 GB. Lambda is not good for tasks that require GPUs.

> The memory configuration has an indirect impact on processing power.Lambda allocates CPU power in proportion to memory, so that at 1792 MB a function has access to one full virtual CPU.

> With Node.js, all tasks run through a single core anyway, so with JavaScript you won’t get any further processing speed improvements if you ask for more than 1.75 GB. With Java or other languages that can take advantage of multiple cores, asking for the maximum allowed memory might give you faster responses and lower cost for CPU-intensive tasks.

> the best way to optimize costs and performance is to explore various parameter combinations

### When to use Lambda

> Lambda is great for use cases where throughput is critical and the tasks parallelise nicely.

> Any single request taking a few hundred milliseconds more than average won’t be noticeable to typical users, and Lambda will ensure that everyone gets served relatively quickly regardless of traffic spikes.

> Longer on-demand computational tasks that can execute in less than 15 minutes, or could be split into independent segments

> Tasks that need high availability and good operational infrastructure, but do not need to guarantee latency

> Lambda is currently not suitable for tasks that require guaranteed latency

> (Lambda is currently not suitable) ...tasks that could potentially run for longer than 15 minutes.

> (Lambda is currently not suitable)... tasks that require a huge amount of processing power and coordination

# Part I - Basic development tasks

## 2. Setup tools for local development

> The AWS Serverless Application Model (SAM) is a set of products that simplify developing, testing and deploying applications using AWS Lambda.

## 3. Create a web service

> SAM command line tools can generate sample projects and events, so you can get started easily

> The --runtime argument tells SAM which programming language we’ll use to write the Lambda function, or more precisely which execution environment it is intended to run in.

> Lambda has pre-packaged execution environments, called runtimes, for many popular language

### Infrastructure as a code

> CloudFormation converts a source file describing an application infrastructure (called template) into a set of running, configured cloud resources (called stack).

> We can modify the template file, and CloudFormation will reconfigure or delete only the resources that actually need to change. If a resource update fails for whatever reason, CloudFormation will reset all the other resources to the previous configuration, managing a whole set of infrastructural components as a single unit.

> The transform setting activates SAM features and resources, allowing us to use compact descriptions for many building blocks commonly used in serverless applications.

### The lambda programming model

> The Lambda function is asynchronous in JavaScript, meaning that it has to either be marked as async (line in the previous listing) or return a Promise .

> In case of HTTP requests, the Lambda function needs to respond with an object containing the status code and the body of the HTTP response.

### Deploying SAM applications

> In order to create a Lambda function, CloudFormation expects a fully self-contained ZIP archive.

> In general, turning a SAM application on your disk into resources running in AWS requires three steps:
>
> 1. Build: create a clean copy of all Lambda functions, remove test and development resources, and download third-party dependencies.
> 2. Package: bundle each function into a self-contained ZIP archive and up load to S3 , and produce a copy of the source application template that points to remote resources instead of local directories.
> 3. Deploy: upload the packaged template to CloudFormation, and execute the changes to create a running infrastructure.

#### Step 1: Build

> `sam build`

> If your build process needs to compile binary executables, pass the --use-container option to sam build. his will execute the build process inside a Docker container matching the Lambda runtime.

#### Step 2: Package

> we will first need an S3 bucket to host our function packages. In the continuous delivery jargon, this will be our binary artefact storage.

> SAM has a convenient shortcut to zip up and upload function packages to S3.
>
> `sam package --s3-bucket s3-unique-bucket-name --output-template-file output.yaml`

### Step 3: Deploy

> `sam deploy --template-file output.yaml --stack-name sam-test-1 --capabilities CAPABILITY_IAM`

### Inspecting a Stack from the command line

> AWS command line tools use the JMESPath query syntax

## 4. Development and Troubleshooting

> I strongly suggest using SAM and CloudFormation to manage functions that you actually care about, in order to perform reliable and reproducible deployments.

> Reliable centralised logging for a highly distributed system is a huge technical challenge, but
> with Lambda that comes with the basic setup and is included in the price.

### Retrieving execution logs

> CloudWatch groups logs into two levels of hierarchy: log groups and log streams. Log groups correspond to a logical service. AWS Lambda creates a log group for each function.

>  A single log group can have multiple log streams, which typically correspond to a single running process.

> Lambda creates a log stream for each container instance (each cold start).

> To show older messages, specify a starting point with `-s`. You can also restrict the end of the message period with the `-e` option. Provide a relative value such as `5mins ago` or a speciﬁc time in the format `YYYY-MM-DD HH:MM:SS`.

#### Retrieving logs from the command line

> You can either provide the full physical name of the function, in which case the stack name is not important, or provide the logical name of the function and the stack name.

## 5. Safe Deployment

> a Lambda deployment does not create or destroy any containers. It only creates a new function configuration.

### Function configuration

> With AWS Lambda in particular, events do not target a particular function. They target a particular version of a function, or, more precisely, events are connected to a version of the function configuration.

> Function configuration describes all the properties of a runtime environment necessary to spin up a new container.
>
> * The runtime type and version
> * How much memory and time the function can use
> * The URL of the function code package
> * The IAM role specifying what this function can access in AWS and who can call this function
> * Error recovery, logging and environment parameters of the function

> (About $LATEST Version) When we run `sam deploy`, Lambda only needs to update this conﬁguration; it does not really need to start up or stop any containers.

### Versions and aliases

> Published versions are read-only copies of function configurations, and they are not wiped out after a subsequent update.

> An event source can request that a particular published function version handles its events.

> Lambda allows us to declare configuration aliases, meaningful names pointing to a numerical version. For example, we can create an alias called live to represent a published configuration version, and set up all event sources to request that alias. After an application update, we do not need to rewire event sources.

> When an AWS Serverless Function template includes the AutoPublishAlias property, SAM will automatically conﬁgure all event sources speciﬁed inside the resource to request that particular alias.

> Unlike application hosts where rolling back to a previous version requires another deployment, switching back and forth between versions with Lambda can be almost instant. You can also use old published versions for as long as you want.

### Gradual deployments

> An alias always points to some numerical version, but it can point to more than one version at the same time.

> Lambda supports automatic load balancing between versions assigned to the same alias, using a feature called routing conﬁguration.

> SAM can automate two types of deployment preference: linear and canary.

> Linear deployments work by incrementally moving trafﬁc during a period of time.

> Canary deployments work in two steps. At the start of the deployment, CodeDeploy sets up routing so that the new version gets a speciﬁc percentage of requests. If there are no problems until the end of the deployment, the alias is completely assigned to the new version.

# Part II - Working with AWS Services

## 6. Handling HTTP Requests

> API Gateway is a service for publishing and managing REST and Websocket APIs.





# To read

1. Serverless Computing: Economic and Architectural impact

