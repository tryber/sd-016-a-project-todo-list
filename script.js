const d = document;
const button = d.querySelector('#criar-tarefa');
const lista = d.getElementById('lista-tarefas');
let itens = null

button.addEventListener('click', () => {
  const tarefa = d.getElementById('texto-tarefa').value;
  const item = d.createElement('li');
  item.innerHTML = tarefa;
  lista.appendChild(item);
  d.getElementById('texto-tarefa').value = '';
  itens = d.getElementsByTagName('li');
  teste()
});

function teste() {
for (let index = 0; index < itens.length; index += 1) {
  itens[index].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    })
  }
}; 