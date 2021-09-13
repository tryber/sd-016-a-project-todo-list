let button = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let list = document.querySelector('#lista-tarefas');







  button.addEventListener('click', function() {
    let createLi = document.createElement('li');
    createLi.innerText = input.value;   
    list.appendChild(createLi);
    input.value = '';
})


// button.addEventListener('click', function() {
//     if (input.value.length > 0) {
//       let newLi = document.createElement('li');
//       newLi.innerText = input.value;

//       list.appendChild(newLi);
//       input.value = '';
//     }
//   })