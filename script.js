// Declaração de Variáveis e Constantes Globais.
const selectOl = document.querySelector('#lista-tarefas');
const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.querySelector('#texto-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
const buttonRemoveCompleted = document.querySelector('#remover-finalizados');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');
const buttonMoveUp = document.querySelector('#mover-cima');
const buttonMoveDown = document.querySelector('#mover-baixo');
const buttonSaveTask = document.querySelector('#salvar-tarefas');
const backgroundColor = 'rgb(128, 128, 128)';
let selectLineList = null;

// Função Seleciona todas as Li criadas na tarefas.
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
    events.style.backgroundColor = backgroundColor;
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

// Função para remover as tarefas selecionadas.
function removeTaskSelected() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    if (selectLineList[index].style.backgroundColor === backgroundColor) {
      selectOl.removeChild(selectLineList[index]);
    }
  }
  selectLineList = selectorTasks();
}

// Função testa condição do previousSibling.
function testConditionPrevious(index) {
  const sibling = selectLineList[index].previousElementSibling;
  if (selectLineList[index].previousElementSibling) {
    return selectOl.insertBefore(selectLineList[index], sibling);
  }
}

// Função move Item para cima.
function moveItemUp() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    if (selectLineList[index].style.backgroundColor === backgroundColor) {
      testConditionPrevious(index);
    }
  }
}

// Função testa condição do nestSibling.
function testConditionNext(index) {
  const sibling = selectLineList[index].nextElementSibling;
  if (selectLineList[index].nextElementSibling) {
    return selectOl.insertBefore(sibling, selectLineList[index]);
  }
}

// Função move item para baixo.
function moveItemDown() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    if (selectLineList[index].style.backgroundColor === backgroundColor) {
      testConditionNext(index);
    }
  }
}

// Função para salvar o conteudo HTML da tag OL.
function saveTasksItens() {
  // Função criada com a ajuda do @Vitor Faria e Rod
  for (let index = 0; index < selectLineList.length; index += 1) {
    const listItens = {
      text: selectLineList[index].innerText,
      class: selectLineList[index].className,
      style: selectLineList[index].style.backgroundColor,
    };
    localStorage.setItem(`task${index}`, JSON.stringify(listItens));
    localStorage.setItem('countTask', selectLineList.length);
  }
}

// Função Principal, chama todos os escutadores de eventos.
function generatorMain() {
  for (let index = 0; index < selectLineList.length; index += 1) {
    selectLineList[index].addEventListener('click', paintColorList);
    selectLineList[index].addEventListener('dblclick', addClassCompleted);
    clearButton.addEventListener('click', removeTasksList);
    buttonRemoveCompleted.addEventListener('click', removeTaskCompleted);
    buttonRemoveSelected.addEventListener('click', removeTaskSelected);
    buttonMoveUp.addEventListener('click', moveItemUp);
    buttonMoveDown.addEventListener('click', moveItemDown);
    buttonSaveTask.addEventListener('click', saveTasksItens);
  }
}

// Função para criar e adcionar as tarefas.
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

// Função onload, retorna o valor do localStorage e recria o conteudo das listas.
window.onload = () => {
  // Função criada com a ajuda do @Vitor Faria e Rod
  const countStorage = localStorage.getItem('countTask') || -1;
  for (let index = 0; index < countStorage; index += 1) {
    const returnLi = JSON.parse(localStorage.getItem(`task${index}`));
    console.log(returnLi);
    const createtasks = document.createElement('li');
    createtasks.innerHTML = returnLi.text;
    createtasks.className = returnLi.class;
    createtasks.style.backgroundColor = returnLi.style;
    selectOl.appendChild(createtasks);
    selectInput.value = '';
  }
  selectLineList = selectorTasks();
  generatorMain();
};
