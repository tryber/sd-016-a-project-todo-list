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
