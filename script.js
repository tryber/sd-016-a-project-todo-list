const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

function liStyle() {
  ol.addEventListener("click", (event) => {
    for (let index = 0; index < ol.children.length; index += 1) {
      ol.children[index].style.background = 'rgb(12 , 93 , 168)';
    };
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
liStyle();

function buttonValue() {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.addEventListener("click", liStyle);
  ol.appendChild(li);
  input.value = '';
}
button.addEventListener('click', buttonValue);

function completed() {
  ol.addEventListener("dblclick", (event) => {
    event.target.classList.toggle('completed');
  })
}
completed()
