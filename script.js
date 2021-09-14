// Requisito 4,5,6
const button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTarefa);
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
  deleteSelectedClick();
}

// Requisito 7 e 8
function addEvent() {
  const tarefas = document.getElementsByTagName('li');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', taskColor);
  }
}
function taskColor(origin) {
  const tasks = document.getElementsByTagName('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].style.backgroundColor = 'white';
  }
  origin.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Requisito 9
function taskEvent() {
  const task = document.getElementsByTagName('li');
  for (let index = 0; index < task.length; index += 1) {
    task[index].addEventListener('dblclick', lineTask);
  }
}
function lineTask(event) {
  event.target.classList.toggle('completed');
}

// Requisito 10 - Botão apagar tudo 
function deleteAllClick() {
  const buttonDeleteAll = document.getElementById('apaga-tudo')
  buttonDeleteAll.addEventListener('click', deleteAll);
}

function deleteAll() {
  const task = document.querySelectorAll('.line');
//  const task2 = document.getElementsByClassName('line');
//  const task3 = document.getElementsByTagName('li');
  const lista = document.querySelector('#lista-tarefas');
  for (let index = 0; index < task.length; index += 1) {
    lista.removeChild(task[index]);
  }
}//Dúvida

// Requisito 11
function deleteSelectedClick() {
  const buttonDeleteSelected = document.getElementById('remover-finalizados');
  buttonDeleteSelected.addEventListener('click', deleteSelected);
}

function deleteSelected() {
  const lista = document.querySelector('#lista-tarefas');
  const element = document.querySelectorAll('.completed');
  for (let index = 0; index < element.length; index += 1) {
    lista.removeChild(element[index]);
  }
}
