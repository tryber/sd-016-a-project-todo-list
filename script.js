const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const listItems = document.querySelector('#lista-tarefas').children;
const clearAll = document.querySelector('#apaga-tudo');

function clear() {
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].remove();
    index -= 1;
  }
}

clearAll.addEventListener('click', clear);

function changeBgColor(event) {
  const elementSelected = event.target.style;
  let color = 'rgb(128,128,128)';
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].style.backgroundColor = 'white';
    if (elementSelected.backgroundColor === 'rgb(128,128,128)') {
      color = 'white';
      elementSelected.backgroundColor = 'color';
    }
  }
  elementSelected.backgroundColor = color;
}

function finishedTask(event) {
  const targetTask = event.target;
  if (targetTask.className === 'completed') {
    targetTask.className = '';
    targetTask.style.textDecoration = 'none';
    return;
  }
  targetTask.style.textDecoration = 'line-through';
  targetTask.style.backgroundColor = 'white';
  targetTask.className = 'completed';
}

function addTask() {
  const task = document.querySelector('#texto-tarefa').value;
  const newElement = document.createElement('li');
  newElement.innerHTML = task;
  document.querySelector('#texto-tarefa').value = '';
  taskList.appendChild(newElement);
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', changeBgColor);
    listItems[index].addEventListener('dblclick', finishedTask);
  }
}

button.addEventListener('click', addTask);
