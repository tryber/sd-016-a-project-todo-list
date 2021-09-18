// Botão com a função de limpar o imput
function clearText() {
  const clearTextInput = document.getElementById('texto-tarefa');
  clearTextInput.value = '';
}

// Cria o item da lista após o usuário clicar no botão
function createListItem() {
  const takeTheTask = document.getElementById('texto-tarefa').value;
  const taskList = document.getElementById('lista-tarefas');
  const createElements = document.createElement('li');
  createElements.innerText = takeTheTask;
  taskList.appendChild(createElements);
  addClickList();

  clearText();
}

// Chama a ação no clique do usuário
const buttonInput = document.getElementById('criar-tarefa');
buttonInput.addEventListener('click', createListItem);

// Colore o fundo com a cor do requisito
// Utilizei como base o conteúdo do Luiz Ricardo (https://github.com/tryber/sd-016-a-project-todo-list/pull/92/files)
const colorGray = 'rgb(128, 128, 128)';

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
