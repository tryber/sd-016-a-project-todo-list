function addItem(select) {
  const ol = document.querySelector('ol');
  const textoTarefa = document.querySelector('#texto-tarefa');
  const criarTarefa = document.querySelector('#criar-tarefa');

  if (select.target === criarTarefa && textoTarefa.value !== '') {
    const li = document.createElement('li');
    li.classList.add('itemList');
    ol.appendChild(li).innerHTML = textoTarefa.value;
    textoTarefa.value = '';
  }
}

function selectItem(select) {
  const li = document.querySelectorAll('li');

  if (select.target.classList.contains('itemList')) {
    li.forEach((items) => {
      const item = items;
      item.classList.remove('selected');
      item.style.backgroundColor = 'rgb(93, 93, 93)';
    });

    li.forEach((items) => {
      if (select.target === items) {
        const item = items;
        item.classList.add('selected');
        item.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    });
  }
}

function completedItem(select) {
  const li = document.querySelectorAll('li');

  li.forEach((items) => {
    if (select.target === items) {
      const item = items;
      item.classList.toggle('completed');
      if (item.classList.contains('completed')) {
        item.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      } else {
        item.style.textDecoration = 'none';
      }
    }
  });
}

function moveItemSelectedUp(select) {
  // João Spinelli(T16) me ajudou a chegar nesse resultado com o insertBefore.
  const ol = document.querySelector('ol');
  const selected = document.querySelector('.selected');
  const moveUp = document.querySelector('#mover-cima');
  const { previousElementSibling } = document.querySelector('.selected');

  if (select.target === moveUp) {
    if (previousElementSibling !== null) {
      ol.insertBefore(previousElementSibling, selected);
      ol.insertBefore(selected, previousElementSibling);
    } else {
      ol.insertBefore(selected, ol.lastChild);
      ol.insertBefore(ol.lastChild, selected);
    }
  }
}

function moveItemSelectedDown(select) {
  // João Spinelli(T16) me ajudou a chegar nesse resultado com o insertBefore.
  const ol = document.querySelector('ol');
  const selected = document.querySelector('.selected');
  const moveDown = document.querySelector('#mover-baixo');
  const { nextElementSibling } = document.querySelector('.selected');

  if (select.target === moveDown) {
    if (nextElementSibling !== null) {
      ol.insertBefore(selected, nextElementSibling);
      ol.insertBefore(nextElementSibling, selected);
    } else {
      ol.insertBefore(selected, ol.firstChild);
      ol.insertBefore(ol.firstChild, selected);
    }
  }
}

function saveList(select) {
  // João Spinelli(T16) me ajudou a chegar nesse resultado para salvar o conteúdo das listas.
  const arrayObjectList = [];
  const li = document.querySelectorAll('li');
  const salvarTarefas = document.querySelector('#salvar-tarefas');

  if (select.target === salvarTarefas) {
    li.forEach((items) => {
      if (items.classList.contains('completed')) {
        arrayObjectList.push({ item: items.innerHTML, completed: true });
      } else {
        arrayObjectList.push({ item: items.innerHTML, completed: false });
      }
    });

    localStorage.setItem('items', JSON.stringify(arrayObjectList));
  }
}

function loadList() {
  // João Spinelli(T16) me ajudou a chegar nesse resultado para mostrar o conteúdo das listas.
  const ol = document.querySelector('ol');
  const storage = JSON.parse(localStorage.getItem('items'));

  if (localStorage.getItem('items')) {
    storage.forEach((items) => {
      const li = document.createElement('li');
      if (items.completed) {
        li.innerHTML = items.item;
        li.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
        li.classList.add('itemList');
        ol.appendChild(li).classList.add('completed');
      } else {
        li.innerHTML = items.item;
        ol.appendChild(li).classList.add('itemList');
      }
    });
  }
}

function cleanAll(select) {
  const li = document.querySelectorAll('li');
  const apagaTudo = document.querySelector('#apaga-tudo');

  if (select.target === apagaTudo) {
    li.forEach((items) => {
      items.remove();
    });
  }
}

function cleanComplete(select) {
  const li = document.querySelectorAll('li');
  const removerFinalizados = document.querySelector('#remover-finalizados');

  if (select.target === removerFinalizados) {
    li.forEach((items) => {
      if (items.classList.contains('completed')) {
        items.remove();
      }
    });
  }
}

function cleanSelected(select) {
  const li = document.querySelectorAll('li');
  const removerSelecionado = document.querySelector('#remover-selecionado');

  if (select.target === removerSelecionado) {
    li.forEach((items) => {
      if (items.classList.contains('selected')) {
        items.remove();
      }
    });
  }
}

window.onload = function init() {
  loadList();

  document.addEventListener('click', addItem);
  document.addEventListener('click', saveList);
  document.addEventListener('click', cleanAll);
  document.addEventListener('click', selectItem);
  document.addEventListener('click', cleanComplete);
  document.addEventListener('click', cleanSelected);
  document.addEventListener('click', moveItemSelectedUp);
  document.addEventListener('click', moveItemSelectedDown);

  document.addEventListener('dblclick', completedItem);
};

// Códigos para implementação futura:

// function moveSelectedUp(select) {
//   const li = document.querySelectorAll('li');
//   const moveUp = document.querySelector('#mover-cima');

//   for (let index = 0; index < li.length; index += 1) {
//     if (select.target === moveUp && li[index].classList.contains('selected')) {
//       li[index].classList.remove('selected');
//       li[index].style.backgroundColor = 'rgb(93, 93, 93)';
//       index -= 1;
//       if (index < 0) { index = li.length - 1; }
//       li[index].classList.add('selected');
//       li[index].style.backgroundColor = 'rgb(128,128,128)';
//     }
//   }
// }

// function moveSelectedDown(select) {
//   const li = document.querySelectorAll('li');
//   const moveDown = document.querySelector('#mover-baixo');

//   for (let index = 0; index < li.length; index += 1) {
//     if (select.target === moveDown && li[index].classList.contains('selected')) {
//       li[index].classList.remove('selected');
//       li[index].style.backgroundColor = 'rgb(93, 93, 93)';
//       index += 1;
//       if (index > li.length - 1) { index = 0; }
//       li[index].classList.add('selected');
//       li[index].style.backgroundColor = 'rgb(128,128,128)';
//     }
//   }
// }
