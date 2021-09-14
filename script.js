const todoTextInput = document.querySelector('#texto-tarefa');
const todoSubmitButton = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const clearAllButton = document.querySelector('#apaga-tudo');
const clearTerminatedButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const removeSelected = document.querySelector('#remover-selecionado');

removeSelected.addEventListener('click', () => {
  const selectElem = document.querySelector('.selected');
  selectElem.remove();
});

const moveDown = document.querySelector('#mover-baixo');
const moveUp = document.querySelector('#mover-cima');

moveDown.addEventListener('click', () => {
  const selectElem = document.querySelector('.selected');
  if (selectElem && selectElem.nextElementSibling) {
    const innerNext = selectElem.nextElementSibling.innerHTML;
    const innerElem = selectElem.innerHTML;
    selectElem.innerHTML = innerNext;
    selectElem.nextElementSibling.innerHTML = innerElem;
    selectElem.classList.toggle('selected');
    selectElem.nextElementSibling.classList.toggle('selected');
    selectElem.classList.toggle('completed');
    selectElem.nextElementSibling.classList.toggle('completed');
  }
});

moveUp.addEventListener('click', () => {
  const selectElem = document.querySelector('.selected');
  if (selectElem && selectElem.previousElementSibling) {
    const innerNext = selectElem.previousElementSibling.innerHTML;
    const innerElem = selectElem.innerHTML;
    selectElem.innerHTML = innerNext;
    selectElem.previousElementSibling.innerHTML = innerElem;
    selectElem.classList.toggle('selected');
    selectElem.previousElementSibling.classList.toggle('selected');
    selectElem.classList.toggle('completed');
    selectElem.nextElementSibling.classList.toggle('completed');
  }
});

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
