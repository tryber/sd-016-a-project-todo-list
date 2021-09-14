function addLi(selection) {
  const ol = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const buttonAdd = document.querySelector('#criar-tarefa');

  if (selection.target === buttonAdd && input.value !== '') {
    const li = document.createElement('li');

    ol.appendChild(li).innerHTML = input.value;
    input.value = '';
  }
}

function changeColorItem(selection) {
  const li = document.querySelectorAll('li');

  li.forEach((item) => {
    const itemLet = item;
    itemLet.classList.remove('selected');
    itemLet.style.backgroundColor = 'rgb(93, 93, 93)';
  });

  li.forEach((item) => {
    if (selection.target === item) {
      const itemLet = item;
      itemLet.classList.add('selected');
      itemLet.style.backgroundColor = 'rgb(128,128,128)';
    }
  });
}

function doubleClick(selection) {
  const li = document.querySelectorAll('li');

  li.forEach((item) => {
    const itemLet = item;
    if (selection.target === item) {
      itemLet.classList.toggle('completed');
      if (item.classList.contains('completed')) {
        itemLet.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      } else {
        itemLet.style.textDecoration = 'none';
      }
    }
  });
}

function cleanListAll(selection) {
  const li = document.querySelectorAll('li');
  const buttonCleanAll = document.querySelector('#apaga-tudo');

  if (selection.target === buttonCleanAll) {
    li.forEach((item) => {
      item.remove();
    });
  }
}

document.addEventListener('click', addLi);
document.addEventListener('click', changeColorItem);
document.addEventListener('dblclick', doubleClick);
document.addEventListener('click', cleanListAll);
