
module.exports = function(path, fileExtension, callback){
	
	var array = [];
	var fs = require('fs');

	fs.readdir(path, function(err,data){

		if(err) return callback(err);
		
		for (var i = 0; i < data.length; i++) {
			if(data[i].indexOf("."+fileExtension)!==-1){
				array.push(data[i] );
				
			}
		};
		
		callback(null,array);
	});

};

