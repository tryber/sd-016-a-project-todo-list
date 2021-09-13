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
}