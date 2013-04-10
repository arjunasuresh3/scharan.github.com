---
layout: page
title: Colophon
---

Historically, this site was first built on [Blogger](http://sricharan-log.blogspot.com). Next, it ran off a self-hosted [Wordpress](http://wordpress.org) installation off [Nettigritty's](http://nettigritty.com). Currently, this site is registered with [Gandi.net](http://gandi.net) & served off [Amazon's S3](https://aws.amazon.com/s3).

These tools are used to write, publish and serve the present site &mdash;

#### Writing
- emacs (with [this](https://gist.github.com/1171592) adaptation of [jekyll.el](https://github.com/talison/jekyll.el)) aided by the handy [typopunct](http://www.emacswiki.org/emacs/TypographicalPunctuationMarks) minor mode and [unc-insert](http://www.gnu.org/s/libtool/manual/emacs/International-Chars.html).
- all recent posts written in [markdown](http://daringfireball.net/projects/markdown/).
- [Git](http://git-scm.com/) for version control and [Github](https://github.com/scharan) as the remote repository.

#### Publishing
- [Jekyll](http://jekyllrb.com) for static HTML generation - slow page serving and bloated functionality of various publishing platforms being the reason for a static site.
- [Patched](https://github.com/scharan/jekyll/compare/handle-modified-timestamps#diff-0) version of [Jekyll](http://jekyllrb.com) to [minimize](/blog/2011/09/02/jekyll-feature-retain-modified-time-stamp/) the ftp-push footprint.
- [Jose Gonzalez's](http://josediazgonzalez.com/) [archive plugin](https://github.com/josegonzalez/josediazgonzalez.com/blob/master/_plugins/archive.rb) for archive pages. The [Jekyll sources & templates are available on Github](https://github.com/scharan/scharan.github.com/).
- [FTPSync](http://sourceforge.net/projects/ftpsync/) for incremental push to live site.

#### Server
- Static files hosted on Google's [App Engine](https://developers.google.com/appengine/).
    * Previously: Static files hosted on [Amazon's S3](https://aws.amazon.com/s3).
    * Previously: [Nettigritty's](http://nettigritty.com) servers &mdash; they are a fantastic, affordable [domain registrar](http://domains.nettigritty.com/) and [hosting provider](http://www.nettigritty.com/linuxwebhosting.php). You should try them!
- Apache webserver.
- [Github](https://github.com/scharan/munich) & [Google Code](http://code.google.com/) as CDNs.
- Comments are served out by [Disqus](http://disqus.com).
- Syntax highlighting by the [Google Code hosted 'Prettify'](http://code.google.com/p/google-code-prettify/) JS library.
- Some [jQuery](http://jquery.com/) [aided](https://github.com/scharan/munich/blob/master/prettify-adapter.js) [javascript](https://github.com/scharan/munich/blob/master/customize-disqus.js).
