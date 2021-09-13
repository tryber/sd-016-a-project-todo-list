const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');

button.addEventListener('click', () => {
  const liTask = document.createElement('li');
  liTask.innerHTML = input.value;
  lista.appendChild(liTask);
  input.value = '';
});
