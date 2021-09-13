function createTask(){
  let orderList = document.querySelector('#lista-tarefas');
  let getInput = document.querySelector('#texto-tarefa');

  let itemList = document.createElement('li');
  itemList.innerText = getInput.value;
  orderList.append(itemList);
  getInput.value = '';
}

let buttonCreate = document.querySelector('#criar-tarefa');
buttonCreate.addEventListener('click', createTask)