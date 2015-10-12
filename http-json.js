var http = require('http')
var url = require('url')

http.createServer(function (req, res) {
  var urlreq = url.parse(req.url, true),
    pathname = urlreq.pathname,
    time = urlreq.query.iso,
    result

if (pathname === "/api/unixtime") {
	result = {unixtime: Date.parse(time)}
}

else if (pathname === "/api/parsetime") {
	var date = new Date(Date.parse(time))
	result = {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}



res.writeHead(200, { 'Content-Type' : 'application/json' })
res.end(JSON.stringify(result))
}).listen(process.argv[2])