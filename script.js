const getButtonAdd = document.querySelector('#criar-tarefa');
const getList = document.querySelector('#lista-tarefas');
const getInput = document.querySelector('#texto-tarefa');

// Desafio 5
getButtonAdd.addEventListener('click', function () { 
  let createTask = document.createElement('li');
  getList.appendChild(createTask);
  createTask.style.backgroundColor = 'white';
  createTask.className = 'task'
  createTask.innerHTML = getInput.value;
  getInput.value = '';
});

// Desafio 7
function selectTask(event) {
  let color = 'white';
  const selector = event;
  if (selector.target.style.backgroundColor = color) {
    selector.target.style.backgroundColor = 'rgb(128, 128, 128)';
  } else if (selector.target.style.backgroundColor = 'rgb(128, 128, 128)') {
    selector.target.style.backgroundColor = color;
  }
}

// Desafio 9 https://www.w3schools.com/cssref/pr_text_text-decoration.asp
const taskList = document.querySelectorAll('.task');
function strikeTask(event) {
  const selector = event;
  selector.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  selector.target.className += ' completed';
}

// Desafio 10 https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
const getButtonClearAll = document.querySelector('#apaga-tudo');
getButtonClearAll.addEventListener('click', function () {
  while (getList.firstChild) {
    getList.removeChild(getList.firstChild);
  }
});

// Desafio 11 https://www.codegrepper.com/code-examples/javascript/remove+element+with+class+name+javascript
const getButtonClearSelected = document.querySelector('#remover-finalizados');
getButtonClearSelected.addEventListener('click', function() {
  const completedElements = document.querySelectorAll('.completed');
  while (completedElements.length > 0) {
    completedElements[0].parentNode.removeChild(completedElements[0]);
  }
});

// Função que chama os eventos
function getEvents() {
  getList.addEventListener('click', selectTask);

  getList.addEventListener('dblclick', strikeTask);
}
getEvents();
