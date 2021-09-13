function createListItem() {
  const listItem = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  const parentElement = document.getElementById('lista-tarefas')
  listItem.className = 'list-item'
  listItem.innerText = input.value
  parentElement.appendChild(listItem)
  input.value = '';
}
document.getElementById('criar-tarefa').addEventListener('click', createListItem)


function eraseAll() {
  const listItems = document.querySelectorAll('.list-item');

  for (let index = 0; index < listItems.length; index += 1) {
   listItems[index].remove()
  }
}
document.getElementById('apaga-tudo').addEventListener('click', eraseAll);