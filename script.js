const addButton = document.getElementById('criar-tarefa');
const allList = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');

addButton.addEventListener('click', () =>{
  const newList = document.createElement('li');
  newList.innerHTML = task.value;
  allList.appendChild(newList);
  task.value = "";
})