--- 
layout: post
title: NS2 nam error
published: true
meta: 
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2009/03/ns2-nam-error.html
tags: 
- code omitted because of length
- nam
type: post
status: publish
---
I have been bothered by this error while running ns/nam for a long time now. Finally found that tk needed patching :( Here is the error that I got and the solution that helped me fix it.<br /><br />Error:<br /><span style="font-family:courier new;">[root@localhost]# nam: </span><br /><span style="font-family:courier new;">[code omitted because of length]</span><br /><span style="font-family:courier new;">: no event type or button # or keysym</span><br /><span style="font-family:courier new;">while executing</span><span style="font-family:courier new;"><br />"bind Listbox <mousewheel> {</mousewheel></span><span style="font-family:courier new;"><br />%W yview scroll [expr {- (%D / 120) * 4}] units</span><span style="font-family:courier new;"><br />}"</span><span style="font-family:courier new;"><br />invoked from within</span><span style="font-family:courier new;"><br />"if {[tk windowingsystem] eq "classic" || [tk windowingsystem] eq "aqua"} {<br /></span><span style="font-family:courier new;">bind Listbox <mousewheel> {</mousewheel></span><span style="font-family:courier new;"><br />%W yview scroll [expr {- (%D)}] units</span><span style="font-family:courier new;"><br />}</span><span style="font-family:courier new;"><br />bind Li..."</span><br /><br />And, I got the solution to this on:<a href="http://forums.fedoraforum.org/showthread.php?t=206795"> http://forums.fedoraforum.org/showthread.php?t=206795.</a><br />Essentially you need to patch tk8.4.18 with the patches from: <a href="http://bugs.gentoo.org/show_bug.cgi?id=225999">http://bugs.gentoo.org/show_bug.cgi?id=225999</a><br /><br />Details of how to patch are available at: <a href="http://forums.fedoraforum.org/showpost.php?s=a2bb89875669ff26ed61cd371399a517&amp;p=1131049&amp;postcount=3">http://forums.fedoraforum.org/showpost.php?s=a2bb89875669ff26ed61cd371399a517&amp;p=1131049&amp;postcount=3</a><div class="blogger-post-footer">My experiments with Computers, Computing, Programming & Software.</div>
