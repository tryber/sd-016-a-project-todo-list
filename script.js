// Add up and down button functions

const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

// Add list itens to ol
function addListItem() {
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  list.appendChild(listItem);

  input.value = '';
}

// Add id to list itens
function addId() {
  for (let i = 0; i < list.children.length; i += 1) {
    list.children[i].id = i;
  }
}
button.addEventListener('click', addListItem);
button.addEventListener('click', addId);

// Add background color to selected list item and make sure thats the only one
let selected;

function clean(selectedID) {
  for (let i = 0; i < list.children.length; i += 1) {
    if (selectedID !== i) {
      const id = i.toString();
      document.getElementById(id).style.backgroundColor = 'white';
      document.getElementById(id).classList.remove('selected');
    }
  }
}

function selectListItem(event) {
  const { id } = event.target; // acessa propriedade id do objeto event.target
  selected = parseInt(id, 10);

  document.getElementById(id).classList.add('selected');
  document.getElementById(id).style.backgroundColor = 'rgb(128, 128, 128)';
  clean(selected);
}

window.addEventListener('mouseover', () => {
  for (let i = 0; i < list.children.length; i += 1) {
    list.children[i].addEventListener('click', selectListItem);
  }
});

// Add and remove line-trough

function taskCompleted(event) {
  const task = event.target;
  if (task.classList[0] !== 'completed' && task.classList[1] !== 'completed') {
    task.classList.add('completed');
  } else if (task.classList[0] === 'completed' || task.classList[1] === 'completed') {
    task.classList.remove('completed');
  }
}

list.addEventListener('dblclick', taskCompleted);

// Reset list

const resetButton = document.getElementById('apaga-tudo');
resetButton.addEventListener('click', () => {
  for (let i = list.children.length - 1; list.children.length > 0; i -= 1) {
    list.children[i].remove();
  }
  localStorage.clear();
});

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

// Save list

const saveListButton = document.getElementById('salvar-tarefas');
saveListButton.addEventListener('click', () => {
  for (let i = 0; i < list.children.length; i += 1) {
    const info = {
      text: list.children[i].innerHTML,
      class: list.children[i].className,
    };

    //  document.getElementById('lista-tarefas').appendChild(document.createElement('li')).innerHTML = localStorage[i];
    localStorage.setItem(i, JSON.stringify(info));
  }
}); // https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/a69f590a-b7be-4821-959e-75204430d057/local-e-session-storage/6da4a8cf-1a42-47c9-b271-a4df5f2ba5a3?use_case=side_bar

// Read info on localstorage
for (let i = 0; i < localStorage.length; i += 1) {
  const info = JSON.parse(localStorage.getItem(i));
  list.appendChild(document.createElement('li'));
  list.children[i].innerHTML = info.text;
  list.children[i].className = info.class;
}

fixListItensIds();

const removeButton = document.getElementById('remover-selecionado');

function removeSelected() {
  list.children[selected].remove();
  fixListItensIds();
}
removeButton.addEventListener('click', removeSelected);
