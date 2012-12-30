--- 
layout: post
title: CVS, ViewVC integration with Google Prettify
published: true
meta: 
  _edit_last: "1"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2009/03/viewvc-integration-with-google-prettify.html
tags: 
- CVS
- Google Prettify
- ViewVC
type: post
status: publish
---
Been wanting to do this for long: browse SVN/CVS via a web interface. Ofcourse, it is a solved problem. But I wanted this set up for my own local CVS repos.

ViewVC to the rescue.

Prerequisites: Python2.x, Apache2.0+, CVS, CVS/SVN Python Bindings.

Detailed installation process:

- ViewVC:

  I have CVSNT on my workstation. So I downloaded ViewVC-1.0.7  from <a href="http://www.viewvc.org/download.html">http://www.viewvc.org/download.html</a> (spcecifically, version 1.0.7 from<a href="http://viewvc.tigris.org/servlets/ProjectDocumentList?folderID=6004"> http://viewvc.tigris.org/servlets/ProjectDocumentList?folderID=6004</a>). 
  
  To install ViewVC, first unpack it to some folder, run 'python viewvc-install' from the command line, with the current directory as the unpacked directory. I chose all the defaults values when prompted. 
  
  Next, I configured viewvc to pick up my repositories by editing the <install-dir>/viewvc.conf file. I changed the cvs_roots and cvsnt_exe_path variables. 

- SVN Python bindings for ViewVC: 
  ViewVC is written in python and <a href="http://www.blogger.com/tigris.org">tigris.org</a> provides python bindings to talk to the CVS/SVN repository. This can be got from <a href="http://subversion.tigris.org/getting.html#windows%20http://subversion.tigris.org/servlets/ProjectDocumentList?folderID=8100">subversion.tigris.org Documents Area.</a> Be sure to download the version appropirate for your version of python. Simply run the installer. You will be asked to point the installer to the Apache installation directory. 
  
- mod_python:
  
  You will need to download the mod_python for Apache if you dont have it already. You can check the <apache-install-dir>/modules/ directory. Look for mod_python.so file. If it is not here, download it from here: <a href="http://www.apache.org/dist/httpd/modpython/win/3.3.1/">http://www.apache.org/dist/httpd/modpython/win/3.3.1/</a> I used this: <a href="http://www.apache.org/dist/httpd/modpython/win/3.3.1/mod_python-3.3.1.win32-py2.5-Apache2.2.exe">http://www.apache.org/dist/httpd/modpython/win/3.3.1/mod_python-3.3.1.win32-py2.5-Apache2.2.exe</a>
  
- Configuring Apache: edit the httpd.conf file to add the following:

      LoadModule python_module modules/mod_python.so
      ScriptAlias /viewcvs "C:/Program Files/viewvc-1.0.7/bin/mod_python/viewvc.py"
      <location>
        AddHandler python-program .py
        PythonPath "[r'c:\\Program Files\\viewvc-1.0.7\\bin\\mod_python']+sys.path"
        PythonHandler apache
        PythonDebug On
        AddDefaultCharset UTF-8
      </location>
   
   NOTE: The above will work if you have chosen the defaults while installing ViewVC.
   
Done! Goto: http://your-machine/viewcvs.
   
However, I got an error when I did this: "ImportError: No module named apache". 

So, I tried the alternate approach:

- Copy &lt;viewvc-install-dir&gt;/bin/cgi/*.cgi to &lt;apache-install-dir&gt;/cgi-bin/
- Add the following line to the &lt;apache-install-dir&gt;/conf/httpd.conf file:

      ScriptAlias /viewvc /cgi-bin/viewvc.cgi
      
- Restart Apache.

Done! Go to: http://localhost/cgi-bin/viewvc.cgi

It works for me!! I wish I could fix the other method too.

Good. Now that it works, I should be happy. But I was not :( When I 'view' a source file, it does not do the syntax highlighting (I use CVS with C++/C projects and I was not getting the syntax highlighting for these languages). So what do I do? Wanted to integrate some open source syntax highlighters. I dug thru' the code of viewvc.py and from there went on to find the place where the markup is done. (search the code base for view_markup function. I use <a href="http://sourcenav.sourceforge.net/download.html">RedHat sourcenavigator</a> to browse and read code). They seemed to be using some PHP code to get the job done. However, I remembered I was very happy with Google's Prettify (any code you browse on code.google.com has probably used Google prettify to syntax highlight the code). So I decided to use it.

Also, using the Google Pettify is quite simple:

- Add the following lines to the "head" section:

      <link href="[docroot]/prettify/prettify.css" type="text/css" rel="stylesheet" />
      <script type="text/javascript" src="[docroot]/prettify/prettify.js"></script>;
      
- Add `onload=prettyPrint()` attribute to the `<body>` tag.
- Put your code in `<pre class="prettyprint">` or `<code class="prettyprint">` tags.
- Done!

It took quite some reading of the ViewVC python code to figure out simple ways to do it. Here is my story:

I read thru the ViewVC python code and found that there was a header and footer being used for each page. Then there was a template for markup and each of the different views that ViweVC supports. Then I stumbled upon the EZT class (EaZyTemplates). Just what I needed to integrate with Google Prettify!! So I found the templates being loaded by ViewVC. They are loacated under `<viewvc-install-dir>/templates/`. Here are my modifications:

- Download Google Prettify from: [http://code.google.com/p/google-code-prettify/]
- Unzip it. Copy the src folder to `<viewvc-install-dir>/templates/docroot/`
- I renamed the `src` folder to `prettify` (just to help me later)
- Add the following lines to `<viewvc-install-dir>/templates/include/header.ezt`, in the `head` section:
  
      <link href="[docroot]/prettify/prettify.css" type="text/css" rel="stylesheet"/>
      <script type="text/javascript" src="%5Bdocroot%5D/prettify/prettify.js"></script>
      
  Also, modify the body tag to: `<body onload="prettyPrint()">`;
- Modify `<viewvc-install-dir>/templates/markup.ezt`. Change this:
  
      <div id="vc_markup"> <pre>[markup]</pre> </div>
      
  to: 
  
      <div id="vc_markup"> <pre class="prettyprint">[markup]</pre> </div>

Done!. Have fun! And post your questions as comments.
