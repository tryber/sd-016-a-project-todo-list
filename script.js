const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const removeButton = document.querySelector('#remover-finalizados');

function listElementHilight(event) {
  const hilightElement = document.querySelector('.hilight');
  if (hilightElement !== null) {
    hilightElement.classList.remove('hilight');
  }
  if (event.target.classList.contains('hilight') === false) {
    event.target.classList.add('hilight');
  } else {
    event.target.classList.remove('hilight');
  }
}

function riskElement(event) {
  if (event.target.classList.contains('completed') === false) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function createListElement() {
  const input = document.querySelector('#texto-tarefa');
  const listElement = document.createElement('li');
  listElement.addEventListener('click', listElementHilight);
  listElement.addEventListener('dblclick', riskElement);
  listElement.innerText = input.value;
  list.appendChild(listElement);
  input.value = '';
}

button.addEventListener('click', createListElement);

function clearAll() {
  const listElement = document.querySelectorAll('li');
  for (let index = 0; index < listElement.length; index += 1) {
    list.removeChild(listElement[index]);
  }
}

clearButton.addEventListener('click', clearAll);

function removeFinished() {
  const listElement = document.querySelectorAll('.completed');
  for (let index = 0; index < listElement.length; index += 1) {
    list.removeChild(listElement[index]);
  }
}

removeButton.addEventListener('click', removeFinished);
