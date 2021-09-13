

const divCont = document.getElementById('input-container')
function creatingInput() {
  const input = document.createElement('input')
  input.id = 'texto-tarefa'
  divCont.appendChild(input)
}
creatingInput();

const olCont = document.getElementById('ol-container');
function creatingOl() {
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  olCont.appendChild(orderedList);
}

creatingOl();

const buttonCont = document.getElementById('button-container');
function creatingButton() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerHTML ='Adicionar'
  buttonCont.appendChild(button);
}
creatingButton();

const getButton = document.getElementById('criar-tarefa');
getButton.addEventListener('click', function(){
    const input = document.querySelector('#texto-tarefa')
    const ordList = document.querySelector('#lista-tarefas')
    const createLi = document.createElement('li');
    createLi.className = 'lista'
    createLi.innerHTML = input.value;
    ordList.appendChild(createLi)
    input.value = '';
})

const lista = document.querySelector('#lista-tarefas')
lista.addEventListener('click', function(event){
event.target.style.backgroundColor = 'rgb(128, 128, 128)';

})
