function clearInput() {
  const input = document.getElementById('texto-tarefa');
  input.value = '';
}

function addListItem() {
  const inputValue = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerText = inputValue;

  list.appendChild(listItem);
  clearInput();
}

function selectListItem(evt) {
  const list = document.querySelector('.selected');
  if (list) list.classList.remove('selected');

  const item = evt.target;
  item.classList.add('selected');
}

function completedItem(evt) {
  const item = evt.target;
  if (item.classList.contains('completed')) item.classList.remove('completed');
  else item.classList.add('completed');
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addListItem);

const list = document.getElementById('lista-tarefas');
list.addEventListener('click', selectListItem);
list.addEventListener('dblclick', completedItem);
