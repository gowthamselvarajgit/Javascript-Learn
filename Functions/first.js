let a = 4;
let b = 2;

function operation(var1,var2){
  let result = ((var1 + var2 * var2) + var1/var2);
  return result;
}

let answer = operation(a,b);
console.log(answer);