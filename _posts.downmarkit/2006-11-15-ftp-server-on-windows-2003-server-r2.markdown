--- 
wordpress_id: "15"
layout: post
title: FTP Server on Windows 2003 Server R2
wordpress_url: http://sricharan.org/blog/?p=15
---
We had set up IIS on Windows 2003 server. Along with HTTP, we also had to set up FTP server to allow our staff members to be able to upload info to their respective folders.The initial set up worked, but it was readonly, inspite of the folder permission being write. Then, I checked out that if I logged in as admin, I could create folders! So, I went to check out the folder permissions for the admin account. It was exactly as I had configured the staff account (FULL CONTROL), except that the permission were only for the current folder. For the staff account permissions, I had chosen to give full control to "This folder, and subfolders and files(as intuition and common sense would have served anyone). But, I must confess that I donot fully understand the NTFS permissions structure. So, I changed the staff permissions to this folder only and bingo! it worked.
