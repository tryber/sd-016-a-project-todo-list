const addBtn = document.querySelector('#criar-tarefa');
const taskText = document.querySelector('#texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');

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
  } else if (isSelected) {
    unSelect();

    e.target.classList.add('selected');

    isSelected = true;
  }
}

// Lida com a criação de tarefas com input
function addTaskHandler() {
  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = taskText.value;
  toDoList.appendChild(li);
  li.addEventListener('click', selectTaskHandler);
  taskText.value = '';
}

addBtn.addEventListener('click', addTaskHandler);
