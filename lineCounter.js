var fs = require('fs')

var str = fs.readFileSync(process.argv[2]).toString()

var s = str.split('\n')
console.log(s.length-1)
