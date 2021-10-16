const click1 = document.querySelector('.criar-tarefa');
const coloreElementos = document.querySelector('.tarefa')
function atualizaLista(){
  const valor = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');
  item.className = 'tarefa';
  item.innerHTML = valor.value;
  lista.appendChild(item);
  valor.value = '';
}
click1.addEventListener('click', atualizaLista);
coloreElementos.addEventListener('click' , pintarDeCinza)

function pintarDeCinza () {
  coloreElementos.setAttribute('style', 'background-color: rgb(128, 128, 128');
}

