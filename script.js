
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas')

function createListElement() {
  const input = document.querySelector('#texto-tarefa');
  const listElement = document.createElement('li');
  listElement.innerText = input.value;
  list.appendChild(listElement);
  input.value = '';
}

button.addEventListener('click', createListElement);
