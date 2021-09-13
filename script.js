function adicionaNovaTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.addEventListener('click', () => {
    novaTarefa.style.backgroundColor = 'rgb(128,128,128)';
  });
  let input = document.getElementById('texto-tarefa');
  novaTarefa.innerText = input.value;
  input.value = '';
  listaTarefas.appendChild(novaTarefa);
}
