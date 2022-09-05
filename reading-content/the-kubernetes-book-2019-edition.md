---
title: 'The Kubernetes Book - 2019 edition'
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

> ![new concept](/images/concept.png) Kubernetes Services give us the networking we **can** rely on.

> a Kubernetes **Service** is an object in the API that we define in a manifest and POST to the API server.

> every Service gets its own stable IP address, its own stable DNS name, and its own stable port.

> Services use labels to dynamically select the Pods in the cluster they will sen traffic to.

> Think of Services as having a static front-end and a dynamic back-end. The front-end consists of the IP, DNS name, and port and never changes. The back-end consists of the Pods, which are fluid and can be constantly changing.

> Pods and Services are loosely coupled via labels and labels selectors.

> It also provides simple load-balancing

> The logic behind the selection process is a Boolean And.

> Each Service that is created, automatically gets an associated *Endpoint* object.

> Kubernetes supports several types of Services.

> A ClusterIP Service has a stable IP address and port that is only accessible from inside the cluster.

> Kubernetes has another type of Service called a NodePort Service. This builds on top of ClusterIP and enables access from outside of the cluster.

> There are other types of Services, such as LoadBalancer Services. These integrate with load-balancers from your cloud provider such as AWS, Azure, and GCP.

## My Summary

**What's a Service?**

A Service is a K8 object that enables trusted networking for a Deployment or a set of Pods.

IP address, DNS and Ports together with label selection is what enables Services deliver reliable networking.  A service will route traffic to Pods in the Endpoint that match their Label Selection.

A service contains:

- IP addresses
- DNS name
- Ports
- (is associated an) Endpoint
- (provides) LoadBalancing

**How does Service matches Pods?**

The Service looks for Pods that contains all labels specified in Service's Label Selector, which means if a pod have an identical set or a super set of the Service's Label Selector it will be matched and it can receive traffic. In the case of a Pod having a super set of the Service's Label selectot, the additional labels will be ignored.

**What's an Endpoint?**

A dynamic list of healthy object in the cluster that matches the Service's label selector.

**How does ClusterIP Service works?**

The ClusterIP is a type of Service that is used for accessing services within the cluster. The ClusterIP Service name, IP address and port are registered in the cluster DNS service. Therefore, all Pods and Objects within the cluster are able to resolve the Service name.

It's important to notice that the IP of a ClusterIP is longlived, which means will remains the same while the cluster lives.

**How does NodePort Service works?**

NodePort builts on top of ClusterIP and it enables access to outside of the cluster. The NodePort Service, in addition to the Name, IP and port it also adds the NodePort to the DNS.

The service enables access from within cluster calling the first three initial parameters. Or they could also hit any cluster node on the NodePort specified.

When a external client hits one of the cluster nodes with the NodePort, this request is redirect to the Service that will determine one Pod from the Endpoint list and route the traffic to it.

**How to use K8 Service Discovery?**

There are two ways. Using the DNS (preferred) or Environment Variables.

The DNS is preferable because everytime a new Service is created the DNS is watching to register them in the DNS.

Using Env Variables is not the best scenario, because pods only receive the env variable when they are created. Therefore, services created after the Pod creation won't be registered.

# 7 Kubernetes storage

> Kubernetes has a mature and feature-rich storage subsystem called the *persistent volume subsystem*.

> All storage on a Kubernetes cluster is called a *volume*.

> plugins will be based on the Container Storage Interface (CSI) which is an open-standard aimed at providing a clean interface for plugins.

> At a high-level, Persistent Volumes (PV) are how we map external storage onto the cluster, and Persistent Volume Claims (PVC) are like tickets that authorize applications (Pods) to use a PV.

> 1. There are rules safeguarding access to a single volume from multiple Pods( more on this later)
> 2. A single external storage volume can only be used by a single PV. For example, you cannot have a 50GB external volume that has two 25GB Kuberbetes PVs using half of it.

> .spec.accessModes defines how the PV can be mounted. Three options exist:
>
> - ReadWriteOnce(RWO)
> - ReadWriteMany(RWM)
> - ReadOnlyMany(ROM)

> (Reclaim Policy) Two policies currently exist:
>
> - Delete
> - Retain



## My Summary

**What's the Container Storage Interface(CSI)?**

The CSI for short is an open-standard aimed to abstract k8 internal storage details easing storage plugin development.

CSI is the middlware between the Storage providers and the K8 internal storage.

The CSI is a standard aimed to improve interoperability between storage vendors. Which means, the storage vendor implements the CSI and their plugin works on multiple orchestrators like Kubernetes and Docker Swarm.

**Which are the three main resources in the Persistent Volume Subsystem?**

The Persistent Volume (PV) - the storage in K8 (which linked to an external storage through CSI).

The Persistent Volume Claims (PVC) - authorization to use a PV or a Storage class.

The Storage Class (SC) - Allows us to define different classes, or tiers, of storage. It creates the PV dynamically.

**What's the behavior of the Access Modes?**

RWO the PV can only be mounted/bound as read and write by a single PVC. Usually a Block Storage.

RWM the PV can only be bound as read and write by a multiple PVC. Usually a File or Object Store.

ROM the PV can only be bound as read only by a multiple PVC.

**What's the behavior of the PV Reclaim policies?**

The delete policy is the default behavior for PVs created via *storage classes*. This policy deletes the PV and associaes resource on the external storage system. It could result in data loss.

The retain policy will keep the PV associated to the cluster, but it will be retained (others PVC won't be able to use it).

# 8 Other important Kubernetes stuff

## My Summary



