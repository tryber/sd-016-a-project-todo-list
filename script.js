const addbutton = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const listItems = document.querySelector('#lista-tarefas').children;
const clearButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');

function addListItem() {
  const listItem = document.createElement('li');
  const taskText = document.querySelector('#texto-tarefa').value;
  const textBox = document.querySelector('#texto-tarefa');
  listItem.innerText = taskText;
  toDoList.appendChild(listItem);
  textBox.value = '';
}

addbutton.addEventListener('click', addListItem);

function selectListItem(event) {
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].style.backgroundColor = document.body.style.background;
  }
  const eventTarget = event;
  eventTarget.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

toDoList.addEventListener('click', selectListItem);

function riskItem(event) {
  const eventTarget = event;
  if (eventTarget.target.className === 'completed') {
    eventTarget.target.classList.remove('completed');
  } else {
    eventTarget.target.className = 'completed';
  }
}

toDoList.addEventListener('dblclick', riskItem);

function clearList() {
  if (listItems.length > 0) {
    for (let i = listItems.length; i > 0; i -= 1) {
      listItems[listItems.length - 1].remove('li');
    }
  }
}

clearButton.addEventListener('click', clearList);

function clearCompletedTasks() {
  for (let i = listItems.length - 1; i >= 0; i -= 1) {
    if (listItems[i].className === 'completed') {
      listItems[i].remove('li');
    }
  }
}

clearCompletedButton.addEventListener('click', clearCompletedTasks);
