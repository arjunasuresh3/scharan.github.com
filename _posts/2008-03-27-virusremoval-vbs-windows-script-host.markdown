--- 
layout: post
title: VirusRemoval.vbs Windows Script Host
published: true
meta: 
  dsq_thread_id: "388095350"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2008/03/virusremovalvbs-windows-script-host.html
tags: 
- virusremoval.vbs
- Windows script host
type: post
status: publish
---
Atlast! Got rid of that damn warning.<br /><br />msconfig did not show up this thing. No amount of standard registry scans helped me find this. I looked at the standard Run, RunOnce &amp; Shell hives under HKLM/Software/Microsoft/Windows/CurrentVersion/. Just no use. No entries that were tell-tale traces of this VirusRemoval.vbs.<br /><br />But done at last! Took some patient Google-searching though. Some kind soul had provided the entire code of the VirusRemoval.vbs script file at:<br /><a href="http://www.thinkdigit.com/forum/showthread.php?t=71097">http://www.thinkdigit.com/forum/showthread.php?t=71097</a>. Looking at the code was enough to tell me where the virus had made entries in the registry.<br /><br /><br />Goto: HKLM/Software/Microsoft/WindowsNT/CurrentVersion/Winlogon. Under that, you will find a key called Userinit. Double click that key. A dialog box will open up with a string parameter. Edit that to remove just the offending entry. <span style="font-weight: bold;">Warning: </span>If you are not sure what the offending entry is, DONOT modify the key. Please post back the contents of the key here, and we could work out something!<br /><br />After cleaning up my registry, the value of Userinit for me is: C:\WINDOWS\system32\userinit.exe<br /><br />Good Luck!<div class="blogger-post-footer">My experiments with Computers, Computing, Programming & Software.</div>
