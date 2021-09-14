const body = document.querySelector('body');
const addInput = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const eraseButton = document.getElementById('apaga-tudo');
const removeCButton = document.getElementById('remover-finalizados');
const saveTasksButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = addInput.value;
  newTask.className = 'tarefa';
  taskList.appendChild(newTask);
  addInput.value = '';
}

function changeTaskColor(e) {
  for (let i = 0; i < taskList.children.length; i += 1) {
    if (taskList.children[i].classList.contains('selected')) {
      taskList.children[i].classList.remove('selected');
    }
  }
  const task = e.target;
  task.classList.add('selected');
}

function changeToCompleteTask(e) {
  const task = e.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function eraseTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function removeCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    taskList.removeChild(completedTasks[i]);
  }
}

function saveTasks() {
  for (let i = 0; i < taskList.children.length; i += 1) {
    const saveTask = taskList.children[i].outerHTML;
    localStorage.setItem(`task${i}`, JSON.stringify(saveTask));
  }
}

function loadTasks() {
  const allKeys = Object.keys(localStorage);
  // eslint-disable-next-line sonarjs/no-unused-collection
  const taskKeys = [];
  for (let i = 0; i < allKeys.length; i += 1) {
    if (allKeys[i].includes('task')) {
      taskKeys.push(allKeys[i]);
    }
  }
  taskKeys.sort();
  for (let i = 0; i < taskKeys.length; i += 1) {
    const taskKey = document.createElement('div');
    const task = JSON.parse(localStorage.getItem(taskKeys[i]));
    taskList.appendChild(taskKey);
    taskKey.outerHTML = task;
  }
}

function moveUp() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && selectedTask.previousElementSibling) {
    const itemBefore = selectedTask.previousElementSibling;
    taskList.insertBefore(selectedTask, itemBefore);
  }
}

function moveDown() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && selectedTask.nextElementSibling) {
    const itemAfter = selectedTask.nextElementSibling;
    itemAfter.after(selectedTask);
  }
}

// Listeners
addButton.addEventListener('click', createTask);
addInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    createTask();
  }
});

body.addEventListener('click', (e) => {
  if (e.target.classList.contains('tarefa')) {
    e.preventDefault();
    changeTaskColor(e);
  }
});

body.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('tarefa')) {
    e.preventDefault();
    changeToCompleteTask(e);
  }
});

eraseButton.addEventListener('click', eraseTasks);
removeCButton.addEventListener('click', removeCompleted);
saveTasksButton.addEventListener('click', saveTasks);
moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);

window.onload = function load() {
  loadTasks();
};
