const addButton = document.getElementById('criar-tarefa');
const allList = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');
const taskList = document.getElementsByClassName('task-list');

addButton.addEventListener('click', () => {
  const newList = document.createElement('li');
  newList.innerHTML = task.value;
  newList.classList = 'task-list';
  newList.style.backgroundColor = 'white';
  allList.appendChild(newList);
  task.value = '';
  console.log(taskList);
  for (let index = 0; index < taskList.length; index += 1) {
    taskList[index].addEventListener('click', (event) => {
      const paintLi = event.target;
      console.log(taskList);
      for (let index2 = 0; index2 < taskList.length; index2 += 1){
        taskList[index2].style.backgroundColor = 'white';
      }
      paintLi.style.backgroundColor = 'rgb(128,128,128)';
    });
  }
});

