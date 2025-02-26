// in operator → Checks if a property exists in an object.

const obj = {
  length : 10
};

let inResult = "length" in obj;
//let inResult = "width" in obj; //false because width is not present in the obj.
console.log(inResult);

//instanceof operator → Checks if an object is an instance of a specific constructor.

let instanceResult1 = {} instanceof Object;
console.log(instanceResult1); //true

let instanceResult2 = [] instanceof Object;
console.log(instanceResult2); //true

console.log(new Date() instanceof Date); //true

console.log([] instanceof String);   // false
console.log({} instanceof Array);    // false
console.log(10 instanceof Number);   // false (primitives are not objects)

class Car {}
let myCar = new Car();

console.log(myCar instanceof Car);   // true
console.log(myCar instanceof Object); // true (because all objects inherit from Object)
