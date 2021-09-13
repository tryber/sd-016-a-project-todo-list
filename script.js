// 1 - Adicionando header e título
function createTitle() {
  let header = document.createElement('header');
  let title = document.createElement('h1');

  header.id = 'header';
  title.innerText = 'Minha Lista de Tarefas';

  document.body.append(header);
  header.appendChild(title);
}

window.onload = () => {
  createTitle();
}
