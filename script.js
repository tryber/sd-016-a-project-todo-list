const listaOrdenada = document.getElementById('lista-tarefas');
const botaoAdicionar = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

botaoAdicionar.addEventListener('click', ()=> {
  listaOrdenada.appendChild(document.createElement('li'));
  listaOrdenada.lastChild.innerText = input.value;
  input.value = '';
});