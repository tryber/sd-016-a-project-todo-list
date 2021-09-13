const addBtn = document.querySelector('#criar-tarefa');
const taskText = document.querySelector('#texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const clearBtn = document.querySelector('#apaga-tudo');
const clearCompletedBtn = document.querySelector('#remover-finalizados');
const saveTasksBtn = document.querySelector('#salvar-tarefas');
const clearSelectedBtn = document.querySelector('#remover-selecionado');
const moveDownBtn = document.querySelector('#mover-baixo');
const moveUpBtn = document.querySelector('#mover-cima');

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
  unSelect();

  e.target.classList.add('selected');
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

// Carrega tasks do local storage;
window.onload = () => {
  for (let i = 0; i < localStorage.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'task';
    if (localStorage.getItem(i).includes(' completed')) {
      li.classList.add('completed');
    }
    li.innerHTML = localStorage.getItem(i).replace(' completed', '');
    toDoList.appendChild(li);
    li.addEventListener('click', selectTaskHandler);
    li.addEventListener('dblclick', completeTaskHandler);
  }
};

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

// Lida com salvar tarefas no local storage
function saveTasksHandler() {
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].className.includes('completed')) {
      const complete = ' completed';
      localStorage.setItem(i, tasks[i].innerHTML + complete);
    } else {
      localStorage.setItem(i, tasks[i].innerHTML);
    }
  }
}

// Lida com a remoção de tarefas selecionadas
function clearSelectedHandler() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

// Lida com mover tarefas para baixo
function moveDownTask() {
  const tasks = document.querySelectorAll('.task');
  const selectedElement = document.querySelector('.selected');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i] === selectedElement && tasks[i + 1] != null) {
      const aux = tasks[i + 1].innerHTML;
      tasks[i + 1].classList.add('selected');
      tasks[i].classList.remove('selected');
      tasks[i + 1].innerHTML = tasks[i].innerHTML;
      tasks[i].innerHTML = aux;
    }
  }
}

// Lida com mover tarefas para cima
function moveUpTask() {
  const tasks = document.querySelectorAll('.task');
  const selectedElement = document.querySelector('.selected');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i] === selectedElement && tasks[i - 1] != null) {
      const aux = tasks[i - 1].innerHTML;
      tasks[i - 1].classList.add('selected');
      tasks[i].classList.remove('selected');
      tasks[i - 1].innerHTML = tasks[i].innerHTML;
      tasks[i].innerHTML = aux;
    }
  }
}

addBtn.addEventListener('click', addTaskHandler);
clearBtn.addEventListener('click', clearTasksHandler);
clearCompletedBtn.addEventListener('click', clearCompletedTasksHandler);
saveTasksBtn.addEventListener('click', saveTasksHandler);
clearSelectedBtn.addEventListener('click', clearSelectedHandler);
moveDownBtn.addEventListener('click', moveDownTask);
moveUpBtn.addEventListener('click', moveUpTask);
