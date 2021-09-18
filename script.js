const theButton = document.querySelector('.theButton');
const tasklist = document.querySelector('.lista-tarefas');
const text = document.querySelector('.insert');
function formulary() {
  const list = document.createElement('li');
  list.innerHTML = text.value;
  tasklist.appendChild(list);
  text.value = '';
}

theButton.addEventListener('click', formulary);

function bgList(Event) {
  Event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
tasklist.addEventListener('click', bgList);
