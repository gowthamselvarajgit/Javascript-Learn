const calculate = (number, callBack) => callBack(number);

const square = (number) => number ** 2;

console.log(calculate(10,square));
