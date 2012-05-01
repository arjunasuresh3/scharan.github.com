---
layout: post
title: FreeNX on Ubuntu
tags: 
- freenx
- nomachine
- vnc
date: 2012-04-29 21:41:37
---

I have been a VNC user (both [RealVNC](http://www.realvnc.com) & [TightVNC](http://www.tightvnc.com/)) for a number of years. It definitely has advantages such as "accessing your 'real' desktop". But, it is slightly annoying to know that if your remote monitor is on, anybody watching it can actually see your screen without your knowledge. Further, with different screen resolutions on the remote and local systems, VNC only 'scales' the display which is not very nice especially when resolution is scaled down.

Which is where the alternative of [NoMachine](www.nomachine.com) turned up on my radar. On my Ubuntu desktop, I installed the [NX Free Edition](http://www.nomachine.com/select-package.php?os=linux&id=1) software; client, node & server: in that order. On my windows, I set up the [NX Windows Client](http://www.nomachine.com/download-package.php?Prod_Id=3655). Set up a tunnel from my Windows machine to my remote desktop, which is needed since my desktop is behind a gateway. 

Finally, to access the GNOME session, I had to change the configuration as [suggested here](http://ubuntuforums.org/showpost.php?p=11586915&postcount=8).

    /usr/NX/etc/node.cfg

    Comment out this line:
    CommandStartGnome = "/etc/X11/Xsession gnome-session"

    And replace it with this line:
    CommandStartGnome = "/usr/bin/gnome-session --session=gnome-classic"

The screen resolution with NX is remarkably crisp & clear. Now I can get to work on remote GUI without squinting!

Update: To access an existing X11 session, choose 'Shadow' as the Desktop type. (See [this link](http://serverfault.com/a/44326/88592) for details).
