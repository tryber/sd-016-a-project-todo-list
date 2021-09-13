function taskList() {
  const input = document.getElementById('texto-tarefa');
  const listContent = input.value;
  let list = document.getElementById('lista-tarefas');

  const creatList = document.createElement('li')
  list.appendChild(creatList);
  creatList.innerText = listContent;
  input.value = '';
 }
 
function addEvents() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click',taskList);
 }

 function selectedClass() {

 }

addEvents()
 



 
 
