function adicionaTarefa() {
  const textoTarefa = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  const tarefa = document.createElement('li');
  tarefa.className = 'item';
  tarefa.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
}

function checaSelecionados(itens) {
  let corDeFundo;
  for (let index = 0; index < itens.length; index += 1){
    corDeFundo = window.getComputedStyle(itens[index], null).getPropertyValue('background-color');
    if (corDeFundo = 'rgb(128, 128, 128)'){
      itens[index].style.backgroundColor = '';
    }
  }
}

function selecionaItem(event) {
  if (event.target.className === 'item') {
    const itensLista = document.getElementById('lista-tarefas').children;
    checaSelecionados(itensLista);
    const itemSelecionado = event.target;
    itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

window.onload = function () {
  document.getElementById('criar-tarefa').addEventListener('click', adicionaTarefa);
  document.addEventListener('click', selecionaItem);
}