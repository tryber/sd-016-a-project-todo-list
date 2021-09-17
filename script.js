function adicionaTarefa () {
  let textoTarefa = document.getElementById('texto-tarefa');
  let listaTarefas = document.getElementById('lista-tarefas');
  let tarefa = document.createElement('li');
  tarefa.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
}

window.onload = function () {
  document.getElementById('criar-tarefa').addEventListener('click', adicionaTarefa);

}