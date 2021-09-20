/* eslint-disable prefer-destructuring */
const createTaskButton = document.querySelector('#criar-tarefa');
const deleteAllButton = document.querySelector('#apaga-tudo');
let list = document.querySelector('#lista-tarefas');

function UpdateBackgroundColor(event) {
  const targetClassList = event.target.classList;
  if (targetClassList.contains('selected')) return;

  const previousSelected = document.querySelector('.selected');
  if (previousSelected !== null) previousSelected.classList.toggle('selected');

  targetClassList.toggle('selected');
}

function UpdateBackgroundStatus(event) {
  event.target.classList.toggle('completed');
}

function AddTask() {
  const task = document.createElement('li');

  task.innerText = document.querySelector('#texto-tarefa').value;
  task.addEventListener('click', UpdateBackgroundColor);
  task.addEventListener('dblclick', UpdateBackgroundStatus);
  list.appendChild(task);

  document.querySelector('#texto-tarefa').value = '';
}

function DeleteAll() {
  const newList = document.createElement('ol');
  newList.id = 'lista-tarefas';
  list.parentElement.appendChild(newList);
  list.parentElement.removeChild(list);
  list = newList;
}

createTaskButton.addEventListener('click', AddTask);
deleteAllButton.addEventListener('click', DeleteAll);
