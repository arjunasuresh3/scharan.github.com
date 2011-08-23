--- 
wordpress_id: "103"
layout: post
title: ld terminated with signal 9
wordpress_url: http://saicharan.in/blog/?p=103
---
Been trying to build substantial amout of code on linux vmware image. Three times the build has failed with **"ld terminated with signal 9".** A simple google revlealed that I might have run out of swap space!So I run **sudo swaon -s **and get nothing atall!Then a google for "**turning on swap space"** got me to do the following:`` # sudo dd if=/dev/zero of=/moreswap bs=1M count=512 ``That creates a 512 MB file named moreswap filled with zeros.``# sudo mkswap /moreswap# sudo swapon /moreswap``Appended the following line to `` /etc/fstab `` to make this change permanent.`` /moreswap none swap sw 0 0 ``Worked like a charm!Ref: [http://www.linux.com/archive/feature/113956](http://www.linux.com/archive/feature/113956)
