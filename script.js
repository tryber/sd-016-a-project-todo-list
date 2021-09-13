const addButton = document.getElementById('criar-tarefa');

function addTask() {
  const task = document.getElementById('texto-tarefa');
  const taskToList = document.createElement('li');
  taskToList.innerText = task.value;
  const list = document.getElementById('lista-tarefas');
  list.appendChild(taskToList);
  task.value = '';
}

addButton.addEventListener('click', addTask);
