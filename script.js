function addLi(selection) {
  const ol = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const buttonAdd = document.querySelector('#criar-tarefa');

  if (selection.target === buttonAdd && input.value !== '') {
    const li = document.createElement('li');

    ol.appendChild(li).innerHTML = input.value;
    input.value = '';
  }

  return ol;
}

function changeColorItem(selection) {
  const li = document.querySelector('li');

  if (selection.target === li) {
    li.style.backgroundColor = 'rgb(128,128,128)';
  }
}

document.addEventListener('click', addLi);
document.addEventListener('click', changeColorItem);
