const lista = document.getElementById('lista-tarefas');

function addPhrase(text) {
  const listaLi = document.createElement('li');
  listaLi.innerHTML = text.value;
  lista.appendChild(listaLi);
}

function buttomAdd() {
  const inputText = document.getElementById('texto-tarefa');
  const button = document.getElementById('criar-tarefa');

  button.addEventListener('click', () => {
    addPhrase(inputText);
    inputText.value = '';
  });
}

buttomAdd();

function colorListAdd() {
  lista.addEventListener('click', (event) => {
    for (let index = 0; index < lista.children.length; index += 1) {
      lista.children[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

colorListAdd();

function riskListAdd() {
  lista.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

riskListAdd();

function buttomRemoveAll() {
  const removeList = document.getElementById('apaga-tudo');

  removeList.addEventListener('click', () => {
    for (let index = 0; index < lista.children.length + 1; index += 1) {
      index = 0;
      lista.children[0].remove();
    }
  });
}

buttomRemoveAll();

function buttomRemoveComplete() {
  const removeComplete = document.getElementById('remover-finalizados');

  removeComplete.addEventListener('click', () => {
    for (let index = lista.children.length - 1; index >= 0; index -= 1) {
      if (lista.children[index].classList.contains('completed')) {
        lista.children[index].remove();
      }
    }
  });
}

buttomRemoveComplete();

function saveList() {
  const buttonSave = document.getElementById('salvar-tarefas');

  buttonSave.addEventListener('click', () => {
    const list = [];
    for (let index = 0; index < lista.children.length; index += 1) {
      list.push(lista.children[index].textContent);
      list.push(lista.children[index].className);
    }
    localStorage.setItem('list', JSON.stringify(list));
  });
}

saveList();

function continueRenderization() {
  const localList = JSON.parse(localStorage.getItem('list'));
  for (let index = 0; index < localList.length; index += 2) {
    const listElement = document.createElement('li');
    listElement.innerText = localList[index];
    if (localList[index + 1] !== '') {
      listElement.className = (localList[index + 1]);
    }
    lista.appendChild(listElement);
  }
}

function initialRenderization() {
  if (localStorage.getItem('list') === null) {
    localStorage.setItem('list', JSON.stringify([]));
  } else {
    continueRenderization();
  }
}

window.onload = function restart() {
  initialRenderization();
};

function changeUpContentAndClass() {
  const phraseSelected = document.getElementsByClassName('selected')[0];

  for (let index = 1; index < lista.children.length; index += 1) {
    if (lista.children[index].textContent === phraseSelected.textContent) {
      const auxClass = lista.children[index].className;
      lista.children[index].className = lista.children[index - 1].className;
      lista.children[index - 1].className = auxClass;
      const aux = lista.children[index].textContent;
      lista.children[index].textContent = lista.children[index - 1].textContent;
      lista.children[index - 1].textContent = aux;
    }
  }
}

function moveUp() {
  const buttonUp = document.getElementById('mover-cima');
  buttonUp.addEventListener('click', () => {
    const phraseSelected = document.getElementsByClassName('selected')[0];
    if (phraseSelected !== undefined) {
      changeUpContentAndClass();
    }
  });
}

function changeDownContentAndClass() {
  const phraseSelected = document.getElementsByClassName('selected')[0];

  for (let index = 0; index < lista.children.length - 1; index += 1) {
    if (lista.children[index].textContent === phraseSelected.textContent) {
      const auxClass = lista.children[index].className;
      lista.children[index].className = lista.children[index + 1].className;
      lista.children[index + 1].className = auxClass;
      const aux = lista.children[index].textContent;
      lista.children[index].textContent = lista.children[index + 1].textContent;
      lista.children[index + 1].textContent = aux;
    }
  }
}

moveUp();

function moveDown() {
  const buttonDown = document.getElementById('mover-baixo');

  buttonDown.addEventListener('click', () => {
    const phraseSelected = document.getElementsByClassName('selected')[0];
    if (phraseSelected !== undefined) {
      changeDownContentAndClass();
    }
  });
}

moveDown();

function removeSelected() {
  const buttonRemoveSelected = document.getElementById('remover-selecionado');

  buttonRemoveSelected.addEventListener('click', () => {
    for (let index = lista.children.length - 1; index >= 0; index -= 1) {
      if (lista.children[index].classList.contains('selected')) {
        lista.children[index].remove();
      }
    }
  });
}

removeSelected();
