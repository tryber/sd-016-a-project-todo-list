const buttonCreatTarefa = document.querySelector('#criar-tarefa');
const listOrder = document.querySelector('#lista-tarefas');
const buttonRemoveSelectedList = document.getElementById('remover-selecionado');
// const buttonUp = document.getElementById('mover-cima');
// const buttonDown = document.getElementById('mover-baixo');
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

// Adiciona fundo cinza ao item selecionado e branco aos demais.
function changeColor(event) {
  const selectLi = document.querySelectorAll('li');
  const currentEvent = event.target;
  for (let index = 0; index < selectLi.length; index += 1) {
    selectLi[index].style.backgroundColor = 'white';
  }
  currentEvent.style.backgroundColor = 'grey';
}
listOrder.addEventListener('click', changeColor);

// Adiciona e remove evento que risca itens selecionados com double click.
function textRiscado(event) {
  event.target.classList.toggle('completed');
}
listOrder.addEventListener('dblclick', textRiscado);

// Cria Evento de apagar toda a lista para o botão de Apagar Lista.
const buttonClearList = document.getElementById('apaga-tudo');

function removeItemList() {
  const selectLi = document.querySelectorAll('li');
  for (let index = 0; index < selectLi.length; index += 1) {
    const list = selectLi[index];
    listOrder.removeChild(list);
  }
}
buttonClearList.addEventListener('click', removeItemList);

// Cria Evento ao botão Apagar riscados para o botão de Apagar Lista.
const buttonClearListRiscados = document.querySelector('#remover-finalizados');

function clearListRiscados() {
  const listRiscado = document.querySelectorAll('.completed');
  for (let index = 0; index < listRiscado.length; index += 1) {
    const list = listRiscado[index];
    listOrder.removeChild(list);
  }
}

buttonClearListRiscados.addEventListener('click', clearListRiscados);

// function buttonUpList(event) {
//   const currentEvent = event.target;
//   const selectLi = document.querySelectorAll('li');
//   for (let index = 0; index < selectLi.length; index += 1) {
//     listOrder.insertBefore(currentEvent, selectLi[index]);
//   }
// }
// listOrder.addEventListener('click', buttonUpList);

// Remove e cria class 'selected' no item da lista selecionado.
function selectedList(event) {
  const selectLi = document.querySelectorAll('li');
  for (let index = 0; index < selectLi.length; index += 1) {
    selectLi[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

listOrder.addEventListener('click', selectedList);

// Função ao botão 'Apagar Selecionado' de remover o item selecionado da lista.
function removeSelectList() {
  const itemSelectedList = document.querySelector('.selected');
  listOrder.removeChild(itemSelectedList);
}

buttonRemoveSelectedList.addEventListener('click', removeSelectList);
