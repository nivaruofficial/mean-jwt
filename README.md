mean-jwt (working progress)
========

A project starting from "Mean Sample" by Jeff Dickey with some differences, such as logout functionality, upload images, update post etc. 

The idea is to use Json Web Token for authentication avoiding annoying issues related to Cross Scripting attacks.

Instead of supplying credentials such as a username and password with every request, we can allow the client to exchange valid credentials for a token. This token gives the client access to resources on the server. Tokens are generally much longer and more obfuscated than a password. Once the token is obtained, it must be sent with every API call. However, this is still more secure than sending a username and password with every request, even over HTTPS.

Functionalities:

- Logout (NEW)
- Web Socket (Not emplemented from original project yet)
- Update post (Working Progress)
- Upload image (Working Progress)
- Json Web Token Persistence using Angular Sessions (Working Progress)

Download the package and type:

1) npm install (to install all node modules you need)

2) npm install -g gulp (to install gulp task runner globally)

3) mongod (to run mongodb)

4) gulp dev (to start the server and make all changes available)

5) Open another tab and type the following code to create a user>
curl -X POST -d '{"username":"test","password":"test"}' -H "Content-Type:application/json" localhost:3000/api/users

6) Sign in with just created credentials
