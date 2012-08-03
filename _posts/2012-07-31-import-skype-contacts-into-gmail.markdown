---
layout: post
title: Import Skype contacts into Gmail
tags: 
- skype
- import contacts
- gmail
date: 2012-07-31 17:09:11
---

Gmail's contact details includes provision to add usernames from other IM networks. Having this in one place is very handy on the Android phone, for instance. 

Naïvely exporting Skype's address book via Skype > Contacts > Advanced > Backup contacts to file & importing them into Gmail isn't sufficient. This process imports the contact information alright, but not the skype names, defeating the purpose of the import.

A little digging up reveals the culprit. Skype uses the vCard v3.0 Property `X-SKYPE-USERNAME:`, while Gmail expects `X-SKYPE:`. So, here is some wizardry to fix this (on a Linux/Unix machine).

- Export contacts to skypename.vcf file from Skype > Contacts > Advanced > Backup contacts to file, and copy it to a linux machine.
- I did not want the pictures of my Skype contacts to be imported. I filtered out the relevant fields using:
      egrep "^BEGIN:|^END:|^VERSION:|^TEL;|^EMAIL:|^ADR:|^N:|^FN:|^X-SKYPE-USERNAME:" skypename.vcf > skype-cleaned.vcf
- Change the vCard property to match Gmail's expectations:
      sed -i s/-USERNAME// skype-cleaned.vcf
- Prettify the vCard file to include newlines after each vCard entry _(note: this step is not absolutely necessary)_.
      sed -i "s/^END:VCARD/END:VCARD\\`echo -e '\n\n'`/g" skype-cleaned.vcf
- Import skype-cleaned.vcf into Gmail & choose to merge contacts appropriately.

