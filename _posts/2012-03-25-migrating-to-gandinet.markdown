---
layout: post
title: Migrated to Gandi.net
tags: 
- migration
- gandi.net
date: 2012-03-25 16:15:43
---

For various reasons & non-reasons, I decided to move my [domain](http://saicharan.in) from [Nettigritty](http://domains.nettigritty.com) to [Gandi.net](http://gandi.net).

As of this writing, the transition has been successful. With Nettigritty not my domain registrar, I also decided to move away from their hosting solution. If you have been following this blog, as noted [here](/blog/2011/08/22/migrating-to-jekyll/), [here](/blog/2011/08/24/static-blog-using-jekyll/) & [here](/blog/colophon.html), this blog now runs as a [Jekyll](http://jekyllrb.com) generated, [Github](https://github.com/scharan/scharan.github.com/) hosted static site. I recently successfully experimented with Amazon's [S3](http://aws.amazon.com/s3/) to run a static site.

Since this website does not have too much traffic, for purposes of speed & availability, I decided to run it off Amazon S3. So, this page you are seeing is now served off S3.

Getting here has not been completely straight forward, so the rest of this piece is a little chronicle of the extras:
- Completely setup DNS entries on Gandi.net from scratch.
- Without a hosting provider, this site does not have a real A record. So, people who visit http://saicharan.in would then get an error message. As naked domains cannot be DNS mapped with CNAME records, a little [digging](https://forums.aws.amazon.com/thread.jspa?threadID=55995) around revealed [wwwizer.com](http://wwwizer.com) as a free(!) service for this very purpose. However, I also found that Google Apps also provides this service for Apps enabled sites. Since this domain has also been setup for Google Apps, I simply set up the appropriate A records as listed at on the [dashboard page](https://www.google.com/a/cpanel/saicharan.in/DomainSettingsDomains). In summary, the DNS set up is:
   * saicharan.in.      10800   IN   A       216.239.36.21
   * www.saicharan.in.  10800   IN   CNAME   saicharan.in.s3-website-us-east-1.amazonaws.com
- Set up S3 bucket, add bucket policy and enable bucket as a website. See [this](http://aws.typepad.com/aws/2011/02/host-your-static-website-on-amazon-s3.html) for details.
- Wait for DNS entries to propagate.
