
const button = document.querySelector('#criar-tarefa')
button.addEventListener('click', (event) => {
  const tarefa = document.getElementById('texto-tarefa').value;
  let lista = document.getElementById('lista-tarefa')
  let item = document.createElement('li')
  item.innerHTML = tarefa
  lista.appendChild(item)
});
