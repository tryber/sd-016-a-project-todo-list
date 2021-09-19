const getBUttonSave = document.querySelector('#salvar-tarefas');
const getOl = document.querySelector('#lista-tarefas');
const getListChild = document.querySelector('#lista-tarefas').children;

// Referência do código ao Brunão Turma 16 - Tribo A;
function clearNotSelectedColor() {
  const getOlChildren = document.querySelector('ol').children;
  for (let index = 0; index < getOlChildren.length; index += 1) {
    getOlChildren[index].style.backgroundColor = 'white';
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

function deleteCompletedTasks(event) {
  const getButtonCompleted = document.querySelector('#remover-finalizados');
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getButtonCompleted.addEventListener('click', () => {
      // https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList, referenciando o método contains.
      //contains compara array e includes compara string
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

//Referencia do código ao Lucas Fernandes.
function saveList() {
  getBUttonSave.addEventListener('click', () => {
    const setOlList = getOl.innerHTML;
    localStorage.setItem('list', setOlList);
  });
}

function loadList() {
  saveList();
  const getOlList = localStorage.getItem('list');  
  if (getOlList !== null) {
    getOl.innerHTML = getOlList;
  }
} loadList();

function cretatList() {
  document.querySelector('#criar-tarefa').addEventListener('click', addList);
}
cretatList();
