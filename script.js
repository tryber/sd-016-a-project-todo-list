const buttonCreateTask = document.getElementById('criar-tarefa');
const inputItemList = document.getElementById('texto-tarefa');
const addList = document.getElementById('lista-tarefas');
const buttonClearList = document.getElementById('apaga-tudo');

function onClick(e) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  e.currentTarget.classList.add('selected');
}

function dblClick(e) {
  const completedItem = document.querySelector('.completed');
  if (completedItem) {
    completedItem.classList.remove('completed');
  }
  e.currentTarget.classList.add('completed');
}

function createTask() {
  const itemList = document.createElement('li');
  itemList.innerText = inputItemList.value;
  itemList.className = 'task';
  itemList.addEventListener('click', onClick);
  itemList.addEventListener('dblclick', dblClick);
  addList.appendChild(itemList);
  inputItemList.value = '';
}

buttonCreateTask.addEventListener('click', createTask);

function clearList() {
  addList.innerHTML = '';
}

console.log(addList);

buttonClearList.addEventListener('click', clearList);
