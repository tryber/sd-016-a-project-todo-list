const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

// Add list itens to ol
function addListItem() {
  let listItem = document.createElement('li')
  listItem.innerText = input.value;
  list.appendChild(listItem);

  input.value = '';
}

button.addEventListener('click', addListItem);

// Add id to list itens
function addId() {
  for (let i = 0; i < list.children.length; i += 1) {
    list.children[i].id = i;
    list.children[i].className = 'incompleted';
  }
}

button.addEventListener('click', addId);

// Add background color to selected list item and make sure thats the only one

let selected = -1;

function clean(selectedID) {
  for (let i = 0; i < list.children.length; i += 1) {
    if (selectedID !== i) {
      let id = i.toString();
      document.getElementById(id).style.backgroundColor = 'white';
    }
  }
}

button.addEventListener('click', () => {
  for (let i = 0; i < list.children.length; i += 1) {
    list.children[i].addEventListener('click', () => {
      let id = i.toString();
      selected = i;
      document.getElementById(id).style.backgroundColor = 'rgb(128, 128, 128)';
      clean(selected);
    });
  }
})

// Add and remove line-trough

function taskCompleted(event) {
  const task = event.target;
  if (task.className !== 'completed') {
    task.className = 'completed';
  } else {
    task.className = 'incomplete';
  }
}

list.addEventListener('dblclick', taskCompleted);

// Reset list

const resetButton = document.getElementById('apaga-tudo');
resetButton.addEventListener('click', () => {
  for (let i = list.children.length - 1; list.children.length > 0; i -= 1) {
    list.children[i].remove();
  }
})

// Remove completed list itens

function fixListItensIds() {
  for (let i = 0; i < list.children.length; i += 1) {
    list.children[i].removeAttribute('id');
    list.children[i].id = i;
  }
}

function clearCompleted() {
  const completedArray = document.querySelectorAll('.completed');
  for (let i = 0; i < completedArray.length; i += 1) {
    completedArray[i].remove(); 
  }
  fixListItensIds();
}

const clearCompletedButton = document.getElementById('remover-finalizados');
clearCompletedButton.addEventListener('click', clearCompleted);
