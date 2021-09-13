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
