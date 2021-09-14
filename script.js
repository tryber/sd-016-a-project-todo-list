const textInput = document.querySelector('#texto-tarefa');
const listIten = document.querySelector('#lista-tarefas');
listIten.innerHTML = window.localStorage.items === undefined ? '' : window.localStorage.items;
function complete(event) {
  let elem = event.target;
  elem.classList.toggle('completed');
  elem.style.textDecoration = 'line-through';
}
function select(event) {
  let elem = event.target;
  let selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.toggle('selected');
  }
  elem.classList.toggle('selected');
}
const removeSelected = document.querySelector('#remover-selecionado');
removeSelected.addEventListener('click', () => {
  let selectIten = document.querySelector('.selected');
  selectIten.remove();
});
const sendButton = document.querySelector('#criar-tarefa');
sendButton.addEventListener('click', () => {
  let item = document.createElement('li');
  item.innerText = textInput.value;
  item.addEventListener('click', select);
  item.addEventListener('dblclick', complete);
  listIten.appendChild(item);
  textInput.value = '';
});
const clearAllButton = document.querySelector('#apaga-tudo');
clearAllButton.addEventListener('click', () => {
  while (listIten.firstChild) {
    listIten.firstChild.remove();
  }
});
const finishClearButton = document.querySelector('#remover-finalizados');
finishClearButton.addEventListener('click', () => {
  let completed = document.querySelectorAll('.completed');
  completed.forEach((elem) => elem.remove());
});
const saveButton = document.querySelector('#salvar-tarefas');
saveButton.addEventListener('click', () => {
  window.localStorage.items = listIten.innerHTML;
});