var arrays = [[1, 2, 3], [4, 5], [6]];
var newArr = []
arrays.forEach(function(inArr) {
    inArr.forEach(function(element){ 
        newArr.push(element)
    });
});
console.log(newArr);