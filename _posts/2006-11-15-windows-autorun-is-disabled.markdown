--- 
layout: post
title: "Windows : Autorun is Disabled?"
published: true
meta: 
  tumblrize_post-type: regular
  dsq_thread_id: "388193799"
  tumblrize_post-id: "9010351959"
  _edit_last: "1"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2006/11/windows-autorun-is-disabled.html
tags: 
- autorun disabled
type: post
status: publish
date: 2006-11-15 08:11:00-08:00
---
Here is a solution for the Geeks; it modifies the Windows registry:
<pre>  1. Start RegEdit (regedt32.exe).2. Go to HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/Cdrom.3. Edit the Autorun value to '1' to enable autorn, and '0'   to disable autorun.4. Close RegEdit.</pre>
NOTE: You may have to restart the system.

A simpler solution (not guaranteed to work if autorun has been disabled in the registry, as in my case) is:
<pre>  1. Right-click on the drive.2. Choose properties.3. Choose Autoplay.4. Choose the action you want to take for various file types.</pre>
