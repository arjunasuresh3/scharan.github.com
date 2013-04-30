//---------------------------------------------
// Levenshtein Distance: http://stackoverflow.com/a/11958496/162471
var levDist = function(s, t) {
    var d = []; //2d matrix

    // Step 1
    var n = s.length;
    var m = t.length;

    if (n == 0) return m;
    if (m == 0) return n;

    //Create an array of arrays in javascript (a descending loop is quicker)
    for (var i = n; i >= 0; i--) d[i] = [];

    // Step 2
    for (var i = n; i >= 0; i--) d[i][0] = i;
    for (var j = m; j >= 0; j--) d[0][j] = j;

    // Step 3
    for (var i = 1; i <= n; i++) {
        var s_i = s.charAt(i - 1);

        // Step 4
        for (var j = 1; j <= m; j++) {

            //Check the jagged ld total so far
            if (i == j && d[i][j] > 4) return n;

            var t_j = t.charAt(j - 1);
            var cost = (s_i == t_j) ? 0 : 1; // Step 5

            //Calculate the minimum
            var mi = d[i - 1][j] + 1;
            var b = d[i][j - 1] + 1;
            var c = d[i - 1][j - 1] + cost;

            if (b < mi) mi = b;
            if (c < mi) mi = c;

            d[i][j] = mi; // Step 6

            //Damerau transposition
            if (i > 1 && j > 1 && s_i == t.charAt(j - 2) && s.charAt(i - 2) == t_j) {
                d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
            }
        }
    }

    // Step 7
    return d[n][m];
}

//---------------------------------------------
var createAnchorHtml = function(obj) {
  return '<a href="' + $(obj).attr('href') + '">' + $(obj).html() + '</a>';
}

//---------------------------------------------
//source: http://jquerybyexample.blogspot.com/2012/05/how-to-get-querystring-value-using.html
function getQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

//---------------------------------------------
// On mobile, blogger appends ?m=1 to the URL as in: http://blogger.saicharan.in/2009/03/viewvc-integration-with-google-prettify.html?m=1
// So, the URL to redirect will be: http://www.saicharan.in/blog/blogger-redirect.html?from=blogger.saicharan.in/2009/03/viewvc-integration-with-google-prettify.html?m=1
// This function naively cleans such URLs. Blogger could have been more intelligent when appending query params.
function cleanUrl(url) {
    return url.split('&')[0];
}

//---------------------------------------------
// Add this tag into the <head> section: <meta expr:content='"0;url=http://saicharan.in/blog/blogger-redirect.html?from="+data:blog.url' http-equiv='refresh'/>
function handleBloggerUrl(ref, messageDivId) {
    if(ref == "http://blogger.saicharan.in/") {
      document.location = '/';
      return;
    } else if(ref == "" || ref == null || ref == undefined) {
      $('#'+messageDivId).html('Oopsie! Something unexpected happened: I could not know where you came from. Please search below once again for what you were looking for.');
      return;
    }

    // ref is now defined and non-empty.
    var parts = cleanUrl(ref).split('/');
  
    // If URL format: http://[domain].saicharan.in/blog/2009/03/viewvc-integration-with-google-prettify.html
    if( parts[3] == 'blog' ) {
        var year = parts[4];
        var month = parts[5];
        var slug = parts[6];
    } else { // Blogger URL format: http://blogger.saicharan.in/2009/03/viewvc-integration-with-google-prettify.html
        var year = parts[3];
        var month = parts[4];
        var slug = parts[5];
    }
    
    // Jekyll URL format: http://www.saicharan.in/blog/2009/03/19/cvs-viewvc-integration-with-google-prettify/
    var monthListing = '/blog/' + year + '/' + month + '/';
    $('#'+messageDivId).text("Finding the right page...");
    $.get(monthListing, function(data) {
      var page = $(data);
      var levNum = 65534; // Very large number
      var levNbr = -1;
      var levUrl = '';
      $('div.post > ul > li > a', page).each( function(index) {
        var curLevNum = levDist(slug.split('.html')[0], $(this).attr('href').split('/')[5]);
        if(levNum > curLevNum) {
          levNum = curLevNum;
          levNbr = index;
          levUrl = createAnchorHtml($(this));
        }
      });

      if(levNum < 5) {
          $('#'+messageDivId).html('Redirecting you to: ' + levUrl + '. If not redirected, please click on the link.');
          document.location = $(levUrl).attr('href');
      } else { // If Levenshtein distance is >5, probably something wrong.
          $.get(monthListing, function(data) {
              var page = $(data);
              var content = 'Oopsie! Looks like we made a booboo :(. Please select the relevant link or search for it below.<br /><ul>';
              $('div.post > ul > li > a', page).each( function(index) {
                  content += '<li>' + createAnchorHtml($(this)) + '</li><br />';
              });
              content += '</ul>';
              $('#'+messageDivId).html(content);
          });
      }
    });
}

