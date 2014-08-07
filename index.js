module.exports=function(port,logurls){
	var http = require('http'),
	    httpProxy = require('http-proxy');
	port=port||8888;
	
	var proxy = httpProxy.createProxyServer({secure:true}),
		log  = logurls===true ? function(url){
			console.log(url);
		} : function(){};

	http.createServer(function (req, res) {
	    proxy.web(req, res, {
	      target: req.url
	    });
	    log(req.url);
	}).listen(port).on('error',function(e){
		console.error(e);
	});
}