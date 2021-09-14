// Declaração de Variáveis e Constantes Globais.
const selectOl = document.querySelector('#lista-tarefas');
const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.querySelector('#texto-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
const buttonRemoveCompleted = document.querySelector('#remover-finalizados');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');
// const saveButton = document.querySelector('#salvar-tarefas');
let selectLineList = null;

function selectorTasks() {
  return document.querySelectorAll('.tasks-line');
}

// Função remove cor de fundo das linhas.
function removeColorLine() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    selectLineList[index].style.backgroundColor = '';
  }
}

// Função que preenche o fundo da linha selecionada.
function paintColorList(event) {
  const events = event.target;
  for (let index = 0; index < selectLineList.length; index += 1) {
    removeColorLine();
    events.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

// Função que passa um risco na Tarefa quando clicado duas vezes.
function addClassCompleted(event) {
  if (!event.target.classList.contains('completed')) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

// Função Apaga todas as tarefas criadas
function removeTasksList() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    selectOl.removeChild(selectLineList[index]);
  }
  selectLineList = selectorTasks();
}

// Função para remover as Tarefas marcadas como completas.
function removeTaskCompleted() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    if (selectLineList[index].classList.contains('completed')) {
      selectOl.removeChild(selectLineList[index]);
    }
  }
  selectLineList = selectorTasks();
}

function removeTaskSelected() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    if (selectLineList[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      selectOl.removeChild(selectLineList[index]);
    }
  }
  selectLineList = selectorTasks();
}

// Função para salvar a lista de tarefas no LocalStorage.
// function saveTaskList() {
//   const savesTask = [];
//   for (let index = 0; index < selectLineList.length; index += 1) {
//     savesTask.push(selectLineList[index].innerHTML);
//   }
//   localStorage.setItem('savesTask', JSON.stringify(savesTask));
//   storedSaves = JSON.parse(localStorage.getItem('savesTask'));
// }

// Função Principal, chama todos os escutadores de eventos.
function generatorMain() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    selectLineList[index].addEventListener('click', paintColorList);
    selectLineList[index].addEventListener('dblclick', addClassCompleted);
    clearButton.addEventListener('click', removeTasksList);
    buttonRemoveCompleted.addEventListener('click', removeTaskCompleted);
    buttonRemoveSelected.addEventListener('click', removeTaskSelected);
    // saveButton.addEventListener('click', saveTaskList);
  }
}

function createTasksList() {
  const createtasks = document.createElement('li');
  createtasks.innerHTML = selectInput.value;
  createtasks.classList.add('tasks-line');
  selectOl.appendChild(createtasks);
  selectInput.value = '';
  selectLineList = selectorTasks();
  generatorMain();
}

selectButton.addEventListener('click', createTasksList);

// window.onload = () => {
//   if (storedSaves.length !== 0) {
//     const createtasks = document.createElement('li');
//     for (let index = 0; index < storedSaves.length; index += 1) {
//       createtasks.innerHTML = storedSaves[index];
//       createtasks.classList.add('tasks-line');
//       selectOl.appendChild(createtasks);
//     }
//   }
//   selectInput.value = '';
//   selectLineList = document.querySelectorAll('.tasks-line');
// };
