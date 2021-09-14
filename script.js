let button = document.createElement('button');
let parentButton = document.getElementById('lista-tarefas');
let inputText = document.getElementById('texto-tarefa');

function createbutton() {
  button.id = 'criar-tarefa';
  button.innerText = 'Incluir Tarefa'

  parentButton.appendChild(button);
}

createbutton();


function colorList() {
  let listColor = document.getElementsByClassName('item-list')
  for (let index = 0; index < listColor.length; index += 1) {
  listColor[index].addEventListener('click', function() {
        if (listColor[index].style.background === 'white') {
          listColor[index].style.background = 'rgb(128, 128, 128)';
        } else {
          listColor[index].style.background = 'white';
        }
      })
    }
    console.log(listColor);
  }


function clickButton() {
button.addEventListener('click', function() {
  let taskList = document.createElement('li');
  taskList.className = 'item-list';
  taskList.innerText = inputText.value;
  parentButton.appendChild(taskList);
  inputText.value = '';
  colorList()
  }
  )}

clickButton();

  







