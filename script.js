const localButton = document.querySelector('#criar-tarefa');
const localOl = document.querySelector('#lista-tarefas');
const contentInput = document.querySelector('#texto-tarefa');

function createLi() {
  const novaLi = document.createElement('li');
  novaLi.innerText = contentInput.value;
  localOl.appendChild(novaLi);
  contentInput.value = '';
  novaLi.addEventListener('click', function () {
    novaLi.style.backgroundColor = 'rgb(128,128,128)';
  });
}

localButton.addEventListener('click', createLi);

// function color() {
//   novaLi.style.backgroundColor = 'rgb(128,128,128)';
// }

const buttonApagar = document.getElementById('apaga-tudo');
function erasedIten() {
  localOl.innerHTML = '';
}

buttonApagar.addEventListener('click',erasedIten);