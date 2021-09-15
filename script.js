const inputList = document.querySelector('#texto-tarefa');
const buttonInput = document.querySelector('#criar-tarefa');
const button = document.querySelector('#apaga-tudo');
const save = document.querySelector('#salvar-tarefas');
const itemsList = document.querySelectorAll('li');
const list = document.querySelector('#lista-tarefas');
let text = null;

function getSavedItems() {
  let savedItems = Object.values(localStorage);
  for (index = 0; index < savedItems.length; index += 1) {
    let assignment = document.createElement('li');
    assignment.className = 'tarefas'
    assignment.innerText = savedItems[index];
    list.appendChild(assignment);
  }
}
getSavedItems();

function getText() {  
  inputList.addEventListener('keyup', function (e) {
    text = e.target.value;
    return text;
  });
}
getText();

function insertList() {
  buttonInput.addEventListener('click', function () {
    let assignment = document.createElement('li');
    assignment.className = 'tarefas';
    assignment.innerText = text;
    if (assignment.innerText === '') {
      alert('Desculpe, não pode acrescentar um item vazio!');
      return
    }
    list.appendChild(assignment);
    inputList.value = '';
    assignment.removeAttribute('innerText');
    text = '';
    selectItemsList();
    return text;
  });
}
insertList();

function selectItemsList() {
  let itemsList = document.querySelectorAll('li');
  itemsList.forEach( ev => ev.addEventListener('click', function () {
    for (index = 0; index < itemsList.length; index += 1) {
      itemsList[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }));
}

function cleanList() {
  button.addEventListener('click', function () {
    const items = document.querySelectorAll('.tarefas');
    items.forEach(ev => ev.remove());
  })
    return
}
cleanList();

function saveItems () {
  save.addEventListener('click', function () {
    const items = document.querySelectorAll('.tarefas');
    for (index = 0; index < items.length; index += 1) {
      localStorage.setItem(index, items[index].innerText);
    }
  })
}
saveItems();

