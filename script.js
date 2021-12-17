function createTask() {
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  const btnCriarTarefa = document.getElementById('criar-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  btnCriarTarefa.addEventListener('click', () => {
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerText = inputTextoTarefa.value;
    listaTarefas.appendChild(createLi);
    inputTextoTarefa.value = '';
  });
}
createTask();
