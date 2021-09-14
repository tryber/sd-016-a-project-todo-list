window.onload = () => {
  const taksListUl = document.querySelector('#lista-tarefas');

  const getTaskListStorage = JSON.parse(localStorage.getItem('taskList'));
  if (getTaskListStorage !== null) {
    taksListUl.innerHTML = getTaskListStorage;
  }
};

function changeClassSelectedItemList(event) {
  const classListItem = document.querySelector('.selected');
  const eventListItem = event.target;
  if (classListItem) {
    classListItem.classList.remove('selected');
    classListItem.style.backgroundColor = 'unset';
  }
  eventListItem.classList.add('selected');
  eventListItem.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completedTask(event) {
  event.target.classList.toggle('completed');
}

function getListTaskUl() {
  const lisTask = document.querySelector('#lista-tarefas');
  return lisTask;
}

function addNewTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  if (inputTask.value === '') {
    return alert('Não pode ser adicionado uma tarfa vazia');
  }
  const lisTask = getListTaskUl();
  const listItem = document.createElement('li');
  listItem.classList.add('item-list');
  listItem.innerHTML = inputTask.value;
  listItem.addEventListener('click', changeClassSelectedItemList);
  listItem.addEventListener('dblclick', completedTask);
  lisTask.appendChild(listItem);
  inputTask.value = '';
}

function getListItensTask() {
  const itemListCalss = document.querySelector('.item-list');
  return itemListCalss;
}

function addClassItemList() {
  addNewTask();
  const itemList = getListItensTask();
  itemList.classList.add('selected');
}

function deleteAllTask() {
  const taskList = getListTaskUl();
  const listItensTask = document.querySelectorAll('.item-list');
  for (let index = 0; index < listItensTask.length; index += 1) {
    taskList.removeChild(listItensTask[index]);
  }
}

function removeComplitedTask() {
  const taskList = getListTaskUl();
  const taskComplited = document.querySelectorAll('.completed');
  for (let index = 0; index < taskComplited.length; index += 1) {
    taskList.removeChild(taskComplited[index]);
  }
}

function saveTaskStorage() {
  const listItensTask = getListTaskUl();
  localStorage.setItem('taskList', JSON.stringify(listItensTask.innerHTML));
}

const btnSaveTaskList = document.querySelector('#salvar-tarefas');
btnSaveTaskList.addEventListener('click', saveTaskStorage);

const btnAddNewTask = document.querySelector('#criar-tarefa');
btnAddNewTask.addEventListener('click', addClassItemList);

const btnDeleteAllTask = document.querySelector('#apaga-tudo');
btnDeleteAllTask.addEventListener('click', deleteAllTask);

const btnRemoveComplitedTask = document.querySelector('#remover-finalizados');
btnRemoveComplitedTask.addEventListener('click', removeComplitedTask);
