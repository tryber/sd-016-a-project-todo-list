const addBtn = document.querySelector('#criar-tarefa');
const taskText = document.querySelector('#texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');

function addTaskHandler() {
  const li = document.createElement('li');
  li.innerHTML = taskText.value;
  toDoList.appendChild(li);
  taskText.value = '';
}

addBtn.addEventListener('click', addTaskHandler);
    