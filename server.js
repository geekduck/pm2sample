var http = require('http');
var port = 8080 + parseInt(process.env.NODE_APP_INSTANCE || 0); // CPUが4個の場合port8080〜8083のサーバが起動する
http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end("PID:" + process.pid + ' pm2sample app.\n');
}).listen(port);
