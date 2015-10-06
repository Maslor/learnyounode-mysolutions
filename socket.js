var net = require('net')

function zeroFill(i) {
	return(i < 10 ? "0" : "") + i
}

var date = new Date()
var year = zeroFill(date.getFullYear())
var day = zeroFill(date.getDate())
var month = zeroFill(date.getMonth() + 1)
var hour = zeroFill(date.getHours())
var minutes = zeroFill(date.getMinutes())

var data = "" + year + "-" + month + "-" + day +
		" " + hour + ":" + minutes + '\n'

var server = net.createServer(function(socket){

	socket.end(data)
})
server.listen(process.argv[2])