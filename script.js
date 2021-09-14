const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const clearAll = document.querySelector('#apaga-tudo');
const clearFinalizados = document.querySelector('#remover-finalizados');
const up = document.querySelector('#mover-cima');
const down = document.querySelector('#mover-baixo');
const removeGraySelected = document.querySelector('#remover-selecionado');
// const save = document.querySelector('#salvar-tarefas');


button.addEventListener('click', function () {
  const createLi = document.createElement('li');
  if (input.value.length > 0) {
    createLi.innerText = input.value;
    createLi.className = 'li-lista'
    list.appendChild(createLi);
    input.value = '';
    createLi.addEventListener('click', addGrey)
    createLi.addEventListener('dblclick', addRisk)
  }
})

function addGrey(event) {
  const selectList = document.querySelector('.graycolor');
  if (selectList != null) {
    selectList.classList.remove('graycolor');
  }
  event.target.classList.add('graycolor');
}



clearAll.addEventListener('click', function () {
  while (list.firstElementChild) {
    list.removeChild(list.firstElementChild);
  }
})

function addRisk(event) {
  event.target.classList.toggle('completed');

}


function removeFinished() {
  finisHim = document.querySelectorAll('li.completed');
  for (let index = 0; index < finisHim.length; index += 1) {
    list.removeChild(document.querySelector('li.completed'));
  }
}






function moveUp() {
  let upUp = document.querySelector('li.graycolor');
  if (upUp != null) {
    if (upUp.previousElementSibling != null) {
      upUp.parentNode.insertBefore(upUp, upUp.previousElementSibling);
    }
  }
}

function moveDown() {
  let downDown = document.querySelector('li.graycolor');
  if (downDown != null) {
    if (downDown.nextElementSibling != null) {
      downDown.parentNode.insertBefore(downDown, downDown.nextElementSibling.nextElementSibling);
    }
  }
}

function removeSelect() {
  let selectHim = document.querySelector('li.graycolor');
  if (selectHim != null) {
  selectHim.remove()
  }
}

// function savePage() {
// }



up.addEventListener('click', moveUp);
down.addEventListener('click', moveDown);
clearFinalizados.addEventListener('click', removeFinished);
removeGraySelected.addEventListener('click', removeSelect);
// save.addEventListener('click', savePage);

