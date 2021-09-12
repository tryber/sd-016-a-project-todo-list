const addBtn = document.querySelector('#criar-tarefa');
const taskText = document.querySelector('#texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const clearBtn = document.querySelector('#apaga-tudo');
const clearCompletedBtn = document.querySelector('#remover-finalizados');

// Cancela a seleção de todas as tarefas
function unSelect() {
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].className.includes('selected')) {
      tasks[i].classList.remove('selected');
    }
  }
}

// Lida com a seleção de tarefas ao clique
function selectTaskHandler(e) {
  let isSelected = false;

  if (e.target.className.includes('selected')) {
    e.target.classList.remove('selected');

    isSelected = false;
  } else if (!isSelected) {
    unSelect();

    e.target.classList.add('selected');

    isSelected = true;
  }
}

// Lida com completar as tarefas
function completeTaskHandler(e) {
  let isCompleted = false;

  if (e.target.className.includes('completed')) {
    e.target.classList.remove('completed');

    isCompleted = false;
  } else if (!isCompleted) {
    e.target.classList.add('completed');

    isCompleted = true;
  }
}

// Lida com a criação de tarefas com input
function addTaskHandler() {
  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = taskText.value;
  toDoList.appendChild(li);
  li.addEventListener('click', selectTaskHandler);
  li.addEventListener('dblclick', completeTaskHandler);
  taskText.value = '';
}

// Lida com a remoção de todas as tarefas
function clearTasksHandler() {
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].remove();
  }
}

// Lida com a remoção de tarefas completadas
function clearCompletedTasksHandler() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
}

addBtn.addEventListener('click', addTaskHandler);
clearBtn.addEventListener('click', clearTasksHandler);
clearCompletedBtn.addEventListener('click', clearCompletedTasksHandler);
