// 1 - Adicionando header e título
function createTitle() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  header.id = 'header';
  title.innerText = 'Minha Lista de Tarefas';

  document.body.append(header);
  header.appendChild(title);
}

function createParagraphOperation() {
  const header = document.getElementById('header');
  const operation = document.createElement('p');
  
  operation.id = 'funcionamento';
  operation.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

  header.appendChild(operation);
}

window.onload = () => {
  createTitle();
  createParagraphOperation();
}
