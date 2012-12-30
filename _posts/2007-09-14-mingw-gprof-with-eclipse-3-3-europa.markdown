--- 
layout: post
title: MinGW GProf with Eclipse 3.3 (Europa )
published: true
meta: 
  tumblrize_post-type: regular
  tumblrize_post-id: "9010592803"
  _edit_last: "1"
  blogger_author: Sri Charanhttp://www.blogger.com/profile/11910830126191595892noreply@blogger.com
  blogger_blog: sricharan-log.blogspot.com
  blogger_permalink: /2007/09/mingw-gprof-with-eclipse-33-europa.html
tags: 
- eclipse
- GProf
- MinGW
type: post
status: publish
---
To use MinGW gprof with Eclipse, in the project settings, under complier, enable the gprof option. Further, in the Linker section, under command line, add -pg to your list. Build the program. Run the program and check that the gmon.out file has been created.

You can run gprof as follows:
gprof.exe.

You can run gprof from within eclipse by configuring the external tools:
1. Open the external tools dialog
2. Double click on program to create a new program configuration
3. Give this profile a name, eg. gprof
4. In the location text box, give the FULL path to the grpof command
5. In the working directory, choose: ${workspace_loc:/path/to/executable}
6. Arguements: ${file_prompt} ${GMON}, where GMON has been assigned the path to the gmon.out file using the variables button.

References:
1.<a href="http://publib.boulder.ibm.com/infocenter/systems/topic/com.ibm.aix.cmds/doc/aixcmds2/gprof.htm">http://publib.boulder.ibm.com/infocenter/systems/topic/com.ibm.aix.cmds/doc/aixcmds2/gprof.htm</a>
2.<a href="http://gcc.gnu.org/ml/fortran/2006-11/msg00217.html">http://gcc.gnu.org/ml/fortran/2006-11/msg00217.html</a>
