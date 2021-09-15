const taskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function selectItem(event) {
  const selectOne = document.querySelector('.grayRGB');
  if (selectOne !== null) {
    selectOne.classList.remove('grayRGB');
  }
  event.target.classList.add('grayRGB');
}

function completedTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskButton.addEventListener('click', () => {
  const newTaks = document.createElement('li');
  newTaks.innerText = inputTask.value;
  taskList.appendChild(newTaks);
  inputTask.value = '';

  taskList.addEventListener('dblclick', completedTask);
  taskList.addEventListener('click', selectItem);
});
