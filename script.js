const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function UpdateBackgroundColor(event) {
  const targetClassList = event.target.classList;
  const previousSelected = document.querySelector('.selected');
  if (targetClassList.contains('selected')) return;
  if (previousSelected !== null) previousSelected.classList.toggle('selected');
  targetClassList.toggle('selected');
}

function AddTask() {
  const task = document.createElement('li');
  task.innerText = document.querySelector('#texto-tarefa').value;
  task.addEventListener('click', UpdateBackgroundColor);
  list.appendChild(task);

  document.querySelector('#texto-tarefa').value = '';
}

button.addEventListener('click', AddTask);
