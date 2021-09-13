const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputNovaTarefa = document.querySelector('#texto-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');

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

function apagarTodasTarefas() {
  const ItensLista = document.querySelectorAll('#lista-tarefas li');
  ItensLista.forEach((item) => {
    item.remove();
  });
}

botaoCriarTarefa.addEventListener('click', adicionarNovaTarefa);
botaoApagaTudo.addEventListener('click', apagarTodasTarefas)