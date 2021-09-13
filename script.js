const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputNovaTarefa = document.querySelector('#texto-tarefa');

function adicionarClasseSelecionado(event) {
  const antigoItem = document.querySelector('.selected');
  if (antigoItem !== null) {
    antigoItem.classList.remove('selected');
  }
  const itemAtual = event.target;
  itemAtual.classList.add('selected');
}

function criandoItemDaLista() {
  const novaTarefa = document.createElement('li');
  novaTarefa.addEventListener('click', adicionarClasseSelecionado);
  novaTarefa.innerText = inputNovaTarefa.value;
  return novaTarefa;
}

function adicionarNovaTarefa() {
  const novaTarefa = criandoItemDaLista();
  listaTarefas.appendChild(novaTarefa);
  inputNovaTarefa.value = '';
}

botaoCriarTarefa.addEventListener('click', adicionarNovaTarefa);