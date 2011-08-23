--- 
wordpress_id: "284"
layout: post
title: "Vonage Usage: Python Script"
wordpress_url: http://saicharan.in/blog/?p=284
---
This eases checking international minutes used with a Vonage World plan [http://saicharan.in/work/vonage.py](http://saicharan.in/work/vonage.py). Just put in your vonage username/password in the script. You would also want to<pre class="brush: shell">$ sudo pip install libxml2dom</pre>Further, to avoid manual check, here is a crontab entry to automatically check usage at 6 AM everyday. It then emails you if you have overshot the usage (defaults to 3000 mins/month). My mail.sh is available on: [Github](https://github.com/scharan/Goodies/blob/master/mail.sh).<pre class="brush: shell">0 6 * * * vonage.py 1&gt;/tmp/vonage-mail; ret=$?; if [ $ret -ne 0 ]; then mail.sh "Vonage Usage: $ret" /tmp/vonage-mail; fi</pre>The script:<script src="http://gist-it.appspot.com/github/scharan/Goodies/raw/master/vonage.py" type="text/javascript"></script><!--script src="https://gist.github.com/1137615.js"> Vonage Usage Gist </script-->
