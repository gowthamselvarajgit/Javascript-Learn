let element = document.getElementById("container");
element.className = "bodyclass";
element.innerHTML = "<p> Hi Hi Hi !!!</p>";
element.style.color = "red";

let para = document.createElement('p');
para.id = "pid";
para.textContent = "I am gowtham";
element.append(para);
element.prepend(para);
console.log(para);
console.log(element.textContent);