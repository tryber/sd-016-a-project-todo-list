// Declaração de Variáveis e Constantes Globais.
const selectOl = document.querySelector('#lista-tarefas');
const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.querySelector('#texto-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
let selectLineList = null;

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
}

function generatorMain() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    selectLineList[index].addEventListener('click', paintColorList);
    selectLineList[index].addEventListener('dblclick', addClassCompleted);
    clearButton.addEventListener('click', removeTasksList);
  }
}

function createTasksList() {
  const createtasks = document.createElement('li');
  createtasks.innerHTML = selectInput.value;
  createtasks.classList.add('tasks-line');
  selectOl.appendChild(createtasks);
  selectInput.value = '';
  selectLineList = document.querySelectorAll('.tasks-line');
  generatorMain();
}

selectButton.addEventListener('click', createTasksList);
