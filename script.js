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

  addButton.addEventListener('click', () => {
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
  tasklist.addEventListener('click', (clicked) => {
    deleteTaskBkgrdColor();
    const event = clicked.target;
    if (event.className === 'task') {
      event.id = 'selected';
      const selected = document.querySelector('#selected');
      selected.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}
changeTaskBkgrdColor();

function completeTask() {
  tasklist.addEventListener('dblclick', (clicked) => {
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

function eraseAllBttn() {
  const eraseAll = document.querySelector('#apaga-tudo');
  eraseAll.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task');
    for (let index = tasks.length - 1; index >= 0; index -= 1) {
      tasks[index].remove();
    }
  });
}
eraseAllBttn();

function eraseFinishedBttn() {
  const eraseFinished = document.querySelector('#remover-finalizados');
  eraseFinished.addEventListener('click', () => {
    const tasksCompleted = document.getElementsByClassName('completed');
    for (let index = tasksCompleted.length - 1; index >= 0; index -= 1) {
      tasksCompleted[index].remove();
    }
  });
}
eraseFinishedBttn();

const actionButtons = document.querySelector('#action-buttons');

function taskSaveBttn() {
  const taskSaveButton = document.createElement('button');
  taskSaveButton.id = 'salvar-tarefas';
  taskSaveButton.innerText = 'Salvar lista';
  actionButtons.appendChild(taskSaveButton);
}
taskSaveBttn();

function taskSave() {
  const taskSaveButtonQ = document.querySelector('#salvar-tarefas');
  taskSaveButtonQ.addEventListener('click', () => {
    const currentList = document.querySelector('ol').innerHTML;
    localStorage.setItem('saveList', currentList);
  });
}
taskSave();

function taskSaveReload() {
  tasklist.innerHTML = localStorage.getItem('saveList');
}

window.onload = function onload() {
  taskSaveReload();
};

function moveSelectedTaskButton() {
  const moveUpButton = document.createElement('button');
  const moveDownButton = document.createElement('button');
  moveUpButton.id = 'mover-cima';
  moveUpButton.innerText = 'mover para cima';
  moveDownButton.id = 'mover-baixo';
  moveDownButton.innerText = 'mover para baixo';
  actionButtons.appendChild(moveUpButton);
  actionButtons.appendChild(moveDownButton);
}
moveSelectedTaskButton();

function moveSelectedTaskUp() {
  const moveUpBttn = document.querySelector('#mover-cima');
  moveUpBttn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task');
    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index].id === 'selected' && index !== 0) {
        tasklist.insertBefore(tasks[index], tasks[index - 1]);
      }
    }
  });
}
moveSelectedTaskUp();

function moveSelectedTaskDown() {
  const moveDownBttn = document.querySelector('#mover-baixo');
  moveDownBttn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task');
    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index].id === 'selected' && index !== tasks.length - 1) {
        tasklist.insertBefore(tasks[index], tasks[index + 2]);
      }
    }
  });
}
moveSelectedTaskDown();

/* insertBefore retirado do site http://devfuria.com.br/javascript/dom-insert-before/ */
/* https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore */

function removeSelectedButton() {
  const rmvSelectedBttn = document.createElement('button');
  rmvSelectedBttn.id = 'remover-selecionado';
  rmvSelectedBttn.innerText = 'remover item selecinado';
  actionButtons.appendChild(rmvSelectedBttn);
}
removeSelectedButton();

function removeSelected() {
  const rmvSelected = document.querySelector('#remover-selecionado');
  rmvSelected.addEventListener('click', () => {
    const taskSelected = document.getElementById('selected');
    taskSelected.remove();
  });
}
removeSelected();
