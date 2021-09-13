const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

function createItenList() {
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  list.appendChild(listItem);
  input.value = '';
}
button.onclick = createItenList;
let lis = document.getElementsByTagName('li');
function selectItem(event) {
   for (let i = 0; i < lis.length; i += 1) {
       lis[i].classList.remove('selected');
   }
   event.target.classList.add('selected')
}
list.addEventListener('click', selectItem);

function completeItem(event) {
    event.target.classList.add('completed')
 }
 list.addEventListener('dblclick', completeItem);
 