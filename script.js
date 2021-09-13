

// transporta o input para uma funcao de adicionar um lista

const taskText = document.querySelector('#texto-tarefa'); // input
const taskList = document.querySelector('#lista-tarefas'); // ol
const createTask = document.querySelector('#criar-tarefa'); //button


createTask.addEventListener('click', (event) => { // escuta o button
  const newTask = document.createElement('li'); // cria um l1
  newTask.classList.add = '.task'; // add classe
  newTask.innerHTML = taskText.value;
  taskList.appendChild(newTask);
  taskText.value = '';
})
