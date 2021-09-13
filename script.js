const addButton = document.getElementById('criar-tarefa');

function AddSelectedClassToListItem(event) {
  const task = event.target;
  const className = 'task-selected';
  const lastTask = document.getElementsByClassName(className);
  if (lastTask[0]) {
    lastTask[0].classList.remove(className);
  }
  task.classList.add(className);
}

function addRemoveCompletClassToListItem(event) {
  const task = event.target;
  if (task.className.match(/completed/) !== null) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function addEventToList(listElement) {
  listElement.addEventListener('click', AddSelectedClassToListItem);
  listElement.addEventListener('dblclick', addRemoveCompletClassToListItem);
}

function addTask() {
  const task = document.getElementById('texto-tarefa');
  if (task.value) {
    const taskToList = document.createElement('li');
    addEventToList(taskToList);
    taskToList.innerText = task.value;
    const list = document.getElementById('lista-tarefas');
    list.appendChild(taskToList);
    task.value = '';
  } else {
    alert('Digite uma tarefa antes de adicionar');
  }
}

addButton.addEventListener('click', addTask);
