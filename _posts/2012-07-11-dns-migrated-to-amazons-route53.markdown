---
layout: post
title: DNS migrated to Amazon's Route53
tags: 
- route53
- dns
- amazon
date: 2012-07-11 15:11:52
---

As of 3PM PST on 07/10/2012, the DNS provide for my domain [saicharan.in](http://www.saicharan.in) is Amazon's [Route53](https://aws.amazon.com/route53/) service. Here is the migration log.

- `$ sudo pip install cli53` (see [installation notes](https://github.com/barnybug/cli53/#installation)).
- Choose to ['see the zone file'](https://www.gandi.net/admin/domain?filter.zone.id=<zoneid>) on Gandi.net's [DNS zones page](https://www.gandi.net/admin/domain/zone/list#main) and copy the zone file contents.
- Create a file name saicharan.in containing the copy of the zone file from previous step.
- As explained [here](http://opensourcehacker.com/2011/11/23/migrating-from-bind-dns-servers-to-amazon-route-53-by-using-cli53/) unlike [BIND](http://en.wikipedia.org/wiki/BIND), cli53 does not infer `$ORIGIN` from the zone file name. For import to be successful, add the following line to the top of the file from the previous step.
       $ORIGIN saicharan.in
- `$ touch ~/.boto`
- Add the following to ~/.boto:
       [Credentials]
       aws_access_key_id = [your AWS ID]
       aws_secret_access_key = [your AWS key]
- `$ cli53 create saicharan.in`
- `$ cli53 import example.com --file saicharan.in --replace --wait`
- Change saicharan.in's DNS servers on Gandi.net's control panel. The new name servers can be got by running:
      $ cli53 info saicharan.in
  
