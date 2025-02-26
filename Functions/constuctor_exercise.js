function SomeOperation(number1,number2){
  this.number1 = number1;
  this.number2 = number2;
  this.extraNumber = function(number3){
    return this.number1 + this.number2 + number3;
  }
}

let firstAddition = new SomeOperation(10,20);
let secondAdditon = firstAddition.extraNumber(30);
console.log(secondAdditon);