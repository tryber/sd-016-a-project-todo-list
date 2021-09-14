// 1 - Adicionando header e título
function createTitle() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  header.id = 'header';
  title.innerText = 'Minha Lista de Tarefas';

  document.body.append(header);
  header.appendChild(title);
}

// 2 - Adicionando parágrafo de funcionalidade, embaixo do title
function createParagraphOperation() {
  const header = document.getElementById('header');
  const operation = document.createElement('p');

  operation.id = 'funcionamento';
  operation.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

  header.appendChild(operation);
}

// 3 - Adicionando input
function createTaskInput() {
  let taskInputSection = document.createElement('section');
  let taskInput = document.createElement('input');

  taskInputSection.id = 'input-section'
  taskInput.id = 'texto-tarefa';

  document.body.append(taskInputSection);
  taskInputSection.appendChild(taskInput);
}

// 4 - Adicionando uma lista ordenada
function createOrderedList() {
  let listSection = document.createElement('section');
  let orderedList = document.createElement('ol');

  listSection.id = 'list-section';
  orderedList.id = 'lista-tarefas';

  document.body.append(listSection);
  listSection.appendChild(orderedList);
}

// 5 - Criando botao para adicionar tarefas
function createTaskButton() {
  let taskInputSection = document.getElementById('input-section');
  let taskButton = document.createElement('button');
  taskButton.id = 'criar-tarefa';
  taskButton.innerText = 'Criar Tarefa';

  taskInputSection.appendChild(taskButton);
}

// 5 - Fazendo com que as tarefas seja adicionadas
// 6 - Ordenando por ordem de criacao
function handleTaskButton() {
  let taskInput = document.getElementById('texto-tarefa');
  let taskButton = document.getElementById('criar-tarefa');
  let orderedList = document.getElementById('lista-tarefas');

  taskButton.addEventListener('click', () => {
    if (taskInput.value === '') {
      alert('Preencha o campo!');
    } else {
      let listItem = document.createElement('li');
      listItem.className = 'item-task';
      listItem.innerText = taskInput.value;
      orderedList.appendChild(listItem);
      taskInput.value = '';
    }

    changeBgColorItemTask();
    completedTask();
  });
}

// 7 - Alterando a cor do fundo do item selecionado
// 8 - Fazendo com que somente um item fique selecionado
function changeBgColorItemTask() {
  let listItem = document.getElementsByClassName('item-task');
  let selectedItem = document.querySelector('.selected');

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].classList.remove('selected');
    listItem[i].addEventListener('click', () => {
      if (listItem[i] !== selectedItem) {
        if (selectedItem === null) {
          listItem[i].classList.add('selected');
          selectedItem = document.querySelector('.selected');
        } else {
          listItem[i].classList.add('selected');
          selectedItem.classList.remove('selected');
          selectedItem = document.querySelector('.selected');
        }
      }
    })
    
  }
}

function completedTask() {
  let listItem = document.getElementsByClassName('item-task');

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('dblclick', () => {
      if (listItem[i].classList.contains('completed')) {
        listItem[i].classList.remove('completed');
      } else {
        listItem[i].classList.add('completed');
      }
    })
  }
}

window.onload = () => {
  createTitle();
  createParagraphOperation();
  createTaskInput();
  createOrderedList();
  createTaskButton();
  handleTaskButton();
  changeBgColorItemTask();
  completedTask();
};
