--- 
layout: post
title: Lookout - Outlook!!
published: true
meta: 
  tumblrize_post-type: regular
  dsq_thread_id: "387972663"
  tumblrize_post-id: "9009933974"
  _edit_last: "1"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2006/04/lookout-outlook.html
tags: 
- ical
- ical calendars
- outlook
type: post
status: publish
date: 2006-04-16 08:03:00
---
Here is where I again had a hell lot of problems. I wanted to make a birthday calendar and export it in the standard iCal format to my Google Calendar etc, as iCal was hailed on the web as the defacto standard for calendars.
I started with Sunbird 0.3a1. Thinking that I could export things in iCal format, I filled in all the birthdays I wanted to. And, then I found that all I had done was a waste. It only allowed me to export selected items as iCal. Thinking that maybe the default format for the calendar is iCal, I looked in my profile directory and bingo! nothing like *.ical, *.vsc or *.vcal. Then the Mozilla Foundation's documentation told me that from this version of sunbird, the default file format was .sdb, some SQLite format. Gone waste was my effort.
Lesson #1: Always look for the existance of the features you need in the s/w you choose.

So, what do I do? Google it ofcourse!
This is what Google yielded and had some good reviews too: <a href="http://outlook2ical.sourceforge.net/">http://outlook2ical.sourceforge.net/</a>
It was some VB script. Things went cool till I exported the calendar and imported it into Sunbird. The recurring events which were supposed to recur every year once were recurring every day for a month! Give up?
Lesson #2: Never trust feature description. Check out the features ur self.

What next?
I wanted to somehow get this b'day business running, so I filled out the calendar in Outlook (for the simple reason that it was faster to add in Outlook than in Sunbird, donno why). Then, I bumped into this: <a href="http://www.rainlendar.com/">http://www.rainlendar.com</a>. A very cute utility that seamlessly integrates with Outlook (oh my God!), reads from and understands iCal files! Thought this was a jackpot. Installed the software and loved its interface and cool features. Under the config &gt; Plugins, i checked the Outlook option and refreshed the rainlendar on my desktop, it began showing the bithdays on the CORRECT days and onMouseOver(), it displayed the subject and description in a pop-up!
Cute piece of work.

Next, I wanted to take this calendar of outlook to my workplace. How?
I chose Calendar. Then I said File &gt; Archive. I saved only the Calendar to an archive.pst (which was non-empty (~256 kb) ). Then I closed Outlook and made another copy of this file.
Next, on my Win XP with Outlook 2003, I found the archive of the current Outlook files here C:\Documents and Settings\%USER_NAME%\Local Settings\Application Data\Microsoft\Outlook\Outlook.pst
Just to see if I can import, I changed the name of the file from Outlook.pst to OldOutlook.pst. As expected, Outlook did not open saying it could not find the file Outlook.pst; but, it gave me file open dialog where I chose the archive.pst. Then agagin it gave some error and closed. The next time I opened Outlook, it opened, but there was nothing there. So, I decided to import the stuff. I chose File &gt; Import and Export &gt; Import from another file or program &gt; Personal Files Folder (.pst).
Here I chose the backup file of the Outlook.pst that I had made earlier (did not want to take any chances with my calendar!). Then, I chose to import the calendar and hit the Finish button. Done!
I opened my calendar on the left tab and yo! the birthdays were there!!!

Okay, so much so far, but not good enough for me to export to iCal yet. Anyone ne ideas? Please lemme know.
<div class="blogger-post-footer">My experiments with Computers, Computing, Programming &amp; Software.</div>
