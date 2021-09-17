function html1() {
  // variáveis de elementos Pai dos elementos filhos abaixo.
  const header = document.querySelector('header');
  const section = document.querySelector('section');
  // cria o titulo.
  const h1 = document.createElement('h1');
  header.appendChild(h1);
  document.querySelector('h1').innerText = 'Minha Lista de Tarefas';
  // cria o paragrafo <p>.
  const paragrafo = document.createElement('p');
  section.appendChild(paragrafo);
  const p = document.querySelector('p');
  p.id = 'funcionamento';
  p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
}

function nav() {
  // constantes Pai.
  const tasks = document.querySelector('nav');
  const ol = document.createElement('ol');
  // cria o input.
  const input = document.createElement('input');
  tasks.appendChild(input);
  document.querySelector('input').id = 'texto-tarefa';
  // cria lista ordenada.
  tasks.appendChild(ol);
  ol.id = 'lista-tarefas';
  // cria o botão Na Página.
  const btn = document.createElement('button');
  tasks.appendChild(btn);
  document.querySelector('button').id = 'criar-tarefa';
  document.querySelector('button').innerText = 'Create';
}

function defaultColorWhite() {
  const colorWhite = document.querySelectorAll('li');
  for (let i = 0; i < colorWhite.length; i += 1) {
    colorWhite[i].style.backgroundColor = 'white';
  }
}

function selectColorGray() {
  const colorGray = document.querySelectorAll('li');
  for (let i = 0; i < colorGray.length; i += 1) {
    colorGray[i].addEventListener('click', function () {
      defaultColorWhite();
      colorGray[i].style.backgroundColor = 'gray';
    });
  }
}

function itemCompleted() {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('dblclick', function () {
      items[i].classList.add('completed');
      const itemsProperties = items[i].classList.value;
      if (itemsProperties === 'task completed') {
        items[i].addEventListener('dblclick', function () {
          items[i].classList.remove('completed');
        });
      }
    });
  }
}

function btnCreate() {
  nav();
  const olAcess = document.querySelector('ol');
  const inputText = document.querySelector('#texto-tarefa');
  const btnAcess = document.querySelector('#criar-tarefa');
  const error = document.createElement('p');
  const div = document.querySelector('div');
  div.appendChild(error);
  error.id = 'errorMsg';
  btnAcess.addEventListener('click', function () {
    if (inputText.value !== '') {
      const li = document.createElement('li');
      li.innerText = inputText.value;
      li.classList.add('task');
      olAcess.appendChild(li);
      inputText.value = '';
      document.querySelector('#errorMsg').innerText = '';
      selectColorGray();
      itemCompleted();
    } else {
      error.innerText = 'erro: Digite uma lista de tarefa !';
      error.style.color = 'red';
    }
    console.log(document.querySelector('p'));
  });
}

html1();
btnCreate();
