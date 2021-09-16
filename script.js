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

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addListItem);
