function selectTask(event) {
  const newSelected = event.target;
  const oldSelected = document.getElementsByClassName('selected')[0];

  if (!oldSelected) return newSelected.classList.toggle('selected');
  if (oldSelected === newSelected) {
    return newSelected.classList.toggle('selected');
  }
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
