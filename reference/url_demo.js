const url = require('url');

const myUrl = new URL(
	'http://mywebsite.com:8000/hello.html?id=500&status=active'
);

// Serialized URL
console.log(myUrl.href);

// Host / Root domain
console.log(myUrl.host);

//Host Name (does not get port)
console.log(myUrl.hostname);

// Path Name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params Obj
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((val, name) => {
	console.log(`${name}: ${val}`);
});
