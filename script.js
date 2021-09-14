const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputNovaTarefa = document.querySelector('#texto-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoRemoveFinalizados = document.querySelector('#remover-finalizados');
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
const botaoMoverCima = document.querySelector('#mover-cima');
const botaoMoverBaixo = document.querySelector('#mover-baixo');
const botaoRemoverSelecionado = document.querySelector('#remover-selecionado');

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

function criandoItemPorArray([tarefa, classes]) {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = tarefa;
  novaTarefa.classList.value = classes;
  novaTarefa.classList.remove('selected');
  novaTarefa.addEventListener('click', adicionarClasseSelecionado);
  novaTarefa.addEventListener('dblclick', adicionarClasseCompleto);
  return novaTarefa;
}

function trocandoElementosHTML(elemento1, elemento2) {
  const [tarefa1, classe1] = [elemento1.innerText, elemento1.classList.value];
  const primeiroElemento = elemento1;
  const segundoElemento = elemento2;
  primeiroElemento.innerText = elemento2.innerText;
  primeiroElemento.classList.value = elemento2.classList.value;
  segundoElemento.innerText = tarefa1;
  segundoElemento.classList.value = classe1;
}

function moverTarefaCima() {
  const tarefaParaSerMovida = document.querySelector('.selected');
  if (tarefaParaSerMovida === null) {
    return alert('Você não tem nenhuma tarefa selecionada!');
  }
  const tarefaAcima = tarefaParaSerMovida.previousElementSibling;
  if (tarefaAcima === null) {
    return alert('Sua tarefa selecionada já é a primeira!');
  }
  trocandoElementosHTML(tarefaParaSerMovida, tarefaAcima);
}

function moverTarefaBaixo() {
  const tarefaParaSerMovida = document.querySelector('.selected');
  if (tarefaParaSerMovida === null) {
    return alert('Você não tem nenhuma tarefa selecionada!');
  }
  const tarefaAbaixo = tarefaParaSerMovida.nextElementSibling;
  if (tarefaAbaixo === null) {
    return alert('Sua tarefa selecionada já é a ultima!');
  }
  trocandoElementosHTML(tarefaParaSerMovida, tarefaAbaixo);
}

function removerSelecionado() {
  const tarefaSelecionada = document.querySelector('.selected');
  tarefaSelecionada.remove();
}

function carregarTarefasSalvas() {
  const tarefasSalvas = JSON.parse(localStorage.getItem('listaCompleta'));
  if (tarefasSalvas !== null) {
    tarefasSalvas.forEach((tarefa) => {
      listaTarefas.appendChild(criandoItemPorArray(tarefa));
    });
  }
}

botaoCriarTarefa.addEventListener('click', adicionarNovaTarefa);
botaoApagaTudo.addEventListener('click', apagarTodasTarefas);
botaoRemoveFinalizados.addEventListener('click', removerTarefasFinalizadas);
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
botaoMoverCima.addEventListener('click', moverTarefaCima);
botaoMoverBaixo.addEventListener('click', moverTarefaBaixo);
botaoRemoverSelecionado.addEventListener('click', removerSelecionado);
window.onload = carregarTarefasSalvas;
