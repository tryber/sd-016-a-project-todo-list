function selectTask(event) {
  const newSelected = event.target;
  const oldSelected = document.getElementsByClassName('selected')[0];

  if (!oldSelected) return newSelected.classList.toggle('selected');
  if (oldSelected === newSelected) return;
  oldSelected.classList.toggle('selected');
  newSelected.classList.toggle('selected');
}

function completeTask(event) {
  return event.target.classList.toggle('completed');
}

function createNewTask() {
  const task = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  if (task === '') return true;
  const list = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerHTML = task;
  newTask.addEventListener('click', selectTask);
  newTask.addEventListener('dblclick', completeTask);
  list.appendChild(newTask);
}

function addTaskBtnListener() {
  const btn = document.getElementById('criar-tarefa');
  btn.addEventListener('click', createNewTask);
}
addTaskBtnListener();

function clearTasks() {
  const taskList = document.getElementById('lista-tarefas');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function addClearBtnListener() {
  const btn = document.getElementById('apaga-tudo');
  btn.addEventListener('click', clearTasks);
}
addClearBtnListener();

function clearFinished() {
  const taskList = document.getElementsByClassName('completed');
  while (taskList.length > 0) {
    const task = taskList[0];
    task.parentNode.removeChild(task);
  }
}

function addClearFinishedListener() {
  const btn = document.getElementById('remover-finalizados');
  btn.addEventListener('click', clearFinished);
}
addClearFinishedListener();

function saveState() {
  const taskList = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('taskList', taskList);
}

function addSaveBtnListener() {
  const btn = document.getElementById('salvar-tarefas');
  btn.addEventListener('click', saveState);
}
addSaveBtnListener();

function moveUp() {
  const firstElement = document.getElementsByClassName('selected')[0];
  if (firstElement === undefined) return;
  const previousElement = firstElement.previousElementSibling;
  if (previousElement === null) return;
  const firstElementText = firstElement.innerHTML;
  const previousElementText = previousElement.innerHTML;
  firstElement.innerHTML = previousElementText;
  previousElement.innerHTML = firstElementText;
  firstElement.classList.toggle('selected');
  previousElement.classList.toggle('selected');

  if (
    previousElement.classList.contains('completed') &&
    firstElement.classList.contains('completed')
  )
    return;

  if (
    previousElement.classList.contains('completed') ||
    firstElement.classList.contains('completed')
  ) {
    firstElement.classList.toggle('completed');
    previousElement.classList.toggle('completed');
  }
}

function addMoveUpListener() {
  const btn = document.getElementById('mover-cima');
  btn.addEventListener('click', moveUp);
}
addMoveUpListener();

function moveDown() {
  const firstElement = document.getElementsByClassName('selected')[0];
  if (firstElement === undefined) return;
  const nextElement = firstElement.nextElementSibling;
  if (nextElement === null) return;
  const firstElementText = firstElement.innerHTML;
  const nextElementText = nextElement.innerHTML;
  firstElement.innerHTML = nextElementText;
  nextElement.innerHTML = firstElementText;
  firstElement.classList.toggle('selected');
  nextElement.classList.toggle('selected');

  if (
    nextElement.classList.contains('completed') &&
    firstElement.classList.contains('completed')
  )
    return;

  if (
    nextElement.classList.contains('completed') ||
    firstElement.classList.contains('completed')
  ) {
    firstElement.classList.toggle('completed');
    nextElement.classList.toggle('completed');
  }
}

function addDownUpListener() {
  const btn = document.getElementById('mover-baixo');
  btn.addEventListener('click', moveDown);
}
addDownUpListener();

function removeTask() {
  const task = document.getElementsByClassName('selected')[0];
  task.parentNode.removeChild(task);
}

function addBtnRemoveListner() {
  const btn = document.getElementById('remover-selecionado');
  btn.addEventListener('click', removeTask);
}
addBtnRemoveListner();

function loadStorage() {
  if (localStorage.getItem('taskList') !== null) {
    const taskList = document.getElementById('lista-tarefas');
    taskList.innerHTML = localStorage.getItem('taskList');
    const taskListElements = taskList.children;
    for (let index = 0; index < taskList.childElementCount; index += 1) {
      taskListElements[index].addEventListener('click', selectTask);
      taskListElements[index].addEventListener('dblclick', completeTask);
    }
  }
}
loadStorage();
