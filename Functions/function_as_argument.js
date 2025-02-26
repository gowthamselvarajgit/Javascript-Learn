let operation = (op,num1,num2) => op(num1,num2);

let add = (number1,number2) => number1 + number2;
let sub = (number1,number2) => number1 - number2;
let mul = (number1,number2) => number1 * number2;
let div = (number1,number2) => number1 / number2;

let result = operation(mul, 10, 20);
console.log(result);


