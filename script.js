// declaracao de constantes de amplo scopo
const taskText = document.querySelector('#texto-tarefa'); // input
const taskList = document.querySelector('#lista-tarefas'); // ol
const body = document.querySelector('body'); // o corpo todo
const createTask = document.querySelector('#criar-tarefa'); // button new task
const clearAll = document.querySelector('#apaga-tudo'); // button clear all
const clearCompleted = document.querySelector('#remover-finalizados'); // button remove defaced
const removedSelected = document.querySelector('#remover-selecionado'); // remove selected
const saveTask = document.querySelector('#salvar-tarefas'); // save task on storage

// cria uma lista de tarefas
createTask.addEventListener('click', () => { // escuta o button
  const newTask = document.createElement('li'); // cria um l1
  newTask.className = 'task'; // add classe
  newTask.innerHTML = taskText.value;
  taskList.appendChild(newTask);
  taskText.value = '';
});

// change background-color - requisito 8 - me baseei na ideia do Guilherme Augusto para resolver esse desafio, ele me apresentou o contains. includes é usado para variáveis.

function changeColor(e) {
  for (let index = 0; index < taskList.children.length; index += 1) {
    if (taskList.children[index].classList.contains('selected')) {
      taskList.children[index].classList.remove('selected');
    }
  }
  const task = e.target;
  task.classList.add('selected');
}
// forListener all tasks

body.addEventListener('click', (e) => {
  if (e.target.classList.contains('task')) {
    changeColor(e);
  }
});

// requisito 9 - Guilherme Spinelli nos mostrou como usar o toggle que verifica se a classe está presente, senão adiciona ela.

taskList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
// mark with completed task
// function changeToCompleted(e) {
//   let task = e.target;
//   if (task.classList.contains('completed')) {
//     task.classList.remove('completed');
//   } else {
//     task.classList.add('completed');
//   }
// }
// // forListener all finished tasks
// body.addEventListener('dblclick', (e) => {
//   if (e.target.classList.contains('task')) {
//     e.preventDefault();   //ignora os outros enevtListener.
//     changeToCompleted(e);
//   }
// });

// requisito 10

clearAll.addEventListener('click', () => {
  taskList.innerHTML = '';
});

// requisito 11 - só remove uma de cada vez.

function removeCompletedTask() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    taskList.removeChild(completedTasks[index]);
  }
}
clearCompleted.addEventListener('click', removeCompletedTask);

// requisito 12 
function saveTaskStorage() {
  localStorage.setItem('taskListStorage', JSON.stringify(taskList.innerHTML));
}
saveTask.addEventListener('click', saveTaskStorage);

window.onload = () => {
  if (localStorage !== null) {
   const returnTaskHTML = JSON.parse(localStorage.getItem('taskListStorage'));
    taskList.innerHTML = returnTaskHTML;
  }
}

// requisito 13 - o comando dentro do if faz uma nova sequencia, baseado se tem um elemento antes ou depois.
const upwards = document.querySelector('#mover-cima');
const below = document.querySelector('#mover-baixo');

function moveUp() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && selectedTask.previousElementSibling) {
    const itemBefore = selectedTask.previousElementSibling;
    taskList.insertBefore(selectedTask, itemBefore);
  }
}
upwards.addEventListener('click', moveUp);

function moveDown() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && selectedTask.nextElementSibling) {
    const itemAfter = selectedTask.nextElementSibling;
    itemAfter.after(selectedTask);
  }
}
below.addEventListener('click', moveDown);

// requisito 14 - Tentei meios outras comparacoes e dava erro, dai vi no código do Guilherme que ele usou o null e excluindo as sem a classe.

function removeSelectedTask() {
  const selectedTask = document.querySelector('.selected');
  // if (selectedTask !== null) {
  taskList.removeChild(selectedTask);
  // }
}
removedSelected.addEventListener('click', removeSelectedTask);
