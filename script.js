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
  
    function addBackgroundColor() {
      // Requisito 8
      for(let index = 0; index < liTags.length; index += 1) {
        if (liTags[index].style.backgroundColor === 'rgb(128, 128, 128)') {
          liTags[index].style.backgroundColor = '';
        }
      }
      if (liTags[index].style.backgroundColor === '') {
        liTags[index].style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  }
  // Requisito 9
  for (let index = 0; index < liTags.length; index += 1) {
    liTags[index].addEventListener('dblclick',completeTask)

    function completeTask() {
      liTags[index].classList.add('completed');
      // if (liTags[index].className.includes('completed')) {
      //   liTags[index].classList.remove('completed')
      // }
    function removeClass() {
      if (liTags[index].className === 'completed') {
        // console.log('aqui')
        liTags[index].classList.remove('completed');
      }
    }
      liTags[index].addEventListener('dblclick',removeClass)
    }
  }
}

//  Requisito 10
let buttonClean = document.querySelector('#apaga-tudo');
function removeAll() {
  let ol = document.querySelector('ol');
  let li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    ol.removeChild(li[index]);
  }
}
buttonClean.addEventListener('click', removeAll);
