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

  const listLi = document.querySelectorAll('ol')
  for (let index = 0; index < listLi.length; index += 1) {
    listLi[index].addEventListener('click', function (event) {
      for (let i = 0; i < listLi.length; i += 1) {
       listLi[i].style.background = 'white'
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
