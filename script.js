const addButton = document.getElementById('criar-tarefa');
const allList = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');
let taskList = document.getElementsByClassName('task-list');

addButton.addEventListener('click', () => {
  const newList = document.createElement('li');
  newList.innerHTML = task.value;
  newList.classList = 'task-list';
  // newList.style.backgroundColor = 'white';
  allList.appendChild(newList);
  task.value = '';
  console.log(taskList);
  for (let index = 0; index < taskList.length; index += 1) {
    taskList[index].addEventListener('click', (event) => {
      console.log(taskList);
      taskList[index].style.backgroundColor = 'white';
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });  
  }
});
// for (let index = 0; index < taskList.length; index += 1) {
//   taskList.addEventListener('click', (event) => {
//     const taskList = document.getElementsByClassName('task-list');
//     if (taskList[index].style.backgroundColor == 'white'){
//       event.target.style.backgroundColor = 'rgb(128,128,128)';
//     } else {
//       event.target.style.backgroundColor = 'white';
//     }
//   });  
// }

// for (let index = 0; index < taskList.length; index += 1) {
//   taskList[index].addEventListener('click', (event) => {
//     console.log(taskList);
//     taskList[index].style.backgroundColor = 'white';
//     event.target.style.backgroundColor = 'rgb(128,128,128)';
//   });  
// }