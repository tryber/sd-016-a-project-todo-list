// aqui vou fazer os eventos de cada item da lista de tarefas
// aqui vou fazer a função para quando clicar em um item da lista de tarefa a cor de fundo mude para cinza
function changeBackgroundListItem(e) {
  const pegaTamanho = document.querySelectorAll('.itemList').length;
  // esse for é para todos os outros elementos que não estão selecionados mudarem para a cor original
  for (let contDesfazerSelecao = 0; contDesfazerSelecao < pegaTamanho; contDesfazerSelecao += 1) {
    document.querySelectorAll('.itemList')[contDesfazerSelecao].style.backgroundColor = '';
  }
  e.currentTarget.style.backgroundColor = 'rgb(128,128,128)';
}
// atalho para quantidade de item list
const qtdItemList = document.querySelectorAll('.itemList').length;

// essa variavel armazena a quantidade de duplos cliques que dei em cada item da lista
let quantosDuploClick = 1;

// aqui to fazendo a função de adicionar risco no texto e retirar
function changeRiskItem(e) {
  for (let contDesfazerSelecao = 0; contDesfazerSelecao < qtdItemList; contDesfazerSelecao += 1) {
    document.querySelectorAll('.itemList')[contDesfazerSelecao].style.backgroundColor = '';
  }
  if (quantosDuploClick === 1) {
    quantosDuploClick += 1;
    e.target.style.textDecoration = 'line-through';
    e.target.classList.add('completed');
  } else {
    quantosDuploClick = 1;
    e.target.style.textDecoration = 'none';
    e.target.className = 'itemList';
  }
}

// aqui vou fazer a função de adicionar tarefa na lista
const atalhoListaTarefas = '#lista-tarefas';
function adicionarTarefa() {
  const addTarefa = document.createElement('li');
  addTarefa.className = 'itemList';
  addTarefa.innerHTML = document.querySelector('#texto-tarefa').value;
  document.querySelector(atalhoListaTarefas).appendChild(addTarefa);
  document.querySelector('#texto-tarefa').value = '';
  // aqui estou adicionando um evento de click para cada li(item da lista de tarefa
  addTarefa.addEventListener('click', changeBackgroundListItem);
  // aqui estou adicionando um evento de dblclick para cada li(item da lista de tarefa)
  addTarefa.addEventListener('dblclick', changeRiskItem);
}

// aqui vou fazer o evento de clicar no botão adicionar-tarefa
document.querySelector('#criar-tarefa').addEventListener('click', adicionarTarefa);

// aqui vou fazer a função para apagar todos os itens
function apagaItens() {
  const qtdElem = document.querySelectorAll('.itemList').length;// Essa variável armazena a quantidade de elementos que tem na lista
  for (let contQuantosElementos = 0; contQuantosElementos < qtdElem; contQuantosElementos += 1) {
    const selecionaItem = document.querySelectorAll('.itemList')[0];
    document.querySelector(atalhoListaTarefas).removeChild(selecionaItem);
  }
}

// aqui estou fazendo o evento para clicar no botão de apagar todos os itens
document.querySelector('#apaga-tudo').addEventListener('click', apagaItens);

// aqui vou fazer a função para apagar todos os itens finalizados;
function apagarFinalizados() {
  const qtdElementosFinalizados = document.querySelectorAll('.completed').length;
  for (let contItensFinali = 0; contItensFinali < qtdElementosFinalizados; contItensFinali += 1) {
    const itensFinalizados = document.querySelector('.completed');
    document.querySelector(atalhoListaTarefas).removeChild(itensFinalizados);
  }
}

// aqui vou fazer o evento de apagar itens finalizados
document.querySelector('#remover-finalizados').addEventListener('click', apagarFinalizados);
