const taskCompleted = (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
};

const changeBackgroundColor = (event) => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }
  event.target.classList.add('selected');
};

function addTasks() {
  const inputText = document.querySelector('#texto-tarefa');
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.innerHTML = inputText.value;
  const getOrderedList = document.querySelector('#lista-tarefas');
  getOrderedList.appendChild(listItem);
  listItem.addEventListener('click', changeBackgroundColor);
  listItem.addEventListener('dblclick', taskCompleted);

  inputText.value = '';
}

function createEventListeners() {
  const buttonCreateTasks = document.querySelector('#criar-tarefa');
  buttonCreateTasks.addEventListener('click', addTasks);
}
createEventListeners();

const getButtonClear = document.querySelector('#apaga-tudo');
const buttonCreateTasks = () => {
  const getOrderedList = document.querySelector('ol');
  if (getOrderedList.parentNode) {
    getOrderedList.parentNode.removeChild(getOrderedList);
  }
};
getButtonClear.addEventListener('click', buttonCreateTasks);
