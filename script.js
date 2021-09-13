const localButton = document.querySelector('#criar-tarefa');
const localOl = document.querySelector('#lista-tarefas');
let contentInput = document.querySelector('#texto-tarefa');


function createLi() {
  const novaLi = document.createElement('li');
  novaLi.innerText=contentInput.value;
  localOl.appendChild(novaLi);
  contentInput.value="";
}

// function addTarefa() {
//   // na Ol criar um item li que quando for clicado, a li terá o value imput 
//   createLi()
//   contentLi.innerText=localButton.value
// }

localButton.addEventListener('click', createLi);