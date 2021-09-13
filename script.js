function removeAddClassItemList(event) {
  const classListItem = document.querySelector('.selected');
  const eventListItem = event.target;
  classListItem.classList.remove('selected');
  classListItem.style.backgroundColor = 'unset';
  eventListItem.classList.add('selected');
  eventListItem.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completedTask(event) {
  event.target.classList.toggle('completed');
}
function addNewTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  if (inputTask.value === '') {
    return alert('Não pode ser adicionado uma tarfa vazia');
  }
  const lisTask = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  listItem.classList.add('item-list');
  listItem.innerHTML = inputTask.value;
  listItem.addEventListener('click', removeAddClassItemList);
  listItem.addEventListener('dblclick', completedTask);
  lisTask.appendChild(listItem);
  inputTask.value = '';
}

function getItensList() {
  const itemListCalss = document.querySelector('.item-list');
  return itemListCalss;
}

function addClassItemList() {
  addNewTask();
  const itemList = getItensList();
  itemList.classList.add('selected');
}

const btnAddNewTask = document.querySelector('#criar-tarefa');
btnAddNewTask.addEventListener('click', addClassItemList);
