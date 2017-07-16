### Academy 2017: Node.js | Express. JS-04

Description of routes
1. message.js is a routing for instance of messages/message:
	* Create message: POST, url: '/messages/add '
	* Read messages: GET, url: '/messages/ '
	* Update message: PUT, url: '/messages/update/:id '
	* Delete message: DELETE, url: '/messages/delete/:id '
2. user.js is a routing for instance of user:
	* Create user : POST, url: '/users/add '
	* Read users : GET, url: '/users/ '
	* Update user : PUT, url: '/users/update/:id '
	* Delete user : DELETE, url: '/users/delete/:id '
3. history.js - routing for instance of history:
	* Get receivers of messages of user : GET, url: '/history/:id '
