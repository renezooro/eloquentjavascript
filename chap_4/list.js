function arrayToList(arr){
    var list = null;
    while (arr.length){
        list = {value: arr.pop(), rest: list}
    }
    return list;
}
function listToArray(list) {
    var arr = [];
    while (list) {
        arr.push(list.value)
        list = list.rest;
    }
    return arr;
}
function prepend(item, list) {
    var list = {value: item, rest: list}
    return list;
}
function nth(list, n) {
    for (index = 0; index < n; index++ ) {
        if (list) {list = list.rest;}
        else {return undefined;}
    }
    if (list) {return list.value;}
        else {return null;}
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 3));
console.log(nth(arrayToList([10, 20, 30]), 56));
