function addItem(selection) {
  const ol = document.querySelector('#lista-tarefas');
  const textoTarefa = document.querySelector('#texto-tarefa');
  const criarTarefa = document.querySelector('#criar-tarefa');

  if (selection.target === criarTarefa && textoTarefa.value !== '') {
    const li = document.createElement('li');

    ol.appendChild(li).innerHTML = textoTarefa.value;
    textoTarefa.value = '';
  }
}

function changeColorItem(selection) {
  const li = document.querySelectorAll('li');

  li.forEach((item) => {
    const itemList = item;
    itemList.classList.remove('selected');
    itemList.style.backgroundColor = 'rgb(93, 93, 93)';
  });

  li.forEach((item) => {
    if (selection.target === item) {
      const itemList = item;
      itemList.classList.add('selected');
      itemList.style.backgroundColor = 'rgb(128,128,128)';
    }
  });
}

function completeItem(selection) {
  const li = document.querySelectorAll('li');

  li.forEach((item) => {
    const itemList = item;
    if (selection.target === item) {
      itemList.classList.toggle('completed');
      if (item.classList.contains('completed')) {
        itemList.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      } else {
        itemList.style.textDecoration = 'none';
      }
    }
  });
}

function cleanList(selection) {
  const li = document.querySelectorAll('li');
  const apagaTudo = document.querySelector('#apaga-tudo');
  const removerFinalizados = document.querySelector('#remover-finalizados');

  if (selection.target === apagaTudo) {
    li.forEach((item) => {
      item.remove();
    });
  } else if (selection.target === removerFinalizados) {
    li.forEach((item) => {
      if (item.classList.contains('completed')) {
        item.remove();
      }
    });
  }
}

document.addEventListener('click', addItem);
document.addEventListener('click', cleanList);
document.addEventListener('click', changeColorItem);
document.addEventListener('dblclick', completeItem);
