let listItems = document.getElementById('lista-tarefas');
let items = listItems.children;
let i = document.getElementsByTagName('li');

document.getElementById('criar-tarefa').addEventListener('click', () => {
  let li = document.createElement('li');
  let input = document.getElementById('texto-tarefa');
  
  listItems.appendChild(li).innerText = input.value;
  input.value = '';
});

listItems.addEventListener('click', (action) => {
  for(i of items){
    i.style.backgroundColor = 'white';
  }    
  action.target.style =  'background-color: rgb(128,128,128);';
});