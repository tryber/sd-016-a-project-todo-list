const btnCreateTask = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function createTask() {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  const contentInput = document.querySelector('#texto-tarefa').value;
  listItem.innerHTML = contentInput;
  document.querySelector('#texto-tarefa').value = '';
  console.log(`valor input = ${contentInput}`);
  list.appendChild(listItem);
}

btnCreateTask.addEventListener('click', createTask);
