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
  let estiloCSS;
  let listaTarefas = document.getElementById('lista-tarefas');
  let itensLista = listaTarefas.children;
  let tamanhoLista = itensLista.length;
  for (let index = 0; index < tamanhoLista; index += 1) {
    if (remover === true){
        estiloCSS = window.getComputedStyle(itensLista[index], null).getPropertyValue('background-color');
        if (estiloCSS === 'rgb(128, 128, 128)') {
            itensLista[index].style.backgroundColor = '';
          }
      } else if (remover === false) {
          return itensLista[index];
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

function removeFinalizados() {
  let completos = document.querySelectorAll('.completed');
  for (let index = 0; index < completos.length; index++) {
    completos[index].remove();
  }
}

function salvarTarefas() {
  let tarefasSalvas = {
    conteudoLinha: [],
    classes: [],
  };
  const listaTarefas = document.getElementById('lista-tarefas').children;
  for (let index = 0; index < listaTarefas.length; index += 1) {
    tarefasSalvas.conteudoLinha[index] = listaTarefas[index].innerHTML;
    tarefasSalvas.classes[index] = listaTarefas[index].className;
  }
  localStorage.setItem('listaSalva', JSON.stringify(tarefasSalvas));
}

function recuperarLista() {
  const listaRecuperada = JSON.parse(localStorage.getItem('listaSalva'));
  const listaTarefas = document.getElementById('lista-tarefas');
  for (let index = 0; index < listaRecuperada.conteudoLinha.length; index += 1) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = listaRecuperada.conteudoLinha[index];
    itemLista.className = listaRecuperada.classes[index];
    listaTarefas.appendChild(itemLista);
  }
}

window.onload = function () {
  document.getElementById('criar-tarefa').addEventListener('click', adicionaTarefa);
  document.addEventListener('click', selecionaItem);
  document.addEventListener('dblclick', completaTarefa);
  document.querySelector('.box').addEventListener('click', function () {checaSelecionados(true);});
  document.getElementById('apaga-tudo').addEventListener('click', limpaLista);
  document.getElementById('remover-finalizados').addEventListener('click', removeFinalizados);
  document.getElementById('salvar-tarefas').addEventListener('click', salvarTarefas);
  recuperarLista();
}