const d = document;
const buttonAdd = d.querySelector('#criar-tarefa');
const lista = d.getElementById('lista-tarefas');
const buttonRemove = d.getElementById('apaga-tudo');
let itens = null

function disselectLi() {
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove('tarefa');
  }
}

function selectLi() {
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].addEventListener('click', (event) => {
      const evento = event.target;
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
      markLi()
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

buttonAdd.addEventListener('click', () => {
  const tarefa = d.getElementById('texto-tarefa').value;
  const item = d.createElement('li');
  item.innerHTML = tarefa;
  lista.appendChild(item);
  d.getElementById('texto-tarefa').value = '';
  itens = d.getElementsByTagName('li');
  selectLi();
  markLi();
});
