--- 
layout: post
title: ld terminated with signal 9
published: true
meta: 
  dsq_thread_id: "388095367"
  _edit_last: "1"
tags: 
- ld killed
- ld terminated
- linux
- linux swap
type: post
status: publish
---
Been trying to build substantial amout of code on linux vmware image. Three times the build has failed with *"ld terminated with signal 9"*. A simple google revlealed that I might have run out of swap space!

So I run `sudo swaon -s` and get nothing at all!

Then a google for "<strong>turning on swap space"</strong> got me to do the following:

`# sudo dd if=/dev/zero of=/moreswap bs=1M count=512`: that creates a 512 MB file named moreswap filled with zeros.

    # sudo mkswap /moreswap
    # sudo swapon /moreswap

Appended the following line to `/etc/fstab` to make this change permanent.

    /moreswap none swap sw 0 0
    
Worked like a charm!

Ref: <a href="http://www.linux.com/archive/feature/113956" target="_blank">http://www.linux.com/archive/feature/113956</a>
