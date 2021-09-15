const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function addTask() {
  const task = document.querySelector('#texto-tarefa').value;
  const newElement = document.createElement('li');
  newElement.innerHTML = task;
  document.querySelector('#texto-tarefa').value = '';
  taskList.appendChild(newElement);
}

button.addEventListener('click', addTask);
