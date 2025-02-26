let number = 7;

function checkOddEven(value){
  if(value % 2 == 0){
    return "Even";
  }
    return "Odd";
}

let result = checkOddEven(number);
console.log(result);