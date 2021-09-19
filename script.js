const inputButton = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const ordenedList = document.querySelector('#lista-tarefas');
const listItem = document.querySelector('#lista-tarefas').children;
const clearButton = document.querySelector('#apaga-tudo');
const removeDoneButton = document.querySelector('#remover-finalizados');

function addNewTask() {
  inputButton.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.classList.add('list-item');
    newLi.innerText = inputText.value;
    ordenedList.appendChild(newLi);
    inputText.value = '';
    for (let i = 0; i < listItem.length; i += 1) {
      listItem[i].addEventListener('click', changeColor);
      listItem[i].addEventListener('dblclick', completedTask);
    }
  });
} addNewTask();

function changeColor(event) {
  const selectedItem = event.target;
  const colorBg = 'rgb(128,128,128)';

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = 'white';
  }
  // o event vai receber a cor nova e se não for event entra no FOR acima para ter BG branco
  selectedItem.style.backgroundColor = colorBg;
}

function completedTask(event) {
  const selectedItem = event.target;
  if (selectedItem.classList.contains('completed')) {
    selectedItem.classList.remove('completed');
    return;
  }
  selectedItem.classList.add('completed');
}

function removeDoneTasks() {
  removeDoneButton.addEventListener('click', () => {
    for (let i = 0; i < listItem.length; i += 1) {
      if (listItem[i].classList.contains('completed')) {
        listItem[i].remove();
        i -= 1;
      }
    }
  });
} removeDoneTasks();

function clearAllTasks() {
  clearButton.addEventListener('click', () => {
    for (let i = 0; i < listItem.length; i += 1) {
      listItem[i].remove();
      i -= 1;
    }
  });
} clearAllTasks();
