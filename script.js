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
    listItem[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

document.querySelector('#lista-tarefas').addEventListener('click', addLiListenner);


// let caminhoDeOndeCliquei = document.querySelectorAll('.pixel');
// for (let i = 0; i < caminhoDeOndeCliquei.length; i += 1){
// caminhoDeOndeCliquei[i].addEventListener('click', pintarQuadrado);
// }

















// const input = document.getElementById('texto-tarefa');
// const button = document.getElementById('criar-tarefa');
// const taskList = document.getElementById('lista-tarefas');


// function criarInput() {
//   const newList = document.createElement('li');
//   newList.innerText = input.value;
//   taskList.appendChild(newList);
//   input.value = '';

// }

// button.addEventListener('click', criarInput);

// function colorirList(){
//   const listItem = document.getElementsByTagName('li');
//   listItem[i].addEventListener('click', (event) => {
//   event.target.style.backgroundColor = 'rgb (128, 128, 128)';
// });
// }

















// function colorLi(event) {
//   const listLi = document.querySelectorAll('li');
//   for (let index = 0; index < listLi.length; index += 1) {
//     const element = listLi[index];
//     document.querySelector('.selected').style.backgroundColor = 'white';
//     element.classList.remove('selected');
//   }

//   event.target.className = 'selected';
//   document.querySelector('.selected').style.backgroundColor = 'rgb(128, 128, 128)';
// }