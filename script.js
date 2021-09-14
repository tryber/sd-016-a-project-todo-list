const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function listElementHilight(event) {
  if (event.target.classList.contains('hilight') === false) {
    event.target.classList.add('hilight');
  } else {
    event.target.classList.remove('hilight');
  }
}

function createListElement() {
  const input = document.querySelector('#texto-tarefa');
  const listElement = document.createElement('li');
  listElement.addEventListener('click', listElementHilight);
  listElement.innerText = input.value;
  list.appendChild(listElement);
  input.value = '';
}

button.addEventListener('click', createListElement);
