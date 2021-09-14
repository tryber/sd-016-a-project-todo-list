const addbutton = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const listItems = document.querySelector('#lista-tarefas').children;
const clearButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const textBox = document.querySelector('#texto-tarefa');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const removeButton = document.querySelector('#remover-selecionado');
const selectedColor = 'rgb(128, 128, 128)';

function addListItem() {
  const listItem = document.createElement('li');
  const taskText = document.querySelector('#texto-tarefa').value;
  listItem.innerText = taskText;
  toDoList.appendChild(listItem);
  textBox.value = '';
}

addbutton.addEventListener('click', addListItem);

function selectListItem(event) {
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].style.backgroundColor = document.body.style.background;
  }
  const eventTarget = event;
  eventTarget.target.style.backgroundColor = selectedColor;
}

toDoList.addEventListener('click', selectListItem);

function riskItem(event) {
  const eventTarget = event;
  if (eventTarget.target.className === 'completed') {
    eventTarget.target.classList.remove('completed');
  } else {
    eventTarget.target.className = 'completed';
  }
}

toDoList.addEventListener('dblclick', riskItem);

function clearList() {
  if (listItems.length > 0) {
    for (let i = listItems.length; i > 0; i -= 1) {
      listItems[listItems.length - 1].remove('li');
    }
  }
}

clearButton.addEventListener('click', clearList);

function clearCompletedTasks() {
  for (let i = listItems.length - 1; i >= 0; i -= 1) {
    if (listItems[i].className === 'completed') {
      listItems[i].remove('li');
    }
  }
}

clearCompletedButton.addEventListener('click', clearCompletedTasks);

function saveList() {
  const taskList = [];
  const taskClassList = [];
  for (let i = 0; i < listItems.length; i += 1) {
    taskList[i] = listItems[i].innerText;
    taskClassList[i] = listItems[i].className;
  }
  localStorage.setItem('taskList', JSON.stringify(taskList));
  localStorage.setItem('taskClassList', JSON.stringify(taskClassList));
}

saveTasksButton.addEventListener('click', saveList);

function addNewListItem(taskText, taskClassList) {
  const listItem = document.createElement('li');
  listItem.innerText = taskText;
  if (taskClassList !== '') {
    listItem.classList.add(taskClassList);
  }
  toDoList.appendChild(listItem);
  textBox.value = '';
}

function recoverList() {
  if (JSON.parse(localStorage.getItem('taskList')) !== null
  && JSON.parse(localStorage.getItem('taskClassList')) !== null) {
    const recoveredTaskList = JSON.parse(localStorage.getItem('taskList'));
    const listLength = recoveredTaskList.length;
    const recoveredTaskClassList = JSON.parse(localStorage.getItem('taskClassList'));
    for (let i = 0; i < listLength; i += 1) {
      addNewListItem(recoveredTaskList[i], recoveredTaskClassList[i]);
    }
  }
}

window.onload = recoverList;

function moveUp() {
  let i = 1;
  for (i = 0; i < toDoList.children.length; i += 1) {
    if (toDoList.children[i].style.backgroundColor === selectedColor) {
      break;
    }
  }
  if (i > 0) {
    const saveItem = toDoList.children[i - 1];
    toDoList.removeChild(saveItem);
    toDoList.insertBefore(saveItem, toDoList.children[i]);
  }
}

moveUpButton.addEventListener('click', moveUp);

function moveDown() {
  let i = 1;
  for (i = 0; i < toDoList.children.length; i += 1) {
    if (toDoList.children[i].style.backgroundColor === selectedColor) {
      break;
    }
  }
  if (i < toDoList.children.length) {
    const saveItem = toDoList.children[i];
    toDoList.removeChild(saveItem);
    toDoList.insertBefore(saveItem, toDoList.children[i + 1]);
  }
}

moveDownButton.addEventListener('click', moveDown);

function removeListItem() {
  let i = 1;
  for (i = 0; i < toDoList.children.length; i += 1) {
    if (toDoList.children[i].style.backgroundColor === selectedColor) {
      break;
    }
  }
  const removeItem = toDoList.children[i];
  toDoList.removeChild(removeItem);
}

removeButton.addEventListener('click', removeListItem);
