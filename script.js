const click1 = document.querySelector('.criar-tarefa');

function atualizaLista(){
  const valor = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');
  item.className = 'tarefa';
  item.innerHTML = valor.value;
  lista.appendChild(item);
  valor.value = '';
  item.addEventListener('click' , pintarDeCinza);
}

click1.addEventListener('click', atualizaLista);
const coloreElementos = document.querySelector('ol');
coloreElementos.addEventListener('click', (event) => {
  event.target.setAttribute('style', 'background-color: rgb(128, 128, 128)');
})

//function pintarDeCinza () {
  //coloreElementos.classList.toggle('batata')
  //console.log(coloreElementos);
//}
 
