--- 
layout: post
title: "Matlab license manager error: Solaris 10"
published: true
meta: 
  tumblrize_post-type: regular
  dsq_thread_id: "388095238"
  tumblrize_post-id: "9010097969"
  _edit_last: "1"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2006/11/matlab-license-manager-error-solaris-10.html
tags: 
- matlab
- matlab license manager error
- solaris
- solaris 10
type: post
status: publish
date: 2006-11-15 05:15:00-08:00
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
