// Requisito 7 e 8
function taskColor(origin) {
  const tasks = document.getElementsByTagName('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].style.backgroundColor = 'white';
    tasks[index].classList.remove('color');
  }
  origin.target.style.backgroundColor = 'rgb(128, 128, 128)';
  origin.target.classList.add('color');
}

function addEvent() {
  const tarefas = document.getElementsByTagName('li');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', taskColor);
  }
}

// Requisito 9
function lineTask(event) {
  event.target.classList.toggle('completed');
}

function taskEvent() {
  const task = document.getElementsByTagName('li');
  for (let index = 0; index < task.length; index += 1) {
    task[index].addEventListener('dblclick', lineTask);
  }
}

// Requisito 10 - Botão apagar tudo 
function deleteAll() {
  const task = document.querySelectorAll('.line');
//  const task2 = document.getElementsByClassName('line');
//  const task3 = document.getElementsByTagName('li');
  const lista = document.querySelector('#lista-tarefas');
  for (let index = 0; index < task.length; index += 1) {
    lista.removeChild(task[index]);
  }
}//Dúvida

function deleteAllClick() {
  const buttonDeleteAll = document.getElementById('apaga-tudo')
  buttonDeleteAll.addEventListener('click', deleteAll);
}

// Requisito 11
function deleteCompleted() {
  console.log('teste');
  const lista = document.querySelector('#lista-tarefas');
  const element = document.querySelectorAll('.completed');
  for (let index = 0; index < element.length; index += 1) {
    lista.removeChild(element[index]);
  }
}

function deleteCompletedClick() {
  const buttonDeleteSelected = document.getElementById('remover-finalizados');
  buttonDeleteSelected.addEventListener('click', deleteCompleted);
}

// Requisito 14
 function deleteSelected() {
   const lista = document.querySelector('#lista-tarefas');
   const completed = document.querySelectorAll('.color');
   console.log('teste');
   for (let index = 0; index < completed.length; index += 1) {
     lista.removeChild(completed[index]);
   }
 }

 function deleteSelectedClick() {
   const taskCompleted = document.getElementById('remover-selecionado');
   taskCompleted.addEventListener('click', deleteSelected);
 }

// Requisito 4,5,6
const button = document.getElementById('criar-tarefa');

function adicionaTarefa() {
  const input = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const tarefa = document.createElement('li');
  tarefa.classList.add('line');
  tarefa.innerHTML = input.value;
  tarefa.style.backgroundColor = 'white';
  lista.appendChild(tarefa);
  input.value = '';
  addEvent();
  taskEvent();
  deleteAllClick();
  deleteCompletedClick();
  deleteSelectedClick()
}
button.addEventListener('click', adicionaTarefa);










