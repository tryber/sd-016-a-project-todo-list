let button = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let list = document.querySelector('#lista-tarefas');







  button.addEventListener('click', function() {
    let createLi = document.createElement('li');
    createLi.innerText = input.value;   
    list.appendChild(createLi);
    input.value = '';
})


