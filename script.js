const list = document.getElementById('lista-tarefas');

function clearInput() {
  const input = document.getElementById('texto-tarefa');
  input.value = '';
}

function addListItem() {
  const inputValue = document.getElementById('texto-tarefa').value;
  if (inputValue === '') alert('Não é possível adicionar tarefa sem nome');
  else {
    const listItem = document.createElement('li');
    listItem.innerText = inputValue;

    list.appendChild(listItem);
    clearInput();
  }
}

function selectListItem(evt) {
  const listItems = document.querySelector('.selected');
  if (listItems) listItems.classList.remove('selected');

  const item = evt.target;
  item.classList.add('selected');
}

function completedItem(evt) {
  const item = evt.target;
  if (item.classList.contains('completed')) item.classList.remove('completed');
  else item.classList.add('completed');
}

function clearList() {
  list.innerText = '';
}

function clearCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    list.removeChild(completed[i]);
  }
}

const createItemButton = document.getElementById('criar-tarefa');
createItemButton.addEventListener('click', addListItem);

const clearListButton = document.getElementById('apaga-tudo');
clearListButton.addEventListener('click', clearList);

const clearCompletedButton = document.getElementById('remover-finalizados');
clearCompletedButton.addEventListener('click', clearCompleted);

list.addEventListener('click', selectListItem);
list.addEventListener('dblclick', completedItem);
