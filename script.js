function createListItem () {
  const listItem = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  const parentElement = document.getElementById('lista-tarefas')
  listItem.className = 'list-item'
  listItem.innerText = input.value
  parentElement.appendChild(listItem)
}

document.getElementById('criar-tarefa').addEventListener('click', createListItem)