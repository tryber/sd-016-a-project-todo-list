let inputTask = document.getElementById("texto-tarefa");
let createTask = document.getElementById("criar-tarefa");
let taskList = document.getElementById("lista-tarefas");

function addTask (){
    let taskValue = inputTask.value;
    let newTask = document.createElement("li");
    newTask.innerHTML = taskValue;
    taskList.appendChild(newTask);
    inputTask.value = "";
}
createTask.addEventListener("click", addTask);

function selectedItem (element) {
  let tasks = Array.from(taskList.children);
  for (let i = 0; i < tasks.length; i += 1) {
    currentTask = tasks[i];
    if(currentTask.classList.contains("selected")) {
      currentTask.classList.remove("selected");
    }
  }
  element.classList.add("selected");
}
