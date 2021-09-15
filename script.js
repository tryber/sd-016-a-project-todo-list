const input = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

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

document.addEventListener('click', createItem);
