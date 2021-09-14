

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

//botão que remove as li's
//https://forums.asp.net/t/1872818.aspx?how+to+remove+all+the+li+inside+the+ul+using+javascript+
function removeLi() {
let ol = document.getElementById('lista-tarefas');
  if (ol) {
    while (ol.firstChild) {
      ol.removeChild(ol.firstChild);
    }
  }
}

const clearButton = document.querySelector('#apaga-tudo')
clearButton.addEventListener('click', removeLi)

//função que passa a classe completed e o estilo inline-through
let riskItens = document.querySelector('#lista-tarefas');
riskItens.addEventListener('dblclick', function(event) {
  for (let index = 0; index < riskItens.length; index += 1){
    riskItens[index].classList.add = ''
  }
  if (event.target.className === 'completed') {
    event.target.classList.toggle('completed');
  } else {
  event.target.className = 'completed';
  }
         
})

function completedButton(){
  let completed = document.querySelector('.completed');
  if (completed){
    while(completed.firstChild)
    completed.remove(completed.firstChild)
  }
}

let clearCompletedButton = document.querySelector('#remover-finalizados')
clearCompletedButton.addEventListener('click', completedButton);

