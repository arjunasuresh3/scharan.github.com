--- 
layout: post
title: .bash_profile in ubuntu
published: true
meta: 
  dsq_thread_id: "388193883"
  _edit_last: "1"
tags: 
- .bash_profile
- ubuntu
type: post
status: publish
---
I updated my `.bash_profile` in my ubuntu instance but the changes were not getting reflected in my shell.

A bit of searching revealed that I have to instead add a new `.sh` file in `/etc/profile.d/` that contained the necessary aliases and updates to my `PATH` etc. It appears like Ubuntu auto runs all `.sh` files in `/etc/profile.d/` whenever a login session is created.

`.bash_profile` was a lot more personal customization. Wonder how I could this personal customization in ubuntu. Any one any ideas? Let us know via comments.

@update: Thanks to manoj for pointing out `.bashrc` (had forgotton about it). `.bashrc` does help with personalizing the environment.
