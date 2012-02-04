---
layout: post
title: Anyconnect VPN on Ubuntu x64
tags: 
  - ubuntu
  - vpn
date: 2012-02-04 12:16:28
---

Connecting to the VPN website to launch Anyconnect installer was not helping -- either with Firefox, nor with Chrome. The Applet kept loading to eternity with no installation. Chanced upon <http://blog.mattwoodward.com/installing-cisco-anyconnect-on-64-bit-ubuntu>, which suggested that on Firefox, I disable the IcedTea-Web plugin for Java Applets -- and it worked. After the disable, I was given a link to download the installer for 'Linux _x86_64' platforms, which when run installed the VPN without any further hassle.
