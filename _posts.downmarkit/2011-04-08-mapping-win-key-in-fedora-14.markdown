--- 
wordpress_id: "263"
layout: post
title: Mapping Win key in Fedora (14)
wordpress_url: http://saicharan.in/blog/?p=263
---
Learnt/inferred a few things here [correct me via comments if I am wrong conceptually; note that these have worked for me] -- Win key is called/referred to as the 'super key'
- You may have to get xmodmap to explicitly recognize the key.
- You can get the keycode for any key using 'xev' command, as discussed here: [http://forums.fedoraforum.org/showpost.php?s=9af5fdea1041e19ff96815fb3470f904&amp;p=913923&amp;postcount=9](http://forums.fedoraforum.org/showpost.php?s=9af5fdea1041e19ff96815fb3470f904&p=913923&postcount=9)
- Once you find out the keycode for you Win key, you can get xmodmap to 'recognize' it as noted in [http://forums.fedoraforum.org/showpost.php?s=9af5fdea1041e19ff96815fb3470f904&amp;p=913308&amp;postcount=3](http://forums.fedoraforum.org/showpost.php?s=9af5fdea1041e19ff96815fb3470f904&p=913308&postcount=3)
- Then, configure Win+key combinations via System &gt; Preferences &gt; Keyboard Shortcuts.
