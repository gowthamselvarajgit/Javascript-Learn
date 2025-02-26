let array = [1,2,3,4,5];

function arrayAdder(array){
  return array.map(num => num + num);
}

console.log(arrayAdder(array));
