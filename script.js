function html1(){
  // variáveis de elementos Pai dos elementos filhos abaixo.
  let body = document.querySelector('body');
  let header = document.querySelector('header');
  let section = document.querySelector('section');
  let nav = document.querySelector('nav');
  // cria o titulo.
  let h1 = document.createElement('h1');
  header.appendChild(h1);
  document.querySelector('h1').innerText = 'Minha Lista de Tarefas';
  // cria o paragrafo <p>.
  let paragrafo = document.createElement('p');
  section.appendChild(paragrafo);
  document.querySelector('p').id = 'funcionamento';
  document.querySelector('p').innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  // cria o input.
  let input = document.createElement('input');
  nav.appendChild(input);
  document.querySelector('input').id = 'texto-tarefa';
}
html1();

function nav() {
  let nav = document.querySelector('nav');
  let ol = document.createElement('ol');
  // cria lista ordenada.
  nav.appendChild(ol);
  ol.id = 'lista-tarefas';
  // cria botão.
  let btn = document.createElement('button');
  nav.appendChild(btn);
  document.querySelector('button').id = 'criar-tarefa';
}
nav();
