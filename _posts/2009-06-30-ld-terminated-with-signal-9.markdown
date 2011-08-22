--- 
wordpress_id: "103"
layout: post
title: ld terminated with signal 9
wordpress_url: http://saicharan.in/blog/?p=103
---
Been trying to build substantial amout of code on linux vmware image. Three times the build has failed with <strong>"ld terminated with signal 9".</strong> A simple google revlealed that I might have run out of swap space!

So I run <strong>sudo swaon -s </strong>and get nothing atall!

Then a google for "<strong>turning on swap space"</strong> got me to do the following:

` # sudo dd if=/dev/zero of=/moreswap bs=1M count=512 `
That creates a 512 MB file named moreswap filled with zeros.

<code>
# sudo mkswap /moreswap
# sudo swapon /moreswap
</code>
Appended the following line to ` /etc/fstab ` to make this change permanent.
` /moreswap none swap sw 0 0 `

Worked like a charm!

Ref: <a href="http://www.linux.com/archive/feature/113956" target="_blank">http://www.linux.com/archive/feature/113956</a>
