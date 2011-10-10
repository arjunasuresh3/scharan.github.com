---
layout: post
title: Gitweb with 'side-by-side' diff
tags: 
- gitweb
- diff
date: 2011-10-09 23:20:40
---

Bonus: Simultaneously scroll left and right files with overflow.

Dependencies: [jQuery](http://jquery.com/)

Usage: Simply include jQuery in gitweb/gitweb.cgi (within the head tag).

Future work: Going by [this thread](http://kerneltrap.org/mailarchive/git/2009/6/11/4701) on kerneltrap.org, 'side-by-side' diff appears to have been on the team's TODO list and never gotton around to being implemented. So, except for the simultaneous scrolling, I intend to port this to Perl and hope to get it integrated into Gitweb core. Simultaneous scrolling needs to be done in Javascript and the fact that external dependencies are [frowned upon](http://kerneltrap.org/mailarchive/git/2009/6/11/4701),

> Note that we frown upon introducing extra dependencies for gitweb, unless they are optional, and best detected automatically.

scrolling needs to be handled separately in gitweb.js (the currently implementation depends on [jQuery](http://jquery.com)).

Gist: <https://gist.github.com/1274726>

<script src="https://gist.github.com/1274726.js"> </script>
