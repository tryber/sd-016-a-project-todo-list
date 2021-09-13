function adicionaNovaTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  let input = document.getElementById('texto-tarefa');
  novaTarefa.innerText = input.value;
  input.value = '';
  listaTarefas.appendChild(novaTarefa);
}
