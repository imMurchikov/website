---
title: around the BGP
description: Perform simple CIDR lookups
date: 2025-05-06
---

## Introduction

BGP is a cool antiquated technology that powers routing stuff all over the
internet. The basic idea is simple: a router tells other routers that it should
route traffic to a destination based on some rules. The rules are assigned to
some _prefix_ or CIDR (they are notated like `10.99.0.0/24`).

If you know about IPv4, you'll know that you can actually represent every IPv4
address as a 32 bit integer, so a CIDR notation is literally a _prefix_ that is
`n` bits long (indicated by the `/n` part).

![Image explaining CIDR matching](https://kappa.lol/55JOpb 'see how the prefixes match?')

This is pretty useful for one big thing: finding out which operators are
associated with a specific IP address. As an example, as of the time of writing
this, one of the CIDR prefixes that Cloudflare [announces](https://bgp.tools/prefix/1.1.1.0/24)
is `1.1.1.0/24` for their famous `1.1.1.1` DNS service.

Since the prefix's length is 24 bits, that means there is 8 bits at the end of
the address that can be changed. Because $2^8 = 256$, that means this CIDR
covers 256 addresses that being `1.1.1.0` to `1.1.1.255`.

This means if we have a list of all the published prefixes, we can take an IP
address like `1.1.1.128` and go through each prefix to see if it matches.
Eventually, we will end up finding the `1.1.1.0/24` prefix published by
Cloudflare. With that, we can conclude that `1.1.1.128` belongs to Cloudflare.

BGP.tools provides a way to get the a visibility table with ASNs through
[their API](https://bgp.tools/kb/api). As of writing this, running
`cat -v table.txt | wc -l` yields 1,217,754 prefixes! That's a lot of prefixes
but includes both IPv4 and IPv6. Filtering to just IPv4 using
`grep -v -F ':' table.txt | wc -l` gives 1,006,324. This is a perhaps more
managable number.