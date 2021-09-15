let button = document.createElement('button');
let parentButton = document.getElementById('lista-tarefas');
let inputText = document.getElementById('texto-tarefa');

function createbutton() {
  button.id = 'criar-tarefa';
  button.innerText = 'Incluir Tarefa'

  parentButton.appendChild(button);
}

createbutton();

function clickButton() {
  let taskList = document.createElement('li');
  taskList.className = 'item-list';
  taskList.innerText = inputText.value;
  parentButton.appendChild(taskList);
  inputText.value = '';
}

button.addEventListener('click', clickButton);

function colorList(event) {
  let itemList = document.getElementsByClassName('item-list')
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].style.background = 'white';
  }
  event.target.style.background = 'rgb(128, 128, 128)';
  }

  parentButton.addEventListener('click', colorList);