--- 
layout: post
title: "VMWare : Internet / FTP / Telnet Access to Linux Guest from Windows Host"
published: true
meta: 
  tumblrize_post-type: regular
  dsq_thread_id: "388095270"
  _edit_last: "1"
  tumblrize_post-id: "9010269375"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2006/11/vmware-internet-ftp-telnet-access-to.html
tags: 
- ftp
- guest access
- telnet
- VMWare
type: post
status: publish
date: 2006-11-15 05:36:00-08:00
---
1) After installing VMWare workstation or VMWare Player, find out the IP Subnet of the VM Network Adapter named VMNet8. This is the VMAdapter that is used for NAT connectivity.
2) Set up the Linux host's IP address to be in the same IP Subnet as VMNet8. Just make sure that you donot use the IP addresses subnet.1 OR subnet.2 Subnet.1 is used by VMNet8 while subnet.2 is used as the IP of the NAT Gateway. (Refer to VMWorkstation documentation for more details).
4) Set the default Gateway to subnet.2
3) Set up VMWare to use Ethernet in NAT mode.
4) Done.
