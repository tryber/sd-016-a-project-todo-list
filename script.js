function removerselected() {
  const parent = document.querySelector('#selected').parentElement;
  parent.removeChild(document.querySelector('#selected'));
}
function CompletTask(origin) {
  const origem = origin;
  if (origem.target.className.includes('completed')) {
    origem.target.className = 'Tarefa';
  } else {
    origem.target.className += ' completed';
  }
}
function eraselist() {
  const lista = document.querySelectorAll('.Tarefa');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].parentElement.removeChild(lista[i]);
  }
  localStorage.setItem('ListaVazia', true);
}
function removerfinalizados() {
  const lista = document.querySelectorAll('.completed');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].parentElement.removeChild(lista[i]);
  }
}

function savelist() {
  if (document.querySelectorAll('.Tarefa').length !== 0) {
    const lista = [];
    const values = document.querySelectorAll('li');
    for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
      lista.push(values[i].outerHTML);
    }
    localStorage.setItem('Tarefas', JSON.stringify(lista));
    console.log(localStorage.getItem('Tarefas')[0]);
    localStorage.setItem('ListaVazia', false);
  }
}
function ClickTarefa(origin) {
  const origem = origin;
  const tarefas = document.querySelectorAll('.Tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = 'white';
    tarefas[i].id = '';
  }
  origem.target.id = 'selected';
  origem.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addEventos() {
  const tarefas = document.querySelectorAll('.Tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].addEventListener('click', ClickTarefa);
    tarefas[i].addEventListener('dblclick', CompletTask);
  }
}
function MoveUp() {
  if (document.querySelectorAll('#selected').length !== 0) {
    const selecionado = document.querySelector('#selected').outerHTML;
    if (selecionado !== document.querySelector('li').outerHTML) {
      const cima = document.querySelector('#selected').previousSibling.outerHTML;
      document.querySelector('#selected').previousSibling.outerHTML = selecionado;
      document.querySelector('#selected').nextSibling.outerHTML = cima;
    }
    addEventos();
  }
}
function MoveDown() {
  if (document.querySelectorAll('#selected').length !== 0) {
    const selecionado = document.querySelector('#selected').outerHTML;
    const lista = document.querySelectorAll('li');
    if (selecionado !== document.querySelectorAll('li')[lista.length - 1].outerHTML) {
      const baixo = document.querySelector('#selected').nextSibling.outerHTML;
      document.querySelector('#selected').nextSibling.outerHTML = selecionado;
      document.querySelector('#selected').outerHTML = baixo;
    }
    addEventos();
  }
}
function addTask() {
  const tarefatexto = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  const tarefa = document.createElement('li');
  tarefa.addEventListener('click', ClickTarefa);
  tarefa.addEventListener('dblclick', CompletTask);
  tarefa.innerText = tarefatexto;
  tarefa.className = 'Tarefa';
  document.querySelector('#lista-tarefas').appendChild(tarefa);
}
function addprobutao() {
  const butao = document.querySelector('.butao');
  butao.addEventListener('click', removerfinalizados);
  butao.addEventListener('click', removerselected);
  butao.addEventListener('click', eraselist);
  butao.addEventListener('click', savelist);
  butao.addEventListener('click', MoveUp);
  butao.addEventListener('click', MoveDown);
  butao.addEventListener('click', addTask);
}

window.onload = function load() {
  if (localStorage.getItem('Tarefas') !== null) {
    const tarefas = JSON.parse(localStorage.getItem('Tarefas'));
    console.log(tarefas);
    for (let i = 0; i < tarefas.length; i += 1) {
      console.log('entrou');
      const li = document.createElement('li');
      document.querySelector('#lista-tarefas').appendChild(li);
      li.outerHTML = tarefas[i];
    }
    addEventos();
  }
  addprobutao();
};
