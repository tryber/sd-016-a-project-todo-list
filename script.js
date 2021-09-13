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
  inputField.id = 'texto-tarefa';
  main.appendChild(inputField);
}
addInputField();

function addOrderedList() {
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  main.appendChild(orderedList);
}
addOrderedList();