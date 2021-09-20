const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const buttonSave = document.getElementById('salvar-tarefas')
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo')

// requisito 8.
function liStyle() {
  ol.addEventListener('click', (event) => {
    for (let index = 0; index < ol.children.length; index += 1) {
      ol.children[index].style.background = 'rgb(5, 28, 58)';
      ol.children[index].classList.remove('selected')
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      event.target.classList.add('selected');

    }
  });
}
liStyle();

// requisito 5
function buttonValue() {
  const li = document.createElement('li');
  li.classList.add('list');
  li.innerText = input.value;
  li.addEventListener('click', liStyle);
  ol.appendChild(li);
  input.value = '';
  remove()
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
    const value = document.querySelectorAll('.list');
    for (let index = 0; index < value.length; index += 1) {
      let list = value[index];
      ol.removeChild(list);
    }
  })
};
clearAll();

// requisito 11.
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

// requisito  12 (bônus)
// auxilio/ajuda de Lucas Fernandes
function saveAll() {
  buttonSave.addEventListener('click', () => {
    const values = ol.innerHTML;
    localStorage.setItem('list', values)
  })
}

function saveList() {
  saveAll();
  let saveList = localStorage.getItem('list');
  if (saveList !== null) {
    ol.innerHTML = saveList
  }
}
saveList()

//requisito 14 (bônus)
function remove() {
  const bottomRemove = document.getElementById('remover-selecionado')
  const li = document.querySelectorAll('.list');
  bottomRemove.addEventListener('click', () => {
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        li[index].remove();
      }
    }
  });
}

//requisito 13 (bônus)
//ajuda de Lucas Fernandes.
function up() {
  buttonUp.addEventListener('click', () => {
    let selected = document.querySelector('.selected');
    if (selected !== null && selected.previousElementSibling) {
      const previous = selected.previousElementSibling;
      ol.insertBefore(selected, previous)
    }
  });
}
up()

function Down() {
  buttonDown.addEventListener('click', () => {
    let selected = document.querySelector('.selected');
    if (selected !== null && selected.nextElementSibling) {
      const next = selected.nextElementSibling;
      ol.insertBefore(next, selected)
    }
  });
}
Down()