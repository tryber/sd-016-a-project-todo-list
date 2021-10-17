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

// Pegar o elemento OL
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
  inputTask.focus();
}
// Pegar pegar todos os elmentos LI
function getListItensTask() {
  const itemListTack = document.querySelectorAll('.item-list');
  return itemListTack;
}

function addClassItemList() {
  addNewTask();
  const itemList = document.querySelector('.item-list');
  itemList.classList.add('selected');
}

function deleteAllTask() {
  const taskList = getListTaskUl();
  const listItensTask = getListItensTask();
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

window.onload = () => {
  const taksListUl = document.querySelector('#lista-tarefas');

  const getTaskListStorage = JSON.parse(localStorage.getItem('taskList'));
  if (getTaskListStorage !== null) {
    taksListUl.innerHTML = getTaskListStorage;
    for (let index = 0; index < taksListUl.children.length; index += 1) {
      taksListUl.children[index].addEventListener('click', changeClassSelectedItemList);
      taksListUl.children[index].addEventListener('dblclick', completedTask);
    }
  }
};

function moveUpTaskItem() {
  const moveUp = document.querySelector('.selected');

  if (moveUp.previousElementSibling) {
    moveUp.parentNode.insertBefore(moveUp, moveUp.previousElementSibling);
  }
}

function moveDownTaskItem() {
  const moveDown = document.querySelector('.selected');

  if (moveDown.nextElementSibling) {
    moveDown.parentNode.insertBefore(moveDown.nextElementSibling, moveDown);
  }
}

function removeSelectedTask() {
  const removeTask = document.querySelector('.selected');
  removeTask.remove();
}

const btnRemveSelectedTask = document.querySelector('#remover-selecionado');

btnRemveSelectedTask.addEventListener('click', removeSelectedTask);

const btnMoveUpItemList = document.querySelector('#mover-cima');
btnMoveUpItemList.addEventListener('click', moveUpTaskItem);

const btnMoveDownItemList = document.querySelector('#mover-baixo');
btnMoveDownItemList.addEventListener('click', moveDownTaskItem);

const btnSaveTaskList = document.querySelector('#salvar-tarefas');
btnSaveTaskList.addEventListener('click', saveTaskStorage);

const btnAddNewTask = document.querySelector('#criar-tarefa');
btnAddNewTask.addEventListener('click', addClassItemList);

const btnDeleteAllTask = document.querySelector('#apaga-tudo');
btnDeleteAllTask.addEventListener('click', deleteAllTask);

const btnRemoveComplitedTask = document.querySelector('#remover-finalizados');
btnRemoveComplitedTask.addEventListener('click', removeComplitedTask);
