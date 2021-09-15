const btnCreateTask = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function markTaskItem(event) {
  const backgroundColor = 'rgb(128, 128, 128)';
  const taskItem = event;
  taskItem.target.style.backgroundColor = backgroundColor;
}

function createTask() {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  const contentInput = document.querySelector('#texto-tarefa').value;
  listItem.innerHTML = contentInput;
  listItem.addEventListener('click', markTaskItem);
  document.querySelector('#texto-tarefa').value = '';
  console.log(`valor input = ${contentInput}`);
  list.appendChild(listItem);
}

btnCreateTask.addEventListener('click', createTask);
