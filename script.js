const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', function() {
  if (input.value != '') {
    let li = document.createElement('li')
    li.innerHTML = input.value;
    ol.appendChild(li)
    input.value = '';
  }
})


 

input.style.backgroundColor = "yellow";
input.style.fontSize = "15px";
input.style.fontWeight = "900";
let body = document.querySelector('body');
body.style.backgroundColor = "rgb( 150, 150, 150)";
// body.style.textAlign = "center";


button.style.backgroundColor = "black";
button.style.color = "white";
button.style.fontSize = '20px';
