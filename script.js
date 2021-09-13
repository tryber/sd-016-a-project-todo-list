const listaOrdenada = document.getElementById('lista-tarefas');
const botaoAdicionar = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

botaoAdicionar.addEventListener('click', ()=> {
  listaOrdenada.appendChild(document.createElement('li'));
  listaOrdenada.lastChild.innerText = input.value;

  listaOrdenada.lastChild.addEventListener('click', (event)=> {
    const element = event.target;
    const previousElement = document.getElementsByClassName('selected')[0];

    if (previousElement !== undefined) {
      previousElement.style.backgroundColor = 'white';
      previousElement.className = '';
    }

    element.className += ' selected';
    element.style.backgroundColor = 'rgb(128, 128, 128)';

  });

  input.value = '';
});