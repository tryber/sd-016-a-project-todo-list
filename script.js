const getTaskButton = document.querySelector('#criar-tarefa');
const deleteButton = document.querySelector('#apaga-tudo');
const delCompletedButton = document.querySelector('#remover-finalizados');

// Requisito 7
function changeTaskColor(event) {
  const getList = document.querySelectorAll('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].style.backgroundColor = 'unset';
  }
  const element = event.target;
  element.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Requisito 8
function setTaskList() {
  const getList = document.querySelectorAll('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].addEventListener('click', changeTaskColor);
  }
}

// Requisito 5 e 6
function createTask() {
  const getTaskInput = document.querySelector('#texto-tarefa');
  const textInput = getTaskInput.value;
  const getList = document.querySelector('#lista-tarefas');
  const taskLine = document.createElement('li');
  taskLine.innerText = textInput;
  getList.appendChild(taskLine);
  getTaskInput.value = '';
  setTaskList();
  completedTask();
  saveTaskList();
}
getTaskButton.addEventListener('click', createTask);

// Requisito 9
function completedTask() {
  const getList = document.querySelectorAll('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].ondblclick = function (event) {
      event.target.classList.toggle('completed');
    };
  }
}

// Requisito 10
function deleteList() {
  const getList = document.querySelectorAll('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].remove();
  }
}
deleteButton.addEventListener('click', deleteList);

// Requisito 11
function deleteCompletedTask() {
  const getCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < getCompleted.length; index += 1) {
    getCompleted[index].remove();
  }
}
delCompletedButton.addEventListener('click', deleteCompletedTask);

// Requisito 12
function saveTaskList() {
  const getList = document.querySelectorAll('li');
  for (let index = 0; index < getList.length; index += 1) {
    localStorage.setItem('tarefa', getList[index].innerHTML);
  }
}

function loadSavedItens() {
  for (let index = 0; index < localStorage.length; index += 1) {
    localStorage.getItem(localStorage.key(index));
  }
}
window.onload = loadSavedItens;
