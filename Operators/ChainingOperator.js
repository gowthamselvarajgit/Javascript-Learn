//The optional chaining operator allows safe access to 
// deeply nested properties without throwing errors if 
// the property doesn’t exist.

const obj = {
  name : "Gowtham",
  address : {
    doorNumber : 86,
    city : "Erode"
  }
};

console.log(obj.address?.city);
console.log(obj.contact?.phone);