--- 
wordpress_id: "109"
layout: post
title: Default runlevel on Ubuntu
wordpress_url: http://saicharan.in/blog/?p=109
---
Changing the default runlevel on ubuntu was quite different from that of RedHat/Fedora. Ubuntu has no inittab. Instead, I had to rename the S30gdm* and S30kdm* files in /etc/rc2.d/ to KS30gdm* and KS30kdm* (the renaming is just like in fedora).
