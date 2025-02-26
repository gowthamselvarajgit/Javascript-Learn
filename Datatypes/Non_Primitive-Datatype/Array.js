let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(counter => counter*2);
console.log(doubled);

let names = ["gowtham" , "mahima"];
let upperNames = names.map((name) => (name.toUpperCase()));
console.log(upperNames);

let users = [
  {id:1, name:"Gowtham"},
  {id:2, name:"Mahima"},
  {id:3, name:"Kanchana"}
]
let userNames = users.map(user => user.name);
console.log(userNames);

let data = [10,20,30];
let result = data.map((num,index) => `Index ${index}: ${num}`);
console.log(result);
