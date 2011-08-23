--- 
wordpress_id: "21"
layout: post
title: Changing the default command for RedHat8 Launch Panel
wordpress_url: http://sricharan.org/blog/?p=21
---
For accessing the Windows Network using Samba, only Nautilus seemed to be understanding the smb:// protocol. I did not want to each time start a terminal and type nautilus to start Nautilus. So, I wanted to add a launch panel icon. I could not find a way to add and configure a new icon. So I dragged the Help icon from the Main Menu and modified its Properties to run the command /usr/bin/nautilus. But this by default opened my home directory. I wanted it to open smb://Hostname. I had experimented earlier at the terminal and found that nautilus took as its command line arguements the location to be opened. So, I changed the command to /usr/bin/nautilus smb://Hostname. This worked well for me. But, I wanted some more sophistication. I wanted to log in directly since smb:// (like <a class="external free" title="ftp://" href="ftp:///" rel="nofollow" target="_new">ftp://</a>), takes the username and password separated by a colon followed by @ and the hostname. So, I changed the command to /usr/bin/nautilus smb://User Name:Password@Hostname. Nut, commandline did not parse the space separated user name (which Windows allows). So, as an additional change, using my instincts from my working with Linux, I enclosed the User Name within single quotes. This worked well. Similar strategy is also required to be used with the password if it contains spaces. Remember that while typing the username and password in the address bar of nautilus or at the Properties panel of the Launch Panel, the Password in NOT masked. So, it is at your risk that you do this.

So, all said and done, here is how the command looked at the end of the experimental session:


 <pre>/usr/bin/nautilus smb://'User Name':'Pass word'@Hostname</pre>

