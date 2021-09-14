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

function clearTasks () {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1){
    document.querySelector('#lista-tarefas').removeChild(listItems[index])
  }
}