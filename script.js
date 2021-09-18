function clearText() {
  const clearTextInput = document.getElementById('texto-tarefa');
  clearTextInput.value = '';
}

function createListItem() {
  const takeTheTask = document.getElementById('texto-tarefa').value;
  const taskList = document.getElementById('lista-tarefas');
  const createElements = document.createElement('li');
  createElements.innerText = takeTheTask;
  taskList.appendChild(createElements);

  clearText();
}

const buttonInput = document.getElementById('criar-tarefa');
buttonInput.addEventListener('click', createListItem);
