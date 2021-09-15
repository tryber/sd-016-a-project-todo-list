const buttonAdd = document.querySelector('#criar-tarefa');
const addList = document.querySelector('#lista-tarefas');

// quinto requisito - clicar no botão adiciona um novo item.
// sexto requisito - adicionar ao menos 3 intens a lista;
buttonAdd.addEventListener('click', add);

function add () {
  const inputAdd = document.querySelector('#texto-tarefa');
  const textInput = inputAdd.value;
  const taskLine = document.createElement('li');
  taskLine.classList.add('line');
  taskLine.innerHTML = textInput;
  addList.appendChild(taskLine);
  inputAdd.value = '';
}

// setimo requisito - clicar em um item altera o fundo.
// oitavo requisito - selecionar um por vez.
addList.addEventListener('click', changeBackground);

function changeBackground (event) {
  const selectLi = document.querySelectorAll('li');
  for (let index = 0; index < selectLi.length; index += 1) {
    selectLi[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'grey';
}

// nono requisito - duplo click risca o item depois desfaz o risco. 
addList.addEventListener('dblclick', changeTextStyle);

function changeTextStyle (event) {
  event.target.classList.toggle('completed');
}
//https://www.w3schools.com/howto/howto_js_toggle_class.asp

// décimo requisito - click no botão apaga todos os itens da lista.
const deleteButton = document.querySelector('#apaga-tudo');
deleteButton.addEventListener('click', deleteAll);

function deleteAll () {
  const removeList = document.querySelectorAll('.line')
  for (let index = 0; index < removeList.length; index += 1) {
   const element = removeList[index];
   addList.removeChild(element);
 }
}

// décimo primeiro requisito - click no botão remove os itens riscados.
const buttonRemoveStyle = document.querySelector('#remover-finalizados');
buttonRemoveStyle.addEventListener('click', removeStyle);

function removeStyle () {
  const removeListStyle = document.querySelectorAll('.completed');
  for (let index = 0; index < removeListStyle.length; index += 1) {
   const element = removeListStyle[index];
   addList.removeChild(element);
  }
}
