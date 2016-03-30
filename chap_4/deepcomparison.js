function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") {
    return false;
  }
  
  var propsInObj1= 0, propsInObj2 = 0;

  for (var prop in obj1){
      propsInObj1 += 1;
  }

  for (var prop in obj2) {
    propsInObj2 += 1;
    if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
      return false;
  }

  return propsInObj1== propsInObj2;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true