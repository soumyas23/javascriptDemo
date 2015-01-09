var fs = require('fs');

fs.readFile('Largest.js', 'utf-8',function (err, data) {
  if (err) throw err;
  console.log(data);
});