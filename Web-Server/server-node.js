const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, world!");
  } else if (req.url === "/hello-world") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Hero!");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 not found!");
  }
});

server.listen(port, hostname, (req, res) => {
  console.log("Server listening on port :  ", port);
});
