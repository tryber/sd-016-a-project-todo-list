// Referência do código ao Brunão Turma 16 - Tribo A;
function clearNotSelectedColor() {
  const getOlChildren = document.querySelector('ol').children;
  for (let index = 0; index < getOlChildren.length; index += 1) {
    getOlChildren[index].style.backgroundColor = 'white';
  }
}

function changeBackGroundColor() {
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].addEventListener('click', function anonimous() {
      // Referência do código ao Brunão Turma 16 - Tribo A;
      clearNotSelectedColor();
      getLi[index].style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

// Referência do código para o Carlos Dal Soler, Turma 16 - Tribo A;
function changeTextList(event) {
  let validate = false;
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    validate = true;
  } else if (validate === false) {
    event.target.classList.add('completed');
    validate = false;
  }
}

function deletedTasks() {
  const getButton = document.querySelector('#apaga-tudo');
  const getLi = document.querySelectorAll('li');
  getButton.addEventListener('click', function anonimous() {
    for (let index = 0; index < getLi.length; index += 1) {
      getLi[index].remove();
    }
  });
}

function deleteCompletedTasks() {
  const getButtonCompleted = document.querySelector('#remover-finalizados');
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getButtonCompleted.addEventListener('click', function anonimous() {
      // https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList, referenciando o método contains.
      if (getLi[index].classList.contains('completed')) {
        getLi[index].remove();
      }
    });
  }
}

function addList() {
  const getInput = document.querySelector('#texto-tarefa');
  const getOl = document.querySelector('#lista-tarefas');
  const createLi = document.createElement('li');
  createLi.innerText = getInput.value;
  getOl.appendChild(createLi);
  getInput.value = '';

  changeBackGroundColor();
  // Referência do código para o Carlos Dal Soler, Turma 16 - Tribo A;
  createLi.addEventListener('dblclick', changeTextList);
  deletedTasks();
  deleteCompletedTasks();
}

function cretatList() {
  document.querySelector('#criar-tarefa').addEventListener('click', addList);
}
cretatList();
