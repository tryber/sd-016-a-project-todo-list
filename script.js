let listItems = document.getElementById('lista-tarefas');

loadingSaveItemsAndAddListener();

document.getElementById('criar-tarefa').addEventListener('click', addTask);

document.getElementById('texto-tarefa').addEventListener('keypress', (p) => {if (p.key === 'Enter') addTask()});

document.getElementById('apaga-tudo').addEventListener('click', () => listItems.innerHTML = '');

document.getElementById('remover-finalizados').addEventListener('click', () => {
  let completed = document.getElementsByClassName('completed');

  for (let i = completed.length; i > 0; i -= 1){
    completed[i-1].remove();
  }
});

document.getElementById('salvar-tarefas').addEventListener('click', () => {
  localStorage.setItem('task', listItems.innerHTML);
});


function createElementLi(li = document.createElement('li')){
  
  li.addEventListener('click', (pointer) => {
    let her = pointer.target;

    for(i of listItems.children) i.classList.remove('selected'); 

    if (!her.classList.contains('completed')) her.classList += ' selected';
  });

  li.addEventListener('dblclick', (pointer) => {
    let her = pointer.target;

    her.classList = her.classList.contains('completed') ? '' : 'completed';
  });

  return li;
}

function addTask(){
  let input = document.getElementById('texto-tarefa');
  let li = createElementLi();

  if (input.value != ''){
    listItems.appendChild(li).innerText = input.value;
    input.value = '';
  }
}

function loadingSaveItemsAndAddListener(){
  if (localStorage.task != undefined) {
    listItems.innerHTML = localStorage.task;
    listItems.childNodes.forEach((child) => createElementLi(child));
  }
}