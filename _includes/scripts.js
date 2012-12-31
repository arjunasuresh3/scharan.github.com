/* Markdown does not have option to add target attribute 
   and this cannot be done using CSS, since this is not a 
   visual style. So, use jQuery for all absolute URLs! */
$(document).ready( function(){
   $.each( $("a").filter( function(){ 
                      try { // In case the anchor does not have href.
                          return !$(this).attr('href').match(/^[\/#]/); // URL is relative: starts with / or #
                      } catch (e) {
                          return true;
                      }
                  }),
           function( index, tag ) { 
               $(tag).attr('target', '_blank');
           });
});

// This adds x comments & y reactions. Based on Tumblr theme: munichtheme.tumblr.com
$(document).ready( function() {
    var links = document.getElementsByTagName('a');
    var query = '?';
    for(var i = 0; i < links.length; i++) {
        if(links[i].href.indexOf('#disqus_thread') >= 0) {
            query += 'url' + i + '=' + encodeURIComponent(links[i].href) + '&';
        }
    }
    $('body').append('<script charset="utf-8" type="text/javascript" src="https://disqus.com/forums/scharan/get_num_replies.js' + query + '"></' + 'script>');
});

