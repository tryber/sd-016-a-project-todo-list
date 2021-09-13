const header = document.querySelector('header');
const main = document.querySelector('main');

function addTitle() {
  const h1Header = document.createElement('h1');
  h1Header.className = 'title';
  h1Header.innerText = 'Minha Lista de Tarefas';
  header.appendChild(h1Header);
}
addTitle();

function addParagraph() {
  const pHeader = document.createElement('p');
  pHeader.id = 'funcionamento';
  pHeader.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(pHeader);
}
addParagraph();

function addInputField() {
  const inputField = document.createElement('input');
  const section = document.createElement('section');
  inputField.id = 'texto-tarefa';
  section.id = 'add-task';
  main.appendChild(section);
  section.appendChild(inputField);
}
addInputField();

function listSection() {
  const section = document.createElement('section');
  section.id = 'task-list';
  main.appendChild(section);
}
listSection();

function addOrderedList() {
  const section = document.querySelector('#task-list');
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  section.appendChild(orderedList);
}
addOrderedList();

function addTaskButton() {
  const addButton = document.createElement('button');
  addButton.id = 'criar-tarefa';
  addButton.innerText = 'Adicionar';
  const addtask = document.querySelector('#add-task');
  addtask.appendChild(addButton);
}
addTaskButton();

const tasklist = document.querySelector('#lista-tarefas');

function addNewTask() {
  const addButton = document.querySelector('#criar-tarefa');
  const inputField = document.querySelector('#texto-tarefa');

  addButton.addEventListener('click', function () {
    if (inputField.value.length > 0) {
      const addLi = document.createElement('li');
      addLi.innerText = inputField.value;
      addLi.className = 'task';
      tasklist.appendChild(addLi);
      inputField.value = '';
    } else {
      alert('erro');
    }
  });
}
addNewTask();

function deleteTaskBkgrdColor() {
  const tasks = document.querySelectorAll('.task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].id = '';
    tasks[index].style.backgroundColor = '';
  }
}

function changeTaskBkgrdColor() {
  tasklist.addEventListener('click', function (clicked) {
    deleteTaskBkgrdColor();
    const event = clicked.target;
    event.id = 'selected';
    const selected = document.querySelector('#selected');
    selected.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
changeTaskBkgrdColor();

function completeTask() {
  tasklist.addEventListener('dblclick', function (clicked) {
    const event = clicked.target;
    if (event.className !== 'task completed') {
      event.className = 'task completed';
    } else {
      event.className = 'task';
    }
  });
}
completeTask();

function addActionButtons() {
  const section = document.createElement('section');
  const eraseAllButton = document.createElement('button');
  const eraseFinishedButton = document.createElement('button');
  section.id = 'action-buttons';
  eraseAllButton.id = 'apaga-tudo';
  eraseAllButton.innerText = 'remover lista';
  eraseFinishedButton.id = 'remover-finalizados';
  eraseFinishedButton.innerText = 'remover finalizados';
  main.appendChild(section);
  section.appendChild(eraseAllButton);
  section.appendChild(eraseFinishedButton);
}
addActionButtons();

function eraseAllButton() {
  const eraseAll = document.querySelector('#apaga-tudo');
  eraseAll.addEventListener('click', function () {
    const tasks = document.getElementsByClassName('task');
    for (let index = tasks.length - 1; index >= 0; index -= 1) {
      tasks[index].remove();
    }
  });
}
eraseAllButton();

function eraseFinishedButton() {
  const eraseFinished = document.querySelector('#remover-finalizados');
  eraseFinished.addEventListener('click', function () {
    const tasksCompleted = document.getElementsByClassName('completed');
    for (let index = tasksCompleted.length - 1; index >= 0; index -= 1) {
      tasksCompleted[index].remove();
    }
  });
}
eraseFinishedButton();

const actionButtons = document.querySelector('#action-buttons');

function taskSaveButton() {
  const taskSaveButton = document.createElement('button');
  taskSaveButton.id = 'salvar-tarefas';
  taskSaveButton.innerText = 'Salvar lista';
  actionButtons.appendChild(taskSaveButton);
}
taskSaveButton();

function taskSave() {
  const taskSaveBttn = document.querySelector('#salvar-tarefas');
  taskSaveBttn.addEventListener('click', function () {
    const currentList = document.querySelector('ol').innerHTML;
    localStorage.setItem('saveList', currentList);
  })
}
taskSave();

function taskSaveReload() {
  tasklist.innerHTML = localStorage.getItem('saveList');
}

window.onload = function onload() {
  taskSaveReload();
};