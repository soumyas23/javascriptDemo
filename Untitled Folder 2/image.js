var http=require("http");
var fs = require('fs');
console.log("Starting server");
http.createServer(function(request,response){
response.writeHead(400,{"Content-Type":"image/jpeg"});
		
		//response.write("<h1>Hello</h1>");
fs.readFile('download.jpg',function (err, data) {
if (err) throw err;
	  response.write(data);
	  response.end();
	});
		
		//console.log(request);
		//console.log(response);
		
}).listen(8888);
