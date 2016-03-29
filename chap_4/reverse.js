function reverseArray(arrIn) {
    var arrOut = [];
    for(var  arrPnt = arrIn.length - 1; arrPnt >= 0; arrPnt--){
        arrOut.push(arrIn[arrPnt]);
    }
    return arrOut
}

function reverseArrayInPlace(arr) {
    for(var arrPnt = 0; arrPnt < arr.length / 2; arrPnt++) {
        var temp = arr[arrPnt];
        arr[arrPnt] = arr[arr.length - 1 - arrPnt];
        arr[arr.length - 1 - arrPnt] = temp;     
    }

    return arr
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);