const getButtonAdd = document.querySelector('#criar-tarefa');
const getList = document.querySelector('#lista-tarefas');
const getInput = document.querySelector('#texto-tarefa');

// Desafio 5
getButtonAdd.addEventListener('click', function () {
  const createTask = document.createElement('li');
  getList.appendChild(createTask);
  createTask.style.backgroundColor = 'white';
  createTask.className = 'task';
  createTask.innerHTML = getInput.value;
  getInput.value = '';
});

// Desafio 7
function selectTask(event) {
  const taskList = document.querySelectorAll('li');
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].style.backgroundColor = 'white';
  }
  const selector = event;
  selector.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Desafio 9 https://www.w3schools.com/cssref/pr_text_text-decoration.asp
function strikeTask(event) {
  const selector = event.target;
  if (selector.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
    selector.classList.remove('completed');
    selector.style.textDecoration = '';
  } else {
    selector.classList.add('completed');
    selector.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
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
getButtonClearSelected.addEventListener('click', function () {
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
