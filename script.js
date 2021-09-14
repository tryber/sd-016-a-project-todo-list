function createDiv(idName) {
  const div = document.createElement('div');
  div.id = idName;
  document.querySelector('main').appendChild(div);
}
createDiv('input-button');
const inputButton = document.querySelector('#input-button');

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
  input.placeholder = 'Tarefas';
  inputButton.appendChild(input);
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
  inputButton.appendChild(button);
}
addButton();
function clearInput() {
  document.querySelector('#texto-tarefa').value = '';
}

function doubleClickRemove() {
  document.querySelector('.completed').addEventListener('dblclick', (event) => {
    event.target.classList.remove('completed');
  });
}

function doubleClick() {
  document.querySelectorAll('li').forEach((el) =>
    el.addEventListener('dblclick', (event) => {
      const riscaItem = event.target;
      if (riscaItem.classList) {
        riscaItem.classList.add('completed');
      }
      doubleClickRemove();
    }));
}

function removeAll() {
  document.querySelector('#apaga-tudo').addEventListener('click', () => {
    document.querySelectorAll('#lista-tarefas>li').forEach((el) =>
      el.remove());
  });
}
function removeFinish() {
  document.querySelector('#remover-finalizados').addEventListener('click', () => {
    document.querySelectorAll('.completed').forEach((el) =>
      el.remove());
  });
}

function clearSelected() {
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selected');
  }
}

function clickList() {
  const todosLi = document.querySelectorAll('li');
  for (let index = 0; index < todosLi.length; index += 1) {
    todosLi[index].addEventListener('click', () => {
      clearSelected();
      todosLi[index].classList.add('selected');
    });
  }
}

function buttonClick() {
  const button = document.querySelector('#criar-tarefa');
  const olist = document.querySelector('#lista-tarefas');
  button.addEventListener('click', () => {
    const elementLi = document.createElement('li');
    const inputValue = document.querySelector('#texto-tarefa').value;
    if (inputValue === '') {
      console.log('Caixa vazia');
    } else {
      elementLi.innerText = inputValue;
      olist.appendChild(elementLi);
      clearInput();
    }
    clickList();
    doubleClick();
    removeAll();
    removeFinish();
  });
}
buttonClick();

function addButtonClearAll() {
  const buttonClear = document.createElement('button');
  buttonClear.innerText = 'Apaga Tudo';
  buttonClear.id = 'apaga-tudo';
  inputButton.appendChild(buttonClear);
}
addButtonClearAll();

function addButtonClearFinish() {
  const buttonFinish = document.createElement('button');
  buttonFinish.innerText = 'Apaga os Finalizados';
  buttonFinish.id = 'remover-finalizados';
  inputButton.appendChild(buttonFinish);
}
addButtonClearFinish();
