function createTarefa() {
  const inputValue = document.querySelector('#texto-tarefa');
  const tarefaInput = inputValue.value;
  const unorderedList = document.querySelector('#lista-tarefas');
  const tarefaLi = document.createElement('li');
  tarefaLi.innerHTML = tarefaInput;
  unorderedList.appendChild(tarefaLi);
  inputValue.value = '';
  eventColorLi();
  eventCompletedTarefa();
}

function eventCreateTarefa() {
  const createButton = document.getElementById('criar-tarefa');
  createButton.addEventListener('click', createTarefa);
}
eventCreateTarefa();

function colorLi(event) {
  const li = document.querySelector('#lista-tarefas').children;
  for (let index = 0; index < li.length; index += 1) {
    li[index].style.backgroundColor = 'rgb(255, 255, 255)';
    li[index].id = '';
  }
  event.target.id = 'selected';
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function eventColorLi() {
  const li = document.querySelector('#lista-tarefas').children;
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', colorLi);
  }
}

function completedTarefa(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function eventCompletedTarefa() {
  const li = document.querySelector('#lista-tarefas').children;
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('dblclick', completedTarefa);
  }
}

function removeAllTarefas() {
  const tarefaList = document.querySelector('#lista-tarefas');
  while (tarefaList.firstChild) {
    tarefaList.removeChild(tarefaList.firstChild);
  }
}

function removeAllButton() {
  const removeButton = document.querySelector('#apaga-tudo');
  removeButton.addEventListener('click', removeAllTarefas);
}
removeAllButton();

function removerCompleted() {
  const tarefaList = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefaList.length; index += 1) {
    tarefaList[index].parentElement.removeChild(tarefaList[index]);
  }
}

function removeCompletedButton() {
  const removeCompleted = document.querySelector('#remover-finalizados');
  removeCompleted.addEventListener('click', removerCompleted);
}
removeCompletedButton();

function moveToPrevious() {
  if (document.querySelectorAll('#selected').length !== 0) {
    const selectedElement = document.querySelector('#selected').outerHTML;
    if (selectedElement !== document.querySelectorAll('li').outerHTML) {
      const notSelectedLi = document.querySelector('#selected').previousSibling.outerHTML;
      document.querySelector('#selected').previousSibling.outerHTML = selectedElement;
      document.querySelector('#selected').nextSibling.outerHTML = notSelectedLi;
    }
    eventColorLi();
    eventCompletedTarefa();
  }
}

function eventMoveToPrevious() {
  const moveUpButton = document.querySelector('#mover-cima');
  moveUpButton.addEventListener('click', moveToPrevious);
}
eventMoveToPrevious();

function moveToNext() {
  if (document.querySelectorAll('#selected').length !== 0) {
    const selectedElement = document.querySelector('#selected').outerHTML;
    const liList = document.querySelectorAll('li');
    if (
      selectedElement !== document.querySelectorAll('li')[liList.length - 1].outerHTML
    ) {
      const notSelectedLi = document.querySelector('#selected').nextSibling.outerHTML;
      document.querySelector('#selected').nextSibling.outerHTML = selectedElement;
      document.querySelector('#selected').outerHTML = notSelectedLi;
    }
    eventColorLi();
    eventCompletedTarefa();
  }
}

function eventMoveToNext() {
  const moveDownButton = document.querySelector('#mover-baixo');
  moveDownButton.addEventListener('click', moveToNext);
}
eventMoveToNext();

function removeSelected() {
  const selectedElement = document.querySelector('#selected');
  selectedElement.parentElement.removeChild(selectedElement);
}

function eventRemoveSelected() {
  const removeSelectedButton = document.querySelector('#remover-selecionado');
  removeSelectedButton.addEventListener('click', removeSelected);
}
eventRemoveSelected();

function saveTask() {
  const olList = document.querySelector('#lista-tarefas').children;
  if (olList.length !== 0) {
    const tarefasLi = document.querySelectorAll('li');
    const tarefasArray = [];
    for (let index = 0; index < tarefasLi.length; index += 1) {
      tarefasArray.push(tarefasLi[index].outerHTML);
    }
    localStorage.setItem('tarefas', JSON.stringify(tarefasArray));
  }
}

function eventSaveTask() {
  const saveButton = document.querySelector('#salvar-tarefas');
  saveButton.addEventListener('click', saveTask);
}
eventSaveTask();

function carregarListaSalva() {
  if (localStorage.getItem('tarefas') !== null) {
    const tarefasStored = JSON.parse(localStorage.getItem('tarefas'));
    for (let index = 0; index < tarefasStored.length; index += 1) {
      const tarefasLi = document.createElement('li');
      document.querySelector('#lista-tarefas').appendChild(tarefasLi);

      tarefasLi.outerHTML = tarefasStored[index];
    }
  }
  eventColorLi();
  eventCompletedTarefa();
}

window.onload = function load() {
  carregarListaSalva();
};
