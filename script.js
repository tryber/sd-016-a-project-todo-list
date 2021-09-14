const nomeDoId = 'lista-tarefas';

// Adiciona cor de fundo
function color(event) {
  const allItems = document.querySelectorAll('.list-item');
  const paint = event;
  for (let i = 0; i < allItems.length; i += 1) {
    allItems[i].classList.remove('selected');
    paint.target.classList.add('selected');
  }
}
document.getElementById(nomeDoId).addEventListener('click', color);

// Cria a tarefa
function createTask() {
  const inputField = document.getElementById('texto-tarefa');
  const input = document.getElementById('texto-tarefa').value;
  if (input === '') {
    alert('Insira um texto válido!');
    return;
  }
  const ol = document.getElementById(nomeDoId);
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerHTML = input;
  inputField.value = '';
  ol.appendChild(li);
  li.addEventListener('click', color);
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

// Remover tarefas completas
function removeDone() {
  const list = document.getElementsByClassName('list-item');
  while (list.length > 0) {
    console.log('xablau');
  }
}
document.getElementById('remover-finalizados').addEventListener('click', removeDone);
