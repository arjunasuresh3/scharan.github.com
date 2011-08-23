--- 
wordpress_id: "33"
layout: post
title: Testing the RAM for defects on Windows
wordpress_url: http://sricharan.org/blog/?p=33
---
Somebody had asked me to look at some problem being created by Ulead DVD Factory 10.0. The error reported was some failure to read a memory location. This message repeated for Nero also, after a few days.I suspected faulty RAM, after seeing the log. The message was EXCEPTION_ACCESS_VIOLATION. But, I did not know the right tools for testing the RAM. So, a Google Search led me to the following tools:1) [MemTest](http://www.memtest86.com/)2) Microsoft's [Windows Memory Diagnostic](http://oca.microsoft.com/en/windiag.asp).I did not test Memtest, but I used the Microsoft solution. It was easy to use, but the UI is not for the layman.Notes:- Please keep a floppy disk handy. If you are one of those forward looking geeks, and do not have a floppy drive, you need to have a CD writer. Check out the details provided [here](http://oca.microsoft.com/en/windiag.asp#quick) for working with a CD.- After you run the program and have created a floppy, boot from the floppy.- To run Advanced Diagnostic tests, hit the T button on your keyboard.
