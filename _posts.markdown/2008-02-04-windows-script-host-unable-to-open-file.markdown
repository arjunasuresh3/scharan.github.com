--- 
wordpress_id: "43"
layout: post
title: "WIndows Script Host: Unable to open file"
wordpress_url: http://sricharan.org/blog/?p=43
---
For quite some time a lot of my friends kept getting a windows script host error whenever they tried to open a drive. It says: Windows Script Error: Unable to find file: "....vbs".

Spending some time on google led me to this site:
http://www.mydigitallife.info/2007/04/19/unable-to-open-hard-or-usb-flash-drive-with-windows-script-host-cannot-find-script-file-autorunvbs-error/

All we need to do is to either delete the autorun.inf file there or modify the content in to get rid of the offending startup file info. To delete the file:

del:\autorun.inf /f /s /q /a

To modify the file, first remove its hidden-file attribute: (see http://forums.techarena.in/showthread.php?t=717194)
<strong>attrib</strong> -s -h -r:\autorun.inf

Go ahead and edit this file now.
