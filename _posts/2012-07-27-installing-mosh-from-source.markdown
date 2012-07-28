---
layout: post
title: Installing mosh from source
tags: 
- mosh
- perl local install
date: 2012-07-27 17:05:41
---

Installing [mosh](http://mosh.mit.edu/), the MObileSHell on a linux box with no `sudo` access can be quite a bit of a pain. And, with many users working with shared, managed linux gateways, I suppose this could be useful to a larger audience.

In this note, I will attempt to install `mosh` into the home directory of user `sai` with home directory at `/home/sai` assuming user `sai` does not have root access on this machine. This note further assumes that a basic development environment is already set up and available.

Installation notes:

- First create the local directory to install into: `mkdir -p ~/usr`
- As listed in the [building from source](http://mosh.mit.edu/#getting) section, [Protocol Buffers](http://code.google.com/p/protobuf/) and [IO::Pty](http://search.cpan.org/~rgiersig/IO-Tty-1.07/Pty.pm) Perl module. To do this, download Protocol Buffers, untar and run:
      ./configure --prefix=/home/sai/usr && make && make check && make install 
  from the source root directory.
- Download mosh, untar and run 
      export PKG_CONFIG_PATH=/home/sai/usr/lib/pkgconfig && ./configure --prefix=/home/sai/usr && make && make install
 from the mosh source root directory.
- Note that IO::Pty is not needed at compile/install time. Instead, it is needed to run mosh, which is a perl script. The steps are a little more involved, but I am going to gloss over the details here. Feel free to seek clarifications in the comments section below.
    * Run `cpan` (I chose 'no' for manual configuration).
    * Inside cpan, run `install IO::Tty`; if the files fail to download, download the files manually, transfer to `~/.cpan/sources/authors/<appropriate-path>`.
    * These following two commands allow local install paths from within cpan command. Source: [PerlMonks](http://www.perlmonks.org/?node_id=630027).
          cpan> o conf mbuildpl_arg "--install_base /home/sai/usr/local/"
          cpan> o conf makepl_arg "PREFIX=/home/sai/usr/local/"    
    * Again, run `install IO::Tty`
- Add these lines to your .bashrc or appropriate startup shell configuration file:
      export  PERL5LIB=$PERL5LIB:/home/sai/usr/local/lib64/perl5/site_perl/5.8.8/x86_64-linux-thread-multi:
      export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/sai/usr/lib:
      export PATH=$PATH:/home/sai/bin:

Thats it. You should now be able to run `mosh`. To test, you can run: `mosh localhost`.

_Note_. I used `cpan` since `cpanm` was not available on the system.

