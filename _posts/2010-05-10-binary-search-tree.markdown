--- 
wordpress_id: "232"
layout: post
title: Binary Search Tree
wordpress_url: http://saicharan.in/blog/?p=232
---
The following code tests if the input binary tree is, in fact, a Binary Search Tree. This was as terse as I could get it. Any got more terse code? Suggestions/comments welcome.


 <pre class="brush: cpp">bool IsBST(TreeNode* node){
	if( !node ) return true;// trivially true.
	if( node-&gt;left )
		if( node-&gt;left-&gt;val &gt; node-&gt;val ) return false; //fail early
	if( node-&gt;right )
		if( node-&gt;right-&gt;val &lt; node-&gt;val ) return false; //fail early

	return ( IsBST(node-&gt;left) &amp;&amp; IsBST(node-&gt;right) ); //recursively test subtrees
}</pre>


Update: <span style="text-decoration: line-through;"> Notice the tail recursion? Its super-efficient! </span>

Update-update: Thanks to Kartik (see comments below) for pointing out that the last line is NOT tail-recursive.

Yet another update: The algorithm is does NOT check for IsBST(). The criterion of root being greater than all right children and smaller than left children is not always checked. See <a href="http://en.wikipedia.org/wiki/Binary_search_tree">http://en.wikipedia.org/wiki/Binary_search_tree</a> for more details.
