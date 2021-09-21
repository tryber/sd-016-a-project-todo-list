let input = document.getElementById('texto-tarefa')
let olList = document.getElementById('lista-tarefas')
const button = document.getElementById('criar-tarefa')

function createItens() {
  let createItem = document.createElement('li');
  createItem.innerText = input.value;
  olList.appendChild(createItem);
}

button.addEventListener('click', createItens)