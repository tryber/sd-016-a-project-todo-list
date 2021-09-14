const inputOfTasks = document.querySelector('#texto-tarefa');
const buttonTaskAdd = document.querySelector('#criar-tarefa');

function addsTaskItem() {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.innerText = inputOfTasks.value;
  document.querySelector('#lista-tarefa').appendChild(taskItem);
  inputOfTasks.value = '';
}

buttonTaskAdd.addEventListener('click', addsTaskItem);
