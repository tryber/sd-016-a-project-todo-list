let listButton = document.getElementById('lista-tarefas');
let inputText = document.getElementById('texto-tarefa');
let button = document.createElement('button');

function createbutton(criarTarefa) {
  button.id = 'criar-tarefa';
  button.innerText = 'Criar Tarefa'

  listButton.appendChild(button);
}

createbutton()

button.addEventListener('click', function() {
  let taskList = document.createElement('li');
  taskList.innerText = inputText.value;
  listButton.appendChild(taskList);
  inputText.value = '';
  }
)