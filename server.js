var http = require('http');
var handleRequest = function(request, response) {
	console.log("Received request from URL: "+ request.url);
	response.writeHead(200);
	response.end("hello World");
};
var www = http.createServer(handleRequest);
www.listen(8080);

