// Requisito 5 e 6
const buttonInput = document.querySelector('#buttonInput');
const main = document.querySelector('main');
const buttonCreateTask = document.createElement('button');
buttonCreateTask.id = 'criar-tarefa';
buttonCreateTask.innerHTML = 'Create';
buttonInput.appendChild(buttonCreateTask);
buttonCreateTask.addEventListener('click',addTask);

function addTask() {
  let ol = document.querySelector('ol');
  let input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  document.querySelector('#texto-tarefa').value = '';
  // Requisito 7
  let liTags = document.querySelectorAll('li');
  for (let index = 0; index < liTags.length; index += 1) {
   liTags[index].addEventListener('click', addBackgroundColor)
    console.log('aqui');
  
    function addBackgroundColor() {
      if (liTags[index].style.backgroundColor === '') {
        liTags[index].style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  }
}
