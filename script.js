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

function removeClasseCompleto(event) {
  const itemAtual = event.target;
  itemAtual.classList.remove('completed');
}

function adicionarClasseCompleto(event) {
  const itemAtual = event.target;
  itemAtual.addEventListener('dblclick', removeClasseCompleto);
  itemAtual.classList.add('completed');
}

function criandoItemDaLista() {
  const novaTarefa = document.createElement('li');
  novaTarefa.addEventListener('click', adicionarClasseSelecionado);
  novaTarefa.addEventListener('dblclick', adicionarClasseCompleto);
  novaTarefa.innerText = inputNovaTarefa.value;
  return novaTarefa;
}

function adicionarNovaTarefa() {
  const novaTarefa = criandoItemDaLista();
  listaTarefas.appendChild(novaTarefa);
  inputNovaTarefa.value = '';
}

botaoCriarTarefa.addEventListener('click', adicionarNovaTarefa);