// Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão,
// um novo item deverá ser criado ao final da lista
// e o texto do input deve ser limpo

const buttonCreateTask = document.getElementById('criar-tarefa');
const inputNewTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createNewTask() {
  let taskText = inputNewTask.value;
  let elementFather = taskList;
  let newTask = document.createElement('li');
  newTask.innerText = taskText;
  elementFather.appendChild(newTask);
  inputNewTask.value = '';
}
buttonCreateTask.addEventListener('click', createNewTask);
