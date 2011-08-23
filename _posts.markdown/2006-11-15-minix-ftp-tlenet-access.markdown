--- 
wordpress_id: "17"
layout: post
title: Minix - FTP & Tlenet Access
wordpress_url: http://sricharan.org/blog/?p=17
---
I had a problem accessing my Minix VMWare guest OS, via FTP or Telnet. Here is how the problem was solved...

A little bit of history:
Yesterday, I had to set up a RedHat 9 Guest OS for one of my faculty members. I realized that even though telnet was installed and running, I was unable to access it even locally!!! Then I realized that I had to edit the 'telnet' file in /etc/xinetd.d to allow incoming telnet connections (inspite of changes to the firewall configuration to allow incoming telnet connections).

Back to present:
So I realized that perhaps something similar needs to be done even with Minix (after all, it is a variant of Unix and must have similar security features!!!). But, when I went to the /etc folder in Minix, I found no xinetd.d folder. Looking around, I found the serv.access file. Guessing that it must be the right place to look, I opened it. Bingo!
There it was. Only, I had to decipher how the entires should look like in that file. Ever so helpful, a comment asked me to man serv.access. Also, I looked at the /usr/adm/log file. It was all there - all those access denied messages...

Initially, my /etc/serv.access file was like this:

# /etc/serv.access
# 2006-05-21
# See the serv.access(5) man pages to learn how to edit this file
# to make your system safe on the network.
# this is insecure! replace with something more specific asap
telnet ftp: +* log;

# this is better, keep outsiders out

# telnet ftp: +*.local log;

# this records all unsuccessful access attempts in/usr/adm/log

*: -* log;

After a reading the man page and a little tinkering, I changed the line "telnet ftp: +* log;" to "telnet ftp: + log;". i.e., I just removed the *. May be very insecure, but it does the job for me. Perhaps one could add an IP address or a range of IPs to enhance security (as described in the man page).

One another word:
This might be very helpful on the VMWare front:

I am still using NAT. I had to just set the IP address of my Minix to be on the same subnet as VMNet8 (which is the default subnet on which VMWare does NAT-ing). Also, the default gateway on the guest OS - Minix - had to be set to VMNet8-subnet-.2 ( The .2 IP is the gateway across which VMWare does NAT).

Thats it!!!. All works fine now...
