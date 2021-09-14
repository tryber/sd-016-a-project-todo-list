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
  const li = document.querySelectorAll('li');

  for (let index = 0; index < li.length; index += 1) {
    if (selection.target === li[index]) {
      for (let indexRemove = 0; indexRemove < li.length; indexRemove += 1) {
        li[indexRemove].classList.remove('selected')
        li[indexRemove].style.backgroundColor = 'white';
      }

      li[index].classList.toggle('selected');
      li[index].style.backgroundColor = 'rgb(128,128,128)';
    }
  }
}

function doubleClick(selection) {
  const li = document.querySelectorAll('li');

  for (let index = 0; index < li.length; index += 1) {
    if (selection.target === li[index]) {
      li[index].classList.toggle('risc');
      if (li[index].classList.contains('risc')) {
        li[index].style.textDecoration = 'line-through'
      } else {
        li[index].style.textDecoration = 'none';
      }
    }
  }
}

document.addEventListener('click', addLi);
document.addEventListener('click', changeColorItem);
document.addEventListener('dblclick', doubleClick);
