const getTaskButton = document.querySelector('#criar-tarefa');
getTaskButton.addEventListener('click', createTask);

function taskColor(event) {
    const getList = document.querySelectorAll('li');
    for (let index = 0; index < getList.length; index += 1) {
      getList[index].style.backgroundColor = 'unset';
    } 
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }

function addEvent() {
  const getList = document.querySelectorAll('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].addEventListener('click', taskColor)  
  }  
}

function createTask() {
  const getTaskInput = document.querySelector('#texto-tarefa');
  const textInput = getTaskInput.value;
  const getList = document.querySelector('#lista-tarefas');
  const taskLine = document.createElement('li');
  taskLine.innerText = textInput;
  getList.appendChild(taskLine);
  getTaskInput.value = '';
  //setClassList();
  addEvent();
}

