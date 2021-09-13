// Declaração de Variáveis e Constantes.
const selectOl = document.querySelector('#lista-tarefas');
const selectButton = document.querySelector('#criar-tarefa');

// Função remove cor de fundo das linhas.
function removeColorLine() {
  const selectLineList = document.querySelectorAll('.tasks-line');
  for (let index = 0; index < selectLineList.length; index += 1) {
    selectLineList[index].style.backgroundColor = '';
  }
}

// Função que preenche o fundo da linha selecionada.
function paintColorList() {
  const selectLineList = document.querySelectorAll('.tasks-line');
  for (let index = 0; index < selectLineList.length; index += 1) {
    selectLineList[index].addEventListener('click', () => {
      removeColorLine();
      selectLineList[index].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

// Função que passa um risco na Tarefa quando clicado duas vezes.
function doubleClick() {
  const selectLineList = document.querySelectorAll('.tasks-line');
  for (let index = 0; index < selectLineList.length; index += 1) {
    selectLineList[index].addEventListener('dblclick', () => {
      selectLineList[index].style.textDecoration = 'line-through';
    });
  }
}

// Evento de clique para botão de adicionar tarefas.
selectButton.addEventListener('click', () => {
  const selectInput = document.querySelector('#texto-tarefa');
  if (selectInput.value === '') {
    return alert('Sem Tarefa!, Favor informar um nome de Tarefa!');
  }
  const createtasks = document.createElement('li');
  createtasks.innerHTML = selectInput.value;
  createtasks.classList.add('tasks-line');
  selectOl.appendChild(createtasks);
  selectInput.value = '';
  paintColorList();
  doubleClick();
});
