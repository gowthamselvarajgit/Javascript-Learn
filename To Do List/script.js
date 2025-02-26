let submit = document.getElementById("submit");
let addTask = document.getElementById("addTask");
let list = new Array();
let todoList = document.getElementById("todoList");
let doneList = document.getElementById("doneList");

submit.addEventListener("click", (event) => {
  if(addTask.value != ""){
  list.push(addTask.value);
  todoList.innerHTML += '<button class="flex pt-3 text-xl text-red-700 flex-col" onclick = "complete('+(list.length-1)+')" id="'+ (list.length - 1) +'">' + addTask.value + '</button>';
  addTask.value = "";
  }
});

function complete(id){
  doneList.innerHTML += '<li class = "text-xl text-green-700 pt-3">'+list[id]+'</li>';
  document.getElementById(id).style.display = "none";
}