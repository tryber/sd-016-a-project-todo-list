const orderedList = document.querySelector('#lista-tarefas');
const text = document.querySelector('#texto-tarefa');

function createList() {
  let valueOfText = text.value;
  let li = document.createElement('li');
  li.className = 'list';
  li.innerHTML = valueOfText;
  orderedList.appendChild(li);
  text.value = '';
}

function changeBackground(e) {
  const list = document.querySelectorAll('.list');
  for (let i = 0; i < list.length; i += 1) {
    list[i].style.backgroundColor = '';
    list[i].id = '';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  e.target.id = 'selected';

}
orderedList.addEventListener('click', changeBackground);

function changeRisk(e) {
  e.target.classList.toggle('completed');
}
orderedList.addEventListener('dblclick', changeRisk);

function deleteTasks() {
  while (orderedList.firstChild) {
    orderedList.firstChild.remove();
  }
}

function removeFinished() {
  let finished = document.querySelectorAll('.completed');
  for (child of finished) {
    child.remove();
  }
}
