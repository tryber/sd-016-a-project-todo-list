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
