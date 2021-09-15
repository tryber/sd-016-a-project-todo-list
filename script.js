let button = document.getElementById('criar-tarefa');
let eraseButton = document.getElementById('apaga-tudo');
let eraseDoneButton = document.getElementById('remover-finalizados');
let parentList = document.getElementById('lista-tarefas');
let parentbutton = document.getElementById('mainList')
let inputText = document.getElementById('texto-tarefa');
let taskItemList = document.getElementsByClassName('item-list');

function clickButton() {
  let taskList = document.createElement('li');
  taskList.className = 'item-list';
  taskList.innerText = inputText.value;
  parentList.appendChild(taskList);
  inputText.value = '';
}

button.addEventListener('click', clickButton);

function colorList(event) {
  for (let i = 0; i < taskItemList.length; i += 1) {
  taskItemList[i].style.background = 'white';
  }
  event.target.style.background = 'rgb(128, 128, 128)';
  }

parentList.addEventListener('click', colorList);

function completedTasks (event) {
  for (let i = 0; i < taskItemList.length; i += 1) {
    taskItemList[i].classList.add('uncompleted');
  }
  event.target.classList.toggle('completed');
}

parentList.addEventListener('dblclick', completedTasks);

// Função removeAll e removeListDone com *while* feitas com base na fonte StackOverflow link: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name //

function removeAll () {
  while (taskItemList.length > 0) {
  taskItemList[0].parentNode.removeChild(taskItemList[0]);
  }
}

eraseButton.addEventListener('click', removeAll);

function removeListDone () {
  let removeDone = document.getElementsByClassName('completed');
  while (removeDone.length > 0) {
    removeDone[0].parentNode.removeChild(removeDone[0]);
  }
}

eraseDoneButton.addEventListener('click',removeListDone);
