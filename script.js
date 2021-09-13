const buttonAdd = document.querySelector('#criar-tarefa');
const addList = document.querySelector('#lista-tarefas');
buttonAdd.addEventListener('click', add);


function add () {
  const inputAdd = document.querySelector('#texto-tarefa');
  const textInput = inputAdd.value;
  const taskLine = document.createElement('li');
  taskLine.innerHTML = textInput;
  addList.appendChild(taskLine);
  inputAdd.value = '';
  
}

addList.addEventListener('click', changeBackground);

function changeBackground (event) {
  const selectLi = document.querySelectorAll('li');
  for (let index = 0; index < selectLi.length; index += 1) {
    selectLi[index].style.backgroundColor = 'white';    
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}