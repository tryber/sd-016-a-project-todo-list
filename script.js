function completedTasks(doubleClick) {
  doubleClick.target.classList.toggle('completed');
}

function activeTask(click) {
  const listItem = document.querySelectorAll('.list-item');

  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].classList.remove('active');
    click.target.classList.add('active');
  }
}

function createListItem() {
  const listItem = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  const parentElement = document.getElementById('lista-tarefas');
  listItem.className = 'list-item';
  listItem.innerText = input.value;
  listItem.addEventListener('dblclick', completedTasks);
  listItem.addEventListener('click', activeTask);
  parentElement.appendChild(listItem);
  input.value = '';
}
document.getElementById('criar-tarefa').addEventListener('click', createListItem);

function eraseAll() {
  const listItems = document.querySelectorAll('.list-item');

  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].remove();
  }
}
document.getElementById('apaga-tudo').addEventListener('click', eraseAll);

function eraseCompleted() {
  const listCompletedItems = document.querySelectorAll('.completed');

  for (let index = 0; index < listCompletedItems.length; index += 1) {
    listCompletedItems[index].remove();
  }
}
document.getElementById('remover-finalizados').addEventListener('click', eraseCompleted);
