const http = require('http');

// Create a server obj
http
	.createServer((req, res) => {
		// Write a resoponse
		res.write('Hello World');
		res.end();
	})
	.listen(3000, () => console.log('server running,,,'));
