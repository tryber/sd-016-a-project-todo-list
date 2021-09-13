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
}

function changeBackGroundColor(){
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].addEventListener('click', function() {    
      getLi[index].style.backgroundColor = 'rgb(128,128,128)'
    })
  }  
}