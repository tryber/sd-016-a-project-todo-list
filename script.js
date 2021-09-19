//desafio 5 elaborado com ajuda do aluno Mateus Turola
function createTask() {
  const orderList = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  const itemList = document.createElement('li');
  itemList.innerText = getInput.value;
  itemList.className = 'task';
  orderList.appendChild(itemList);
  getInput.value = '';
}

const buttonCreate = document.querySelector('#criar-tarefa');
buttonCreate.addEventListener('click', createTask);
