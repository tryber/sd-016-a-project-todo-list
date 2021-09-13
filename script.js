// Chamar o input, o botão e a ol.
const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

// Código elaborado com a ajuda da Laura Fumagalli e Camila Rannieli, turma 16 - tribo A.
function criarInput() {
  // No input será digitado um texto que se converterá em uma lista.
  const newList = document.createElement('li');
  newList.innerText = input.value;
  // Adicionar a tag li como filho da tag ol e depois de adicionar o texto o input precisa ficar vazio.
  taskList.appendChild(newList);
  input.value = '';
}
button.addEventListener('click', criarInput);
