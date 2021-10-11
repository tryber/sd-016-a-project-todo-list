let listItems = document.getElementById('lista-tarefas');

document.getElementById('criar-tarefa').addEventListener('click', addItem);
document.getElementById('texto-tarefa').addEventListener('keypress', (x) => (x.key === 'Enter') ? addItem() : null);

listItems.addEventListener('click', (action) => 
{
});

function addItem(){
  let li = document.createElement('li');
  let input = document.getElementById('texto-tarefa');
  
  li.addEventListener('click', (pointer) => {
    let her = pointer.target;
    for(i of listItems.children){
      i.classList.remove('selected'); 
    }
    if (!her.classList.contains('completed')) her.classList += ' selected';
  });

  li.addEventListener('dblclick', (pointer) => {
    let her = pointer.target;
    her.classList = her.classList.contains('completed') ? '' : 'completed';
  });

  if (input.value != '') listItems.appendChild(li).innerText = input.value;

  input.value = '';
}