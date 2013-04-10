---
layout: post
title: Levenshtein Distance for Handling Redirects from Blogger
tags: 
- Levenshtein distance
- redirect
- blogger.com
date: 2013-04-06 08:07:26
---

Here's a problem I've long faced and a neat use of Levenshtein Distance.

This website started off as a blog on [blogger.com](http://www.blogger.com). Over time, it was migrated to a self hosted Wordpress site and now runs off a [Jekyll generated](/blog/2011/08/22/migrating-to-jekyll/), Amazon [S3 hosted](/blog/colophon.html) bucket.

However, since the blogger hosted site still got a lot of traffic from search, I did not take it down. I've always wanted to redirect the traffic to my new website, but Blogger apparently only features redirects in the other [direction](https://support.google.com/blogger/bin/answer.py?hl=en&answer=2472689). While [Webupd8.org](http://www.webupd8.org/2009/06/how-to-redirect-your-blogger-blog-to.html) has a solution, I could not get it working in this case. There were at least two problems that were in the way:

- URL structure of the current website also includes the date of publication, in addition to the year and month.
- while migrating to Jelyll, some of the URL '[slugs](http://en.wikipedia.org/wiki/Clean_URL#Slug)' also changed.
- I did not want to host a server to do this; I had [tried this](/blog/2009/07/06/redirecting-blogger-traffic/) and have moved on.

To deal with these two and also handle correct redirects automatically, here is my quick solution:

- On the blogger.com hosted website, place a redirect to a special page to handle redirects from blogger (in this case, /blog/blogger-redirect.html).
      <meta expr:content='"0;url=http://saicharan.in/blog/blogger-redirect.html?from="+data:blog.url' http-equiv='refresh'/>
- This special page first detects the '[referer](http://en.wikipedia.org/wiki/HTTP_referer)', then extracts the year, month and slug from the blogger URL. If the referer is not found, extract the query parameter `from`. This is a minor optimization in case referer is set (eg. with Google Chrome); one could simply always use the query parameter method (IE and Firefox seem to remove `referer`).
- It then lists the URLs on the month-page (eg. /blog/YYYY/MM/) of this website, and computes the _[Levenshtein's distance](http://en.wikipedia.org/wiki/Levenshtein_distance)_ between the blogger-slug from the blogger URL and the slugs from the month-page URLs.
- If the minimum amongst the computed Levenshtein distances is less than 5, automatically redirect to the URL with that minimal Levenshtein distance ([example](http://blogger.saicharan.in/2009/03/viewvc-integration-with-google-prettify.html)).
- If not, admit that we made a booboo and list all pages for that month, and additionally providing the search box ([example](http://blogger.saicharan.in/2007/01/this-is-test-post-from-google-docs.html)).

Notes: 

- I am pretty sure this may affect the SEO ratings, but I am unsure how exactly that will be. So, if you use it, be cautious.
- This solution needs Javascript to work, but has the advantage of not requiring any server backend.
- I used [this](http://stackoverflow.com/a/11958496/162471) JavaScript implementation of Levenshtein's distance.
- [This](https://github.com/scharan/scharan.github.com/blob/master/blog/blogger-redirect.html) is the source code for my solution.
- Yes, the source code could do with some more optimization :/

