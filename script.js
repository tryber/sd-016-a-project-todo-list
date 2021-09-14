

const input = document.querySelector('#texto-tarefa')
    const ordList = document.querySelector('#lista-tarefas')
    const createLi = document.createElement('li');
//função que cria o input dinamicamente
const divCont = document.getElementById('input-container')
function creatingInput() {
  const input = document.createElement('input')
  input.id = 'texto-tarefa'
  divCont.appendChild(input)
}
creatingInput();

// //função que vai pintar o input escolhido
// function itemColor(event) {
//     event.target.style.backgroundColor = 'rgb(128, 128, 128)';
// }

//função pra criar a ol dinamicamente
const olCont = document.getElementById('ol-container');
function creatingOl() {
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  olCont.appendChild(orderedList);
}

creatingOl();

//função que cria o botão
const buttonCont = document.getElementById('button-container');
function creatingButton() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerHTML ='Adicionar'
  buttonCont.appendChild(button);
}
creatingButton();

//função que cria as Li com o input
const getButton = document.getElementById('criar-tarefa');
getButton.addEventListener('click', function(){
    const input = document.querySelector('#texto-tarefa')
    const ordList = document.querySelector('#lista-tarefas')
    const createLi = document.createElement('li');
    createLi.className = 'lista'
    createLi.innerHTML = input.value;
    ordList.appendChild(createLi)
    input.value = '';

    // evento que vai pintar o input clicado
    const listedItens = document.querySelector('#lista-tarefas').children;
    createLi.addEventListener('click', function (event) {
        for (let index = 0; index < listedItens.length; index += 1){
            listedItens[index].style.backgroundColor = document.body.style.background;
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    })
    
})
// const listedItens = document.querySelector('#lista-tarefas').children
// const clearButton = document.querySelector('#apaga-tudo')
// clearButton.addEventListener('click', function(){
//     // const lista = document.getElementsByClassName(lista)
//     const getOl = document.querySelectorAll('#lista-tarefas')
//     for(let index = 0; index < getOl.length; index += 1){
//     listedItens.removeChild(getOl[index])
//     }
// })

