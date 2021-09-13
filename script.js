function createDiv(idName) {
  const div = document.createElement('div');
  div.id = idName;
  document.querySelector('main').appendChild(div);
}

function addTitle() {
  const title = document.createElement('h1');
  title.innerText = 'Minha Lista de Tarefas';
  document.querySelector('header').appendChild(title);
}
addTitle();

function addParagraph() {
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  document.querySelector('header').appendChild(paragraph);
}
addParagraph();

function addInput() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  document.querySelector('#input-button').appendChild(input);
}
addInput();

function addOlist() {
  const oList = document.createElement('ol');
  oList.id = 'lista-tarefas';
  createDiv('ol-list');
  document.querySelector('#ol-list').appendChild(oList);
}
addOlist();

function addButton() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar';
  document.querySelector('#input-button').appendChild(button);
}
addButton();
function clearInput() {
  document.querySelector('#texto-tarefa').value = '';
}
function changeColorItem() {
  document.querySelectorAll('.list').forEach((el) =>
    el.addEventListener('click', (event) => {     
      const changeColor = event.target;
      changeColor.style.color = 'rgb(128, 128, 128)';
    }));
}

function buttonClick() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
    const olist = document.querySelector('#ol-list');
    const elementLi = document.createElement('li');
    elementLi.className = 'list';
    const inputValue = document.querySelector('#texto-tarefa').value;
    if (inputValue === '') {
      console.log('Caixa vazia');
    } else {
      elementLi.innerText = inputValue;
      olist.appendChild(elementLi);
      clearInput();
    }
    changeColorItem();
  });
}
buttonClick();
