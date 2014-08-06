var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({secure:true});

http.createServer(function (req, res) {
    proxy.web(req, res, {
      target: req.url
    });
}).listen(8888).on('error',function(e){
	console.error(e);
});