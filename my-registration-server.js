'use strict';

var connect = require('connect')
  , app = connect()
  , server
  , http = require('http')
  , port = 4080
  ;

app.use(connect.json());
app.use(function (req, res) {
  // save the id
  console.log(req.url);
  console.log(req.body);
  res.end(JSON.stringify({ message: 'Thanks!'}));
});

server = http.createServer(app).listen(port, function () {
  console.log(server.address());
});
