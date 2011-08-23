--- 
wordpress_id: "266"
layout: post
title: Texnic Center and Adobe Reader X
wordpress_url: http://saicharan.in/blog/?p=266
---
After I upgraded to Adobe Reader X, Texnic center started throwing up an error:"[DocOpen("%bm.pdf")][FileOpen("%bm.pdf")] Cannot execute the command."Digging up a little on Adobe DDE, I found a solution here: http://forums.adobe.com/message/3301219#3301219Here is the fix:Build &gt; Define Output Profiles &gt; Choose 'LaTeX =&gt; PDF' &gt; Viewer tab. In three locations where 'acroview' is the value, change it to 'acroviewR10' and you are good to go!
