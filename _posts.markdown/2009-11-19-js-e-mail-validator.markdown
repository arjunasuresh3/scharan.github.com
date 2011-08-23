--- 
wordpress_id: "213"
layout: post
title: JS e-mail Validator
wordpress_url: http://saicharan.in/blog/?p=213
---
NOTE: I have avoided character classes to aid understanding for newbies. Wizards, bear with the verbosity!

Came up with this nice little email validator JS regexp. Someone got something shorter?


 <pre class="brush: javascript">function validateEmail( email ){
var emailRe = new RegExp("^[a-zA-Z]+([a-zA-Z0-9_]*.[a-zA-Z0-9_]+)*@([a-zA-Z0-9_]+.[a-zA-Z0-9_]+)*$",'i');
return( emailRe.test( email ) );
}</pre>


Does this miss any cases? Try it out here:

<input id="email" type="text" value="Email" /> <button onclick="validateEmail( getElementById('email').value );return false;"> Validate email! </button>

<script type="text/javascript">
    function validateEmail( email ){ var emailRe = new RegExp("^[a-zA-Z]+([a-zA-Z0-9_.][a-zA-Z0-9_]+)+@([a-zA-Z0-9]+([.a-zA-Z0-9_])+)$",'i'); alert( emailRe.test( email ) ? "Valid" : "Invalid email" ); }
 </script><strong>Update: </strong>This script allowed '*' in the email ID. The correct re would be:


 <pre class="brush: javascript">var emailRe = new RegExp("^[a-zA-Z]+([a-zA-Z0-9_].[a-zA-Z0-9_]+)+@([a-zA-Z0-9_]+.[a-zA-Z0-9_]+)+$",'i');</pre>


<strong>Bug again!</strong> The '.' character outside the character class [] matches *ANY* single character. This, however, definitely works!


 <pre class="brush: javascript">var emailRe = new RegExp("^[a-zA-Z]+([a-zA-Z0-9_.][a-zA-Z0-9_]+)+@([a-zA-Z0-9]+([.a-zA-Z0-9_])+)$".'i');</pre>


The test code now does not permit '*' in the email ID.
