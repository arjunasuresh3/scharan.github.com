--- 
layout: post
title: "Vonage Usage: Python Script"
published: true
meta: 
  tumblrize_post-type: regular
  dsq_thread_id: "391752324"
  tumblrize_post-id: "9041712187"
  _edit_last: "1"
tags: 
- python
- vonage
type: post
status: publish
---
This eases checking international minutes used with a Vonage World plan <a href="http://saicharan.in/work/vonage.py" target="_blank">http://saicharan.in/work/vonage.py</a>. Just put in your vonage username/password in the script. You would also want to
<pre class="brush: shell">$ sudo pip install libxml2dom</pre>  

Further, to avoid manual check, here is a crontab entry to automatically check usage at 6 AM everyday. It then emails you if you have overshot the usage (defaults to 3000 mins/month). My mail.sh is available on: <a href="https://github.com/scharan/Goodies/blob/master/mail.sh" target="_blank">Github</a>.
<pre class="brush: shell">0 6 * * * vonage.py 1&gt;/tmp/vonage-mail; ret=$?; if [ $ret -ne 0 ]; then mail.sh "Vonage Usage: $ret" /tmp/vonage-mail; fi</pre>  

The script:
<script type="text/javascript" src="http://gist-it.appspot.com/github/scharan/Goodies/raw/master/vonage.py"></script>
<!--script src="https://gist.github.com/1137615.js"> Vonage Usage Gist </script-->
