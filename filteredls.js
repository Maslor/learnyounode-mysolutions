var fs = require('fs');

var path = process.argv[2];
var fileExtension = process.argv[3];
var array = [];

fs.readdir(path, function(err,data){
	for (var i = 0; i < data.length; i++) {
		if(data[i].indexOf("."+fileExtension)!==-1){
			array += data[i] + "\n";
		}
	};
	console.log(array);
} );
