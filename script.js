const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function UpdateBackgroundColor(event) {
  console.log(event.target);
  event.target.classList.toggle('selected');
}

function AddTask() {
  const task = document.createElement('li');
  task.innerText = document.querySelector('#texto-tarefa').value;
  task.addEventListener('click', UpdateBackgroundColor);
  list.appendChild(task);

  document.querySelector('#texto-tarefa').value = '';
}

button.addEventListener('click', AddTask);
