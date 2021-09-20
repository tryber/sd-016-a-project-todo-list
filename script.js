const getButtonSave = document.querySelector('#salvar-tarefas');
const getOl = document.querySelector('#lista-tarefas');
const getListChild = document.querySelector('#lista-tarefas').children;
const getButtonRemove = document.querySelector('#remover-selecionado');
const getButtonUp = document.querySelector('#mover-cima');
const getButtonDown = document.querySelector('#mover-baixo');

// Referência do código ao Brunão Turma 16 - Tribo A;
function clearNotSelectedColor() {
  const getOlChildren = document.querySelector('ol').children;
  for (let index = 0; index < getOlChildren.length; index += 1) {
    getOlChildren[index].style.backgroundColor = 'white';
    getOlChildren[index].classList.remove('selected');
  }
}

// Tive que usar o arrow function por conta do erro do lint
function changeBackGroundColor() {
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].addEventListener('click', () => {
      // Referência do código ao Brunão Turma 16 - Tribo A;
      clearNotSelectedColor();
      getLi[index].style.backgroundColor = 'rgb(128,128,128)';
      getLi[index].classList.add('selected');
    });
  }
}

//  Referência do código para o Carlos Dal Soler, Turma 16 - Tribo A;
// function changeTextList(event) {
//   let validate = false;
//   if (event.target.classList.contains('completed')) {
//     event.target.classList.remove('completed');
//     validate = true;
//   } else if (validate === false) {
//     event.target.classList.add('completed');
//     validate = false;
//   }
// }

function changeTextList(event) {
  const eve = event;
  if (eve.target.classList.contains('completed')) {
    eve.target.classList.remove('completed');
    eve.target.style.textDecoration = 'white';
  } else {
    eve.target.classList.add('completed');
    eve.target.style.textDecoration = 'line-through solid black';
  }
}

function deletedTasks() {
  const getButton = document.querySelector('#apaga-tudo');
  getButton.addEventListener('click', () => {
    for (let index = 0; index < getListChild.length; index += 1) {
      getListChild[index].remove();
    }
  });
}

function deleteCompletedTasks() {
  const getButtonCompleted = document.querySelector('#remover-finalizados');
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getButtonCompleted.addEventListener('click', () => {
      // https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList, referenciando o método contains.
      // contains compara array e includes compara string
      if (getLi[index].classList.contains('completed')) {
        getLi[index].remove();
      }
    });
  }
}

function addList() {
  const getInput = document.querySelector('#texto-tarefa');
  const createLi = document.createElement('li');
  createLi.innerText = getInput.value;
  // Referência do código para o Carlos Dal Soler, Turma 16 - Tribo A;
  createLi.addEventListener('dblclick', changeTextList);
  getOl.appendChild(createLi);
  getInput.value = '';

  changeBackGroundColor();
  deletedTasks();
  deleteCompletedTasks();
}

// Referencia do código ao Lucas Fernandes/Pedro Lima - Turma 16 - Tribo A
function saveList() {
  getButtonSave.addEventListener('click', () => {
    const setOlList = getOl.innerHTML;
    localStorage.setItem('list', setOlList);
  });
}

// Referencia do código ao Lucas Fernandes/Pedro Lima - Turma 16 - Tribo A
function loadList() {
  saveList();
  const getOlList = localStorage.getItem('list');
  if (getOlList !== null) {
    getOl.innerHTML = getOlList;
  }
} loadList();

// Referencia do código ao Lucas Fernandes/Pedro Lima - Turma 16 - Tribo A
function cretatList() {
  document.querySelector('#criar-tarefa').addEventListener('click', addList);
}
cretatList();

// Referencia do código ao Lucas Fernandes/Pedro Lima - Turma 16 - Tribo A
function removeSelected() {
  getButtonRemove.addEventListener('click', () => {
    for (let index = 0; index < getListChild.length; index += 1) {
      if (getListChild[index].classList.contains('selected')) {
        getListChild[index].remove();
      }
    }
  });
}
removeSelected();

// Referencia do código ao Lucas Fernandes/Pedro Lima - Turma 16 - Tribo A
function keyUp() {
  getButtonUp.addEventListener('click', () => {
    const getSelectedClass = document.querySelector('.selected');
    if (getSelectedClass != null && getSelectedClass.previousElementSibling) {
      const previousElement = getSelectedClass.previousElementSibling;
      getOl.insertBefore(getSelectedClass, previousElement);
    }
  });
}
keyUp();

// Referencia do código ao Lucas Fernandes/Pedro Lima - Turma 16 - Tribo A
function keyDown() {
  getButtonDown.addEventListener('click', () => {
    const getSelectedClass = document.querySelector('.selected');
    if (getSelectedClass != null && getSelectedClass.nextElementSibling) {
      const nextElement = getSelectedClass.nextElementSibling;
      getOl.insertBefore(nextElement, getSelectedClass);
    }
  });
}
keyDown();
