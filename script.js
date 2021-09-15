const button = document.getElementById('criar-tarefa');
const eraseButton = document.getElementById('apaga-tudo');
const eraseDoneButton = document.getElementById('remover-finalizados');
const parentList = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');
const taskItemList = document.getElementsByClassName('item-list');

function clickButton() {
  const taskList = document.createElement('li');
  taskList.className = 'item-list';
  taskList.innerText = inputText.value;
  parentList.appendChild(taskList);
  inputText.value = '';
}

button.addEventListener('click', clickButton);

function colorList(event) {
  const coloring = event;
  for (let i = 0; i < taskItemList.length; i += 1) {
    taskItemList[i].style.background = 'white';
  }
  coloring.target.style.background = 'rgb(128, 128, 128)';
}

parentList.addEventListener('click', colorList);

function completedTasks(event) {
  const completing = event;
  for (let i = 0; i < taskItemList.length; i += 1) {
    taskItemList[i].classList.add('uncompleted');
  }
  completing.target.classList.toggle('completed');
}

parentList.addEventListener('dblclick', completedTasks);

// Função removeAll e removeListDone com *while* feitas com base na fonte StackOverflow link: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name //

function removeAll() {
  while (taskItemList.length > 0) {
    taskItemList[0].parentNode.removeChild(taskItemList[0]);
  }
}

eraseButton.addEventListener('click', removeAll);

function removeListDone() {
  const removeDone = document.getElementsByClassName('completed');
  while (removeDone.length > 0) {
    removeDone[0].parentNode.removeChild(removeDone[0]);
  }
}

eraseDoneButton.addEventListener('click', removeListDone);
