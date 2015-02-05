var http=require("http");
var fs = require('fs');
console.log("Starting server");
http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"text/html"});
		
		//response.write("<h1>Hello</h1>");
fs.readFile('site.html', 'utf-8',function (err, data) {
if (err) throw err;
	  response.write(data.toString());
	 // response.write(request["username"]);
	 // response.write(request["password"]);
	
	  response.end();

	});
		
		//console.log(request);
		//console.log(response);
		
}).listen(8888);
