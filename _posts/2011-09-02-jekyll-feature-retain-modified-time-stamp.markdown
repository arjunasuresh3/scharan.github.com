---
layout: post
title: "Jekyll feature: Retain Modified Time Stamp"
tags: 
- jekyll
- feature
- timestamp
- ftpsync
date: 2011-09-02 12:54:03
---

To ease publishing via Jekyll, I needed to push via FTP to my hosting provider. I decided to the perl utility from sourceforge: [ftpsync](http://sourceforge.net/projects/ftpsync/). However, running it made me notice that Jekyll always regenerated all files and obviously, they had a 'now' timestamp. This was basically throwing off the FTPSync utility which ended up pushing the entire site, defeating the very purpose of the utility.

So, I made a two line fix that handles static pages and _posts/ as follows: The time stamp of the markdown/static page is copied to the published post page. So, even though Jekyll regenerates the entire site, the timestamps are adjusted to prevent unnecessary push via tools like FTPSync. Note that other pages will still have the 'now' timestamp.

The diff can be [viewed here](https://github.com/scharan/jekyll/compare/handle-modified-timestamps#diff-0). Feedback/suggestions welcome in comments.
