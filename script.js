const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function AddTask() {
  const task = document.createElement('li');
  task.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  list.appendChild(task);
}

button.addEventListener('click', AddTask);
