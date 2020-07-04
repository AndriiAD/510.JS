const http = require('http');
const url = require('url');

const static = require('node-static');
const file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {

  if (req.url == '/data-12.js') { 
    setTimeout(function() {
      file.serve(req, res);
    }, 2000);
  } else {
    file.serve(req, res);
  }
}

// ------ run -------
if (!module.parent) {
  http.createServer(accept).listen(8080);
  console.log("Server running at http://localhost:8080");
} else {
  exports.accept = accept;
}