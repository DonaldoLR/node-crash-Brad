const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
// 	if (err) throw err;
// 	console.log('folder created...');
// });

// Create & Write to file
// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'Hello World',
// 	(err) => {
// 		if (err) throw err;
// 		console.log('File written too');

// 		fs.appendFile(
// 			path.join(__dirname, '/test', 'hello.txt'),
// 			' I love node JS',
// 			(err) => {
// 				if (err) throw err;
// 				console.log('File written too');
// 			}
// 		);
// 	}
// );

// Read file
// fs.readFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'utf-8',
// 	(err, data) => {
// 		if (err) throw err;
// 		console.log(data);
// 	}
// );

// Rename a File
fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'helloworld.txt'),
	(err) => {
		if (err) throw err;
		console.log('File Renamed');
	}
);
