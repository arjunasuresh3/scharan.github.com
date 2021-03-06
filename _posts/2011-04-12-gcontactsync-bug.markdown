--- 
layout: post
title: gContactSync bug
published: true
meta: 
  tumblrize_post-type: regular
  tumblrize_post-id: "9041848130"
  _edit_last: "1"
tags: 
- gcontactsync
- thunderbird
type: post
status: publish
---
Found a weird behavior with gContactSync 0.3.2 Thunderbird plugin- on both Windows and Linux (Fedora 14), the sync stops after 111 contacts. Poked around the internet and found that there were no documented bugs on this. 
 
Decided to fix it for myself cos I found that it *really* syncs all the contact information to Thunderbird, including the photo. 
 
gContactSync has a nice 'verbose log' feature for debugging information - but was not of much help since the log stopped after 111 contacts. 
 
Next tool for me was the 'Error Console' in Thunderbird. Not surprisingly, I found an error on line 181 in content/GContact.js, that read " 'type' not defined" : 
 
<pre class="brush:"javascript>
181 type = type.substring(type.indexOf("#") + 1); 
182 return new com.gContactSync.Property(arr[i].childNodes[0].nodeValue, 
183                                                                        type); 
</pre>

Darn! Just as a test, I simply pre-pended 'if(type)' to line 181, resulting in: 
 
<pre class="brush:"javascript>
181 if(type) type = type.substring(type.indexOf("#") + 1); 
182 return new com.gContactSync.Property(arr[i].childNodes[0].nodeValue, 
183                                                                        type); 
</pre>
 
It worked! Not really got a chance to investigate what happens/does not happen when 'type' is NOT defined, but things seem to work for now. I also submitted this here: <a href="http://www.pirules.org/extensions/submit_error.php">http://www.pirules.org/extensions/submit_error.php</a>
