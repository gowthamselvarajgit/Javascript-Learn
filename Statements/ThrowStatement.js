function checkAge(age){
  if(age < 18){
    throw new Error("Age must be 18 or older");
  }
}

let age = 17;

try{
  checkAge(age);
}