const botaoAdicionar = document.getElementById('criar-tarefa');
const entradaTarefas = document.getElementById('texto-tarefa');
const adicionandoItem = document.getElementById('lista-tarefas');
const botaoApagar = document.getElementById('apaga-tudo');
function selecionado(parametro) {
  const seleciona = document.querySelector('.selected');
  if (seleciona) {
    seleciona.classList.remove('selected');
  }
  parametro.currentTarget.classList.add('selected');
}
function risca(p2) {
  if (p2.currentTarget.classList.contains('completed') === false) {
    p2.currentTarget.classList.add('completed');
  } else if (p2.currentTarget.classList.contains('completed')) {
    p2.currentTarget.classList.remove('completed');
  }
}
function tarefa() {
  const lista = document.createElement('li');
  lista.innerText = entradaTarefas.value;
  lista.addEventListener('click', selecionado);
  lista.addEventListener('dblclick', risca);
  adicionandoItem.appendChild(lista);
  entradaTarefas.value = '';
}
botaoAdicionar.addEventListener('click', tarefa);
function apagarLista() {
  adicionandoItem.innerHTML = '';
}
botaoApagar.addEventListener('click', apagarLista);

function apagaSelecionados() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].classList.contains('completed')) {
      itens[i].remove();
    }
  }
}
const botaoFinalizados = document.getElementById('remover-finalizados');
botaoFinalizados.addEventListener('click', apagaSelecionados);

function salvaTarefa() {
  localStorage.setItem('novaLista', JSON.stringify(adicionandoItem.innerHTML));
}

window.onload = function storage() {
  adicionandoItem.innerHTML = JSON.parse(localStorage.getItem('novaLista'));
};

const botaoSalvar = document.getElementById('salvar-tarefas');
botaoSalvar.addEventListener('click', salvaTarefa);

function moverCima() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].classList.contains('selected') && itens[i].previousElementSibling) {
      itens[i].parentNode.insertBefore(itens[i], itens[i].previousElementSibling);
    }
  }
}

const botaoCima = document.getElementById('mover-cima');
botaoCima.addEventListener('click', moverCima);

function moverBaixo() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].classList.contains('selected') && itens[i].nextElementSibling) {
      itens[i].parentNode.insertBefore(itens[i].nextElementSibling, itens[i]);
    }
  }
}

const botaoBaixo = document.getElementById('mover-baixo');
botaoBaixo.addEventListener('click', moverBaixo);

function deleteSelected() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].classList.contains('selected')) {
      itens[i].remove();
    }
  }
}

const removerSelecionado = document.getElementById('remover-selecionado');
removerSelecionado.addEventListener('click', deleteSelected);
