//Undefined: A variable that has been declared but not assigned a value.
let notAssigned;
console.log(notAssigned);

console.log(Number(undefined));

/* 

if undefined undergoes type conversion it will be changed as NaN that why the result is false for everything.
*/
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined <= 0);

