var http = require('http');
var array = process.argv.slice(2);
var finalArray = [];
var count = 0;

function httpGet(index){
  http.get(process.argv[2+index], function (response) {
  response.setEncoding('utf8');
  var concat = "";
  count++;
  response.on('data', function(data){
    concat += data;
  });

  response.on('end', function(end) {
    count--;
    finalArray[index] = concat;

   if(count === 0) printResult();
  });
}).on('error', function(error){
    console.log("error"+error.message);
  })
}

for(var i = 0; i<array.length;i++)
  httpGet(i);

function printResult(){
  for(var i = 0; i < finalArray.length; i++)
    console.log(finalArray[i]); 
}

