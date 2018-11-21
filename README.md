# mozpwdsaver

Firefox Extension to insert a well-formed login form into a website.

## Why?

Login forms on some websites aren't recognized (or are ignored) by Firefox,
thus the password can't be saved on those sites. Furthermore, I haven't found
any sane way to create a login/password entry for an arbitrary website
manually. This extension inserts a well-formed login form into a webpage, and
when the user enters the credentials and presses Save, Firefox's Password
Manager suggests to save the credentials for the current website.

This extension doesn't try to steal your passwords. The entered
username/password are automatically picked up by the Firefox Password Manager
when the form is submitted (when Save is pressed), and are discarded by the
*mozpwdsaver* afterwards.

## How to install it?

Go to Releases, click on the .xpi file, it should be picked up by the Firefox
automatically.
