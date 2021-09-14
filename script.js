const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function addTask() {
  const task = document.createElement('li');
  task.innerHTML = input.value;
  list.appendChild(task);
  input.value = null;
}
button.addEventListener('click', addTask);

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// O que será verificado:

// Será verificado que, ao se carregar a página, os itens da lista não tem o estilo CSS background-color: rgb(128, 128, 128)

// Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS background-color: rgb(128, 128, 128).
