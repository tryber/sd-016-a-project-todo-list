const addButton = document.getElementById('criar-tarefa');
const allList = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');
const taskList = document.getElementsByClassName('task-list');
const clearBtn = document.getElementById('apaga-tudo');

addButton.addEventListener('click', () => {
  const newList = document.createElement('li');
  newList.innerHTML = task.value;
  newList.classList = 'task-list';
  newList.style.backgroundColor = 'white';
  allList.appendChild(newList);
  task.value = '';
  
  // requisito 7 e 8
  for (let index = 0; index < taskList.length; index += 1) {
    taskList[index].addEventListener('click', (event) => {
      const paintLi = event.target;
      for (let index2 = 0; index2 < taskList.length; index2 += 1){
        taskList[index2].style.backgroundColor = 'white';
      }
      paintLi.style.backgroundColor = 'rgb(128,128,128)';
    });
  }

  // requisito 9
  for (let index = 0; index < taskList.length; index += 1) {
    taskList[index].addEventListener('dblclick' , (event) => {
      const setComplete = event.target;
      setComplete.classList.remove('completed');
      setComplete.classList.add('completed');
    })
    
    //requisito 10
    clearBtn.addEventListener('click', () => {
      for (let index = 0; index < taskList.length; index += 1 ){
        allList.removeChild(taskList[index]);
      }
    })
  }
});


