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
  input.placeholder = 'Digite uma tarefa à fazer';
  section.appendChild(input);
}

function createUl() {
  const ol = document.createElement('ol');
  const main = document.querySelector('main');
  ol.id = 'lista-tarefas';
  main.appendChild(ol);
}

function createButInput() {
  const button = document.createElement('button');
  const section = document.querySelector('#content-input');
  button.id = 'criar-tarefa';
  button.innerHTML = 'Adicionar';
  section.appendChild(button);
}
createContentInput();
createInput();
createButInput();
createUl();

// funções acima são estrutura HTML fixa

// Usei a base do exercicio do Calendario

function addList() {
  const input = document.querySelector('#texto-tarefa');
  const button = document.querySelector('#criar-tarefa');
  const ol = document.querySelector('#lista-tarefas');
  // click
  button.addEventListener('click', () => {
    if (input.value.length > 0) {
      const addLi = document.createElement('li');
      addLi.classList.add('list');
      addLi.innerHTML = input.value;
      ol.appendChild(addLi);
      input.value = '';
    }
    // clickOl();
  });
}

addList();
// instutor Caique Coelho me ajudou a melhorar minha função de click
function clickOl() {
  const ol = document.querySelector('ol');
  ol.addEventListener('click', (evt) => {
    evt.target.style.backgroundColor = 'rgb(128, 128, 128) ';
  });
}

clickOl();

// function clickOl() {
//   const listOl = document.querySelectorAll('.list');
//   for (let i = 0; i < listOl.length; i += 1) {
//     const element = listOl[i];
//     element.addEventListener('click', (evt) => {
//       console.log(evt.target)
//       evt.target.style.backgroundColor = 'rgb(128, 128, 128) ';
//     });
//   }
// }
