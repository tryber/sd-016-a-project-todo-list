const addbutton = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const listItems = document.querySelector('#lista-tarefas').children;

function addListItem() {
  let listItem = document.createElement('li');
  let taskText = document.querySelector('#texto-tarefa').value;
  let textBox =  document.querySelector('#texto-tarefa');
  listItem.innerText = taskText;
  toDoList.appendChild(listItem);
  textBox.value = '';
}

addbutton.addEventListener('click', addListItem);

function selectListItem(event) {
  for (let i = 0; i<listItems.length; i += 1) {
    listItems[i].style.backgroundColor = document.body.style.background;
  }
  let eventTarget = event;
  eventTarget.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

toDoList.addEventListener('click', selectListItem);

function riskItem(event) {
  let eventTarget = event;
  if (eventTarget.target.className === 'completed') {
    eventTarget.target.classList.remove('completed');
  } else {
    eventTarget.target.className = 'completed';
  }
}

toDoList.addEventListener('dblclick', riskItem);