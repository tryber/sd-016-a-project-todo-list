// --------------------------------------------------------------------------------------------
const list = document.querySelector('#lista-tarefas');
// --------------------------------------------------------------------------------------------
function changeBGColor(event) {
  const bgColor = document.getElementsByTagName('li');
  for (let i = 0; i < bgColor.length; i += 1) {
    bgColor[i].style.background = '';
  }
  event.target.style.background = 'rgb(128, 128, 128)';
}
function clickToChange() {
  const btn = document.querySelectorAll('#lista-tarefas');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', changeBGColor);
  }
}
// --------------------------------------------------------------------------------------------
list.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
// --------------------------------------------------------------------------------------------
function addNewTask() {
  const button = document.querySelector('#criar-tarefa');
  const task = document.querySelector('#texto-tarefa');
  button.addEventListener('click', () => {
    const taskName = task.value;
    const newTask = document.createElement('li');
    newTask.classList.add('item');
    list.appendChild(newTask);
    newTask.innerHTML = taskName;
    document.querySelector('#texto-tarefa').value = '';
    clickToChange();
  });
}
addNewTask();
