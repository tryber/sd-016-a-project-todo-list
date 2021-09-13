const listaOrdenada = document.getElementById('lista-tarefas');
const botaoAdicionar = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const botaoApagarTudo = document.getElementById('apaga-tudo');
const botaoApagarFinalizados = document.getElementById('remover-finalizados');
let n = JSON.parse(localStorage.getItem('counter'));
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');

if (n == null) {
  n = 0;
}

function selectListItem() {  // colocando a cor dos selecionados de cinza
  for (let i = 0; i < listaOrdenada.children.length; i += 1) { 
    listaOrdenada.children[i].addEventListener('click', (event) => {
      const element = event.target;
      for (let x = 0; x < listaOrdenada.children.length; x += 1) {
        listaOrdenada.children[x].style.backgroundColor = 'white';
      };
      element.style.backgroundColor = 'rgb(128,128,128)';
    });
  }  
}

function finishedListItem() {  // riscando os elementos que receberem o duplo click
  for (let l = 0; l < listaOrdenada.children.length; l += 1) {
    listaOrdenada.children[l].addEventListener('dblclick', (event) => {
      const element = event.target;
      
      if (element.className === 'completed') {
        element.className = '';
      } else {
        element.className = 'completed';
      }
    });
  }
}

if (localStorage.length > 0) { // pegando os itens da lista armazenados no localstorage

  for (let x = 0; x < localStorage.getItem('counter'); x += 1) {
      listaOrdenada.appendChild(document.createElement('li')).innerText = localStorage.getItem('valor' + x);
  }
}

const indexLength = JSON.parse(localStorage.getItem('index.length'));

for (let z = 0; z <= indexLength; z += 1) {
  for (let v = 0; v < JSON.parse(localStorage.getItem('counter')); v += 1) {
    if (v === JSON.parse(localStorage.getItem('index' + z))) {
      listaOrdenada.children[v].className = 'completed';
      console.log('classe adicionada ' + v);
    }
  }  
}

botaoAdicionar.addEventListener('click', ()=> { // criação dos elementos a partir do click no botao
  listaOrdenada.appendChild(document.createElement('li'));
  listaOrdenada.lastChild.innerText = input.value;

  selectListItem();

  listaOrdenada.lastChild.addEventListener('dblclick', (event) => {
    const element = event.target;
    
    if (element.className === 'completed') {
      element.className = '';
    } else {
      element.className = 'completed';
    }
  });

  input.value = '';
});

finishedListItem();

botaoSalvarTarefas.addEventListener('click', () => { // salva a lista no localStorage
  let k = 1;
  let n = 0;

  for (let x = 0; x < listaOrdenada.children.length; x += 1) {
    localStorage.setItem('valor' + n, listaOrdenada.children[x].innerText);
    n += 1; 
    if (listaOrdenada.children[x].className === 'completed') {
      localStorage.setItem('index' + k, x);
      localStorage.setItem('index.length', k)
      k += 1;
    }
  }

  localStorage.setItem('counter', n);
});

botaoApagarTudo.addEventListener('click', () => { // apaga todos os elementos da lista
  if(listaOrdenada.children.length > 0) {
    do {
      listaOrdenada.children[0].remove();
    } while (listaOrdenada.children.length !== 0)
  }
});

botaoApagarFinalizados.addEventListener('click', () => { // apaga aqueles elementos que foram riscados
  let completed = document.getElementsByClassName('completed');
  
  if(listaOrdenada.children.length > 0) {
    do {
      completed[0].remove();
    } while (completed.length !== 0)
  }
});
