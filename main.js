var module = require('./moduleExp');

module(process.argv[2], process.argv[3], function(err,list){

	for (i = 0; i < list.length; i++) {
		console.log(list[i]);
	};
});
