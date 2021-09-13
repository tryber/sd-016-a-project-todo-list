const selectOl = document.querySelector('#lista-tarefas');
const selectInput = document.querySelector('#texto-tarefa');
const selectButton = document.querySelector('#criar-tarefa');

selectButton.addEventListener('click', () => {
  if (selectInput.value === '') {
    return alert('Sem Tarefa!, Favor informar um nome de Tarefa!');
  }
  const createtasks = document.createElement('li');
  createtasks.innerHTML = selectInput.value.toUpperCase();
  createtasks.classList.add('tasks-line');
  selectOl.appendChild(createtasks);
  selectInput.value = '';
});
