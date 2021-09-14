function buttonClearEverything() {
  const button = document.querySelector('#apaga-tudo');
  button.addEventListener('click', () => {
    const listLi = document.querySelectorAll('li');
    console.log('vou coletar os lis');
    console.log(listLi);
    for (let index = 0; index < listLi.length; index += 1) {
      console.log('entrei no loop');
      const element = listLi[index];
      element.parentNode.removeChild(element);
    }
  });
}

function colorLi(event) {
  const listLi = document.querySelectorAll('li');
  for (let index = 0; index < listLi.length; index += 1) {
    const element = listLi[index];
    element.removeAttribute('id');
  }
  event.target.id = 'selected';
}

function addLiListenner(li) {
  li.addEventListener('dblclick', (evento) => {
    if (evento.target.className === 'completed') {
      evento.target.classList.remove('completed');
    } else {
      evento.target.className = 'completed';
    }
  });
}

function addNewLi() {
  const inputText = document.querySelector('#texto-tarefa');
  const ol = document.querySelector('#lista-tarefas');
  const li = document.createElement('li');
  li.className = 'li';
  li.innerText = inputText.value;
  addLiListenner(li);
  li.addEventListener('click', colorLi);
  ol.appendChild(li);
  inputText.value = '';
}

function addButtonListenner() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addNewLi);
}

window.onload = () => {
  addButtonListenner();
  buttonClearEverything();
};
