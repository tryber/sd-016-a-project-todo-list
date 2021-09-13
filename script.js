function addPhrase(text) {
  const lista = document.getElementById('lista-tarefas');
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
  const lista = document.getElementById('lista-tarefas');

  lista.addEventListener('click', (event) => {
    for (let index = 0; index < lista.children.length; index += 1) {
      lista.children[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

colorListAdd();

function riskListAdd() {
  const lista = document.getElementById('lista-tarefas');

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
  const lista = document.getElementById('lista-tarefas');
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
  const lista = document.getElementById('lista-tarefas');
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
