const d = document;
const button = d.querySelector('#criar-tarefa');
const lista = d.getElementById('lista-tarefas');
let itens = null

function disselectLi() {
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove('tarefa');
  }
};

function selectLi() {
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].addEventListener('click', (event) => {
      const evento = event.target
      disselectLi();
      evento.classList.add('tarefa');
    });
  }
}

function unmarkLi() {
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].addEventListener('dblclick', (event) => {
      const evento = event.target;
      evento.classList.remove('completed');
    });
  }
}

function markLi() {
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].addEventListener('dblclick', (event) => {
      const evento = event.target;
      evento.classList.add('completed');
      unmarkLi();
    });
  }
}

button.addEventListener('click', () => {
  const tarefa = d.getElementById('texto-tarefa').value;
  const item = d.createElement('li');
  item.innerHTML = tarefa;
  lista.appendChild(item);
  d.getElementById('texto-tarefa').value = '';
  itens = d.getElementsByTagName('li');
  selectLi();
  markLi();
});
