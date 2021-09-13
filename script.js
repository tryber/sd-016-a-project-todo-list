const todoTextInput = document.querySelector('#texto-tarefa');
const todoSubmitButton = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const clearAllButton = document.querySelector('#apaga-tudo');
const clearTerminatedButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');

todoList.innerHTML = window.localStorage.items === undefined ? '' : window.localStorage.items;

function complete(event) {
  const elem = event.target;
  elem.classList.toggle('completed');
}

function select(event) {
  const elem = event.target;
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.toggle('selected');
  }
  elem.classList.toggle('selected');
}

const items = document.querySelectorAll('li');
items.forEach((elem) => {
  elem.addEventListener('click', select);
  elem.addEventListener('dblclick', complete);
});

todoSubmitButton.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = todoTextInput.value;
  item.addEventListener('click', select);
  item.addEventListener('dblclick', complete);
  todoList.appendChild(item);
  todoTextInput.value = '';
});

clearAllButton.addEventListener('click', () => {
  while (todoList.firstChild) {
    todoList.firstChild.remove();
  }
});

clearTerminatedButton.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  completed.forEach((elem) => elem.remove());
});

saveButton.addEventListener('click', () => {
  window.localStorage.items = todoList.innerHTML;
});
