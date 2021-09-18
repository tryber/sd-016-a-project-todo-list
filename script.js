const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function addTask() {
  const task = document.createElement('li');
  task.innerHTML = input.value;
  list.appendChild(task);
  input.value = null;
}
button.addEventListener('click', addTask);

function colorItemList(event) {
  const item = document.querySelectorAll('li')
  for (let index = 0; index < item.length; index += 1) {
    item[index].style.backgroundColor = null;
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
document.getElementById('lista-tarefas').addEventListener('click', colorItemList);

function scratchTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed')
  }
}
list.addEventListener('dblclick', scratchTask);
