const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputNovaTarefa = document.querySelector('#texto-tarefa');

function adicionarNovaTarefa() {
  const novaTarefaTexto = document.createElement('li');
  novaTarefaTexto.innerText = inputNovaTarefa.value;
  listaTarefas.appendChild(novaTarefaTexto);
  inputNovaTarefa.value = '';
}

botaoCriarTarefa.addEventListener('click', adicionarNovaTarefa);