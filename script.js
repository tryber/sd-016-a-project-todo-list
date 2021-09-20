const inputText = document.querySelector('#texto-tarefa');
const buttonTask = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

buttonTask.addEventListener('click', criaTarefa);

function criaTarefa() {
  const listItem = document.createElement('li');
  listItem.innerHTML = inputText.value;
  list.appendChild(listItem);
  inputText.value = '';
}

list.addEventListener('click', setSelected);

function setSelected(event) {
  for (let index = 0; index < list.children.length; index += 1) {
    let currentColor = list.children[index];
    currentColor.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

list.addEventListener('dblclick', completeTask);

function completeTask(event) {
  event.target.classList.toggle('completed');
}

const btnClear = document.querySelector('#apaga-tudo');
btnClear.addEventListener('click', clearTasks);

function clearTasks() {
  for (let index = list.children.length - 1; index >= 0; index -= 1) {
    let currentItem = list.children[index];
    currentItem.remove();
  }
}

const btnCompleted = document.querySelector('#remover-finalizados');
btnCompleted.addEventListener('click', removeTaskCompleted);

function removeTaskCompleted() {
  for (let index = list.children.length - 1; index >= 0; index -= 1) {
    currentItem = list.children[index];
    if(currentItem.classList.contains('completed')) {
      list.removeChild(currentItem);
    }
  }
}
