const buttonCreateTask = document.getElementById('criar-tarefa');
const inputItemList = document.getElementById('texto-tarefa');
const addList = document.getElementById('lista-tarefas');
const buttonClearList = document.getElementById('apaga-tudo');
const buttonClearCompleted = document.getElementById('remover-finalizados');

function onClick(e) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  e.currentTarget.classList.add('selected');
}

function dblClick(e) {
  if (e.currentTarget.classList.contains('completed') === false) {
    e.currentTarget.classList.add('completed');
  } else if (e.currentTarget.classList.contains('completed')) {
    e.currentTarget.classList.remove('completed');
  }
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

buttonClearList.addEventListener('click', clearList);

function clearCompleted() {
  const removeCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < removeCompleted.length; index += 1) {
    removeCompleted[index].remove('completed');
  }
}

buttonClearCompleted.addEventListener('click', clearCompleted);
