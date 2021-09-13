
let button = document.querySelector('#criar-tarefa')
let list = document.querySelector('#lista-tarefas')
let input = document.querySelector('#texto-tarefa')
let li = document.querySelectorAll('#lista-tarefas li')
button.addEventListener('click', function(){
let newTask = input.value;
let createListItem = document.createElement('li');
createListItem.addEventListener('click', function(){
    createListItem.style.backgroundColor = 'rgb(128,128,128)'
})

createListItem.appendChild(document.createTextNode(newTask));
list.appendChild(createListItem);
input.value = '';
})

