
const button = document.querySelector('#criar-tarefa')
button.addEventListener('click', (event) => {
  let tarefa = document.getElementById('texto-tarefa').value;
  let lista = document.getElementById('lista-tarefas')
  let item = document.createElement('li')
  item.innerHTML = tarefa
  lista.appendChild(item)
  document.getElementById('texto-tarefa').value = ""
});
