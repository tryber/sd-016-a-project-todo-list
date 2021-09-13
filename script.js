const inputTask = document.getElementById('texto-tarefa');
const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const body = document.querySelector('body');

function addTask() {
  const taskValue = inputTask.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = taskValue;
  taskList.appendChild(newTask);
  inputTask.value = '';
}
createTask.addEventListener('click', addTask);

function selectedItem(element) {
  const tasks = Array.from(taskList.children);
  for (let i = 0; i < tasks.length; i += 1) {
    const currentTask = tasks[i];
    if (currentTask.classList.contains('selected')) {
      currentTask.classList.remove('selected');
    }
  }
  element.classList.add('selected');
}

function checkItem(originEvent) {
  const element = originEvent.target;
  if (element.parentNode.id === 'lista-tarefas') {
    selectedItem(element);
  }
}
body.addEventListener('click', checkItem);

function completeTask(element) {
  if (element.classList.contains('completed')) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}

function markTask(originEvent) {
  const element = originEvent.target;
  if (element.parentNode.id === 'lista-tarefas') {
    completeTask(element);
  }
}
body.addEventListener('dblclick', markTask);

function clearList() {
  taskList.innerText = '';
}
document.getElementById('apaga-tudo').addEventListener('click', clearList);

function removeTasksFinalized () {
  let list = Array.from (taskList.children);
  for (let i = 0; i < list.length; i += 1) {
    if(list[i].classList.contains('completed')) {
      taskList.removeChild(list[i]);
    }
  }
}
document.getElementById('remover-finalizados').addEventListener('click', removeTasksFinalized);