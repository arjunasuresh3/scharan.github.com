--- 
wordpress_id: "333"
layout: post
title: Persisting/restoring ssh-agent across screen/tmux sessions
wordpress_url: http://saicharan.in/blog/?p=333
---
As a heavy user of screen and now of tmux, I find it annoying that each time I disconnect the terminal and reconnect and then reattach to screen/tmux, I find that inside the screen/tmux sessions, SSH_AUTH_SOCK variable is stale: it does not point anymore to the 'current' agent.pid file. So, here is a script to fix that: <a href="https://github.com/scharan/Goodies/blob/master/ssh-agent-restore">https://github.com/scharan/Goodies/blob/master/ssh-agent-restore</a>
