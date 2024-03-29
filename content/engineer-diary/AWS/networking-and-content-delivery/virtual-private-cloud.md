---
title: 'VPC - Virtual Private Cloud'
---

[Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

## Overview

AWS VPC is an AWS fully managed service that provides regional isolated virtual networks. You can use VPCs to run EC2 instances, RDS databases, and several other AWS services. VPC is one of the core services of AWS.

## Core Concepts

A **Virtual Private Cloud** is an isolated virtual network. It has a range of IP address denoted using the CIDR block and is associated to a specific region. VPCs must have a IPv4 range, and optionally a IPv6 range. A VPC  has a minimum CIDR block of /28 and maximum of /16.

Within a VPC you can create **subnets**, a range of IP address which are a subset of the VPC's IPs. Subnets reside on availability zones, spanning multiple subnets across AZs is one of the steps to achieve High Availability on AWS. In addition, you should also use subnets to isolate different tiers of your infrastructure. A subnet can be either public or private. **Public Subnet** has internet connectivity while **Private Subnets** cannot be accessed from the internet.

There are two types of VPC Default and Nondefault (Custom). The difference from the Default VPC and Custom VPCS is that each component of a custom VPC must be explicitly defined when you create it.

- Nondefault (Custom): Created and customized by you.
- Default: Created and customized by AWS.

The **Default VPC** is automatically created by AWS. You'll have 1 default VPC in each region of your account. They all follow the same configuration. It uses the 172.31.0.0/16 as the IPv4 range and it comes with internet connectivity configured. It also spans one subnet for each AZ supported in that region. It's not a good practice to use the default VPC for production.

When you create a VPC, it creates a DHCP option set, a Main route table, a Main Network ACL and a default security group.

The Dynamic Host Configuration Protocol, or DHCP for short, assings IP addresses dinamically to devices in the VPC. Usually you'll have one **DHCP option set** by region. However you can configure others.

**Route tables** are composed of routes that determine the network traffic of your subnets. The **Main route table**, is a route table that comes with the VPC. The main route is the default route for all subnets, but, you can create and associate route table to the subnets. All subnets must have at least one route table. One route table can be used by several subnets.

The **Routes** created in the route table are composed by a **destination** and a **target**. The destination, is where you want the traffic to go and the target the connection through which to send it. By default, resources within subnets will be able to communicate because of a route that matches traffic to the VPC IP Range.

A subnet with a route table that contains a route with destination to the internet and target to an **Internet Gateway** is considered a public subnet. To enable only the subnet to initiate traffic to the internet configure a route table to destinate traffic to the internet and target to **NAT Gateway**. The NAT Gateway must be in a public subnet.

The **VPC router** uses these route tables to determine the traffic. The VPC router runs in all AZs of a region. In case of conflicting rules, the most specific rule applies. The highest the prefix of the IP range the more specific it is. After the router sends the traffic to the destination The **Network Access Control List**, **NACL**, determines which traffic is allowed or denied to enter the subnets.

NACL is a firewall that operates on the subnet level. The Main NACL associated with a VPC is the default NACL associated to subnets. You can create new NACL and associate to the subnets. By default, the Main NACL is configured to allow traffic in (inbound) and out (outbound) of the subnets. However, if you create a custom NACL its default behavior is to deny all traffic. NACL is considered **stateless** because packages are validated against its rules when entering and leaving the subnets.

NACL contains a number of rules that are evaluated by their priority, the role number. A rule also specifies a protocol, a port range, an IP range and if the rule allows or denies the traffic matching its configuration.

Because NACL only applies to communication that enters or leaves a subnet. It does not apply to resources within a subnet. To secure resources within a subnet we use **Security Groups**. A security group is also a firewall but operates at resource level. It controls the traffic that is allowed in and out of the resource. A security group is considered **stateful**, therefore, if the resource is initiating the traffic it will only check the outbound rules, and if the resource is receiving traffic it will check the inbound rules.

By default security groups deny all traffic, you need to explicitly specify which traffic is allowed. It's not possible to explicitly specify rules to deny traffic. The Default security group is associated with the VPC and any resource within the VPC that you don't explicitly specify a security group. It's inbound rules allows all traffic from IPv4 and IPv6 resources that are also secured by the default security group. The outbound rules allows all traffic to the internet. 

One distinction of the security group rules to NACL rules is that you can specify logical AWS resources, like other security groups, in the rules. It's also important to notice SG are not attached to the resource itself but to the Elastic Network Interface(ENI) of a resource.

Best practices to secure VPCs are to use both NACL and SGs. Be strict allowing only the required traffic. And limit the access to changing the rules for only authorized persons.