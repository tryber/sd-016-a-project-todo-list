const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', add);


function add () {
  const inputAdd = document.querySelector('#texto-tarefa');
  const textInput = inputAdd.value;
  const addList = document.querySelector('#lista-tarefas');
  const taskLine = document.createElement('li');
  taskLine.addEventListener('click', changeBackground);
  taskLine.innerHTML = textInput;
  addList.appendChild(taskLine);
  inputAdd.value = '';

  function changeBackground () {
    taskLine.classList.add('background');
  }
}
