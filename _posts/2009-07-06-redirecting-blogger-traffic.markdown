--- 
wordpress_id: "141"
layout: post
title: Redirecting blogger traffic
wordpress_url: http://saicharan.in/blog/?p=141
---
Having moved to my own domain, I was monitoring traffic to my site on Google Webmasters site. I notices that Google still returned results from my blogger-hosted domain. I wanted people to be redirected to my new domain.

Here is what I did:
<ul>
	<li> Blogger &gt; Settings &gt; Publishing &gt; Advanced Settings. Chose to redirect to my sub-domain blog.saicharan.in</li>
	<li>In my domain management cpanel &gt; Subdomains, created blog.saicharan.in and added the home directory as my blog directory.</li>
	<li>Using the wordpress admin interface, I changed the structure of my blog permalinks to be of blog/year/month/date/title.</li>
</ul>
Now come the interesting part. While wordpress provided me text to add in my .htaccess, it did not provide the code for redirection. Google helped me add the following line in my .htaccess file that did the trick!

` RedirectMatch permanent ^/[0-9]{4}/[0-9]{2}/([a-z0-9]+) http://saicharan.in/blog/$1 `

That did the trick. Thanks to BlogBloke!

References:
<a href="http://www.blogbloke.com/migrating-redirecting-blogger-wordpress-htaccess-apache-best-method/" target="_blank">http://www.blogbloke.com/migrating-redirecting-blogger-wordpress-htaccess-apache-best-method/</a>
