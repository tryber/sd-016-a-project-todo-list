const listaOrdenada = document.getElementById('lista-tarefas');
const botaoAdicionar = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const botaoApagarTudo = document.getElementById('apaga-tudo');

botaoAdicionar.addEventListener('click', ()=> {
  listaOrdenada.appendChild(document.createElement('li'));
  listaOrdenada.lastChild.innerText = input.value;    
  
  listaOrdenada.lastChild.addEventListener('click', (event) => {
    for (let x = 0; x < listaOrdenada.children.length; x += 1) {
      listaOrdenada.children[x].style.backgroundColor = 'white';
    };
    event.target.style.backgroundColor = 'rgb(128,128,128)';

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
