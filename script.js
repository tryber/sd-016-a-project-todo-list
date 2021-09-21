const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const removeButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');

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

  console.log(listElement);
  const oldList = [];
  const classElement = [];
  for (let i = 0; i < listElement.length; i += 1) {
    const textItems = listElement[i].innerText;

    console.log(listElement[i].className);
    oldList.push(textItems);
    classElement.push(listElement[i].className);
  }

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
