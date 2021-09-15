const input = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const clearAll = document.querySelector('#apaga-tudo');
const clearCompleted = document.querySelector('#remover-finalizados');

function clearClass() {
  const allLI = document.getElementsByTagName('li');
  for (let i = 0; i < allLI.length; i += 1) {
    if (allLI[i].classList.contains('selected')) {
      allLI[i].classList.remove('selected');
    }
  }
}

function createItem(expectedText) {
  if (expectedText.target === addButton && input.value !== '') {
    const li = document.createElement('li');
    list.appendChild(li).innerHTML = input.value;
    input.value = '';
    li.addEventListener('dblclick', (e) => {
      const select = e.target;
      select.classList.toggle('completed');
    });
    li.addEventListener('click', (event) => {
      const selector = event.target;
      clearClass();
      selector.classList.toggle('selected');
    });
  }
}

clearAll.addEventListener('click', () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

clearCompleted.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
});

document.addEventListener('click', createItem);
