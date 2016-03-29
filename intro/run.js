//initialise by loading functions from intro.js
var intro = require('./intro.js')
var sum = intro.sum;
var range = intro.range;

//code to run
console.log(sum(range(1,10)))
console.log(sum(range(1,100)))