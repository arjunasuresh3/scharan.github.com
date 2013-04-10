---
layout: post
title: Static Website on Google App Engine
tags: 
- static
- google app engine
- google apps
- www subdomain
date: 2013-04-10 08:32:52
---

I've been experimenting with hosting [static](https://developers.google.com/appengine/docs/python/gettingstarted/staticfiles) websites on [Google App Engine](https://developers.google.com/appengine/)(GAE) for a while now. One major deterrent to an otherwise [straight](https://github.com/scharan/scharan.github.com/blob/master/app.yaml) [forward](https://github.com/scharan/scharan.github.com/blob/master/Makefile#L25) procedure was the fact that GAE did not automatically serve index.html when encountering static folders. Now that I found [this](https://github.com/scharan/scharan.github.com/blob/master/app.yaml#L16) workaround on [Stack Overflow](http://stackoverflow.com/a/6566464/162471), the static website is ready for GAE!

But there was another hurdle waiting.

GAE's [instructions](https://developers.google.com/appengine/docs/domain) on using custom domain names for GAE hosted apps did not work. Specifically, Step 5 (Add New URL), failed with the following error:
    We are unable to process your request at this time. Please try again later. (Error #1000)
After a bit of searching and experimenting, _*only*_ [this]( https://code.google.com/p/googleappengine/issues/detail?id=5021#c13) apparently silly technique actually worked. Along with [naked domain redirection](https://support.google.com/a/bin/answer.py?hl=en&answer=2518373), this is now a static site, fully hosted on Google App Engine. Even though this runs off GAE, there are zero machine instances running. This can be verified in the [app.yaml](https://github.com/scharan/scharan.github.com/blob/master/app.yaml) not relying on any executable script.

