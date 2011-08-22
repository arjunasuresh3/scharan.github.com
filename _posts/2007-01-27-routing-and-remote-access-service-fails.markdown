--- 
wordpress_id: "38"
layout: post
title: Routing and Remote Access Service Fails!
wordpress_url: http://sricharan.org/blog/?p=38
---
This afternoon, we were suddenly unable to browse the internet. Suspicious about the proxy server being down, I checkout from our main browsing computers. I was able to ping the students proxy.
A little more digging up led me to figure out that there was something wrong with our lab router that handles the internet traffic to the student's proxy; the main browsing systems bypass the router.
I disabled the routing service and set it up again. Though the routing service itself did not throw up any error, the event log had logged the error message. I was unable to browse even from the router itself. Also, the IIS server on the router also failed.
I restarted the system thinking it might help - but to no avail!
Checking the event log revealed that the Routing and Remote Access service had thrown up an error - Unable to add the internal adapter to the routing service - incorrect parameter. Looking at the event log messages for a few hours earlier, I hit upon a message saying that a duplicate name had been detected on the network. I then realized that this was quite likely since our server had a name Dell1, which was quite possible to be duplicated over the network since there were a plethora of Dell machines springing up here. So I renamed our machine and restarted - Bingo! it was running like a good ol' boy!
Lesson to be learnt: Event log <span style="font-weight: bold; font-style: italic;">is </span>Holy Grail!.
