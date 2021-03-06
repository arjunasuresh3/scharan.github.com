--- 
layout: post
title: Testing the RAM for defects on Windows
published: true
meta: 
  tumblrize_post-type: regular
  tumblrize_post-id: "9010484078"
  _edit_last: "1"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2006/11/testing-ram-for-defects-on-windows.html
tags: 
- windows RAM test utilities
type: post
status: publish
---
Somebody had asked me to look at some problem being created by Ulead DVD Factory 10.0. The error reported was some failure to read a memory location. This message repeated for Nero also, after a few days.
I suspected faulty RAM, after seeing the log. The message was EXCEPTION_ACCESS_VIOLATION. But, I did not know the right tools for testing the RAM. So, a Google Search led me to the following tools:
1) <a href="http://www.memtest86.com/">MemTest</a>
2) Microsoft's <a href="http://oca.microsoft.com/en/windiag.asp">Windows Memory Diagnostic</a>.

I did not test Memtest, but I used the Microsoft solution. It was easy to use, but the UI is not for the layman.

Notes:
- Please keep a floppy disk handy. If you are one of those forward looking geeks, and do not have a floppy drive, you need to have a CD writer. Check out the details provided <a href="http://oca.microsoft.com/en/windiag.asp#quick">here</a> for working with a CD.
- After you run the program and have created a floppy, boot from the floppy.
- To run Advanced Diagnostic tests, hit the T button on your keyboard.
