

// transporta o input para uma funcao de adicionar um lista

const createTask = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

createTask.addEventListener('click', (event) => {
  const newTask = document.createElement('li');
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
})
