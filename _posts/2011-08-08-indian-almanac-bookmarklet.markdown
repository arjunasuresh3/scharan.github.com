--- 
wordpress_id: "276"
layout: post
title: Indian Almanac Bookmarklet
wordpress_url: http://saicharan.in/blog/?p=276
---
Traditional events require fairly strict observances throughout the year. For this, I tend to rely on the online service: <a href="http://mypanchang.com" target="_blank">http://mypanchang.com</a>. Though I bookmarked the page, it is error prone in that you will be always be shown the date that you bookmarked. Instead, it would be of immense help to view today's almanac. So, here is my bookmarklet for showing today's almanac for Los Angeles. You can edit it to show your city's almanac by looking at the URL for your city from here: <a href="http://www.mypanchang.com/selectyourcity2011.html" target="_blank">http://www.mypanchang.com/selectyourcity2011.html</a>

Bookmarklet: <a href="javascript: function panchangam(){var d = new Date(); var day=d.getDate(); var month=d.getMonth(); var year = d.getFullYear();location.href='http://www.mypanchang.com/phppanchang.php?'+'&amp;yr='+year+'&amp;cityhead=Los Angeles, CA&amp;cityname=LosAngeles-CA'+'&amp;monthtype=0&amp;mn='+month+'#'+day};panchangam();"> LA South Indian Almanac </a>
<script type="text/javascript" src="http://gist-it.appspot.com/github/scharan/Goodies/raw/master/almanac.js"></script>
<!--pre class="brush: javascript">javascript: function panchangam(){var d = new Date(); var day=d.getDate(); var month=d.getMonth(); var year = d.getFullYear();location.href='http://www.mypanchang.com/phppanchang.php?'+'&amp;yr='+year+'&amp;cityhead=Los Angeles, CA&amp;cityname=LosAngeles-CA'+'&amp;monthtype=0&amp;mn='+month+'#'+day};panchangam();</pre-->
