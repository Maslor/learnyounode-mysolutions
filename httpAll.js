var http = require('http');
var concat = "";

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	response.on('data', function(data){
		concat += data;
	});
	response.on('end', function(end) {
		console.log(concat.length);
		console.log(concat+'\n');
	});
});

