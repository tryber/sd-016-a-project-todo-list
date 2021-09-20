// ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

let textInput = document.getElementById('texto-tarefa')
let roadButton = document.querySelector('#criar-tarefa')
roadButton.innerHTML = 'Adicionar Tarefa'

function addAssign() {
  let ordList = document.getElementById('lista-tarefas');
  let newListItem = document.createElement('li');
  newListItem.innerText = textInput.value
  ordList.appendChild(newListItem)
  textInput.value = '';
}
roadButton.addEventListener('click', addAssign)

function addLiListenner(event) {
  const listItem = document.querySelectorAll('li')
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

document.querySelector('#lista-tarefas').addEventListener('click', addLiListenner);

// Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
// 

function riskTask(event) {
  event.target.classList.toggle('completed'); //se tem a class tira, se nao tem poe
}

document.querySelector('#lista-tarefas').addEventListener('dblclick', riskTask)

let newButon = document.createElement('button')
newButon.innerText = 'apagar tudo'
newButon.id = 'apaga-tudo'
document.body.appendChild(newButon)
document.querySelector('#apaga-tudo').addEventListener('click', clearTasks);

function clearTasks() {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    document.querySelector('#lista-tarefas').removeChild(listItems[index])
  }
}

// Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista

let buttonNew = document.createElement('button')
buttonNew.id = 'remover-finalizados';
buttonNew.innerText = 'remove finalizados';
document.body.appendChild(buttonNew)


document.getElementById('remover-finalizados').addEventListener('click', removeCompletedTasks)

function removeCompletedTasks (event) {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    if (listItems[index].className === "completed") {
      listItems[index].remove(); // Danielle Silva tribo B e Julia Barcelos
    }
  }
}

// function reloadPag() {
//   let reloadList = localStorage.getItem('newList');
//   let newOl = document.querySelector('ol');
//   let splitList = reloadList.split('\n');
//   for (let key in splitList) {
//     let newItemReload = document.createElement('li');
//     newItemReload.innerText = splitList[key];
//     newOl.appendChild(newItemReload);
//   }
// }

// ajudada por JULIA BARCELOS <3 <3 <3 E João Veidz
let inputList = document.getElementById('lista-tarefas')

function reloadPag () {
  const arrayLi = localStorage.getItem('newList');
  inputList.innerHTML =  JSON.parse(localStorage.getItem('newList')) // transforma string para objeto
  removeCompletedTasks()
}

function saveTasks() {
  
  ;
  localStorage.setItem('newList', JSON.stringify(inputList.innerHTML)); // transforma de objeto para string
  // reloadPag()
  // let wtf = JSON.stringify(inputList.innerHTML)
  // console.log(JSON.parse(wtf))
  // console.log(document.getElementById('lista-tarefas'))
}

function createButtonSaveTasks (){
let buttonSaveTasks = document.createElement('button')
buttonSaveTasks.id = 'salvar-tarefas';
buttonSaveTasks.innerText = 'salvar tarefas';
document.body.appendChild(buttonSaveTasks)
}
createButtonSaveTasks()

document.querySelector('#salvar-tarefas').addEventListener('click', saveTasks)
window.onload = function(){
  reloadPag()
}



// - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
// O que será verificado:

// Será verificado que existe um elemento button com o id salvar-tarefas

// Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.

// function saveTasks() {
//   let newOl = document.querySelector('#lista-tarefas')
//   localStorage.setItem('taskListStorage', JSON.stringify(newOl.innerHTML));
// }
// let saveTask = document.querySelector('#salvar-tarefas');
// saveTask.addEventListener('click', saveTasks);

// window.onload = () => {
//   // if (localStorage !== null) {
//     const taskHTML = JSON.parse(localStorage.getItem('taskListStorage'));
//     taskList.innerHTML = taskHTML;
//   // }
// };