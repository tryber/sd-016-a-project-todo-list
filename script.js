function buttonClearSelected() {
  const button = document.querySelector('#remover-selecionado');
  button.addEventListener('click', () => {
    const listSelected = document.querySelector('#selected');
    listSelected.parentNode.removeChild(listSelected);
  });
}

function buttonClearFineshed() {
  const button = document.querySelector('#remover-finalizados');
  button.addEventListener('click', () => {
    const listCompleted = document.querySelectorAll('.completed');
    for (let index = 0; index < listCompleted.length; index += 1) {
      const element = listCompleted[index];
      element.parentNode.removeChild(element);
    }
  });
}

function buttonClearEverything() {
  const button = document.querySelector('#apaga-tudo');
  button.addEventListener('click', () => {
    const listLi = document.querySelectorAll('li');
    for (let index = 0; index < listLi.length; index += 1) {
      const element = listLi[index];
      element.parentNode.removeChild(element);
    }
  });
}

function colorLi(event) {
  const listLi = document.querySelectorAll('li');
  const eventTarget = event.target;
  for (let index = 0; index < listLi.length; index += 1) {
    const element = listLi[index];
    element.removeAttribute('id');
  }
  eventTarget.id = 'selected';
}

function addLiListenner(li) {
  li.addEventListener('click', colorLi);
  li.addEventListener('dblclick', (event) => {
    const eventTarget = event.target;
    if (event.target.className === 'completed') {
      eventTarget.classList.remove('completed');
    } else {
      eventTarget.className = 'completed';
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
  buttonClearFineshed();
  buttonClearSelected();
};
