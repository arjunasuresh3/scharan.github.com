--- 
wordpress_id: "24"
layout: post
title: "VMWare : Do's & Donts"
wordpress_url: http://sricharan.org/blog/?p=24
---
- VMWare by default creates two Vitual Network Adapters: VMNet1 &amp; VMNet8.
- VMNet1 is useful for host-only connection.
- VMNet8 is for NAT access.
- Donot change the IP domains which are assigned by default. You could wreck the DHCP, DNS &amp; Routing domian that VMWare creates.
- To change these settings, please use: Edit &gt; Virtual Network Settings &gt; NAT.
- By default, the IP Address .2 with the VMNet8 segment, is the IP address of VMWare's DNS &amp; router.
