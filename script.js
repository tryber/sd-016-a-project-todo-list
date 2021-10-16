// Recebi ajuda do Emerson, da Fumagalli e do Severo
const click1 = document.querySelector('.criar-tarefa');
const click2 = document.querySelector('#apaga-tudo');
const click3 = document.querySelector('#remover-finalizados');
const click4 = document.querySelector('#salvar-tarefas');
const click5 = document.querySelector('#remover-selecionado');

function atualizaLista(){
  const valor = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');
  item.className = 'tarefa';
  item.innerHTML = valor.value;
  lista.appendChild(item);
  valor.value = '';
  //item.addEventListener('click' , pintarDeCinza);
}

click1.addEventListener('click', atualizaLista);
const coloreElementos = document.querySelector('ol');

coloreElementos.addEventListener('click', (event) => {
  const descolorir = document.getElementsByTagName('li');
 for (let index = 0 ; index < descolorir.length ; index += 1) {
   descolorir[index].classList.remove('batata');
 }
 event.target.classList.add('batata');
})

coloreElementos.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed')
}
)

function apagaGeral () {
  return coloreElementos.innerHTML = '';
}

click2.addEventListener('click', apagaGeral);

function removeComplete (){
  const apaga = document.querySelectorAll('.completed');
  for (let index = 0 ; index < apaga.length ; index += 1) {
    coloreElementos.removeChild(apaga[index]);
  }
} 
click3.addEventListener('click',removeComplete )

function salvarLista () {
  return localStorage.setItem('lista',JSON.stringify(coloreElementos.innerHTML));
}

window.onload = () => {
  const info = JSON.parse(localStorage.getItem('lista'));
  coloreElementos.innerHTML = info
}

click4.addEventListener('click', salvarLista);

function removeSelected (){
  const apaga = document.querySelectorAll('.batata');
  for (let index = 0 ; index < apaga.length ; index += 1) {
    coloreElementos.removeChild(apaga[index]);
  }
} 
click5.addEventListener('click',removeSelected )
 
