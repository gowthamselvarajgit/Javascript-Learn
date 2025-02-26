let btn = document.getElementById("sj");

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch(event.key){
    case "ArrowUp":
       btn.textContent = Number(btn.textContent) + 1;
       break;
    case "ArrowDown": 
        btn.textContent = Number(btn.textContent) -1;
        break;
    case "r" : btn.textContent = 0;
  }
});
/* 
btn.addEventListener("click", (event) => {
  btn.textContent = "1";
  console.log("clicked");
});
btn.addEventListener("mouseover" ,(event) => {
  btn.style.background = "yellow";
  console.log("Hovered");
});
btn.addEventListener("mouseout" ,(event) => {
  btn.style.background = "red";
  console.log("Hovered");
});

*/

