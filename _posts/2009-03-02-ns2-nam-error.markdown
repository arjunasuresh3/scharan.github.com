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
I have been bothered by this error while running ns/nam for a long time now. Finally found that `tk` needed patching :( Here is the error that I got and the solution that helped me fix it. Error:

    [root@localhost]# nam: 
    [code omitted because of length]
    : no event type or button # or keysym
    while executing
    "bind Listbox <mousewheel> {</mousewheel>
    %W yview scroll [expr {- (%D / 120) * 4}] units
    }"
    invoked from within
    "if {[tk windowingsystem] eq "classic" || [tk windowingsystem] eq "aqua"} {
    bind Listbox <mousewheel> {</mousewheel>
    %W yview scroll [expr {- (%D)}] units
    }
    bind Li..."
    
And, I got the solution to this on: <a href="http://forums.fedoraforum.org/showthread.php?t=206795"> http://forums.fedoraforum.org/showthread.php?t=206795.</a>

Essentially you need to patch tk8.4.18 with the patches from: <a href="http://bugs.gentoo.org/show_bug.cgi?id=225999">http://bugs.gentoo.org/show_bug.cgi?id=225999</a>

Details of how to patch are available at: <a href="http://forums.fedoraforum.org/showpost.php?s=a2bb89875669ff26ed61cd371399a517&amp;p=1131049&amp;postcount=3">http://forums.fedoraforum.org/showpost.php?s=a2bb89875669ff26ed61cd371399a517&amp;p=1131049&amp;postcount=3</a>
