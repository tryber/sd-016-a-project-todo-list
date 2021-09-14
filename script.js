  // Lista de Variaveis
const button = document.getElementById('criar-tarefa');
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

button.addEventListener('click', addTarefa);

  // Requisito 7 - inserir Fundo cinza - A função adiciona um fundo branço a todos os itens da lista e ao item q foi clicado ele add o cinza
function paintList(event) {
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

listaTarefas.addEventListener('click', paintList);

