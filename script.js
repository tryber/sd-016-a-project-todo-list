function adicionaTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const textoTarefa = document.getElementById('texto-tarefa');
  if (textoTarefa.value != ''){
    const tarefa = document.createElement('li');
    tarefa.className = 'item';
    tarefa.innerHTML = textoTarefa.value;
    listaTarefas.appendChild(tarefa);
    textoTarefa.value = '';
  }
}

function checaSelecionados(remover) {
  let corDeFundo;
  const itensLista = document.getElementById('lista-tarefas').children;
  for (let index = 0; index < itensLista.length; index += 1) {
    corDeFundo = window.getComputedStyle(itensLista[index], null).getPropertyValue('background-color');
    if (corDeFundo = 'rgb(128, 128, 128)') {
      if (remover === true) {
        itensLista[index].style.backgroundColor = '';
      } else if (remover === false) {
          return itensLista[index];
      }
    }
  }
}


function selecionaItem(event) {
  if (event.target.classList.contains('item')) {
    checaSelecionados(true);
    const itemSelecionado = event.target;
    itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function completaTarefa(event) {
  if (event.target.classList.contains('item')) {
    if (event.target.classList.contains('completed')){
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
}

function limpaLista() {
  const listaTarefas = document.getElementById('lista-tarefas');
  ultimoItem = listaTarefas.lastElementChild;
  while (ultimoItem) {
    listaTarefas.removeChild(ultimoItem);
    ultimoItem = listaTarefas.lastElementChild;
  } 
}

window.onload = function () {
  document.getElementById('criar-tarefa').addEventListener('click', adicionaTarefa);
  document.addEventListener('click', selecionaItem);
  document.addEventListener('dblclick', completaTarefa);
  document.querySelector('.box').addEventListener('click', function() {checaSelecionados(true);});
  document.getElementById('apaga-tudo').addEventListener('click', limpaLista);
}