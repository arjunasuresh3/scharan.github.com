--- 
wordpress_id: "34"
layout: post
title: Subclipse Proxy Configuration
wordpress_url: http://sricharan.org/blog/?p=34
---
Whew! That was a real big deal.

I wanted to checkout the newly open-sourced <a href="http://code.google.com/p/google-web-toolkit/source">Google Web Toolkit</a> using <a href="http://www.eclipse.org/">Eclipse</a> via the <a href="http://subclipse.tigris.org/">Subversion plugin</a>. I work behind a proxy and have a choice of three proxies offering varying capabilities and restrictions - some require authentication while others don't. When I tried checkout, I was in for a real surprise - I was getting an error message saying <span style="font-weight: bold;">Error 407: Proxy authentication required</span>. Since I did not set any proxy in the first place, I was wondering how a proxy was picked up and why I was not being <span style="font-style: italic;">prompted</span> for authentication!

When I searched the Eclipse preferences dialog for SVN, I did not find any place where I can set up a proxy. Also, I wondered if Subclipse had somehow chosen to use my Windows default proxy configuration. So, I went to Control Panel &gt; Internet Connection &gt; Connections &gt; LAN Settings. Nope, the default proxy that I had configured for my windows was different from the one that Subclipse was using - the default proxy did not require authentication while Subclipse was trying a proxy that required authentication. Exasperating!

Just wanted to be sure which proxy was being used. As usual, the <a href="http://www.ethereal.com/">Ethereal</a> network protocol analyzer came to my rescue. I figured out that by default, Subclipse had chosen a proxy that needed authentication (I am yet to find out how it found the proxy address in the first place!) and had not prompted me for authentication. Then, a search through Eclipse help led me to this link: <a href="http://svnbook.red-bean.com/en/1.1/ch07.html#svn-ch-7-sect-1.2">http://svnbook.red-bean.com/en/1.1/ch07.html#svn-ch-7-sect-1.2.</a>

In short, I had to edit the registry to set my proxy - call that user friendly??? Well, since most of the time people who check out code are geeks, may be I should excuse this!!! Here is where I had to go:
HKCU\Software\Tigris.org\Subersion\Servers\Global\http-proxy-host and http-proxy-port values. Once I set up the proxy there, all worked well.

Whew!!! Breathe easy now :)
