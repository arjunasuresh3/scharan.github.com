--- 
wordpress_id: "41"
layout: post
title: Why is switch case better than if else if?
wordpress_url: http://sricharan.org/blog/?p=41
---
Why is switch case better than else if? Or is it?
Here is some code I got into trouble with:
.
.
.
if(dim==0){
...//do lots of things
...return;
}
doSomeCommonThingsHere();
if(dim==3)
...doSomething3();
else if(dim==4)
...doSomething4();
else if(dim==5);
...doSomething5();
doSomeMoreCommonSomethings();
.
.
.
See anything?

I did not, initially. The semi colon after else if(dim==5). How I unearthed the bug? GDB was crashing. So no debugger to help me:( I figured out that only the dim==5 case was working well - and that none of the cases above it were working correctly. So I considered moving one of the earlier case code to the end to see if I can figure out the problem. While moving the code I accidentally noticed the semi-colon. Man! Computers are dumb - or was it me dumb?

Now did say switch case might have been better? Maybe. Because we are <span style="font-style: italic;">taught</span> to put the break; statement at the end of each case to prevent it from falling-through right? What if I forgot to put the break; ? I guess it is easier to "find" a missing break than a missing ;. Did you see the semi-colon after missing?

Now why did I use such a large number of if-else-if statements? I was using "Incremental development". I did not see the other cases coming in hordes. Shortsighted you might say, but I did not even intend to do the other cases in the first place. WOW! How easily changing requirements can screw up such wonderfully working code. Screw the changing requirements. Now you see how difficult is the job of a designer - he has to really think of extensibility - see extensibility in a new light?

Consider for a moment the above code. I was actually telling the computer to do things wrong!!! When will these computers learn to understand (:D) Or will they ever?
