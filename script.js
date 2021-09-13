const addButton = document.getElementById('criar-tarefa');
const clearButton = document.getElementById('apaga-tudo');
const clearCompletedButton = document.getElementById('remover-finalizados');

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
  const task = document.getElementById('texto-tarefa');
  if (task.value) {
    const taskToList = document.createElement('li');
    addEventToList(taskToList);
    taskToList.innerText = task.value;
    const list = document.getElementById('lista-tarefas');
    list.appendChild(taskToList);
    task.value = '';
  } else {
    alert('Digite uma tarefa antes de adicionar');
  }
}

addButton.addEventListener('click', addTask);

function clearTasks() {
  const tasks = document.getElementById('lista-tarefas').children;
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
