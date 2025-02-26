//let vegies = new Array();
//let vegies = [];

let vegies = ['Carrot','Beetroot','pumkin'];

vegies.push('Beans'); // add beans as the last element in the array.
vegies.unshift('Potoato'); // add potato as the first element in the array.
console.log(vegies.pop()); //removes the element from the last
console.log(vegies.shift());//removes the element from the first

for(vege of vegies){ // iterate all the elements one by one and store it in vege.
  console.log("\n");
  console.log(vege);
}

console.log(vegies.length);

console.log(vegies);