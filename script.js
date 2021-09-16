const btn = document.getElementById('criar-tarefa');
const tarefaTxt = document.getElementById('texto-tarefa');
const selected = document.querySelector('.highlight');
const tarefaList = document.getElementById('lista-tarefas');
const allList = document.getElementsByTagName('li');
const delAll = document.getElementById('apaga-tudo');
const removeDone = document.getElementById('remover-finalizados');
const saveTarefas = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const removSelected = document.getElementById('remover-selecionado');

const tempList = [];
let i = 0;

function dblClick(origin) {
  origin.target.classList.toggle('completed');
}

function click(origin) {
  const liQ = document.querySelectorAll('li');
  // Por algum motivo o JS identificou como problema usar o origin sem setar const.
  const origem = origin;
  for (let j = 0; j < liQ.length; j += 1) {
    liQ[j].id = '';
    liQ[j].classList.remove('highlight');
  }
  origem.target.classList.add('highlight');
  origem.target.id = 'selecionado';
}

function addClicks() {
  const liQ = document.querySelectorAll('li');
  for (let j = 0; j < liQ.length; j += 1) {
    liQ[j].addEventListener('click', click);
    liQ[j].addEventListener('dblclick', dblClick);
  }
}

function list() {
  const li = document.createElement('li');
  const lista = document.createTextNode(tempList[i]);
  li.appendChild(lista);
  tarefaList.appendChild(li);
  addClicks();
  i += 1;
}

delAll.addEventListener('click', () => {
  while (tarefaList.firstChild) {
    tarefaList.removeChild(tarefaList.firstChild);
  }
  tempList.splice(0, tempList.length);
  i = 0;
  window.localStorage.clear();
});

removeDone.addEventListener('click', () => {
  for (i = 0; i < allList.length; i += 1) {
    if (allList[i].className === 'completed') {
      tarefaList.removeChild(allList[i]);
    }
    if (allList[i].className === 'highlight completed') {
      tarefaList.removeChild(allList[i]);
    }
  }
});

saveTarefas.addEventListener('click', () => {
  const savedList = [];
  const li = document.querySelectorAll('li');
  if (li.length > 0) {
    for (i = 0; i < li.length; i += 1) {
      savedList.push(li[i].outerHTML);
    }
  }
  localStorage.setItem('Todo', JSON.stringify(savedList));
});

moveUp.addEventListener('click', () => {
  if (selected !== null) {
    const txtAtual = selected.outerHTML;
    const anterior = selected.previousSibling;
    if (txtAtual !== document.querySelector('li').outerHTML) {
      selected.previousSibling.outerHTML = txtAtual;
      selected.outerHTML = anterior.outerHTML;
    }
    addClicks();
  }
});

moveDown.addEventListener('click', () => {
  if (selected !== null) {
    const txtAtual = selected.outerHTML;
    const proximo = selected.nextSibling;
    const li = document.querySelectorAll('li');
    if (li[li.length - 1].outerHTML !== txtAtual) {
      selected.nextSibling.outerHTML = txtAtual;
      selected.outerHTML = proximo.outerHTML;
    }
    addClicks();
  }
});

removSelected.addEventListener('click', () => {
  if (selected !== null) {
    selected.parentNode.removeChild(selected);
  }
});

btn.addEventListener('click', () => {
  if (tarefaTxt.value !== '') {
    tempList.push(tarefaTxt.value);
    console.log(tempList);
    list();
    tarefaTxt.value = '';
  }
});

window.onload = () => {
  const todo = JSON.parse(localStorage.getItem('Todo'));
  const li = document.createElement('li');
  if (localStorage.getItem('Todo') !== null) {
    for (i = 0; i < todo.length; i += 1) {
      document.querySelector('#lista-tarefas').appendChild(li);
      li.outerHTML = todo[i];
    }
    addClicks();
    i = document.querySelectorAll('li').length;
  }
};
