---
layout: post
title: Ubuntu 11.10, PuTTy, tmux & UTF-8
tags: 
- ubuntu
- tmux
- utf8
date: 2011-10-17 01:46:22
---

After the upgrade today, firing up a tmux session via PuTTy with my usual "Session Settings > Translation > Remote Character Set" pointing to "ISO-8859-6:1999 (Latin/Arabic)", I found that line drawings were all messed up: the lines were drawn with the 'a' like characters, instead of lines. It occured to me that the newly updated Ubuntu ncursesw libraries and/or tmux may have fixed something. Promptly switching to 'UTF-8' as the remote character set brought back the good looking line-drawings.