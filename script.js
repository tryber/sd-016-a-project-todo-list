const buttonCreatTarefa = document.querySelector('#criar-tarefa');
const listOrder = document.querySelector('#lista-tarefas');

buttonCreatTarefa.addEventListener('click', inputButton);

function inputButton() {
  const inputButton = document.querySelector('#texto-tarefa');
  const creatList = document.createElement('li');
  const addText = inputButton.value;
  creatList.innerText = addText
  listOrder.appendChild(creatList);
  inputButton.value = "";
}
listOrder.addEventListener('click', selectBackgroundColor); 

function selectBackgroundColor (event) {
const selectLi = document.querySelectorAll('li');
  for (let index = 0; index < selectLi.length; index += 1) {
    selectLi[index].style.backgroundColor = 'white';
  }  
event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
listOrder.addEventListener('dblclick', textRiscado);

function textRiscado (event) {
event.target.classList.toggle('completed');
}

const buttonClearList = document.getElementById('apaga-tudo');
buttonClearList.addEventListener('click', removeItemList);

function removeItemList () {
const selectLi = document.querySelectorAll('li');
  for (let index = 0; index < selectLi.length; index += 1) {
  const list = selectLi[index];
  listOrder.removeChild(list);
  }
}
const buttonClearListRiscados = document.querySelector('#remover-finalizados');
buttonClearListRiscados.addEventListener('click', clearListRiscados);

function clearListRiscados () {
 const listRiscado = document.querySelectorAll('.completed');
 for (let index = 0; index < listRiscado.length; index += 1) {
  const list = listRiscado[index];
  listOrder.removeChild(list);
  }
}
