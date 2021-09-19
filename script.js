const theButton = document.querySelector('.theButton');
const tasklist = document.querySelector('.lista-tarefas');
const text = document.querySelector('.insert');

function formulary() {
  const list = document.createElement('li');
  list.innerHTML = text.value;
  list.classList.add('selected');
  tasklist.appendChild(list);
  text.value = '';
}

theButton.addEventListener('click', formulary);

function bgList(event) {
  const e = event.target;
  e.style.backgroundColor = 'rgb(128, 128, 128)';
}
tasklist.addEventListener('click', bgList);

function selectedTask(event) {
  const eventTargetSelect = event.target;
  const checkStyle = document.querySelectorAll('li');
  for (let i = 0; i < checkStyle.length; i += 1) {
    checkStyle[i].style.backgroundColor = '';
  }
  eventTargetSelect.style.backgroundColor = 'rgb(128, 128, 128)';
}
tasklist.addEventListener('click', selectedTask);

const eraserButton = document.getElementById('apaga-tudo');

eraserButton.addEventListener('click', () => {
  const list = document.querySelectorAll('li');

  for (let i = 0; i < list.length; i += 1) {
    document.querySelector('#lista-tarefas').removeChild(list[i]);
  }
});
