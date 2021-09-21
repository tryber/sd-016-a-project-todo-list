const botaoAdicionar = document.getElementById('criar-tarefa');
const entradaTarefas = document.getElementById('texto-tarefa');
const adicionandoItem = document.getElementById('lista-tarefas');
function criateTask() {
  const lista = document.createElement('li');
  lista.innerText = entradaTarefas.value;
  lista.className = 'task';
  adicionandoItem.appendChild(lista);
  entradaTarefas.value = '';
}
botaoAdicionar.addEventListener('click', criateTask);