/*var fs = require('fs');

fs.readFile('Largest.js', 'utf-8',function (err, data) {
  if (err) throw err;
  console.log(data);
});*/
var fs = require('fs');
var loginObject={};
loginObject=fs.readFile('user.txt','utf-8',function (err, data) {
  if (err) throw err;
 // console.log(data);	
});

console.log(loginObject);