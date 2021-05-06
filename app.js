const http = require('http');

http.createServer((req,res) => {
	res.write('Hello world!');
	res.end();
}).listen(8080, '0.0.0.0');
