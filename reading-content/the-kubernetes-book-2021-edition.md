---
title: 'The Kubernetes Book - 2021 edition'
language: 'en-US'
status: 'Planning'
date: '2022-07-06'
---

# 8 Ingress

> Ingress is all about accessing multiple web applications through a single LoadBalancer Service.

> Ingress fixes this by exposing multiple Services through a single cloud load-balancer.

> It creates a LoadBalancer Service, on port 80 or 443, and uses host-based and path-based routing to send traffic
> to the correct backend Service.

> The object spec defines rules that govern traffic routing, and the controller implements the rules.

> Once you have an Ingress controller, you deploy Ingress objects with rules that govern how traffic hitting the
> Ingress is routed.

> On the topic of routing, Ingress operates at layer 7 of the OSI model, also known as the “application layer”. This
> means it has awareness of HTTP headers, and can inspect them and forward traffic based on hostnames and
> paths.

> Ingress exposes multiple ClusterIP Services through a single cloud load-balancer.

> The way Kubernetes knows which Ingress controller to use when you deploy an Ingress object is via Ingress
> classes. You create Ingress classes, and then tag Ingress objects with a particular class.

