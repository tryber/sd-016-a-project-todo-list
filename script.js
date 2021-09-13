function colorLi(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addNewLi() {
  const inputText = document.querySelector('#texto-tarefa');
  const ol = document.querySelector('#lista-tarefas');
  const li = document.createElement('li');
  li.className = 'li';
  li.innerText = inputText.value;
  li.addEventListener('click', colorLi);
  ol.appendChild(li);
  inputText.value = '';
}

function addButtonListenner() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addNewLi);
}

window.onload = () => {
  addButtonListenner();
};
