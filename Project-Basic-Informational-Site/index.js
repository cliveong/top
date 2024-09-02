var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if (filename == "./" ) {
    return readSomething(res, "index.html")
  } else {
    htmlFile = filename.slice(2,) + '.html';
    console.log(htmlFile);
    return readSomething(res, htmlFile);
  }
}).listen(8080); 


function readSomething(res, filename) {
  fs.readFile(filename, function(err, data) {
    console.log(err);
    if (err) {
      return readSomething(res, "404.html")
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}