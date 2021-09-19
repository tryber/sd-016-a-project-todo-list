// Parâmetros Globais
const taskList = document.getElementById('lista-tarefas');
const colorGray = 'rgb(128, 128, 128)';
const buttonEraseAll = document.getElementById('apaga-tudo');
const buttonInput = document.getElementById('criar-tarefa');
const listItensChild = document.getElementById('lista-tarefas').children;

// Botão com a função de limpar o input
function clearText() {
  const clearTextInput = document.getElementById('texto-tarefa');
  clearTextInput.value = '';
}

// Colore o fundo com a cor do requisito
// Utilizei como base o conteúdo do Luiz Ricardo (https://github.com/tryber/sd-016-a-project-todo-list/pull/92/files)

function changeBackgroundColor(event) {
  const changeColor = document.querySelectorAll('li');
  for (let i = 0; i < changeColor.length; i += 1) {
    changeColor[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = colorGray;
}

function addClickList() {
  const addClick = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < addClick.length; i += 1) {
    addClick[i].addEventListener('click', changeBackgroundColor);
  }
}

// Cria o item da lista após o usuário clicar no botão
function createListItem() {
  const takeTheTask = document.getElementById('texto-tarefa').value;
  const createElements = document.createElement('li');
  createElements.innerText = takeTheTask;
  taskList.appendChild(createElements);
  addClickList();

  clearText();
}

// Quando acioando o botão erase, apaga tudo. Usei como base a lógica do colega André Luís Wenningkamp (https://github.com/tryber/sd-016-a-project-todo-list/pull/113/files)
function eraseAll() {
  for (let i = 0; i < listItensChild.length; i += 1) {
    listItensChild[i].remove();
    i -= 1;
  }
}

// Chama a ação no clique do usuário

buttonInput.addEventListener('click', createListItem);
buttonEraseAll.addEventListener('click', eraseAll);
