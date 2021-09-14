// Lista de Variaveis
const buttonAdd = document.getElementById('criar-tarefa');
const buttonDel = document.getElementById('apaga-tudo');
const tarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const lista = document.getElementsByTagName('li');

// Requisito 5 - inserir texto a lista - Cria a Constante para auxilia na criação da li. Add o texto a li e add o li como filho da ol
function addTarefa() {
  const listIten = document.createElement('li');
  listIten.innerHTML = tarefa.value;
  document.getElementById('lista-tarefas').appendChild(listIten);
  tarefa.value = '';
}

buttonAdd.addEventListener('click', addTarefa);

// Requisito 7 - inserir Fundo cinza - A função adiciona um fundo branço a todos os itens da lista e ao item q foi clicado ele add o cinza
function paintList(event) {
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

listaTarefas.addEventListener('click', paintList);

// Requisto 10 - apagar todos os item da lista - Função busca a existencia de um filho para a varial listaTarefas, caso ele ache o While esse mesmo filho sera apagado até não haver mais filho para a variavel.
function apagaTudo() {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}
buttonDel.addEventListener('click', apagaTudo);