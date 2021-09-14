const btn = document.getElementById('criar-tarefa');
const tarefaTxt = document.getElementById('texto-tarefa');
const tarefaList = document.getElementById('lista-tarefas');
const allList = document.getElementsByTagName('li');
const delAll = document.getElementById('apaga-tudo');
const removeDone = document.getElementById('remover-finalizados');
const saveTarefas = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const removSelected = document.getElementById('remover-selecionado');

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

delAll.addEventListener('click', () => {
  while (tarefaList.firstChild) {
    tarefaList.removeChild(tarefaList.firstChild);
  }
  tempList.splice(0, tempList.length);
  i = 0;
});

removeDone.addEventListener('click', () => {
  const li = document.getElementsByTagName('li');
  for (i = 0; i < li.length; i += 1) {
    if (li[i].className === 'completed') {
      tarefaList.removeChild(li[i]);
    }
    if (li[i].className === 'highlight completed') {
      tarefaList.removeChild(li[i]);
    }
  }
});

saveTarefas.addEventListener('click', () => {

});

moveUp.addEventListener('click', () => {

});

moveDown.addEventListener('click', () => {

});

removSelected.addEventListener('click', () => {

});

btn.addEventListener('click', () => {
  if (tarefaTxt.value !== '') {
    tempList.push(tarefaTxt.value);
    console.log(tempList);
    list();
    tarefaTxt.value = '';
  }
});
