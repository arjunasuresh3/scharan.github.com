--- 
wordpress_id: "40"
layout: post
title: MinGW GProf with Eclipse 3.3 (Europa )
wordpress_url: http://sricharan.org/blog/?p=40
---
To use MinGW gprof with Eclipse, in the project settings, under complier, enable the gprof option. Further, in the Linker section, under command line, add -pg to your list. Build the program. Run the program and check that the gmon.out file has been created.You can run gprof as follows:gprof.exe.You can run gprof from within eclipse by configuring the external tools:1. Open the external tools dialog2. Double click on program to create a new program configuration3. Give this profile a name, eg. gprof4. In the location text box, give the FULL path to the grpof command5. In the working directory, choose: ${workspace_loc:/path/to/executable}6. Arguements: ${file_prompt} ${GMON}, where GMON has been assigned the path to the gmon.out file using the variables button.References:1.[http://publib.boulder.ibm.com/infocenter/systems/topic/com.ibm.aix.cmds/doc/aixcmds2/gprof.htm](http://publib.boulder.ibm.com/infocenter/systems/topic/com.ibm.aix.cmds/doc/aixcmds2/gprof.htm)2.[http://gcc.gnu.org/ml/fortran/2006-11/msg00217.html](http://gcc.gnu.org/ml/fortran/2006-11/msg00217.html)
