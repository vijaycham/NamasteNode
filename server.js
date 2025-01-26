const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end(" f**k y**");
  }

  res.end("Hai this is Vijay's server");
});

server.listen(7777);
 