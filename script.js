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

// Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo.
// Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function toggleCompleted(element) {
  element.target.classList.toggle('completed');
}
taskList.addEventListener('dblclick', toggleCompleted);

// Adicione um botão com id="apaga-tudo"
// que quando clicado deve apagar todos os itens da lista
const buttonClearAll = document.getElementById('apaga-tudo');
function clearAll() {
  let loopTimes = taskList.children.length;
  for (let index = 0; index < loopTimes; index++) {
    taskList.removeChild(taskList.lastElementChild);
  }
}
buttonClearAll.addEventListener('click', clearAll);

// Adicione um botão com id="remover-finalizados"
// que quando clicado remove somente os elementos finalizados da sua lista
const buttonClearDoneTasks = document.getElementById('remover-finalizados');
function clearDoneTasks() {
  let doneTasks = document.querySelectorAll('.completed');
  for (const task of doneTasks) {
    task.remove();
  }
}
buttonClearDoneTasks.addEventListener('click', clearDoneTasks);
