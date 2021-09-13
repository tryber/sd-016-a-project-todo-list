const header = document.querySelector('header');
const main = document.querySelector('main');


function addTitle() {
  const h1Header = document.createElement('h1');
  h1Header.className = 'title';
  h1Header.innerText = 'Minha Lista de Tarefas';
  header.appendChild(h1Header);
}
addTitle();

function addParagraph() {
  const pHeader = document.createElement('p');
  pHeader.id = 'funcionamento';
  pHeader.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(pHeader);
}
addParagraph();

function addInputField() {
  const inputField = document.createElement('input');
  const section = document.createElement('section');
  inputField.id = 'texto-tarefa';
  section.id = 'add-task';
  main.appendChild(section);
  section.appendChild(inputField);
}
addInputField();

function addOrderedList() {
  const orderedList = document.createElement('ol');
  const section = document.createElement('section');
  orderedList.id = 'lista-tarefas';
  section.id = 'task-list';
  main.appendChild(section);
  section.appendChild(orderedList);
}
addOrderedList();

function addTaskButton() {
  const addButton = document.createElement('button');
  addButton.id = 'criar-tarefa';
  addButton.innerText = 'Adicionar';
  const addtask = document.querySelector('#add-task');
  addtask.appendChild(addButton);
}
addTaskButton();

function addNewTask() {
  const tasklist = document.querySelector('#lista-tarefas');
  const addButton = document.querySelector('#criar-tarefa');
  const inputField = document.querySelector('#texto-tarefa');

  addButton.addEventListener('click', function () {
    if (inputField.value.length > 0) {
      const addLi = document.createElement('li');
      addLi.innerText = inputField.value;
      addLi.style.order
      tasklist.appendChild(addLi);
      inputField.value = '';
    } else {
      alert('erro');
    }
  });
}
addNewTask();
