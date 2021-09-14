window.onload = function loadTasks() {
  if (localStorage.getItem('Tasks') !== null) {
    const task = JSON.parse(localStorage.getItem('Tasks'));
    for (let i = 0; i < task.length; i += 1) {
      const taskItem = document.createElement('li');
      getTaskOl.appendChild(taskItem);
      taskItem.outerHTML = task[i];
    }
    addEventsToTasks();
  }
};

const getButtonClick = document.getElementById('criar-tarefa');
const getDeleteButton = document.getElementById('apaga-tudo');
const getDoneItems = document.getElementById('remover-finalizados');
const moverCimaButton = document.getElementById('mover-cima');
const moverBaixoButton = document.getElementById('mover-baixo');
const removeTaskItem = document.getElementById('remover-selecionado');
const saveMyItems = document.getElementById('salvar-tarefas');
const getTaskOl = document.getElementById('lista-tarefas');

function createTask() {
  const getInputValue = document.getElementById('texto-tarefa');
  const digitedValue = getInputValue.value;
  const getOl = document.getElementById('lista-tarefas');
  getInputValue.value = '';
  const createLi = document.createElement('li');
  createLi.setAttribute('class', 'item-lista');
  createLi.innerText = digitedValue;
  getOl.appendChild(createLi);
  createLi.addEventListener('click', highlightElement);
  createLi.addEventListener('dblclick', lineThrough);
}

getButtonClick.addEventListener('click', createTask);

function highlightElement(element) {
  const clicked = element;
  const items = document.querySelectorAll('.item-lista');
  for (let index = 0; index < items.length; index += 1) {
    items[index].style.backgroundColor = '#FFF';
    items[index].setAttribute('id', '');
  }
  clicked.target.id = 'selected';
  clicked.target.style.backgroundColor = 'rgb(128,128,128)';
}

function lineThrough(element) {
  const checked = element;
  if (checked.target.className.includes('completed')) {
    checked.target.className = 'item-lista';
  } else {
    checked.target.className += ' completed';
  }
}

function addEventsToTasks() {
  const tasks = document.querySelectorAll('.item-lista');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', highlightElement);
    tasks[index].addEventListener('dblclick', lineThrough);
  }
}

function deleteList() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.innerHTML = '';
}

function deleteDone() {
  let taskList = document.querySelectorAll('.completed');
  taskList.forEach((e) => e.remove());
}

function saveItems() {
  if (document.querySelectorAll('.item-lista').length !== 0) {
    const tasks = [];
    const saved = document.querySelectorAll('.item-lista');
    for (let index = 0; index < saved.length; index += 1) {
      tasks.push(saved[index].outerHTML);
    }
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }
}

function moveUp() {
  let itemMover = document.getElementById('selected');
  if (document.querySelectorAll('#selected').length !== 0) {
    if (itemMover.previousElementSibling)
      itemMover.parentNode.insertBefore(
        itemMover,
        itemMover.previousElementSibling
      );
  }
}

function moveDown() {
  let itemMover = document.getElementById('selected');
  if (document.querySelectorAll('#selected').length !== 0) {
    if (itemMover.nextElementSibling)
      itemMover.parentNode.insertBefore(
        itemMover.nextElementSibling,
        itemMover
      );
  }
}

function removeTask() {
  let taskToRemove = document.getElementById('selected');
  taskToRemove.remove();
}

getDeleteButton.addEventListener('click', deleteList);
getDoneItems.addEventListener('click', deleteDone);
saveMyItems.addEventListener('click', saveItems);
moverCimaButton.addEventListener('click', moveUp);
moverBaixoButton.addEventListener('click', moveDown);
removeTaskItem.addEventListener('click', removeTask);
