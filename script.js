const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const removeButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');

function listElementHilight(event) {
  const hilightElement = document.querySelector('.hilight');
  if (hilightElement !== null) {
    hilightElement.classList.remove('hilight');
  }
  if (event.target.classList.contains('hilight') === false) {
    event.target.classList.add('hilight');
  } else {
    event.target.classList.remove('hilight');
  }
}

function riskElement(event) {
  if (event.target.classList.contains('completed') === false) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function createListElement() {
  const input = document.querySelector('#texto-tarefa');
  const listElement = document.createElement('li');
  listElement.addEventListener('click', listElementHilight);
  listElement.addEventListener('dblclick', riskElement);
  listElement.innerText = input.value;
  list.appendChild(listElement);
  input.value = '';
}

button.addEventListener('click', createListElement);

function clearAll() {
  const listElement = document.querySelectorAll('li');
  for (let index = 0; index < listElement.length; index += 1) {
    list.removeChild(listElement[index]);
  }
}

clearButton.addEventListener('click', clearAll);

function removeFinished() {
  const listElement = document.querySelectorAll('.completed');
  for (let index = 0; index < listElement.length; index += 1) {
    list.removeChild(listElement[index]);
  }
}

removeButton.addEventListener('click', removeFinished);

function saveListLocalSorage() {
  const listElement = document.querySelectorAll('li');
  const hilightElement = document.querySelector('.hilight');
  hilightElement.classList.remove('hilight');
  const oldList = [];
  const classElement = [];

  for (let i = 0; i < listElement.length; i += 1) {
    const textItems = listElement[i].innerText;

    console.log(listElement[i].className);
    oldList.push(textItems);
    classElement.push(listElement[i].className);
  }
  hilightElement.classList.add('hilight');
  localStorage.setItem('listItems', JSON.stringify(oldList));
  localStorage.setItem('classList', JSON.stringify(classElement));
}
saveButton.addEventListener('click', saveListLocalSorage);

function initialPageLoading() {
  if (localStorage.getItem('listItems') !== null) {
    const itemList = JSON.parse(localStorage.getItem('listItems'));
    const classList = JSON.parse(localStorage.getItem('classList'));
    const listLength = itemList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.className = classList[index];
      listElement.innerText = itemList[index];
      listElement.addEventListener('click', listElementHilight);
      listElement.addEventListener('dblclick', riskElement);
      list.appendChild(listElement);
    }
  }
}

initialPageLoading();

saveButton.addEventListener('click', saveListLocalSorage);

function removeSelected() {
  const listElement = document.querySelectorAll('.hilight');
  for (let index = 0; index < listElement.length; index += 1) {
    list.removeChild(listElement[index]);
  }
}

buttonRemoveSelected.addEventListener('click', removeSelected);

function checkHilight() {
  let result = false;
  if (document.querySelectorAll('.hilight').length > 0) {
    result = true;
  }
  return result;
}

function changeUpPosition() {
  if (checkHilight()) {
    const upingElement = document.querySelectorAll('.hilight')[0];
    const downningElement = document.querySelectorAll('.hilight')[0].previousElementSibling;
    if (downningElement !== null) {
      list.insertBefore(upingElement, downningElement);
    }
  }
}

buttonUp.addEventListener('click', changeUpPosition);

function changeDownPosition() {
  if (checkHilight()) {
    const upingElement = document.querySelectorAll('.hilight')[0].nextElementSibling;
    const downningElement = document.querySelectorAll('.hilight')[0];
    const lastElement = list.lastElementChild;

    if (downningElement !== lastElement) {
      list.insertBefore(downningElement, upingElement.nextElementSibling);
    }
  }
}

buttonDown.addEventListener('click', changeDownPosition);
