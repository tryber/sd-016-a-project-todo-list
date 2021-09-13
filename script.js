const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

function buttonValue() {
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = ' ';
}
button.addEventListener('click', buttonValue);
