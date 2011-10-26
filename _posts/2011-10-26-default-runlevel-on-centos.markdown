---
layout: post
title: Default runlevel on CentOS
tags: 
- centos
- runlevel
date: 2011-10-26 08:20:18
---

A reminder to self (this should work for all BSD-like systems, including Fedora &amp; RHEL) &mdash;

Edit /etc/inittab as root. The number after the first colon after id is the default runlevel.

<pre class="brush: shell">
id:3:initdefault:
</pre>

BTW, I prefer runlevel 3 (no GUI).

Reference: <http://www.centos.org/docs/5/html/Installation_Guide-en-US/s1-boot-init-shutdown-sysv.html>