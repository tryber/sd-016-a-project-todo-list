/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable eqeqeq */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */

const toDoList = document.querySelector('#lista-tarefas');
const btnCreateItem = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const btnClearAll = document.querySelector('#apaga-tudo');
const btnClearCompleted = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');
const btnRemoveSelected = document.querySelector('#remover-selecionado');

// Ao clicar botão adiciona novos itens
btnCreateItem.addEventListener('click', () => {
  if (textTask.value == '') {
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

// Ao clicar botão remove todos os itens da lista
btnClearAll.addEventListener('click', () => {
  const listItem = document.querySelectorAll('.list-item');

  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove();
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

btnMoveUp.addEventListener('click', () => {
  const listItem = document.querySelectorAll('.list-item');

  for (let index = 0; index < listItem.length; index += 1) {
    const isSelectedItem = listItem[index].classList.contains('selected');
    const isValidMovement = (index - 1 >= 0);

    if (isSelectedItem && isValidMovement) {
      const selectedItem = listItem[index];
      const previousElement = listItem[index - 1];
      let auxiliar;

      auxiliar = previousElement.textContent;
      previousElement.innerHTML = selectedItem.textContent;
      selectedItem.innerHTML = auxiliar;

      auxiliar = previousElement.className;
      previousElement.className = selectedItem.className;
      selectedItem.className = auxiliar;
    }
  }
});

btnMoveDown.addEventListener('click', () => {
  const listItem = document.querySelectorAll('.list-item');

  for (let index = listItem.length - 1; index >= 0; index -= 1) {
    const isSelectedItem = listItem[index].classList.contains('selected');
    const isValidMovement = (index + 1 < listItem.length);

    if (isSelectedItem && isValidMovement) {
      const selectedItem = listItem[index];
      const nextElement = listItem[index + 1];
      let auxiliar;

      auxiliar = nextElement.textContent;
      nextElement.innerHTML = selectedItem.textContent;
      selectedItem.innerHTML = auxiliar;

      auxiliar = nextElement.className;
      nextElement.className = selectedItem.className;
      selectedItem.className = auxiliar;
    }
  }
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

window.onload = function () {
  loadTasks();
};
