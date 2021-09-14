const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
button.addEventListener('click', addTask);

function addTask(selection) {
  if (selection.target === button && input.value !== '') {
    const task = document.createElement('li');

    list.appendChild(task).innerHTML = input.value;
    input.value = '';
  }
}


