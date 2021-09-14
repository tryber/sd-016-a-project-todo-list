const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.innerHTML = input.value;
  list.appendChild(task);
  input.value = '';
});

const task = document.querySelector('#lista-tarefas');
task.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});
