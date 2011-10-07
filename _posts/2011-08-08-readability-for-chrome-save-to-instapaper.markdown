--- 
layout: post
title: "Readability for Chrome: Save to Instapaper"
published: true
meta: 
  tumblrize_post-type: regular
  dsq_thread_id: "388013950"
  tumblrize_post-id: "9041821292"
  _edit_last: "1"
tags: 
- Instapaper
- Readability
type: post
status: publish
---
I love readability (readability.com) for the clutter free reading experience. As a student, I prefer freebies. Instapaper does a great job of reading lists - and its free too. I wanted to combine the Readability's 'Read Later' shortcut (shift + `) to save to Instapaper. Turns out, its easy:

On Windows, goto:
%USERPROFILE%\AppData\Local\Google\Chrome\User Data\Default\Extensions\oadggleneidfmbhhedlildjnpgcggmch\1.6_0\js

On Ubuntu Linux, goto: 
~/.config/chromium/Default/Extensions/oadggleneidfmbhhedlildjnpgcggmch/1.6_0/js/ 
 
Replace the contents of 'save.js' with the script below. <del datetime="2011-08-13T03:10:26+00:00">You will have to replace with the string that follows instapaper.com/j/ in your personal bookmarklet - sorry, its a wee little bit more effort.</del> Found a way to avoid user specific token. This works out of the box. 
<script type="text/javascript" src="http://gist-it.appspot.com/github/scharan/Goodies/raw/master/save.js"></script> 
<!--pre class="brush: javascript">(function(){var d=document,z=d.createElement('scr'+'ipt'),b=d.body,l=d.location;try{if(!b)throw(0);d.title='(Saving...) '+d.title;z.setAttribute('src',l.protocol+'//www.instapaper.com/j/ms9ZEqYS9JfG?u='+encodeURIComponent(l.href)+'&amp;t='+(new Date().getTime()));b.appendChild(z);}catch(e){alert('Please wait until the page has loaded.');}}());</pre--> 
 
That piece of code is and adaptation from Instapaper's 'Read Later' bookmarklet: <a href="http://www.instapaper.com/extras">http://www.instapaper.com/extras</a> 
 
Now simply disable/re-enable the Readability plugin, open (or reload if already open) the page you wish to 'read later' and hit (shift + `) keys. If you are logged in with Instapaper, you should see the Saved! popup on the top left. Else, you will be prompted to login and then Instapaper saves your bookmark, returning you to the page you were on. 
 
Neat!
