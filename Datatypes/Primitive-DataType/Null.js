//Null: Represents an intentional absence of any value.

let empty = null;
console.log(empty)

console.log(null < 0); 
console.log(null > 0);
console.log(null == 0); //they writen a code that null is not eqaual to anything.
console.log(null <= 0);

console.log(Number(null));

/* 
The language converts null to 0 in numeric contexts, 
which is why 0 <= null and 0 >= null both evaluate 
to true. However, for equality checks, JavaScript 
treats null differently, only considering it loosely 
equal to undefined , and not to 0 . This is why null == 0 
is false.
*/