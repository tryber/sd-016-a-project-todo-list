const btn = document.getElementById('criar-tarefa');
const tarefaTxt = document.getElementById('texto-tarefa');
const tarefaList = document.getElementById('lista-tarefas');
const allList = document.getElementsByTagName('li');

const tempList = [];
let i = 0;

function list() {
  const li = document.createElement('li');
  const lista = document.createTextNode(tempList[i]);
  li.id = `${i}`;
  li.appendChild(lista);
  tarefaList.appendChild(li);
  li.addEventListener('click', () => {
    for (i = 0; i < allList.length; i += 1) {
      allList[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
  });
  li.addEventListener('dblclick', () => {
    li.classList.toggle('completed');
  });
  i += 1;
}

btn.addEventListener('click', () => {
  tempList.push(tarefaTxt.value);
  console.log(tempList);
  list();
  tarefaTxt.value = '';
});
