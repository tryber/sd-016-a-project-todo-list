function actionList() {
  const getButton = document.querySelector('#criar-tarefa');
  getButton.addEventListener('click', addList);
}
actionList();

function addList() {
  const getInput = document.querySelector('#texto-tarefa');
  const getOl = document.querySelector('#lista-tarefas');
  const createLi = document.createElement('li');
  createLi.innerText = getInput.value;
  getOl.appendChild(createLi);  
  getInput.value = '';

  changeBackGroundColor();
  changeTextList();
  deletedTasks();
  deleteCompletedTasks();
}

function changeBackGroundColor() {
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].addEventListener('click', function() {
      // Referência do código ao Brunão Turma 16 - Tribo A;
      clearNotSelectedColor();
      getLi[index].style.backgroundColor = 'rgb(128,128,128)';
    })
  }
}
// Referência do código ao Brunão Turma 16 - Tribo A;
function clearNotSelectedColor() {
  const getOl = document.querySelector('ol').children;
  for (let index = 0; index < getOl.length; index += 1) {
    getOl[index].style.backgroundColor = 'white';  
  }
}

function changeTextList() {
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].addEventListener('dblclick', function(event) {     
        getLi[index].classList.add('completed');
        event.textDecoration = 'line-through solid rgb(0, 0, 0)'
    });
  }
}


function deletedTasks() {
  const getButton = document.querySelector('#apaga-tudo');
  const getLi = document.querySelectorAll('li');
  getButton.addEventListener('click', function() {
    for (let index = 0; index < getLi.length; index += 1) {
      getLi[index].remove();
    }
  });
}

function deleteCompletedTasks() {
  const getButtonCompleted = document.querySelector('#remover-finalizados');
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getButtonCompleted.addEventListener('click', function x() {
      if (getLi[index].classList.contains('completed')) {
        getLi[index].remove();
      }
    });
  }
}
