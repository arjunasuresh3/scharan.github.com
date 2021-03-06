--- 
layout: post
title: Creating DLLs with MinGW
published: true
meta: 
  dsq_thread_id: "388095359"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2008/09/this-morning-i-was-asked-how-to-use.html
tags: []

type: post
status: publish
---
This morning, I was asked how to use existing C code in C++ code. So I took the route of converting the C code into a DLL and then linking to it from the C++ code. So I had to figure out how to do this using MinGW on Windows. Here is an account of my experiments (distilled ofcourse!):<br />There are three things you need to do:<br />1. Convert the existing into a DLL.<br />2. Include the header of the DLL in the sources where you wish to use the library.<br />3. Build your code, linking against your DLL.<br /><br />Here are the steps:<br />a) For this, you need to add the following code to the header file containing the declarations of the functions that are to be used:<br /><br />#ifdef __cplusplus<br />#define cppfudge "C"<br />#else<br />#define cppfudge<br />#endif<br /><br />#ifdef BUILD_DLL<br />// the dll exports<br />#define EXPORT __declspec(dllexport)<br />#else<br />// the exe imports<br />#define EXPORT extern cppfudge __declspec(dllimport)<br />#endif<br /><br />b) Front of each function that you want to use from the DLL, prepend the word EXPORT. For example:<br />EXPORT int hello(void);<br /><br />c) Create the create the object code using the following command:<br />>gcc -c -DBUILD_DLL TestDLL.c, where TestDLL.c is the source file.<br /><br />d) Next, use the object code to create the DLL with the following command:<br />>gcc -shared -o TestDLL.dll TestDLL.o -Wl,--out-implib,TestDLL.a, Note that TestDLL has to be replaced with whatever is the actual DLL name.<br />>Creating library file: TestDLL.a (This is the output of the command)<br /><br />e) Now, compile the actual file (note that this file should include the TestDLL.h header)<br />>gcc Main.cpp -o Main.exe TestDLL.dll<br /><br />f) Done! Run the executable:<br />>Main.exe<br />Hello World!<br /><br />><br /><br /><a href="http://sites.google.com/site/scharan20/Home/DLL.zip?attredirects=0">Here </a>are the files that I have used to test these things. I have tested them on Windows XP using MinGW32. I have used the following link for reference: http://www.emmestech.com/moron_guides/moron2.html<div class="blogger-post-footer">My experiments with Computers, Computing, Programming & Software.</div>
