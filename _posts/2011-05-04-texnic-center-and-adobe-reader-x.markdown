--- 
layout: post
title: Texnic Center and Adobe Reader X
published: true
meta: 
  tumblrize_post-type: regular
  dsq_thread_id: "388095484"
  tumblrize_post-id: "9041830985"
  _edit_last: "1"
  _wp_old_slug: ""
tags: 
- adobe reader
- texnic center
type: post
status: publish
---
After I upgraded to Adobe Reader X, Texnic center started throwing up an error:"[DocOpen("%bm.pdf")][FileOpen("%bm.pdf")] Cannot execute the command." 
 
Digging up a little on Adobe DDE, I found a solution here: <http://forums.adobe.com/message/3301219#3301219> 
 
Here is the fix: 
Build &gt; Define Output Profiles &gt; Choose 'LaTeX =&gt; PDF' &gt; Viewer tab. In three locations where 'acroview' is the value, change it to 'acroviewR10' and you are good to go!
