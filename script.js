// Requisitos 5 e 6

function addTasks(){
  let textInput = document.getElementById('texto-tarefa');
  let tasksList = document.getElementById('lista-tarefas');
  let task = document.createElement('li');
  task.innerText = textInput.value;
  tasksList.appendChild(task);
  textInput.value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addTasks);