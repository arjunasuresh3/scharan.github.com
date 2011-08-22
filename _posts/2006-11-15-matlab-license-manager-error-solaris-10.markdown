--- 
wordpress_id: "11"
layout: post
title: "Matlab license manager error: Solaris 10"
wordpress_url: http://sricharan.org/blog/?p=11
---
If the Sun Machine is not properly shut down when Matlab (license) server is running, you will be unable to start matlab after the reboot. You will get an error -15.
To trouble shoot, I did the following:
- I knew that lmstart command present int $MATLAB/etc directory starts the matlab license manager.
- To start the license manager (i.e., to run the lmstart command), you need to be logged in as a non-root user.
- So, I tried to start the license manager.
- I got a message saying that I needed to delete some files: /var/tmp/lm_*.log and /var/tmp/lm_*.dat
- For this you need to log in as root.
- Once this is done, run lmstart again.
- Done.
<div class="blogger-post-footer">My experiments with Computers, Computing, Programming &amp; Software.</div>
