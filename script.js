// --------------------------------------------------------------------------------------------
const list = document.querySelector('#lista-tarefas');
const generic = document.getElementsByTagName('li');
// --------------------------------------------------------------------------------------------
function changeBGColor(event) {
  for (let i = 0; i < generic.length; i += 1) {
    generic[i].style.background = '';
  }
  event.target.style.background = 'rgb(128, 128, 128)';
}
function clickToChange() {
  const btn = document.querySelectorAll('.item');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', changeBGColor);
  }
}
// --------------------------------------------------------------------------------------------
list.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
// --------------------------------------------------------------------------------------------
function cleanList() {
  const btn = document.querySelector('#apaga-tudo');
  const item = document.querySelectorAll('.item');
  for (let i = 0; i < item.length; i += 1) {

    item[i].parentNode.removeChild(item[i])

  }
  btn.addEventListener('click', cleanList);
}
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
cleanList();
