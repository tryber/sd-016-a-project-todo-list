const body = document.querySelector('body');
const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = input.value;
  newTask.className = 'tarefa';
  taskList.appendChild(newTask);
  input.value = '';
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

// Listeners
button.addEventListener('click', createTask);
input.addEventListener('keyup', (e) => {
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
