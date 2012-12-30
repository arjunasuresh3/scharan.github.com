--- 
layout: post
title: "VMWare : Do's & Donts"
published: true
meta: 
  tumblrize_post-type: regular
  tumblrize_post-id: "9010364974"
  _edit_last: "1"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2006/11/vmware-dos-donts.html
tags: 
- VMWare
type: post
status: publish
date: 2006-11-15 08:12:00-08:00
---
<ul>
	<li>VMWare by default creates two Vitual Network Adapters: VMNet1 &amp; VMNet8.</li>
	<li>VMNet1 is useful for host-only connection.</li>
	<li>VMNet8 is for NAT access.</li>
	<li>Donot change the IP domains which are assigned by default. You could wreck the DHCP, DNS &amp; Routing domian that VMWare creates.</li>
	<li>To change these settings, please use: Edit &gt; Virtual Network Settings &gt; NAT.</li>
	<li>By default, the IP Address .2 with the VMNet8 segment, is the IP address of VMWare's DNS &amp; router.</li>
</ul>
