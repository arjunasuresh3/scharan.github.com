--- 
wordpress_id: "201"
layout: post
title: Interesting recursion problem
wordpress_url: http://saicharan.in/blog/?p=201
---
Found this interesting recursion problem on StackOverflow.
<a href="http://stackoverflow.com/questions/1705374/how-to-capture-a-string-into-variable-in-a-recursive-function">http://stackoverflow.com/questions/1705374/how-to-capture-a-string-into-variable-in-a-recursive-function</a>


 <pre class="brush: cpp">int resultSize( vector&lt; vector&lt;string&gt; &gt; vector ){
    int x=1;
    for( int i=0; i&lt;vector.size(); i++ )
       x *= vector[i].size();
    return x;
}

vector&lt;string&gt; enumAll(const vector&lt; vector &gt; allVecs ){
    //__ASSERT( allVecs.size() &gt; 0 );
    vector result;
    if( allVecs.size() == 1 ){
        for( int i=0 ; i&lt; allVecs[0].size(); i++){
	    result.push_back( allVecs[0][i] );
        }
    return result;
    }
    const vector&lt; vector&lt;string&gt; &gt; tempVector(allVecs.begin()+1, allVecs.end() );
    vector tempResult = enumAll( tempVector );// recurse
    int size = resultSize( tempVector );
    for( int i=0; i&lt;allVecs[0].size(); i++ ){
       for( int j=0; j&lt;size; j++){
          //enumAll on each tempVector is called multiple times. Can be optimzed.
          result.push_back( allVecs[0][i] + tempResult[j] );
        }
    }
}</pre>


Also see the other solution by Young which solves this problem using tail-recursion.

It is interesting problem in itself to transform a plain recursion into tail-recursion. The general method to do this is to eliminate the need for any processing post recursion. For this, one needs to pass all the data as parameters. This is pretty obvious when comparing the two solutions. Plain recursion takes only one parameter, while tail-recursion takes a lot more parameters.

In my view, the advantage of plain recursion is pedagogy: it is very easy to follow the algorithm - the divide and conquer is so very obvious! With tail-recursion, we manually do a lot of book-keeping. This part is not so obvious in the present example.

Plain recursion:
<a href="http://stackoverflow.com/questions/1705374/how-to-capture-a-string-into-variable-in-a-recursive-function/1723192#1723192">http://stackoverflow.com/questions/1705374/how-to-capture-a-string-into-variable-in-a-recursive-function/1723192#1723192</a>

Tail Recursion:
<a href="http://stackoverflow.com/questions/1705374/how-to-capture-a-string-into-variable-in-a-recursive-function/1707808#1707808">http://stackoverflow.com/questions/1705374/how-to-capture-a-string-into-variable-in-a-recursive-function/1707808#1707808
</a>
