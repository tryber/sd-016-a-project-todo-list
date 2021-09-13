// ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

let textInput = document.getElementById('texto-tarefa')
let roadButton = document.querySelector('#criar-tarefa')
roadButton.innerHTML = 'Adicionar Tarefa'
function addAssign() {
  let ordList = document.getElementById('lista-tarefas');
  let newListItem = document.createElement('li');
  newListItem.innerText = textInput.value
  ordList.appendChild(newListItem)
  textInput.value = '';
}
roadButton.addEventListener('click', addAssign)

function addLiListenner(event) {

  const listItem = document.querySelectorAll('li')
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].addEventListener('click', function (event) {
      for (let i = 0; i < listItem.length; i += 1) {
       listItem[i].style.background = 'white'
      }
      event.target.style.background = 'rgb(128,128,128)'
    })
  }
}

document.querySelector('#lista-tarefas').addEventListener('click', addLiListenner);


// let caminhoDeOndeCliquei = document.querySelectorAll('.pixel');
// for (let i = 0; i < caminhoDeOndeCliquei.length; i += 1){
// caminhoDeOndeCliquei[i].addEventListener('click', pintarQuadrado);
// }
