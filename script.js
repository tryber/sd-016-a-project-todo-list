let button = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let list = document.querySelector('#lista-tarefas');
let clearAll = document.querySelector('#apaga-tudo');



button.addEventListener('click', function () {
  let createLi = document.createElement('li');
  createLi.innerText = input.value;
  createLi.className = 'li-lista'
  list.appendChild(createLi);
  input.value = '';
  createLi.addEventListener('click', addGrey)
  createLi.addEventListener('dblclick', addRisk)
})

function addGrey(event) {
  let selectList = document.querySelector('.graycolor');
  if (selectList != null) {
    selectList.classList.remove('graycolor');
  }
  event.target.classList.add('graycolor');
}

function Clear() {
  while (list.firstElementChild) {
    list.removeChild(list.firstElementChild);
  }
}

clearAll.addEventListener('click', function () {
  while (list.firstElementChild) {
    list.removeChild(list.firstElementChild);
  }
})

function addRisk(event) {
  event.target.classList.toggle('completed');
}
