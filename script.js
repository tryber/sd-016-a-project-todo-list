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

function saveList() {
  const buttonSave = document.getElementById('salvar-tarefas');
  const lista = document.getElementById('lista-tarefas');

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

function initialRenderization() {
  const lista = document.getElementById('lista-tarefas');
  if (localStorage.getItem('list') === null) {
    localStorage.setItem('list', JSON.stringify([]));
  } else {
    const localList = JSON.parse(localStorage.getItem('list'));
    for (let index = 0; index < localList.length; index += 2) {
      const listElement = document.createElement('li');
      listElement.innerText = localList[index];
      if (localList[index + 1] !== '') {
        listElement.className = (localList[index + 1]);
      }
      lista.appendChild(listElement);
    };
  };
};

window.onload = function restart() {
  initialRenderization();
};
