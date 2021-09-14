const taskButton = document.querySelector('#criar-tarefa');
taskButton.addEventListener('click', addtask);
const cleanList = document.querySelector('#apaga-tudo');
cleanList.addEventListener('click', cleanButton);


// com ajdua do Ricardo Magalhães Carvalho - Tribo 16 -A
function selectListColor(event) {
  const selecList = document.querySelectorAll('li');
    for (let i = 0; i < selecList.length; i += 1) {
    selecList[i].style.backgroundColor = 'unset';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }

function newEvent() {
  const selecList = document.querySelectorAll('li');
  for (let i = 0; i < selecList.length; i += 1) {
    selecList[i].addEventListener('click', selectListColor)
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
  newEvent();
 }

function cleanButton() {
  const clean = document.querySelectorAll('li');
  for (let i = 0; i < clean.length; i += 1) {
    clean[i].remove();
  }
}

cleanButton();

