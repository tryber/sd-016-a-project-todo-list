const listaOrdenada = document.getElementById('lista-tarefas');
const botaoAdicionar = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const botaoApagarTudo = document.getElementById('apaga-tudo');
const botaoApagarFinalizados = document.getElementById('remover-finalizados');

botaoAdicionar.addEventListener('click', ()=> {
  listaOrdenada.appendChild(document.createElement('li'));
  listaOrdenada.lastChild.innerText = input.value;    
  
  listaOrdenada.lastChild.addEventListener('click', (event) => {
    const element = event.target;
    for (let x = 0; x < listaOrdenada.children.length; x += 1) {
      listaOrdenada.children[x].style.backgroundColor = 'white';
    };
    element.style.backgroundColor = 'rgb(128,128,128)';

  })

  listaOrdenada.lastChild.addEventListener('dblclick', (event) => {
    const element = event.target;
    
    if (element.className === 'completed') {
      element.className = '';
    } else {
      element.className = 'completed';
    }
  })

  input.value = '';
});

botaoApagarTudo.addEventListener('click', () => {
   do {
    listaOrdenada.children[0].remove();
  } while (listaOrdenada.children.length !== 0)
});

botaoApagarFinalizados.addEventListener('click', () => {
  let completed = document.getElementsByClassName('completed');
  do {
    completed[0].remove();
  } while (completed.length !== 0)
});
