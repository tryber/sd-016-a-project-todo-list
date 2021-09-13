function addLi(selection) {
  const ol = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const buttonAdd = document.querySelector('#criar-tarefa');

  if (input.value !== '') {
    if (selection.target === buttonAdd) {
      const li = document.createElement('li');
      ol.appendChild(li).innerHTML = input.value;
      input.value = '';
    }
  }

  return ol;
}

document.addEventListener('click', addLi);