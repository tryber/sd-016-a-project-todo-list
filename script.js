const buttonCreatTarefa = document.querySelector('#criar-tarefa');
const listOrder = document.querySelector('#lista-tarefas');
// const selectLi = document.querySelectorAll('li');

function inputOfButton() {
  const inputButton = document.querySelector('#texto-tarefa');
  const creatList = document.createElement('li');
  const addText = inputButton.value;
  creatList.innerText = addText;
  listOrder.appendChild(creatList);
  inputButton.value = '';
}

buttonCreatTarefa.addEventListener('click', inputOfButton);

function selectBackgroundColor(event) {
  const selectLi = document.querySelectorAll('li');
  for (let index = 0; index < selectLi.length; index += 1) {
    selectLi[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'grey';
  // event.target.classList.add('move');
}

listOrder.addEventListener('click', selectBackgroundColor);

function textRiscado(event) {
  event.target.classList.toggle('completed');
}

listOrder.addEventListener('dblclick', textRiscado);
const buttonClearList = document.getElementById('apaga-tudo');

function removeItemList() {
  const selectLi = document.querySelectorAll('li');
  for (let index = 0; index < selectLi.length; index += 1) {
    const list = selectLi[index];
    listOrder.removeChild(list);
  }
}

buttonClearList.addEventListener('click', removeItemList);
const buttonClearListRiscados = document.querySelector('#remover-finalizados');

function clearListRiscados() {
  const listRiscado = document.querySelectorAll('.completed');
  for (let index = 0; index < listRiscado.length; index += 1) {
    const list = listRiscado[index];
    listOrder.removeChild(list);
  }
}

buttonClearListRiscados.addEventListener('click', clearListRiscados);

// const selectLi = document.querySelectorAll('li');
// const classMove = document.querySelector('.move');
// const buttonDown = document.getElementById('mover-baixo');
// const buttonUp = document.getElementById('mover-cima');
// buttonDown.addEventListener('click', buttonDownList);
// buttonUp.addEventListener('click', buttonUpList);

// function buttonDownList () {
//   for (let index = 0; index < selectLi.length; index += 1) {
//     const element = classMove[index];
//     element = element + 1;
//   }
// }
