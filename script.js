function addTasks() {
  const inputText = document.querySelector('#texto-tarefa');
  const getOrderedList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerHTML = inputText.value;
  getOrderedList.appendChild(listItem);
  inputText.value = '';
}

function createEventListeners() {
  const buttonCreateTasks = document.querySelector('#criar-tarefa');
  buttonCreateTasks.addEventListener('click', addTasks);
}
createEventListeners();
