--- 
layout: post
title: Efficient Substr implementation
published: true
meta: 
  tumblrize_post-type: regular
  dsq_thread_id: "388193916"
  tumblrize_post-id: "9041886805"
  _edit_last: "1"
  _wp_old_slug: efficient-substr-imlementation
tags: 
- algorithm
type: post
status: publish
---
I came up with this implementation of substring method. Anyone got ideas to make it more terse <em>and</em> more efficient?
<pre class="brush: cpp">bool substring(const char* str, const char* substr){
	const char *currentString = str, *backTrackString = str, *currSubstr = substr;
	while( strlen(backTrackString) &gt;= strlen(substr) ){
		while( *currSubstr &amp;&amp; *currentString++ == *currSubstr++);
		if( !*currSubstr ) return true;
		currentString = backTrackString++;
		currSubstr = substr;
	}
	return false;
}</pre>
<br />

In particular, can we do without atleast one of the local variables - while still being as efficient or better? A more basic question - so you think this is efficient?
