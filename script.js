const btnCreateTask = document.querySelector('#criar-tarefa');
const btnDeleteAll = document.querySelector('#apaga-tudo');
const btnDeleteFinished = document.querySelector('#remover-finalizados');
const btnSaveList = document.querySelector('#salvar-tarefas');
const list = document.querySelector('#lista-tarefas');

function markTaskItem(event) {
  const taskList = document.querySelectorAll('.listItem');
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].style.backgroundColor = '';
  }
  const backgroundColor = 'rgb(128, 128, 128)';
  const taskItem = event;
  taskItem.target.style.backgroundColor = backgroundColor;
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

btnCreateTask.addEventListener('click', createTask);
btnDeleteAll.addEventListener('click', deleteAllTasks);
btnDeleteFinished.addEventListener('click', deleteFinished);
btnSaveList.addEventListener('click', addLocalStorage);

window.onload = () => {
  startList();
};
