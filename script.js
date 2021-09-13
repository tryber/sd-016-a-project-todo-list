const taskButton = document.querySelector('#criar-tarefa');
taskButton.addEventListener('click', addtask);

function selectListColor() {
  const selecList = document.querySelectorAll('li');
  for (let i = 0; i < selecList.length; i += 1) {
    selecList[i].addEventListener('click', function(event){
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function addtask() {
  const taskText = document.querySelector('#texto-tarefa');
  const text = taskText.value;
  const list = document.querySelector('#lista-tarefas');
  const generateList = document.createElement('li');
  generateList.innerHTML = text
  list.appendChild(generateList);
  taskText.value = '';
  selectListColor();
}
