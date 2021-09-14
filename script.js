const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function addTask() {
  const task = document.createElement('li');
  task.innerHTML = input.value;
  list.appendChild(task);
  input.value = '';
}
button.addEventListener('click', addTask);
