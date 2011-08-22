--- 
wordpress_id: "22"
layout: post
title: "Linux : Mounting a USB device - made simpler"
wordpress_url: http://sricharan.org/blog/?p=22
---
1) At the terminal, log in as root.

2) Open the /etc/fstab file for editing.

3) Append the following entry to the file: /dev/sda1 /mnt/usb autofs
0 0

4) Start &gt; System Tools &gt; Disk Management

5) Select the device to be mounted and mount.

NOTES:

1) /dev/sda1 is the name of the device whose file system you want to mount at /mnt/usb (this too is your choice!)

2) autofs tells the mount command that the filesystem type should (attempted to) be detected automatically. If you want, you can explicitly specify a file system.

3) In the options, DONOT specify the kudzu option. The kudzu option will cause /etc/fstab to be updated when the usb device is unmounted or unplugged. Thus, the entry will vanish after this. For more information regarding kudzu, use man kudzu at the terminal.

4) In the options, please specify user and NOT owner. If you donot specify user, the DiskManagement will not show the USB device if this is launched by a non-root user (by default). The GUI for DiskManagement is actually a command called usermount that reads from /etc/fstab and displays a list. Hence, if user is NOT specified, the device will not show up in the list. Further, the user option indicates that ANY user can mount this device!!!

5) For convinience, the DiskManagement can be added to the launcher panel (Start &gt; System Tools. Right Click on DiskManagement and click on Add to Launcher Panel)
