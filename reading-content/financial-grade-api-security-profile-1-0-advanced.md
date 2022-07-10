---
title: 'Financial-grade API Security Profile 1.0 - Part 2: Advanced'
language: 'en-US'
status: 'Reading'
date: '2022-07-07'
---

# Introduction

> This document is Part 2 of FAPI Security Profile 1.0 that specifies an advanced security profile of OAuth that is suitable to be used for protecting APIs with high inherent risk. Examples include APIs that give access to highly sensitive data or that can be used to trigger financial transactions (e.g., payment initiation).

# 5. Advanced security profile

## 5.1. Introduction

> For example, read and write access to a bank API has a higher financial risk than read-only access. As such, the security profiles of the authorization framework protecting these APIs are also different.

> This profile does not support public clients.

> Implementations can leverage OpenID Connect's Hybrid Flow that returns an ID Token in the authorization response or they can utilize the JWT Secured Authorization Response Mode for OAuth 2.0 (JARM) that returns and protects all authorization response parameters in a JWT.









