--- 
layout: post
title: Static Blog Using Jekyll
published: true
meta: 
  tumblrize_post-type: regular
  tumblrize_post-id: "9308743476"
  _edit_last: "1"
tags: 
- jekyll
- static blog
type: post
status: publish
---
This is what it took me to migrate from WordPress to Jekyll:

* Import blog using the wordpressdotcom importer.
* Use Disqus WP plugin to export comments into Disqus.
* Generate static pages (include Disqus code in Jekyll template).
* Add search functionality.
* Add personal pages (about/search/rss).

Done! (A preview is available [here](http://aws.saicharan.in).)


Update: 

* Adding tags was a lot more effort. A little help from [this gist](https://gist.github.com/143571#gistcomment-7054) saved the day.
* Adding pages for year, month and day was a ton more effort. I modified archive.rb from [josegonzalez](https://github.com/josegonzalez/josediazgonzalez.com/_plugins) and also customized his \_layout/archive\_*.html
* Added an error handler with some JS to show my own custom error page.

You can find the sources here: <https://github.com/scharan/scharan.github.com>.

_Update:_

I also modified [metajack's jekyll.el](https://github.com/metajack/jekyll/blob/master/emacs/jekyll.el) to add a date: header (with date & time) on publish: <https://gist.github.com/1171592>. The gist:

<script src="https://gist.github.com/1171592.js?file=jekyll.el"></script>