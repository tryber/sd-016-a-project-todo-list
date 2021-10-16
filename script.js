const click1 = document.querySelector('.criar-tarefa');
const click2 = document.querySelector('#apaga-tudo')

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



//function pintarDeCinza () {
  //coloreElementos.classList.toggle('batata')
  //console.log(coloreElementos);
//}
 
