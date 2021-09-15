let button = document.createElement('button');
let parentList = document.getElementById('lista-tarefas');
let parentbutton = document.getElementById('mainList')
let inputText = document.getElementById('texto-tarefa');

function createbutton() {
  button.id = 'criar-tarefa';
  button.innerText = 'Incluir Tarefa'

  parentbutton.appendChild(button);
}

createbutton();

function clickButton() {
  let taskList = document.createElement('li');
  taskList.className = 'item-list';
  taskList.innerText = inputText.value;
  parentList.appendChild(taskList);
  inputText.value = '';
}

button.addEventListener('click', clickButton);

function colorList(event) {
  let itemList = document.getElementsByClassName('item-list');
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].style.background = 'white';
  }
  event.target.style.background = 'rgb(128, 128, 128)';
  }

parentList.addEventListener('click', colorList);

function completedTasks (event) {
  let uncompletedTasks = document.getElementsByClassName('item-list');
  for (let i = 0; i < uncompletedTasks.length; i += 1) {
    uncompletedTasks[i].classList.add('uncompleted');
  }
  event.target.classList.toggle('completed');
}

parentList.addEventListener('dblclick', completedTasks);
