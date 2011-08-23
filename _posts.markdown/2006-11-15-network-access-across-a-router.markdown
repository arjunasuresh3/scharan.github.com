--- 
wordpress_id: "13"
layout: post
title: Network Access across a router
wordpress_url: http://sricharan.org/blog/?p=13
---
This document recapitulates the tasks that were needed to be done by us to enable access between the online and offline systems in the lab at my hostel:

1) First set up a DNS ( with a domain name say ssshcc.edu )
- Set up the forward and reverse lookup zones
2) Set up the DNS machine to act as the router also between the two segments.
3) For each computer on the online and offline segments, change the primary DNS suffix of the computer to the DNS domain name ( as specified in step 1 )
- Right Click My Computer &gt; Properties
- Computer Name
- Change
- More
- Type in the new Primary DNS Suffix
4) For each machine in the online and offline segements, make sure that the guest account is allowed network access.
- Start &gt; Control Panel &gt; Local Security Policy &gt; Local Policy &gt; User Rights Assignment &gt; Deny Logon over Network
- Remove the Users whom you wish to allow network access (if the name is in the list)
5) Make sure that the default gateways and Primary and Secondary DNServers are correctly entered in the Network Configuration.
6) In the lab, i.e., in the SSSHCC, the online systems donot have guest login interactively, but we want the guest users from the offline segement to be able to access the online systems. For this, we enable the Guest user account on the Online systems, but prevent their Interactive Login as follows:
- Start &gt; Control Panel &gt; Local Security Policy &gt; Local Policy &gt; User Rights Assignment &gt; Deny Logon Locally
- Add Guest user.
7)Here, you can choose the custom list and add the required IPs or choose then Any computer option as required.
8) One last setting: The windows firewall by default allows only computers on the same segment to access each other. This needs to be changed:

It is like this: Port 445 (which is what windows uses for file and printer sharing) by default accepts connections only from computers on the same subnet as itself. This behaviour can be changed as described in the document: <a href="https://docs.google.com/View?docid=ajgs46pc346b_9dxvvjc">https://docs.google.com/View?docid=ajgs46pc346b_9dxvvjc</a>.
You can find Microsoft's description of the solution(KB840634) at<a href="http://support.microsoft.com/kb/840634"> http://support.microsoft.com/kb/840634</a>
<div class="blogger-post-footer">My experiments with Computers, Computing, Programming &amp; Software.</div>
