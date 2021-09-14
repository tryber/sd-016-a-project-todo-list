const input = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function createItem(expectedText) {
  if (expectedText.target === addButton && input.value !== '') {
    const li = document.createElement('li');
    list.appendChild(li).innerHTML = input.value;
    input.value = '';
  }
}

document.addEventListener('click', createItem);
