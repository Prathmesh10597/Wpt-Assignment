const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    var q = url.parse(req.url, true).query;
    console.log("call back funtion");
    res.write("hello server" + q.x);
    res.end();
  })
  .listen(800);
