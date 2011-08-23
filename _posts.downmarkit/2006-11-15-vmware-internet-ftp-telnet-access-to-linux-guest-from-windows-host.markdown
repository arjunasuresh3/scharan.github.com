--- 
wordpress_id: "19"
layout: post
title: "VMWare : Internet / FTP / Telnet Access to Linux Guest from Windows Host"
wordpress_url: http://sricharan.org/blog/?p=19
---
1) After installing VMWare workstation or VMWare Player, find out the IP Subnet of the VM Network Adapter named VMNet8. This is the VMAdapter that is used for NAT connectivity.2) Set up the Linux host's IP address to be in the same IP Subnet as VMNet8. Just make sure that you donot use the IP addresses subnet.1 OR subnet.2 Subnet.1 is used by VMNet8 while subnet.2 is used as the IP of the NAT Gateway. (Refer to VMWorkstation documentation for more details).4) Set the default Gateway to subnet.23) Set up VMWare to use Ethernet in NAT mode.4) Done.
