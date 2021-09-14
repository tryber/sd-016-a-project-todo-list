const addButton = document.getElementById('criar-tarefa');
const clearButton = document.getElementById('apaga-tudo');
const clearCompletedButton = document.getElementById('remover-finalizados');
const inputTasks = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const saveButton = document.getElementById('salvar-tarefas');

function AddSelectedClassToListItem(event) {
  const task = event.target;
  const className = 'task-selected';
  const lastTask = document.getElementsByClassName(className);
  if (lastTask[0]) {
    lastTask[0].classList.remove(className);
  }
  task.classList.add(className);
}

function addRemoveCompletClassToListItem(event) {
  const task = event.target;
  if (task.className.match(/completed/) !== null) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function addEventToList(listElement) {
  listElement.addEventListener('click', AddSelectedClassToListItem);
  listElement.addEventListener('dblclick', addRemoveCompletClassToListItem);
}

function addTask() {
  if (inputTasks.value) {
    const taskToList = document.createElement('li');
    addEventToList(taskToList);
    taskToList.innerText = inputTasks.value;
    listTasks.appendChild(taskToList);
    inputTasks.value = '';
  } else {
    alert('Digite uma tarefa antes de adicionar');
  }
}

addButton.addEventListener('click', addTask);

function clearTasks() {
  const tasks = listTasks.children;
  for (let index = tasks.length - 1; index > -1; index -= 1) {
    const task = tasks[index];
    task.parentNode.removeChild(task);
  }
}

clearButton.addEventListener('click', clearTasks);

function clearComplete() {
  const tasks = document.getElementsByClassName('completed');
  for (let index = tasks.length - 1; index > -1; index -= 1) {
    const task = tasks[index];
    task.parentNode.removeChild(task);
  }
}

clearCompletedButton.addEventListener('click', clearComplete);

function getTaskKeys() {
  let index = 0;
  const keys = [];
  const taskKeys = [];
  while (localStorage.key(index)) {
    keys.push(localStorage.key(index));
    index += 1;
  }
  for (index = 0; index < keys.length; index += 1) {
    const regeExp = /tarefa[0-9]+/;
    const key = keys[index];
    if (key.match(regeExp)) {
      taskKeys.push(key);
    }
  }
  let k = taskKeys;
  k = k.sort((a, b) => parseInt(a.match(/[0-9]+/)[0], 10) - parseInt(b.match(/[0-9]+/)[0], 10));
  return k;
}

function removeSavedTasks(_positionTask = 0) {
  const taskKeys = getTaskKeys();
  for (let index = taskKeys.length - 1; index > -1; index -= 1) {
    if (index >= _positionTask) {
      localStorage.removeItem(`tarefa${index}`);
    }
  }
  return taskKeys;
}

function saveTasks() {
  const tasks = listTasks.children;
  removeSavedTasks(tasks.length);
  const tasksCompleted = [];
  for (let index = 0; index < tasks.length; index += 1) {
    const task = tasks[index].innerText;
    localStorage.setItem(`tarefa${index}`, task);
    if (tasks[index].className.match(/completed/)) {
      tasksCompleted.push(index);
    }
  }
  if (tasksCompleted.length) {
    localStorage.tasksCompleted = tasksCompleted.join(',');
  } else {
    localStorage.removeItem('tasksCompleted');
  }
}

saveButton.addEventListener('click', saveTasks);

function loadTaskList() {
  const keys = getTaskKeys();
  const tasksCompleted = localStorage.tasksCompleted.split(',');
  let taskIndex = 0;
  for (let index = 0; index < keys.length; index += 1) {
    const listItem = document.createElement('li');
    listItem.innerText = localStorage.getItem(keys[index]);
    addEventToList(listItem);
    listTasks.appendChild(listItem);
    if (index === parseInt(tasksCompleted[taskIndex], 10)) {
      listItem.classList.add('completed');
      taskIndex += 1;
    }
  }
}

function checkSaves() {
  if (localStorage.tasksCompleted) {
    loadTaskList();
  }
}

window.onload = checkSaves;
