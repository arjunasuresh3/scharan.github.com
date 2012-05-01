---
layout: post
title: Export & Import of GPG Keys
tags: 
- gpg
- gpg4win
- import
- recover
date: 2012-05-01 01:07:55
---

To remedy a case of corrupted gpg keys on Linux (if you have the GPGKeys elsewhere): 

- First create a 'Backup' [on Windows, via the GPG4Win > GNU Privacy Assistant (GPA)]. 
- Next, copy the backup file to Linux & on Linux, run: <code>gpg --import /path/to/backup/file</code>. 
- Lastly, set the necessary level of trust:

<pre>
     $ gpg --edit-key &lt;uid&gt;
     gpg&gt; trust
     ...
     1 = I don't know or won't say
     2 = I do NOT trust
     3 = I trust marginally
     4 = I trust fully
     5 = I trust ultimately
     m = back to the main menu
     ...
     Your decision? 1
     gpg&gt; quit
</pre>

Thankfully, a trusted Windows machine had GPG4Win which allowed me to export the key and saving my day!
