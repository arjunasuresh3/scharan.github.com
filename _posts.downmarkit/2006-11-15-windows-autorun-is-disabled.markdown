--- 
wordpress_id: "23"
layout: post
title: "Windows : Autorun is Disabled?"
wordpress_url: http://sricharan.org/blog/?p=23
---
Here is a solution for the Geeks; it modifies the Windows registry:<pre>  1. Start RegEdit (regedt32.exe).2. Go to HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/Cdrom.3. Edit the Autorun value to '1' to enable autorn, and '0'   to disable autorun.4. Close RegEdit.</pre>NOTE: You may have to restart the system.A simpler solution (not guaranteed to work if autorun has been disabled in the registry, as in my case) is:<pre>  1. Right-click on the drive.2. Choose properties.3. Choose Autoplay.4. Choose the action you want to take for various file types.</pre>
