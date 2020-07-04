// const http = require("http");
// http.createServer(function (request, response) {
    

// // ************************ task 1 ***************    
//     console.log(response.statusCode);
    
//     response.writeHead(200, {'Content-Type': 'text/html'});

//     response.write('<h1>System information</h1>');

//     let os = require('os');
//     response.write(`Current user name: ${os.homedir()} <br>`);
//     response.write(`OS type: ${os.type()} <br>`);
//     response.write(`System work time: ${os.uptime()} <br>`);

//     let path = require('path');
//     response.write(`Current work directory: ${path.basename('/Users/andrii/Documents/Study/JS/GitHub_510.JS/HW-11')} <br>`);
//     response.write(`Server file name: ${path.format({base: 'server.js'})} <br>`);
// }).listen(5000);
// console.log('Server running at http://127.0.0.1:5000/');


// ************************ task 2 *************** 
   
const http = require('http');
var dt = require('./personalModule');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("Date of request: " + dt.myDateTime());
  
  function result() {
    let d = new Date ();
    let dayTime = d.getHours();

    let os = require('os');
    let userName = os.homedir();

    if (dayTime < 12) {
      response.write(`Good morning, ${userName}`);
    } else if (dayTime <= 16) {
        response.write(`Good afternoon, ${userName}`);
    } else if (dayTime <= 21) {
        response.write(`Good evening, ${userName}`);
    } else {
        response.write(`Good night, ${userName}`);
    };
}
  response.end(result);
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');