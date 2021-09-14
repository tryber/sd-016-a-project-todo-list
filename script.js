

// transporta o input para uma funcao de adicionar um lista

const taskText = document.querySelector('#texto-tarefa'); // input
const taskList = document.querySelector('#lista-tarefas'); // ol
const body = document.querySelector('body'); // o corpo todo
const createTask = document.querySelector('#criar-tarefa'); //button


createTask.addEventListener('click', (event) => { // escuta o button
  const newTask = document.createElement('li'); // cria um l1
  newTask.className = 'task'; // add classe
  newTask.innerHTML = taskText.value;
  taskList.appendChild(newTask);
  taskText.value = '';
});

// change background-color - requisito 8
function changeColor(e) {
  for (let index = 0; index < taskList.children.length; index += 1) {
    if (taskList.children[index].classList.contains('selected')) {
      taskList.children[index].classList.remove('selected');
    }
  }
  const task = e.target;
  task.classList.add('selected');
}
// forListener all tasks
body.addEventListener('click', (e) => {
  if (e.target.classList.contains('task')) {  //
    // e.preventDefault();   //ignora os outros enevtListener.
    changeColor(e);
  }
});

// requisito 9 - Guilherme Spinelli nos mostrou como usar o toggle e ai reduziu o código que eu havia criado como o anterior.
taskList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed')
})