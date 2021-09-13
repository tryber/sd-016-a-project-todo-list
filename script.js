function addListItem() {
  const list = document.querySelector('#lista-tarefas');
  const inputValue = document.querySelector('input').value;
  const listItem = document.createElement('li');
  listItem.innerText = inputValue;
  list.appendChild(listItem);
  document.querySelector('input').value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addListItem);
