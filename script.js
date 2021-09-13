function taskList() {
 let father = document.getElementById("lista-tarefas");
 let text = document.getElementById('texto-tarefa');
 let list = document.createElement("li");

 list.innerText = text.value;
 
 father.appendChild(list);

 }

 function addEvents() {
   let button = document.getElementById('criar-tarefas')
   button.addEventListener('click',taskList)
 }

 addEvents()
 taskList()

 
 
