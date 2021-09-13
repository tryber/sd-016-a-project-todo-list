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
      lista.children[index].style.backgroundColor = 'white';
    }
    const evento = event;
    evento.target.style.backgroundColor = 'gray';
  });
}

colorListAdd();

function riskListAdd() {
  const lista = document.getElementById('lista-tarefas');

  lista.addEventListener('dblclick', (event) => {
    if (event.target.className === '') {
      event.target.className = 'completed';
    } else {
      event.target.classList.remove('completed');
    }
  });
}

riskListAdd();
