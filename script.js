const inputButton = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const ordenedList = document.querySelector('#lista-tarefas');
const listItem = document.querySelector('#lista-tarefas').children;

function changeColor(event) {
  const selectedItem = event.target;
  const colorBg = 'rgb(128,128,128)';

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = 'white';
  }
  // o event vai receber a cor nova e se não for event entra no FOR acima para ter outro BG
  selectedItem.style.backgroundColor = colorBg;
}

function addNewTask() {
  inputButton.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.classList.add('list-item');
    newLi.innerText = inputText.value;
    ordenedList.appendChild(newLi);
    inputText.value = '';
    for (let i = 0; i < listItem.length; i += 1) {
      listItem[i].addEventListener('click', changeColor);
    }
  });
} addNewTask();
