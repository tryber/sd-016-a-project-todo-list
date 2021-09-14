const orderedList = document.querySelector('#lista-tarefas');
const text = document.querySelector('#texto-tarefa');

function createList() {
  let valueOfText = text.value;
  let li = document.createElement('li');
  li.className = 'list';
  li.innerText = valueOfText;
  orderedList.appendChild(li);
  text.value = '';
}

function changeColor(e) {
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
orderedList.addEventListener('click', changeColor);
