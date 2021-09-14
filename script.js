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
const buttonClearTasks = () => {
  const getOrderedList = document.querySelectorAll('li');
  for (let index = 0; index < getOrderedList.length; index += 1) {
    if (getOrderedList[index].parentElement) {
      getOrderedList[index].parentElement.removeChild(getOrderedList[index]);
    }
  }
};
getButtonClear.addEventListener('click', buttonClearTasks);

const getButtonClearCompletedTask = document.querySelector('#remover-finalizados');
const buttonClearCompletedTasks = () => {
  const getOrderedList = document.querySelectorAll('.completed');
  for (let index = 0; index < getOrderedList.length; index += 1) {
    if (getOrderedList[index].parentElement) {
      getOrderedList[index].parentElement.removeChild(getOrderedList[index]);
    }
  }
};
getButtonClearCompletedTask.addEventListener('click', buttonClearCompletedTasks);
