--- 
wordpress_id: "263"
layout: post
title: Mapping Win key in Fedora (14)
wordpress_url: http://saicharan.in/blog/?p=263
---
Learnt/inferred a few things here [correct me via comments if I am wrong conceptually; note that these have worked for me] -
<ul>
	<li>Win key is called/referred to as the 'super key'</li>
	<li>You may have to get xmodmap to explicitly recognize the key.</li>
	<li>You can get the keycode for any key using 'xev' command, as discussed here: <a href="http://forums.fedoraforum.org/showpost.php?s=9af5fdea1041e19ff96815fb3470f904&amp;p=913923&amp;postcount=9" target="_blank">http://forums.fedoraforum.org/showpost.php?s=9af5fdea1041e19ff96815fb3470f904&amp;p=913923&amp;postcount=9</a></li>
	<li>Once you find out the keycode for you Win key, you can get xmodmap to 'recognize' it as noted in <a href="http://forums.fedoraforum.org/showpost.php?s=9af5fdea1041e19ff96815fb3470f904&amp;p=913308&amp;postcount=3" target="_blank">http://forums.fedoraforum.org/showpost.php?s=9af5fdea1041e19ff96815fb3470f904&amp;p=913308&amp;postcount=3</a></li>
	<li>Then, configure Win+key combinations via System &gt; Preferences &gt; Keyboard Shortcuts.</li>
</ul>
