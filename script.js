// Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão,
// um novo item deverá ser criado ao final da lista
// e o texto do input deve ser limpo
const buttonCreateTask = document.getElementById('criar-tarefa');
const inputNewTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createNewTask() {
  let taskText = inputNewTask.value;
  let elementFather = taskList;
  let newTask = document.createElement('li');
  newTask.innerText = taskText;
  elementFather.appendChild(newTask);
  inputNewTask.value = '';
  inputNewTask.focus();
}
buttonCreateTask.addEventListener('click', createNewTask);

// Clicar em um item da lista deve alterar
// a cor de fundo do item para cinza rgb(128,128,128)
function clearBackgroundColor() {
  let taskListItens = taskList.children;
  for (const task of taskListItens) {
    task.style.backgroundColor = 'white';
  }
}

function clearSelectedId() {
  let taskListItens = taskList.children;
  for (const task of taskListItens) {
    task.removeAttribute('id');
  }
}

function changeBackgroundColor(element) {
  clearBackgroundColor();
  clearSelectedId();
  element.target.style.backgroundColor = 'rgb(128,128,128)';
  element.target.setAttribute('id', 'selected');
}
taskList.addEventListener('click', changeBackgroundColor);

// Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo.
// Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function toggleCompleted(element) {
  element.target.classList.toggle('completed');
}
taskList.addEventListener('dblclick', toggleCompleted);

// Adicione um botão com id="apaga-tudo"
// que quando clicado deve apagar todos os itens da lista
const buttonClearAll = document.getElementById('apaga-tudo');
function clearAll() {
  let loopTimes = taskList.children.length;
  for (let index = 0; index < loopTimes; index++) {
    taskList.removeChild(taskList.lastElementChild);
  }
}
buttonClearAll.addEventListener('click', clearAll);

// Adicione um botão com id="remover-finalizados"
// que quando clicado remove somente os elementos finalizados da sua lista
const buttonClearDoneTasks = document.getElementById('remover-finalizados');
function clearDoneTasks() {
  let doneTasks = document.querySelectorAll('.completed');
  for (const task of doneTasks) {
    task.remove();
  }
}
buttonClearDoneTasks.addEventListener('click', clearDoneTasks);

// Adicione um botão com id="remover-selecionado" que,
// quando clicado, remove o item selecionado
const buttonRemoveSelectedTask = document.getElementById('remover-selecionado');
function removeSelected() {
  let selectedTask = document.getElementById('selected');
  if (selectedTask) {
    selectedTask.remove();
  }
}
buttonRemoveSelectedTask.addEventListener('click', removeSelected);

// Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo",
// que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

// Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista.
// Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.
const buttonSave = document.getElementById('salvar-tarefas');
const storageList = localStorage.getItem('savedList');

function saveList() {
  let listSaved = taskList.innerHTML;
  localStorage.setItem('savedList', listSaved);
}
buttonSave.addEventListener('click', saveList);

function recoverList() {
  let storageSavedList = localStorage.getItem('savedList');
  taskList.innerHTML = storageSavedList;
}
window.addEventListener('load', recoverList);

// Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo",
// que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
function moveUp() {
  if (document.getElementById('selected')) {
    let selectedTask = document.getElementById('selected');
    sessionStorage.setItem('selected', selectedTask.outerHTML);
    var previousTask;

    if (selectedTask.previousSibling) {
      previousTask = document.getElementById('selected').previousSibling;
      sessionStorage.setItem('previous', previousTask.outerHTML);

      selectedTask.outerHTML = sessionStorage.getItem('previous');
      previousTask.outerHTML = sessionStorage.getItem('selected');
    }
  }
}

const buttonUp = document.getElementById('mover-cima');
buttonUp.addEventListener('click', moveUp);

function moveDown() {
  if (document.getElementById('selected')) {
    let selectedTask = document.getElementById('selected');
    sessionStorage.setItem('selected', selectedTask.outerHTML);
    var nextTask;

    if (selectedTask.nextSibling) {
      nextTask = document.getElementById('selected').nextSibling;
      sessionStorage.setItem('next', nextTask.outerHTML);

      selectedTask.outerHTML = sessionStorage.getItem('next');
      nextTask.outerHTML = sessionStorage.getItem('selected');
    }
  }
}

const buttonDown = document.getElementById('mover-baixo');
buttonDown.addEventListener('click', moveDown);
