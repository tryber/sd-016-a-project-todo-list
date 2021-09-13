function selectTask(event) {
  const newSelected = event.target;
  const oldSelected = document.getElementsByClassName('selected')[0];

  if (!oldSelected) return newSelected.classList.toggle('selected');
  if (oldSelected === newSelected) {
    return newSelected.classList.toggle('selected');
  }
  oldSelected.classList.toggle('selected');
  newSelected.classList.toggle('selected');
}

function createNewTask() {
  const task = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerHTML = task;
  newTask.addEventListener('click', selectTask);
  list.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

function addBtnListenr() {
  const btn = document.getElementById('criar-tarefa');
  btn.addEventListener('click', createNewTask);
}
addBtnListenr();
