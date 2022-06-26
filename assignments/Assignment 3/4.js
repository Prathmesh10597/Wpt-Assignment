const http = require("http");
const url = require("url");

http
  .createServer((req, resp) => {
    var a = url.parse(req.url, true).query;
    console.log("callback function called");
    resp.write("Enter the radius =" + a.r);
    resp.write("\ndiameter of circle =" + a.r * 2);
    resp.end();
  })
  .listen(800);
