---
title: 'The Kubernetes Book'
language: 'en-US'
status: 'Reading'
date: '2022-07-06'
---

# 2 Kubernetes principles of operation

> At the highest level, Kubernetes is two things:
>
> - A cluster for running applications
> - An orchestrator of cloud-native microservices apps

> For production environments, multi-master high availability (HA) is a must have.

> Generally speaking, running 3 or 5 replicated masters in an HA (high availability) configuration is recommended.

> It's also considered a good practice not to run user applications on masters. This allows masters to concentrate entirely on managing the cluster.

> For an application to run on a Kubernetes cluster it needs to tick a few boxes. These include:
>
> 1. Packaged as a container
> 2. Wrapped in a Pod
> 3. Deployed via a declarative manifest file

> The declarative model and the concept of desired state are at the very heart of Kubernetes.

> containers must always run inside of Pods.

> The simplest model is to run a single container per POD. However, there are advanced use-cases that run multiple containers inside a single Pod.

> a Pod is a ring fenced environment to run containers. The pod itself doesn't actually run anything, it's just a sandbox for hosting containers.

> If you need to scale your app, you add or remove Pods.

> Services use labels and a label selector to know which set of pods to load balance traffic to. The service has a label selector that is a list of all the labels a Pod must posses in order for it to receive traffic from the Service.

## Summary

K8 cluster is a bunch of nodes and a control plane. The control plane exposes an HTTP RESTful API, it assign work to nodes through the scheduler and records states in a persistent store. Nodes are responsible for running the applications.

**Masters:** Schedule decisions, perform monitoring, implement changes, respond to events, and more.

- API Server: The grand Central Station of k8. 
  - All communication goes through here.
  - Exposes the RESTful API

- Cluster Store: The heart of K8.
  - The only stateful part of the control plane.
  - Cluster store based on etcd.
  - 3-5 replicas of etcd for HA.
- Controller manager: Controller of Controllers.
  - Applies control loops to ensure desired and current state are the same. Reconcile if they arent.
  - Each control loop is very specialized.
- Scheduler: Watches for new work and assign it to workers.
  - Applies Filter and ranking logic to the nodes
- Cloud Controller manager: Integrates with cloud technologies

**Nodes:** Where applications runs.

1. Watch the API Server for new work assignment
2. Execute new work assignments
3. Report back to the control plane

- kubelet: Runs on every node in the cluster.
  - Watches the API Server
- container runtime: Container related tasks
  - Pull images, start and stop containers and so on ...
  - Container Runtime Interface
  - containerd is one of the popular options. It's the docker container runtime, which was donated by docker to cncf.
- kub-proxy: Responsible for local networking.

K8 clusters have an internal DNS. The DNS service has a static IP address that is hard-coded into every Pod on the cluster.

**Pods**: Atomic unit of K8.

**Deployments:** Higher level K8 object that wraps around a Pod and adds functionality.

**Services**: Provide reliable networking for a set of Pods.

- Consists of a stable DNS name , IP address, and port. 
- Load balancer for pods

# 4 Working with Pods

> The atomic unit of scheduling in the virtualization world is the Virtual Machine. This means **deploying applications** in the virtualization world means scheduling them on VMs.

> In the Docker world, the atomic unit is the container. This means **deploying applications** on Docker means deploying them inside of containers.

> In the Kubernetes world, the atomic unit is the Pod. Ergo, **deploying applications** on kubernetes means stamping them out in Pods.

> (About Pod) they're bigger than a container, but a lot smaller than a VM.

> ![new concept](/images/concept.png) Pod is a shared execution environment for one or more containers.

> By running the web server container and the file-sync container in the same Pod, we ensure they will always be deployed to the same code.

> ![new concept](/images/concept.png) *Shared execution environment* means that the Pod has a set of resources (IP, ports, hostname, memory, volumes, ...) that are shared by every container that is part of the Pod.

> ![new concept](/images/concept.png) a Pod is actually a special type of container called a pause container.

>the Pod (pause container) is just a collection of system resources that containers running inside of it will inherit and share. These system resources are kernel namespaces and include:
>
>- Network namespace: IP address, port range, routing table, ...
>- UTS namespace: Hostname
>- IPC namespace: Unix domain sockets

> This networking model makes *inter-Pod* communication really simple. Every Pod in the cluster has its own IP addresses that's fully routable on the Pod network.

>  Because every Pod gets its own routable IP, every Pod on the Pod network can talk directly to every other Pod without messing around with things like nasty port mappings.

> ![new concept](/images/concept.png) Control Groups (cgroups) prevent individual containers from consuming all of the available CPU, RAM and IOPS on a node.

> We could say that cgroups actively police resource usage.

> Individual containers have their own cgroup limits.

> Deploying a Pod is an atomic operation.

> Pods that are deployed via Pod manifest files are singletons - they are not replicated and have no self-healing capabilities. For this reason, we almost always deploy Pods via higher-level objects like Deployments and DaemonSets, as these can reschedule Pods when they fail.

> namespaces allow us to logically divide clusters for management purposes.



## My Summary

Deploying applications:

- VM -> scheduling a deploy in a VM
- Docker -> deploying a container
- Kubernetes -> deploying a Pod

**What's a POD?**

It's a shared execution environment for containers. It defines the system resources like IP, port ranges, host name, ... the containers will inherit. 

A pod is bigger than a container but smaller than a VM. Within a POD you can run multiple containers, and the will share the POD resources. 

In the docker language, a POD is a pause container, a collection of system resources that containers within it will inherit. That's why the shared execution environment.

Network:

- intra POD: you can use localhost and the port. Useful for multi containers.
- inter POD: PODs can easily talk with other PODs due the POD network. 

To deploy a Pod, send the POST manifest to the API Server. The control plane stores the intent. And the scheduler deploys to a healthy node with enough resources.

A best practice is to handle PODs as stateles due their ephemeral existence. Avoid storing states or relying on PODs IPs.

Pods don't self-heal, they don't scale, and they don't allow for easy updates or rollbacks.

**Pod lifecycle**

Pending -> while download image and starts all the containers.

Running -> Once everything is running.

Succeeded -> All tasks were completed.

Failed -> When a POD cannot start or if they break when running.

Threat Pods as mortal, or cattle (pets vs cattle analogy). Once they die, replace with a new one instead of bringing the old one back.

**What's a CGroup?**

A control group avoid containers to use all resources from a node.

The CGroup is applyed at container level. Having the CGroup applyed at container level, enables in a multi container POD to stablish resource boundaries (cgroups) for each container.

# 5 Kubernetes Deployment

> It's important to know that a single Deployment can only manage a single type of Pod.

> Deployment can manage multiples replicas of the same Pod.

> behind-the-scene, Deployments leverage another object called a ReplicaSet.

> it's best practice that we don't directly manage ReplicaSets

> Deployments use ReplicaSets to provide self-healing and scalability

> *Desired state* is what you want. *Current state* is what you have. If the two match, everybody's happy.

> A *Declarative model* is a way of telling Kubernetes what our desired state is, without having to get into the detail of *how* to implement it.

> Kubernetes supports both models (Declarative and Imperative), but strongly prefers the declarative model.

> Kubernetes is constantly making sure *current state* matches *desired state*.

## My Summary

**What's a Deployment?**

A Deployment is a kubernetes object that adds capabilities to the Pod.

Capabilities:

- Zero downtime
- Liveness Checks
- Readiness Checks
- Rolling updates (Through Deployment)
- Rollbacks (Through Deployment)
- Self-healing (Through ReplicaSet)
- Scalability (Through ReplicaSet)

A Deployment wraps a ReplicaSet, which wraps a Pod. It's a best practice to not manage ReplicaSet, and to use Deployments.

**What are the k8 states?**

K8 uses 2 states the desired state (what you want) and the current state (what you got).

**What's the reconciliation loop?**

The reconciliation loops validate whether desire and current state match and if they don't triggers an action to make they match.

The reconciliation loops is used for both self-healing and scalability.

**How Deployment deal with updates?**

Deployment deal with updates by adding another ReplicaSet with the new configuration. So, while the new ReplicaSet spins up all the Pods both ReplicaSet will be active. As soon, the ReplicaSet with the updated information is ready, the old ReplicaSet starts decreasing it's Pods (But the ReplicaSet is not deleted). Therefore, updates have a zero downtime.

**How Deployment deal with Rollbacks?**

Because the Deployment has the ReplicaSet with previous configuration, whenever you want to rollback your application you can spin up an old ReplicaSet and wind down the current ReplicaSet.

# 6 Kubernetes Services

> Kubernetes Services give us the networking we **can** rely on.

> a Kubernetes **Service** is an object in the API that we define in a manifest and POST to the API server.

> every Service gets its own stable IP address, its own stable DNS name, and its own stable port.

> Services use labels to dynamically select the Pods in the cluster they will sen traffic to.

## My Summary





