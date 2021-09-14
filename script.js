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

// Referência: https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
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

// BÔNUS
// Referência: https://www.technothirsty.com/difference-between-json-stringify-and-json-parse-in-json-javascript/
const getButtonSaveTasks = document.querySelector('#salvar-tarefas');
const saveTasks = () => {
  const listItems = document.querySelectorAll('li');
  const array = [];
  for (let index = 0; index < listItems.length; index += 1) {
    const current = {
      text: listItems[index].innerText,
      isSelected: listItems[index].classList.contains('selected'),
      isCompleted: listItems[index].classList.contains('completed'),
    };
    array.push(current);
  }
  localStorage.setItem('lista', JSON.stringify(array));
};
getButtonSaveTasks.addEventListener('click', saveTasks);

const onload = () => {
  const array = JSON.parse(localStorage.getItem('lista'));
  if (array !== null) {
    for (let index = 0; index < array.length; index += 1) {
      const itemSaved = array[index];
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');
      if (itemSaved.isSelected) {
        listItem.classList.add('selected');
      }
      if (itemSaved.isCompleted) {
        listItem.classList.add('completed');
      }
      listItem.innerHTML = itemSaved.text;
      document.querySelector('#lista-tarefas').appendChild(listItem);
      listItem.addEventListener('click', changeBackgroundColor);
      listItem.addEventListener('dblclick', taskCompleted);
    }
  }
};
window.addEventListener('load', onload);
