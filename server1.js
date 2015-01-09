var http = require('http')
var fs = require('fs')
var baseDirectory = __dirname   // or whatever base directory you want

http.createServer(function (req, res) {
   var requestUrl = url.parse(request.url)
   var fsPath = baseDirectory+requestUrl.pathname

   fs.exists(fsPath, function(exists) {
     try {
       if(exists) {
         res.writeHead(200)
         fs.createReadStream(fsPath).pipe(res) // do NOT use fs's sync methods (e.g readFileSync) ANYWHERE on production
       } else {
         res.writeHead(500)
       }
     } finally {
        res.end() // inside finally so errors don't make browsers hang
     } 
   })
}).listen(8888)