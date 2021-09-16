// --------------------------------------------------------------------------------------------
function addNewTask() {

  const button = document.querySelector('#criar-tarefa');
  const task = document.querySelector('#texto-tarefa');
  
  button.addEventListener('click', () => {
    const taskName = task.value;
    const list = document.querySelector('#lista-tarefas');
    const newTask = document.createElement('li');
    newTask.classList.add('item');
    list.appendChild(newTask);
    newTask.innerHTML = taskName;
    document.querySelector('#texto-tarefa').value = '';
    clickToChange();  
  }); 
}

addNewTask();
// --------------------------------------------------------------------------------------------
function changeBGColor(event) {
  const selectItem = event.target;
  const bgColor = document.getElementsByTagName('li');
  for (let i = 0; i < bgColor.length; i += 1) {
    bgColor[i].style.background = '';
  }
  event.target.style.background = 'rgb(128, 128, 128)';
}
function clickToChange() {
  const btn = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', changeBGColor);
  }
}
