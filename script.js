const getButtonClick = document.getElementById('criar-tarefa');

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

addEventsToTasks();
