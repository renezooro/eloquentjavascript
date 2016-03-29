function range(min, max, step) {
    ranAr = [];
    if(!step) { step = 1; }
    for(ranVal = min; ranVal <= max; ranVal += step) {
        ranAr.push(ranVal);
    }
    return ranAr;
}
function sum(sumArray) {
    var total = 0;
    for(var arrayPnt = 0; arrayPnt < sumArray.length; arrayPnt++){
        total += sumArray[arrayPnt];
    }
    return total;
}

console.log(sum(range(parseInt(process.argv[2],10), parseInt(process.argv[3],10), parseInt(process.argv[4],10))));