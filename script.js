const buttonCreateTask = document.getElementById('criar-tarefa');
const inputItemList = document.getElementById('texto-tarefa');
const addList = document.getElementById('lista-tarefas');

function criateTask() {
  const itemList = document.createElement('li');
  itemList.innerText = inputItemList.value;
  itemList.className = 'task';
  addList.appendChild(itemList);
  inputItemList.value = '';
}

buttonCreateTask.addEventListener('click', criateTask);
