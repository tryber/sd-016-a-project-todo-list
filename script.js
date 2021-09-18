// 1 - Adicionando header e título
function createTitle() {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  header.id = 'header';
  title.innerText = 'Minha Lista de Tarefas';
  document.body.append(header);
  header.appendChild(title);
}
createTitle();

// 2 - Adicionando parágrafo de funcionalidade, embaixo do title
function createParagraphOperation() {
  const header = document.getElementById('header');
  const operation = document.createElement('p');
  operation.id = 'funcionamento';
  operation.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(operation);
}
createParagraphOperation();

// 3 - Adicionando input
function createTaskInput() {
  const taskInputSection = document.createElement('section');
  const taskInput = document.createElement('input');
  taskInputSection.id = 'input-section';
  taskInput.id = 'texto-tarefa';
  document.body.append(taskInputSection);
  taskInputSection.appendChild(taskInput);
}
createTaskInput();

// 4 - Adicionando uma lista ordenada
function createOrderedList() {
  const listSection = document.createElement('section');
  const orderedList = document.createElement('ol');
  listSection.id = 'list-section';
  orderedList.id = 'lista-tarefas';
  document.body.append(listSection);
  listSection.appendChild(orderedList);
}
createOrderedList();

// 5 - Criando botao para adicionar tarefas
const taskInputSection = document.getElementById('input-section');
function createTaskButton() {
  const taskButton = document.createElement('button');
  taskButton.id = 'criar-tarefa';
  taskButton.innerText = 'Criar Tarefa';
  taskInputSection.appendChild(taskButton);
}
createTaskButton();

// 5 - Fazendo com que as tarefas seja adicionadas
// 6 - Ordenando por ordem de criacao
const taskInput = document.getElementById('texto-tarefa');
const taskButton = document.getElementById('criar-tarefa');
const orderedList = document.getElementById('lista-tarefas');
function handleTaskButton() {
  if (taskInput.value === '') {
    alert('Preencha o campo!');
  } else {
    const listItem = document.createElement('li');
    listItem.className = 'item-task';
    listItem.innerText = taskInput.value;
    orderedList.appendChild(listItem);
    taskInput.value = '';
  }
}
taskButton.addEventListener('click', handleTaskButton);

// 7 - Alterando a cor do fundo do item selecionado
// 8 - Fazendo com que somente um item fique selecionado
function changeBgColorItemTask(event) {
  const listItem = document.getElementsByClassName('item-task');

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}
orderedList.addEventListener('click', changeBgColorItemTask);

// 9 - Clicando duas vezes em um item faz com que ela seja completado, sendo riscado
function completedTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
orderedList.addEventListener('dblclick', completedTask);

// 10 - Criando o botao que sera usado na proxima funcao para apagar todos os itens
function createDeleteTasksButton() {
  const deleteTasksButton = document.createElement('button');

  deleteTasksButton.id = 'apaga-tudo';
  deleteTasksButton.innerText = 'Apagar Tudo';
  taskInputSection.appendChild(deleteTasksButton);
}
createDeleteTasksButton();

// 10 - Fazendo com o que o botao apague todos os itens da lista
const deleteTasksButton = document.getElementById('apaga-tudo');
function deleteAllTasks() {
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  // Utilizando while para verificar enquanto a lista estiver um elemento, ele ira remover (ultimo), ate a lista ficar vazia
  while (orderedList.lastElementChild) {
    orderedList.removeChild(orderedList.lastElementChild);
  }
}
deleteTasksButton.addEventListener('click', deleteAllTasks);

// 11 - Criando o botao que sera usado na proxima funcao para apagar todos os itens completados
function createDeleteTasksComplete() {
  const deleteCompletedTasksButton = document.createElement('button');
  deleteCompletedTasksButton.id = 'remover-finalizados';
  deleteCompletedTasksButton.innerText = 'Apagar Completados';

  taskInputSection.appendChild(deleteCompletedTasksButton);
}
createDeleteTasksComplete();

// 11 - Apagando os itens marcados como completo
const deleteCompletedTasksButton = document.getElementById('remover-finalizados');
function deleteCompletedTasks() {
  const completedTasks = orderedList.querySelectorAll('.completed');

  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
}
deleteCompletedTasksButton.addEventListener('click', deleteCompletedTasks);

// BÔNUS
// 11 - Criando botao que sera usado para salvar
function createSaveTasksButton() {
  const saveTasksButton = document.createElement('button');
  saveTasksButton.id = 'salvar-tarefas';
  saveTasksButton.innerText = 'Salvar';

  taskInputSection.appendChild(saveTasksButton);
}
createSaveTasksButton();

// 11 - Salvando o conteudo da litsta (inner html das 'li') no local storage
const saveTasksButton = document.getElementById('salvar-tarefas');
function saveTasks() {
  const listItem = document.querySelectorAll('li');
  const tasks = [];
  listItem.forEach((item) => {
    tasks.push({
      text: item.innerText,
      completed: item.classList.contains('completed'),
    });
  });
  localStorage.setItem('Task', JSON.stringify(tasks));
}
saveTasksButton.addEventListener('click', saveTasks);

// 11 - Carregando o conteudo do localstorage
const tasks = JSON.parse(localStorage.getItem('Task'));
const taskKeys = [];
function loadTask() {
  for (let i = 0; i < taskKeys.length; i += 1) {
    if (taskKeys[i].completed === true) {
      const listItem = document.createElement('li');
      listItem.className = 'item-task completed';
      listItem.innerText = taskKeys[i].text;
      orderedList.appendChild(listItem);
    } else {
      const listItem = document.createElement('li');
      listItem.className = 'item-task';
      listItem.innerText = taskKeys[i].text;
      orderedList.appendChild(listItem);
    }
  }
}

function handleLoadTasks() {
  if (tasks === null) return;
  for (let i = 0; i < tasks.length; i += 1) {
    taskKeys.push(tasks[i]);
  }
  loadTask();
}

// 13 - Criando botoes para mover para cima e baixo
function createMovesButton() {
  const moveUpButton = document.createElement('button');
  const moveDownButton = document.createElement('button');
  moveUpButton.id = 'mover-cima';
  moveUpButton.innerText = 'Mover Para Cima';
  moveDownButton.id = 'mover-baixo';
  moveDownButton.innerText = 'Mover Para Baixo';
  taskInputSection.appendChild(moveUpButton);
  taskInputSection.appendChild(moveDownButton);
}
createMovesButton();

// 13 - Movimentando o item selecionado para cima ou para baixo
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
function moveTaskUp() {
  const listItem = document.querySelectorAll('li');
  const taskSelected = document.querySelector('.selected');

  if (orderedList.firstChild === taskSelected) return;

  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i] === taskSelected) {
      const itemTask = listItem[i].innerText;
      const auxItemTask = listItem[i - 1].innerText;

      listItem[i - 1].innerText = itemTask;
      listItem[i].innerText = auxItemTask;

      listItem[i - 1].classList.add('selected');
      listItem[i].classList.remove('selected');
    }
  }
}

function moveTaskDown() {
  const listItem = document.querySelectorAll('li');
  const taskSelected = document.querySelector('.selected');

  if (orderedList.lastChild === taskSelected) return;

  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i] === taskSelected) {
      const itemTask = listItem[i].innerText;
      const auxItemTask = listItem[i + 1].innerText;

      listItem[i + 1].innerText = itemTask;
      listItem[i].innerText = auxItemTask;

      listItem[i + 1].classList.add('selected');
      listItem[i].classList.remove('selected');
    }
  }
}

moveUpButton.addEventListener('click', moveTaskUp);
moveDownButton.addEventListener('click', moveTaskDown);

// 14 - Criando os botoes para a proxima funcao
function createDeleteSelectedTaskButton() {
  const deleteSelectedTaskButton = document.createElement('button');

  deleteSelectedTaskButton.id = 'remover-selecionado';
  deleteSelectedTaskButton.innerText = 'Apagar Selecionado';

  taskInputSection.appendChild(deleteSelectedTaskButton);
}
createDeleteSelectedTaskButton();

// 14 - Apagando somente o item selecionado
const deleteSelectedTaskButton = document.getElementById('remover-selecionado');
function deleteSelectedTask() {
  const selectedTask = orderedList.querySelector('.selected');
  selectedTask.remove();
}
deleteSelectedTaskButton.addEventListener('click', deleteSelectedTask);

window.onload = () => {
  handleLoadTasks();
};
