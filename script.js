function itemStyles() {
  const items = document.querySelectorAll('.list-item');
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', () => {
      items[i].classList.toggle(':active');
    });
    items[i].addEventListener('click', () => {
      items[i].classList.toggle('completed');
    });
  }
}

function createTask() {
  const inputField = document.getElementById('texto-tarefa');
  const input = document.getElementById('texto-tarefa').value;
  if (input === '') {
    alert('Insira um texto válido!');
    return;
  }
  const a = document.createElement('a');
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  a.className = 'list-item';
  a.innerHTML = input;
  li.appendChild(a);
  inputField.value = '';
  ol.appendChild(li);
}

function deleteAll() {
  const elements = document.getElementById('lista-tarefas');
  while (elements.firstChild) {
    elements.removeChild(elements.lastChild);
  }
}
