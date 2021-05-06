const http = require('http');

http.createServer((req,res) => {
	res.write('Welcom to my website update!');
	res.end();
}).listen(8080, '0.0.0.0');
