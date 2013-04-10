---
layout: post
title: Handling 404 Errors in Javascript
tags: 
- 404
- Not found
- Javascript
date: 2013-02-06 08:41:54
---

[Migrating](/blog/colophon.html) between hosting and blogging solutions can cause headaches. Now that I've moved to an Amazon S3 hosted [static website](/blog/2011/08/24/static-blog-using-jekyll/), I needed an intelligent way to handle certain features like tags and categories that I had with the blogger.com and Wordpress hosted site, _**without**_ the need to host a server.

JavaScript to the [rescue](https://github.com/scharan/scharan.github.com/blob/master/_includes/error.html)! 

- I first identified the specific causes of problem using the crawl statistics from Google's [Webmasters](https://www.google.com/webmasters/tools/home) tool.
- I then [crafted](https://github.com/scharan/scharan.github.com/blob/master/_includes/error.html) JavaScript specifically tailored for these situations.
- Put that into my [404.html](https://github.com/scharan/scharan.github.com/blob/master/_includes/error.html).

This solution is specific to my use case, but you can get the idea.

