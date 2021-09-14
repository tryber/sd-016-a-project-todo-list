function addListItem() {
  const list = document.querySelector('#lista-tarefas');
  const inputValue = document.querySelector('input').value;
  const listItem = document.createElement('li');
  listItem.innerText = inputValue;
  list.appendChild(listItem);
  document.querySelector('input').value = '';
}

function selectListItem(event) {
  if (document.querySelectorAll('.selected').length > 0) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function completedItem(event) {
  if (event.target.classList.contains('completed') === true) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

document.querySelector('#criar-tarefa').addEventListener('click', addListItem);
document.querySelector('ol').addEventListener('click', selectListItem);
document.querySelector('ol').addEventListener('dblclick', completedItem);
