const buttonAdd = document.querySelector('#criar-tarefa');
const addList = document.querySelector('#lista-tarefas');
buttonAdd.addEventListener('click', add);


function add () {
  const inputAdd = document.querySelector('#texto-tarefa');
  const textInput = inputAdd.value;
  const taskLine = document.createElement('li');
  taskLine.classList.add('line');
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
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

addList.addEventListener('dblclick', changeTextStyle);

function changeTextStyle (event) {
  event.target.classList.toggle('completed');
}
//https://www.w3schools.com/howto/howto_js_toggle_class.asp

const deleteButton = document.querySelector('#apaga-tudo');
deleteButton.addEventListener('click', deleteAll);

function deleteAll () {
  const removeList = document.querySelectorAll('.line')
 for (let index = 0; index < removeList.length; index += 1) {
   const element = removeList[index];
   addList.removeChild(element);
 }
}
