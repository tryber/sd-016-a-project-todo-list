const listaOrdenada = document.getElementById('lista-tarefas');
const botaoAdicionar = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const botaoApagarTudo = document.getElementById('apaga-tudo');
const botaoApagarFinalizados = document.getElementById('remover-finalizados');
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
const botaoLimparLista = document.getElementById('limpar-lista');
const botaoMoveUp = document.getElementById('mover-cima');
const botaoMoveDown = document.getElementById('mover-baixo');
const botaoRemoverSelecionado = document.getElementById('remover-selecionado');
let n = JSON.parse(localStorage.getItem('counter'));

if (n == null) {
  n = 0;
}

function selectListItem() { // colocando a cor dos selecionados de cinza
  for (let i = 0; i < listaOrdenada.children.length; i += 1) {
    listaOrdenada.children[i].addEventListener('click', (event) => {
      const element = event.target;
      for (let x = 0; x < listaOrdenada.children.length; x += 1) {
        listaOrdenada.children[x].style.backgroundColor = 'white';
      }
      element.style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

function checker(element) {
  if (element.className === 'completed') {
    element.className = '';
  } else {
    element.className = 'completed';
  }
}

function finishedListItem() { // riscando os elementos que receberem o duplo click
  for (let l = 0; l < listaOrdenada.children.length; l += 1) {
    listaOrdenada.children[l].addEventListener('dblclick', (event) => {
      const element = event.target;
      checker(element);
    });
  }
}

if (localStorage.length > 0) { // pegando os itens da lista armazenados no localstorage
  for (let x = 0; x < localStorage.getItem('counter'); x += 1) {
    listaOrdenada.appendChild(document.createElement('li')).innerText = localStorage.getItem('valor' + x);
  }
}

const indexLength = JSON.parse(localStorage.getItem('index.length'));

for (let z = 0; z <= indexLength; z += 1) { // codigo usado para identificar quais itens de tarefa possuem o line through, para salvar e recupera-lo do localstorage com a classe ja definida
  for (let v = 0; v < JSON.parse(localStorage.getItem('counter')); v += 1) {
    if (v === JSON.parse(localStorage.getItem('index' + z))) {
      listaOrdenada.children[v].className = 'completed';
    }
  }
}

botaoAdicionar.addEventListener('click', () => { // criação dos elementos a partir do click no botao
  listaOrdenada.appendChild(document.createElement('li'));
  listaOrdenada.lastChild.innerText = input.value;

  selectListItem();

  listaOrdenada.lastChild.addEventListener('dblclick', (event) => {
    const element = event.target;
    checker(element);
  });

  input.value = ''; // seta o valor do input como vazio depois de ter o seu valor adicionado a lista
});

botaoSalvarTarefas.addEventListener('click', () => { // salva a lista no localStorage
  let k = 1;
  let z = 0;
  localStorage.clear();

  for (let x = 0; x < listaOrdenada.children.length; x += 1) {
    localStorage.setItem('valor' + z, listaOrdenada.children[x].innerText);
    z += 1;
    if (listaOrdenada.children[x].className === 'completed') {
      localStorage.setItem('index' + k, x);
      localStorage.setItem('index.length', k);
      k += 1;
    }
  }

  localStorage.setItem('counter', z);
});

finishedListItem();
selectListItem();

botaoApagarTudo.addEventListener('click', () => { // apaga todos os elementos da lista
  if (listaOrdenada.children.length > 0) {
    do {
      listaOrdenada.children[0].remove();
    } while (listaOrdenada.children.length !== 0);
  }
});

botaoApagarFinalizados.addEventListener('click', () => { // apaga aqueles elementos que foram riscados
  const completed = document.getElementsByClassName('completed');

  if (listaOrdenada.children.length > 0) {
    do {
      completed[0].remove();
    } while (completed.length !== 0);
  }
});

botaoLimparLista.addEventListener('click', () => {
  localStorage.clear();
});

botaoMoveUp.addEventListener('click', () => {
  let string = '';

  for (let x = 0; x < listaOrdenada.children.length; x += 1) {
    if (listaOrdenada.children[x].style.backgroundColor === 'rgb(128, 128, 128)' && x - 1 >= 0) {
      string = listaOrdenada.children[x].innerText;
      listaOrdenada.children[x].innerText = listaOrdenada.children[x - 1].innerText;
      listaOrdenada.children[x].style.backgroundColor = 'white';
      listaOrdenada.children[x - 1].style.backgroundColor = 'rgb(128, 128, 128)';
      listaOrdenada.children[x - 1].innerText = string;

      if (listaOrdenada.children[x].className === 'completed') {
        listaOrdenada.children[x].className = '';
        listaOrdenada.children[x - 1].className = 'completed';
      }
    }
  }
});

botaoMoveDown.addEventListener('click', () => {
  let string = '';

  for (let x = listaOrdenada.children.length - 1; x >= 0; x -= 1) {
    if (listaOrdenada.children[x].style.backgroundColor === 'rgb(128, 128, 128)' && x < listaOrdenada.children.length - 1) {
      string = listaOrdenada.children[x + 1].innerText;
      listaOrdenada.children[x + 1].innerText = listaOrdenada.children[x].innerText;
      listaOrdenada.children[x].innerHTML = string;
      listaOrdenada.children[x].style.backgroundColor = 'white';
      listaOrdenada.children[x + 1].style.backgroundColor = 'rgb(128,128,128)';

      if (listaOrdenada.children[x].className === 'completed') {
        listaOrdenada.children[x].className = '';
        listaOrdenada.children[x + 1].className = 'completed';
      }
    }
  }
});

botaoRemoverSelecionado.addEventListener('click', () => {
  for (let x = 0; x < listaOrdenada.children.length; x += 1) {
    if (listaOrdenada.children[x].style.backgroundColor === 'rgb(128, 128, 128)') {
      listaOrdenada.children[x].remove();
    }
  }
});
