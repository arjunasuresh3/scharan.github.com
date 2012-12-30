--- 
layout: post
title: FTP Server on Windows 2003 Server R2
published: true
meta: 
  tumblrize_post-type: regular
  tumblrize_post-id: "9010203106"
  _edit_last: "1"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2006/11/ftp-server-on-windows-2003-server-r2.html
tags: 
- ftp server setup
- windows server 2003 R2
type: post
status: publish
date: 2006-11-15 05:30:00-08:00
---
We had set up IIS on Windows 2003 server. Along with HTTP, we also had to set up FTP server to allow our staff members to be able to upload info to their respective folders.
The initial set up worked, but it was readonly, inspite of the folder permission being write. Then, I checked out that if I logged in as admin, I could create folders! So, I went to check out the folder permissions for the admin account. It was exactly as I had configured the staff account (FULL CONTROL), except that the permission were only for the current folder. For the staff account permissions, I had chosen to give full control to "This folder, and subfolders and files(as intuition and common sense would have served anyone). But, I must confess that I donot fully understand the NTFS permissions structure. So, I changed the staff permissions to this folder only and bingo! it worked.
