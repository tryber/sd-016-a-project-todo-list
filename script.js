let input = document.getElementById("texto-tarefa");
const createButton = document.getElementById("criar-tarefa");
const addList = document.getElementById("lista-tarefas");

createButton.addEventListener('click', createTask);

function createTask() {
  const createListElement = document.createElement('li');
  createListElement.innerText = input.value;
  addList.appendChild(createListElement);
  input.value = "";
  clickedItemSelector();
}

function clickedItemSelector() {
  const clickItemSelector = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < clickItemSelector.length; i += 1) {
    clickItemSelector[i].addEventListener('click', changeBackgroundColor);
    clickItemSelector[i].addEventListener('dblclick', completeTask);
  }
}

function changeBackgroundColor(e) {
const listItem = addList.children;
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].className = 'default-background';
    e.target.className = 'selected-item-background';
  }
}

function completeTask(e) {
  const completedTask = e.target;
  if (completedTask.style.textDecoration === '') {
    completedTask.classList.add('completed');
    completedTask.style.textDecoration = 'line-through';
  } else {
    completedTask.classList.remove('completed');
    completedTask.style.textDecoration = '';
  }
}
