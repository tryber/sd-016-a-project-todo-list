/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable eqeqeq */
const toDoList = document.querySelector('#lista-tarefas');
const btnCreateItem = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const btnClearAll = document.querySelector('#apaga-tudo');
const btnClearCompleted = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');
const btnRemoveSelected = document.querySelector('#remover-selecionado');

function clearLastSelected() {
  for (let index = 0; index < toDoList.childElementCount; index += 1) {
    toDoList.children[index].classList.remove('selected');
  }
}

// Ao clicar botão adiciona novos itens
btnCreateItem.addEventListener('click', () => {
  if (textTask.value === '') {
    alert('Digite o nome da tarefa');
    textTask.focus();
  } else {
    console.log('botão de adicionar item foi clicado.');
    const item = document.createElement('li');
    const createdItem = toDoList.appendChild(item);
    createdItem.className = 'list-item';
    createdItem.innerHTML = textTask.value;
    textTask.value = '';
    textTask.focus();
  }
});

// Ao clicar botão remove tarefa completada
btnClearCompleted.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');

  for (let index = 0; index < completedTasks.length; index += 1) {
    if (completedTasks[index].classList.contains('completed')) {
      completedTasks[index].remove();
    }
  }
});

btnSaveTasks.addEventListener('click', () => {
  const taskContents = [];
  const taskClasses = [];
  const tasks = document.querySelectorAll('#lista-tarefas li');

  for (let index = 0; index < tasks.length; index += 1) {
    taskContents.push(tasks[index].textContent);
    taskClasses.push(tasks[index].className);
  }

  localStorage.setItem('taskContents', JSON.stringify(taskContents));
  localStorage.setItem('taskClasses', JSON.stringify(taskClasses));
});

btnRemoveSelected.addEventListener('click', () => {
  const listItems = document.querySelectorAll('.list-item');

  for (let index = 0; index < listItems.length; index += 1) {
    if (listItems[index].classList.contains('selected')) {
      listItems[index].remove();
    }
  }
});

// Listener que seleciona o item da lista
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('list-item')) {
    console.log('item da lista foi clicado.');
    clearLastSelected();
    event.target.classList.add('selected');
  }
});

// Listener que ao ter double-check marca como completa a tarefa
document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('list-item')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('completed');
      event.target.classList.remove('selected');
    }
  }
});

// Botão Salvar Tarefas - Requisito 12
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
function salvarTarefas() {
  localStorage.clear();
  const listaTarefas2 = document.querySelector('#lista-tarefas');
  /* Não preciso de 'For' porque o ID lista-tarefas já tem todo o HTML */
  localStorage.setItem('tarefas', listaTarefas2.innerHTML);
}

/* Movimento dos Botões com suas funções */
const botaoApagaTudo = document.querySelector('#apaga-tudo');
function apagaTudo() {
  const botaoApagaTudo2 = document.querySelectorAll('.tarefa');
  for (let index = 0; index < botaoApagaTudo2.length; index += 1) {
    botaoApagaTudo2[index].remove();
  }
  localStorage.clear();
}
