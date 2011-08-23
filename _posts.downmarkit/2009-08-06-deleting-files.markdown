--- 
wordpress_id: "174"
layout: post
title: Deleting files
wordpress_url: http://saicharan.in/blog/?p=174
---
In my quest for speeding up automated, no-questions asked deletion of the corrupt dev SDKs (which go upto 25 GB), I discovered this:``&gt; rmdir /S /Q .``I even timed it this time: about an hour to delete a 25 GB SDK. And no questions asked. The above command does not write any output to the console! While this can be quite disconcerting initially, it does save a lot of computation time and resources ( I/O is the most expensive operation, remember? ).Earlier on, I used to use &gt; del /s /f /q *. . But that used to delete only the files and not the directories. Deleting the directories manually was another pain. Also, this command had the habit of “informing the user” of what it is deleting – and would take about 3 to 4 hours!Do let me know if you find some faster way to delete the SDK!!
