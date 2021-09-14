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
  taskButton.innerText = 'Criar Tarefa'

  taskInputSection.appendChild(taskButton);
}

// 5 - Fazendo com que as tarefas seja adicionadas
function handleTaskButton() {
  let taskInput = document.getElementById('texto-tarefa');
  let taskButton = document.getElementById('criar-tarefa');
  let orderedList = document.getElementById('lista-tarefas');

  taskButton.addEventListener('click', () => {
    if (taskInput.value === '') {
      alert('Preencha o campo!');
    } else {
      let listItem = document.createElement('li');
      listItem.innerText = taskInput.value;
      orderedList.appendChild(listItem);
      taskInput.value = '';
    }
  })
}

window.onload = () => {
  createTitle();
  createParagraphOperation();
  createTaskInput();
  createOrderedList();
  createTaskButton();
  handleTaskButton();
};
