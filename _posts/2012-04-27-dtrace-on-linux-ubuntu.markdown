---
layout: post
title: Dtrace on Linux (Ubuntu)
tags: 
- dtrace
- linux
date: 2012-04-27 18:17:37
---

So I needed to use on [Dtrace](http://www.crisp.demon.co.uk/) on Linux. I picked the [April 2012](ftp://crisp.dyndns-server.com/pub/release/website/dtrace/dtrace-20120409.tar.bz2) release of the [software](ftp://crisp.dyndns-server.com/pub/release/website/dtrace). 

Followed these instructions from [Mustali Kachwala's blog](http://mustalikachwala.blogspot.com/2012/03/lazyswamp-dtrace-on-linux.html):

    $ bunzip2 < dtrace-*.bz2 | tar xvf -
    $ sudo apt-get install bison
    $ sudo apt-get install flex
    $ sudo apt-get install zlib1g-dev
    $ sudo apt-get install libelf-dev 
    $ cd dtrace-[TAB]
    $ make all 

<code> $ make install </code> failed to find gnu/stubs-32.h. As suggested on [Stackoverflow](http://stackoverflow.com/a/7412698/162471), I did <code> sudo apt-get install libc6-dev-i386 </code>. Note that <code> sudo apt-get install libc6-dev </code> did not work; probably [Timothy's comment](http://stackoverflow.com/questions/7412548/gnu-stubs-32-h-no-such-file-or-directory#comment8957902_7412698) in the same SO thread is a pertinent explanation. <code> make all </code> was successful, but notified me that <code> build/ctfconverter </code> did not exist, so no <code> linux*.ctf </code> files were produced; but that did not seem an error; just a warning.

    # First, I needed to comment out the lines 
    # that attempted to install *.ctf files.
    $ sudo make install 
    $ sudo make load

Notice that the <code> install </code> script installed <code> dtrace </code> at <code> /usr/sbin</code>, and not <code> /usr/bin </code>. This distinction is important since there is a default version of <code> dtrace </code> at <code> /usr/bin/dtrace</code>, which does NOT take most of the options that the newly compiled version of <code>dtrace</code> accepts.

Then & only then did the [options & examples on the wiki](https://wikis.oracle.com/display/DTrace/Introduction) begin to work.

