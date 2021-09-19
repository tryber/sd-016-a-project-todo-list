let getButton = document.getElementById('criar-tarefa')
let getField = document.getElementById('texo-tarefa')
let getList = document.getElementById('lista-tarefas')


function createTask() {
  const orderList = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  const itemList = document.createElement('li');
  itemList.innerText = getInput.value;
  itemList.className = 'task';
  orderList.appendChild(itemList);
  getInput.value = '';
}
