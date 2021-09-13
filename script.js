function createTask() {
  const inputField = document.getElementById('texto-tarefa');
  const input = document.getElementById('texto-tarefa').value;
  if (input === '') {
    alert('Insira um texto válido!');
    return;
  }
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.innerHTML = input;
  inputField.value = '';
  ol.appendChild(li);
}
