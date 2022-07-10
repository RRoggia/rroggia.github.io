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

