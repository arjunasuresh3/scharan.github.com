---
layout: post
title: "Texnic Center error 'pdflatex.exe: Could not Initialize GUI'"
tags: 
- texnic center 
- pdflatex
- gui
- note
date: 2011-09-04 17:02:07
---

Another note to self &mdash;  
This error only means that MikTeX was [unable to find and/or install some missing packages](http://www.latex-community.org/forum/viewtopic.php?f=31&t=310#p1043). To fix this (on Windows), run 'mo.exe' from the command prompt and choose 'Yes' for 'Install missing pacakges on-the-fly'. ('Ask me first' did not work for me).