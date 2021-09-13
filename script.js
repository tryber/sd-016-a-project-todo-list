function createContainer() {
  const div = document.createElement('div');
  div.id = 'container';
  document.body.appendChild(div);
}

function createHeader() {
  const header = document.createElement('header');
  const container = document.querySelector('#container');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Minha Lista de Tarefas';
  container.appendChild(header);
  header.appendChild(h1);
}

createContainer();
createHeader();

function createMain() {
  const main = document.createElement('main');
  const container = document.querySelector('#container');
  main.id = 'content-main';
  container.appendChild(main);
}

function createTagP() {
  const p = document.createElement('p');
  const main = document.querySelector('main');
  p.id = 'funcionamento';
  p.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  main.appendChild(p);
}

createMain();
createTagP();

function createContentInput() {
  const section = document.createElement('section');
  const main = document.querySelector('main');
  section.id = 'content-input';
  main.appendChild(section);
}

function createInput() {
  const input = document.createElement('input');
  const section = document.querySelector('#content-input');
  input.id = 'texto-tarefa';
  section.appendChild(input);
}
createContentInput();
createInput();
