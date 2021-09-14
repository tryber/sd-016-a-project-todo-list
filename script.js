const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

// requisito 8.
function liStyle() {
  ol.addEventListener('click', (event) => {
    for (let index = 0; index < ol.children.length; index += 1) {
      ol.children[index].style.background = 'rgb(5, 28, 58)';
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}
liStyle();

// requisito 5
function buttonValue() {
  const li = document.createElement('li');
  li.classList.add('clear');
  li.innerText = input.value;
  li.addEventListener('click', liStyle);
  ol.appendChild(li);
  input.value = '';
}
button.addEventListener('click', buttonValue);

// requisito 9.
function completed() {
  ol.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
completed();

// requisito 10
function clearAll() {
  const clear = document.getElementById('apaga-tudo');
  clear.addEventListener('click', () => {
    const value = document.querySelectorAll('.clear');
    for (let index = 0; index < value.length; index += 1) {
      let list = value[index];
      ol.removeChild(list);
    }
  })
};
clearAll();

// requisito 10.
function clearCompleted() {
  const remove = document.getElementById('remover-finalizados');
  remove.addEventListener('click', () => {
    const value = document.querySelectorAll('.completed');
    for (let index = 0; index < value.length; index += 1) {
      let removeCompleted = value[index];
      ol.removeChild(removeCompleted);
    }
  })
};
clearCompleted();
