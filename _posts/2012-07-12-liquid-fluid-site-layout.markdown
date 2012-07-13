---
layout: post
title: Liquid, Fluid site layout
tags: 
- layout
- fluid
date: 2012-07-12 22:48:38
---

Inspired by [wikipedia](http://en.wikipedia.org), [marco.org](http://www.marco.org) and other gorgeous websites, I added the necessary CSS for this website to adapt dynamically with varying layouts -- note: no Javascript, just plain CSS. The solution is two fold:

- In the `<head>` tag, add the following `<meta>` tag:
      <meta name="viewport" content="width=device-width" />
- In the CSS file, add special CSS rules for varying screen sizes using this syntax:
      @media (max-width: 1024px) { 
        /* CSS rules for screen sizes < 1024 px */
      }
  And yes, as always you may need to provide IE specific rules/overrides in a separate CSS file.

Go ahead and try it: for the most 'effect' & live preview, resize your browser window. Or view this site on your tablet or mobile device.
