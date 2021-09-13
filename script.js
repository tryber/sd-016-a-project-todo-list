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

window.onload = () => {
  createTitle();
  createParagraphOperation();
  createTaskInput();
};
