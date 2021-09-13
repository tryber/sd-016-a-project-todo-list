const nomeDoId = 'lista-tarefas';

// Cria a tarefa
function createTask() {
  const inputField = document.getElementById('texto-tarefa');
  const input = document.getElementById('texto-tarefa').value;
  if (input === '') {
    alert('Insira um texto válido!');
    return;
  }
  const a = document.createElement('a');
  const ol = document.getElementById(nomeDoId);
  const li = document.createElement('li');
  a.className = 'list-item';
  a.innerHTML = input;
  li.appendChild(a);
  inputField.value = '';
  ol.appendChild(li);
}
document.getElementById('criar-tarefa').addEventListener('click', createTask);

// Deleta todas tarefas
function deleteAll() {
  const elements = document.getElementById(nomeDoId);
  while (elements.firstChild) {
    elements.removeChild(elements.lastChild);
  }
}
document.getElementById('apaga-tudo').addEventListener('click', deleteAll);

// Adiciona traço
function lineThrough(event) {
  event.target.classList.toggle('completed');
}
document.getElementById(nomeDoId).addEventListener('dblclick', lineThrough);

// Adiciona cor de fundo
function color(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
document.getElementById(nomeDoId).addEventListener('click', color);
