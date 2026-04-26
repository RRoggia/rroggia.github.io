
---

title: 'VPC Peering'
---

[Documentation](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html)

Demo:

- [Same Account Inter region VPC peering](https://github.com/RRoggia/aws-workloads/tree/main/vpc/vpc-peering)

## Overview

An AWS VPC Peering connection establishes a networking link between two VPCs, allowing them to communicate using private IP addresses. These VPCs can reside in different accounts or regions. To enable communication, you must update the route tables in both VPCs to direct traffic across the peering connection.

## Core Concepts

To establish a VPC Peering connection, a requester VPC initiates the process by sending a request to an accepter VPC. Once accepted, the connection becomes active; however, traffic will only flow once both VPCs update their subnet route tables with rules pointing to the peered VPC's CIDR block.

While a VPC can have multiple peering connections, they are not transitive. For example, if VPC A is peered with VPC B and VPC C, VPC B and C cannot communicate unless they establish their own direct peering link. Additionally, peering is not possible between VPCs with overlapping CIDR blocks, and you cannot use a peering connection to access gateways (like a VPN or Direct Connect) in a peered VPC.
