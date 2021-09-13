const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', function () {
  let input = document.querySelector('#texto-tarefa');
  let list = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.innerHTML = input.value;
  list.appendChild(task);
  input.value = '';
});
