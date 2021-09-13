const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputNovaTarefa = document.querySelector('#texto-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoRemoveFinalizados = document.querySelector('#remover-finalizados');
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');

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

function criandoItemLista() {
  const novaTarefa = document.createElement('li');
  novaTarefa.addEventListener('click', adicionarClasseSelecionado);
  novaTarefa.addEventListener('dblclick', adicionarClasseCompleto);
  novaTarefa.innerText = inputNovaTarefa.value;
  return novaTarefa;
}

function adicionarNovaTarefa() {
  const novaTarefa = criandoItemLista();
  listaTarefas.appendChild(novaTarefa);
  inputNovaTarefa.value = '';
}

function apagarTodasTarefas() {
  const itensLista = document.querySelectorAll('#lista-tarefas li');
  itensLista.forEach((item) => {
    item.remove();
  });
}

function removerTarefasFinalizadas() {
  const itemsFinalizados = document.querySelectorAll('.completed');
  itemsFinalizados.forEach((item) => {
    item.remove();
  });
}

function salvarTarefas() {
  const tarefas = document.querySelectorAll('#lista-tarefas li');
  const arrayTarefas = [];
  tarefas.forEach((tarefa) => {
    const arrayTarefa = [tarefa.innerText, tarefa.classList.value];
    arrayTarefas.push(arrayTarefa);
  });
  localStorage.setItem('listaCompleta', JSON.stringify(arrayTarefas));
}

function criandoItemListaSalva(tarefa) {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = tarefa[0];
  novaTarefa.classList.value = tarefa[1];
  novaTarefa.addEventListener('click', adicionarClasseSelecionado);
  novaTarefa.addEventListener('dblclick', adicionarClasseCompleto);
  return novaTarefa;
}

window.onload = function() {
  const tarefasSalvas = JSON.parse(localStorage.getItem('listaCompleta'));
  if (tarefasSalvas !== null) {
    tarefasSalvas.forEach((tarefa) => {
      listaTarefas.appendChild(criandoItemListaSalva(tarefa));
    })
  }
}

botaoCriarTarefa.addEventListener('click', adicionarNovaTarefa);
botaoApagaTudo.addEventListener('click', apagarTodasTarefas);
botaoRemoveFinalizados.addEventListener('click', removerTarefasFinalizadas);
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
