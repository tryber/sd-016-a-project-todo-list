const buttonCreateTask = document.getElementById('criar-tarefa');
const inputItemList = document.getElementById('texto-tarefa');
const addList = document.getElementById('lista-tarefas');

function itemSelected(e) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  e.currentTarget.classList.add('selected');
}

function createTask() {
  const itemList = document.createElement('li');
  itemList.innerText = inputItemList.value;
  itemList.className = 'task';
  itemList.addEventListener('click', itemSelected);
  addList.appendChild(itemList);
  inputItemList.value = '';
}

buttonCreateTask.addEventListener('click', createTask);
