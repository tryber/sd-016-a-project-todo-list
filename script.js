const inputList = document.querySelector('#texto-tarefa');
const buttonInput = document.querySelector('#criar-tarefa');
const button = document.querySelector('#apaga-tudo');
let list = document.querySelector('#lista-tarefas');
let text = null

function getText(){  
  inputList.addEventListener('keyup', function (e) {
      text = e.target.value;
      console.log(text)
      return text
  });
}
getText()

function insertList() {
  buttonInput.addEventListener('click', function () {
    let assignment = document.createElement('li');
    assignment.className = 'tarefas'
    assignment.innerText = text;
    if (assignment.innerText === '') {
      alert('Desculpe, não pode acrescentar um item vazio!')
      return
    }
    list.appendChild(assignment);
    inputList.value = '';
    assignment.removeAttribute('innerText');
    text = '';
    selectItemsList()
    return text
  });
}
insertList()

function selectItemsList() {
  let itemsList = document.querySelectorAll('li')
  console.log(itemsList)
  itemsList.forEach( ev => ev.addEventListener('click', function () {
    for (index = 0; index < itemsList.length; index += 1) {
      itemsList[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
  }));
}

function cleanList() {
  let itemsList = document.querySelectorAll('li');
  button.addEventListener('click', function () {
    itemsList = []
    })
    return itemsList;
}
cleanList()
