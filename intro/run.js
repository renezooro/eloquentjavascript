//initialise by loading functions from intro.js
var fs = require('fs');
eval(fs.readFileSync('intro.js')+'');

//code to run
console.log(sum(range(1,10)))
console.log(sum(range(1,100)))