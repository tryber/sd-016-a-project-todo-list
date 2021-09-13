
let button = document.querySelector('#criar-tarefa')
let list = document.querySelector('#lista-tarefas')
let input = document.querySelector('#texto-tarefa')
button.addEventListener('click', function(){
let newTask = input.value;
let createListItem = document.createElement('li');

createListItem.appendChild(document.createTextNode(newTask));
list.appendChild(createListItem);
input.value = '';
})

