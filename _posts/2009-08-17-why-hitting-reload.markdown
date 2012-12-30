--- 
layout: post
title: Why hitting 'reload' speeds up page rendering
published: true
meta: 
  tumblrize_post-type: regular
  tumblrize_post-id: "9041989253"
  _edit_last: "1"
tags: 
- browser
- reload
type: post
status: publish
---
This is a response to David Pogues' tweet question: <a href="http://twitter.com/Pogue/status/3332520918" target="_blank">http://twitter.com/Pogue/status/3332520918 </a>

The 'rendering' or 'drawing-model' of a browser is based on HTML. Each visual in HTML element is defined by a HTML 'tag'. For browsers to display/render the page, they need some a certain amount of HTML tags to be available. So when you are faced with a blank page, it means that the browser is waiting for the HTML.

Now, when you hit the reload button, remember that a part of the page has already been downloaded to the browser. Instead of discarding this info, the browser merely spits it out onto the window (thus displaying the page partially) and requests for the page once again. Now that a part of the page is already displayed (even if only partially), the user believes that the page has rendered rather quickly.

If you hit the stop button, however, you will be stuck with a blank page. By hitting stop, you are telling the browser 'dont bother to try and render this page'. By hitting reload, you are still showing interest. Another way to observe progressive rendering is while the page is loading ( the browser shows a blank or a partially rendred page), go to File &gt; Work Offline (in Firefox). You will see the page quickly render the partial page that was succuessfully downloaded. It is a sort of 'best-effort' service.

<strong>Related concept: </strong>Progressive rendering. Jeff Atwood's take on the 'Lost Art of Progressive Rendering': <a href="http://www.codinghorror.com/blog/archives/000444.html">http://www.codinghorror.com/blog/archives/000444.html</a>

This means that browsers don't need to really download the entire page before it can be displayed to the user. But, this depends on how the page has been desinged: <a href="http://www.vbulletin.org/forum/showthread.php?t=161099 " target="_blank">http://www.vbulletin.org/forum/showthread.php?t=161099</a>.
