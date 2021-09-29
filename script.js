const btnCreateTask = document.querySelector('#criar-tarefa');
const btnDeleteAll = document.querySelector('#apaga-tudo');
const btnDeleteFinished = document.querySelector('#remover-finalizados');
const btnSaveList = document.querySelector('#salvar-tarefas');
const btnUp = document.querySelector('#mover-cima');
const btnDown = document.querySelector('#mover-baixo');
const btnDeleteSelected = document.querySelector('#remover-selecionado');
const list = document.querySelector('#lista-tarefas');

function markTaskItem(event) {
  const taskList = document.querySelectorAll('.listItem');
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].style.backgroundColor = '';
    taskList[i].classList.remove('selected');
  }
  const taskItem = event;
  taskItem.target.classList.add('selected');
}

function finishTaskItem(event) {
  const taskItem = event.target;
  if (taskItem.className.includes('completed')) {
    taskItem.classList.remove('completed');
  } else {
    taskItem.classList.add('completed');
  }
}

function createTask() {
  const listItem = document.createElement('li');
  listItem.classList.add('listItem');
  const contentInput = document.querySelector('#texto-tarefa').value;
  listItem.innerHTML = contentInput;
  listItem.addEventListener('click', markTaskItem);
  listItem.addEventListener('dblclick', finishTaskItem);
  document.querySelector('#texto-tarefa').value = '';
  list.appendChild(listItem);
}

function deleteFinished() {
  const taskList = document.querySelectorAll('.listItem');
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].className.includes('completed')) {
      taskList[i].remove('li');
    }
  }
}

function deleteAllTasks() {
  const taskList = document.querySelectorAll('.listItem');
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].remove('li');
  }
}

function addLocalStorage() {
  localStorage.clear();
  const taskList = document.querySelectorAll('.listItem');
  const taskListContent = [];
  const taskListClass = [];

  for (let i = 0, len = taskList.length; i < len; i += 1) {
    taskListContent.push(taskList[i].textContent);
    taskListClass.push(taskList[i].className);
  }
  localStorage.setItem('content', JSON.stringify(taskListContent));
  localStorage.setItem('class', JSON.stringify(taskListClass));
}

function startList() {
  for (let i = 0, len = localStorage.length; i < len; i += 1) {
    const item = document.createElement('li');
    const contentItem = JSON.parse(localStorage.getItem('content'));
    const classItem = JSON.parse(localStorage.getItem('class'));
    item.innerText = contentItem[i];
    item.className = classItem[i];
    item.addEventListener('click', markTaskItem);
    item.addEventListener('dblclick', finishTaskItem);
    list.appendChild(item);
  }
}

function moveUp() {
  const taskList = document.querySelectorAll('.listItem');
  let position = '';
  for (let i = 0, len = taskList.length; i < len; i += 1) {
    if (taskList[i].className.includes('selected')) {
      position = i;
    }
  }
  if (taskList[position - 1] !== undefined) {
    const swap = taskList[position - 1].textContent;
    const swapClass = taskList[position - 1].className;
    taskList[position - 1].innerHTML = taskList[position].textContent;
    taskList[position - 1].className = '';
    taskList[position - 1].className = taskList[position].className;
    taskList[position].innerHTML = swap;
    taskList[position].className = '';
    taskList[position].className = swapClass;
  }
}

function moveDown() {
  const taskList = document.querySelectorAll('.listItem');
  let position = '';
  for (let i = 0, len = taskList.length; i < len; i += 1) {
    if (taskList[i].className.includes('selected')) {
      position = i;
    }
  }
  if (position === '') return true;
  if (taskList[position + 1] !== undefined) {
    const swap = taskList[position + 1].textContent;
    const swapClass = taskList[position + 1].className;
    taskList[position + 1].innerHTML = taskList[position].textContent;
    taskList[position + 1].className = '';
    taskList[position + 1].className = taskList[position].className;
    taskList[position].innerHTML = swap;
    taskList[position].className = '';
    taskList[position].className = swapClass;
  }
}

function deleteSelected() {
  const taskList = document.querySelectorAll('.listItem');
  for (let i = 0, len = taskList.length; i < len; i += 1) {
    if (taskList[i].className.includes('selected')) {
      taskList[i].remove('li');
    }
  }
}

btnCreateTask.addEventListener('click', createTask);
btnDeleteAll.addEventListener('click', deleteAllTasks);
btnDeleteFinished.addEventListener('click', deleteFinished);
btnSaveList.addEventListener('click', addLocalStorage);
btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);
btnDeleteSelected.addEventListener('click', deleteSelected);

window.onload = () => {
  startList();
};
