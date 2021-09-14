const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');

function taskList() {
  const listContent = input.value;
  const creatList = document.createElement('li');
  creatList.className = 'task';
  list.appendChild(creatList);
  creatList.innerText = listContent;
  input.value = '';
}

 function paintList(event2){
   const listContent = document.querySelector('.selected');
   if (event2.target.className === 'task') {
     event2.target.classList.add('selected');
      if (listContent !== null){
      listContent.classList.remove('selected');
    }
  }
}

function taskComplete(event3) {
  if (event3.target.classList.contains('completed') === false) {
    event3.target.classList.add('completed');
  } else if (event3.target.classList.contains('completed')) {
    event3.target.classList.remove('completed');
  }
}

function addEvents() {
  button.addEventListener('click', taskList);
  list.addEventListener('click', paintList);
  list.addEventListener('dblclick', taskComplete);
  
 }
addEvents()