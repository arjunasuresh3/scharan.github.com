--- 
wordpress_id: "25"
layout: post
title: "VMWare : Internet access from Guest VM (RedHat 9)"
wordpress_url: http://sricharan.org/blog/?p=25
---
- You donot need to create any internet sharing in windows etc. VMWare will take care of that for you.
- To set up internet access from the guest VM, set the VM to use NAT for ethernet.
- Set the IP address to the same segment as that of VMNet8. (just make sure that it is not .2).
Now you can access the Internet from the Guest VM!
