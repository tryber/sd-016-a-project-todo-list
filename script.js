function addTitle() {
  const title = document.createElement('h1');
  title.innerText = 'Minha Lista de Tarefas';
  document.querySelector('header').appendChild(title);
}
addTitle();

function addParagraph() {
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  document.querySelector('main').appendChild(paragraph);
}
addParagraph();

function addInput() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  document.querySelector('main').appendChild(input);
}
addInput();

function addOlist() {
  const oList = document.createElement('ol');
  oList.id = 'lista-tarefas';
  document.querySelector('main').appendChild(oList);
}
addOlist();
