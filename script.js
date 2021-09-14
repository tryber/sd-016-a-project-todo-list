const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

// requisito 7.
function style (event) {
event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function buttonValue() {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.addEventListener("click", style)
  ol.appendChild(li);
  input.value = '';
}
button.addEventListener('click', buttonValue)
