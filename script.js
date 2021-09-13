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
  const task = e.target;
  task.style.backgroundColor = 'rgb(128, 128, 128)';
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
