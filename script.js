// Declaração de Variáveis e Constantes.
const selectOl = document.querySelector('#lista-tarefas');
const selectButton = document.querySelector('#criar-tarefa');

function paintColorList() {
  const selectLineList = document.querySelectorAll('.tasks-line');
  for (let index = 0; index < selectLineList.length; index += 1) {
    selectLineList[index].addEventListener('click', (event) => {
      selectLineList[index].style.backgroundColor = 'rgb(128, 128, 128)';
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
});
