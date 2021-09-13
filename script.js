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
  inputNewTask.focus();
}
buttonCreateTask.addEventListener('click', createNewTask);

// Clicar em um item da lista deve alterar
// a cor de fundo do item para cinza rgb(128,128,128)
function clearBackgroundColor() {
  let taskListItens = taskList.children;
  for (const task of taskListItens) {
    task.style.backgroundColor = 'white';
  }
}

function changeBackgroundColor(element) {
  clearBackgroundColor();
  element.target.style.backgroundColor = 'rgb(128,128,128)';
}
taskList.addEventListener('click', changeBackgroundColor);
