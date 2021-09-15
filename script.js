const inputField = document.querySelector('#texto-tarefa');
const createTask = document.querySelector('#criar-tarefa');
const mainBackground = '--main-background';

function addItemToList() {
  if (inputField.value === '') {
    alert('Empty input');
    return 1;
  }
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.innerText = inputField.value;
  document.querySelector('#lista-tarefas').appendChild(taskItem);
  inputField.value = '';
}

createTask.addEventListener('click', addItemToList);

document.addEventListener('click', (event) => {
  const list = document.querySelectorAll('.task-item');
  if (event.target.classList.contains('task-item')) {
    const color = 128;
    const white = 255;
    const line = event.target;
    for (let i = 0; i < list.length; i += 1) {
      list[i].style.setProperty(mainBackground, `rgb(${white}, ${white}, ${white})`);
    }
    line.style.setProperty(mainBackground, `rgb(${color}, ${color}, ${color})`);
    localStorage.setItem('bgColor', line.innerText);
  }
});

document.addEventListener('dblclick', (event) => {
  const deco = event.target;
  if (deco.classList.contains('task-item')) {
    if (!deco.classList.contains('completed')) {
      deco.classList.add('completed');
    } else if (deco.classList.contains('completed')) {
      deco.classList.remove('completed');
    }
  }
});

document.addEventListener('click', (event) => {
  const list = document.querySelectorAll('.task-item');
  if (event.target.id === 'apaga-tudo') {
    localStorage.clear();
    for (let i = 0; i < list.length; i += 1) {
      list[i].remove();
    }
  }
});

document.addEventListener('click', (event) => {
  if (event.target.id === 'remover-finalizados') {
    const task = document.querySelectorAll('.completed');
    for (let i = 0; i < task.length; i += 1) {
      task[i].remove();
    }
  }
});

document.addEventListener('click', (event) => {
  const list = document.querySelectorAll('.task-item');
  if (event.target.id === 'salvar-tarefas') {
    let index = 0;
    for (let i = 0; i < list.length; i += 1) {
      localStorage.setItem(`taskClass${i}`, list[i].className);
      localStorage.setItem(`taskItem${i}`, list[i].innerText);
      index = i;
    }
    localStorage.setItem('index', index);
  }
});

function setsBgColor() {
  const list = document.querySelectorAll('.task-item');
  const item = localStorage.getItem('bgColor');
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].innerText === item) {
      list[i].style.setProperty(mainBackground, `rgb(${128}, ${128}, ${128})`);
    }
  }
}

function reloadsClass() {
  const list = document.querySelectorAll('.task-item');
  const index = localStorage.getItem('index');
  for (let i = 0; i <= index; i += 1) {
    const classItem = localStorage.getItem(`taskClass${i}`);
    list[i].className = classItem;
  }
  setsBgColor();
}

function reloadsList() {
  if (localStorage.getItem(`taskClass${0}`) === null) {
    return 2;
  }
  const index = localStorage.getItem('index');
  for (let i = 0; i <= index; i += 1) {
    const item = localStorage.getItem(`taskItem${i}`);
    inputField.value = item;
    addItemToList();
  }
  reloadsClass();
}

reloadsList();
