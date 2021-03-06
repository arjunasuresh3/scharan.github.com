--- 
layout: post
title: "'gitweb' setup without root access"
published: true
meta: 
  tumblrize_post-type: regular
  _edit_last: "1"
tags: 
- git
- gitweb
- highlight
- no root
- no sudo
type: post
status: publish
---
<strong>Setting up gitweb on a machine with no root access:</strong>
<br />
<br />

<div>First, set up lighttpd:</div>
<div>Download from <a href="http://www.lighttpd.net/download">http://www.lighttpd.net/download</a></div>

<pre class="brush:shell">
  $ mkdir -p ~/usr
  $ tar -xvf lighttpd-*; cd !$;
  $ ./configure --prefix /home/&lt;you&gt;/usr
  $ make
  $ make install ## lighttpd is now at ~/usr/sbin/
</pre>
<br />

<div>- Now, if all is well, you should be able to run git instaweb in your local git repository.</div>
<div>- If you see a message like base-docroot not found at /PATH/TO/SOME/WHERE, then it probably did not find that directory.</div>
<div>To resolve this, you can do one of two things:</div>
<div> 1. Find the directory named gitweb/ that contains index.cgi, gitweb.cgi and static/ and run</div>

<pre class="brush:shell">  $ git config --get instaweb.gitwebdir "/PATH/TO/gitweb/" (I figured this from /usr/bin/git-instaweb)</pre>
<br />

<div> 2. Emulate a local install</div>

<pre class="brush:shell">
  $ mkdir -p ~/www/static
  $ git config --get instaweb.gitwebdir "/home//www"
  $ scp ssh://my-ubuntu-machine-with-sudo-access:/usr/share/gitweb/* ~/www/
  $ scp ssh://my-ubuntu-machine-with-sudo-access:/usr/share/gitweb/static/* ~/www/static
  $ cd git-repo; git instaweb;
</pre>
<br />

<div>  - If it instead start and you then see an error like: 404 Not found, the folder exists but</div>
<div>  - the index.cgi file is not found, simply do step 2 above.</div>
&nbsp;
<br />

<div><strong>Setting up highlight (on a machine with no root access):</strong></div>
<div>- Download hightlight from here: <a href="http://www.andre-simon.de/zip/download.html">http://www.andre-simon.de/zip/download.html</a></div>
<div>     $ tar -xvf hightlight*; cd !$;</div>
<div>     $ make</div>
<div>     $ edit 'makefile'<span class="Apple-style-span" style="font-family: Consolas, Monaco, monospace; font-size: 12px; line-height: 18px; white-space: pre;">    </span></div>

<pre class="brush:shell">
  # Destination directory for installation (intended for packagers)
  DESTDIR =
  # Root directory for final installation
  PREFIX = /home/csgrads/scharan/usr # or something appropriate.
  $ make install
  $ PATH=$PATH:~/usr/bin/:
</pre>
<br />

<div>- Download lua from here: <a href="http://www.lua.org/ftp/lua-5.1.4.tar.gz">http://www.lua.org/ftp/lua-5.1.4.tar.gz</a></div>

<pre class="brush:shell">
  $ make linux
  $ Edit makefile to point INSTALL_TOP to ~/usr/local
</pre>
<br />

<div> - Edit ~/www/gitweb.cgi: enable highlight feature (you gotta grep for it).</div>
