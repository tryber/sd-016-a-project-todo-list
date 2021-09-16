const main = document.getElementsByTagName('main');
const inputText = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const btnClear = document.getElementById('apaga-tudo');
const btnRemoveDone = document.getElementById('remover-finalizados');
const btnAdd = document.getElementById('criar-tarefa');
const btnSalveTask = document.getElementById('salvar-tarefas');
const btnRemoveSelected = document.getElementById('remover-selecionado');

const repairItens = JSON.parse(localStorage.getItem('saveList'));
if (repairItens !== null) {
  repairItens.forEach((el) => {
    const itemList = document.createElement('li');
    el.className.split(' ').forEach((classList) => {
      itemList.classList.add(classList);
    });
    itemList.innerText = el.text;
    itemList.style.backgroundColor = el.style;
    orderedList.appendChild(itemList);
  });
}

btnClear.addEventListener('click', () => {
  orderedList.innerHTML = '';
});

// butão limpar completo
btnRemoveDone.addEventListener('click', () => {
  const findItem = Array.from(main[0].children[2].children[0].children);
  const newOutput = findItem.filter((el) => el.className !== 'clickItem completed');
  orderedList.innerHTML = '';
  newOutput.forEach((el) => {
    orderedList.appendChild(el);
  });
});
// /clickItem
btnAdd.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.classList.add('clickItem');
  newItem.innerHTML = inputText.value;
  orderedList.appendChild(newItem);
  inputText.value = '';
});

orderedList.addEventListener('click', (event) => {
  const listLi = document.querySelectorAll('li');
  const currentLi = event.target;
  for (let index = 0; index < listLi.length; index += 1) {
    listLi[index].style.backgroundColor = 'rgb(255 , 255 , 165)';
    listLi[index].transform = 'rotate(20)';
  }
  currentLi.style.backgroundColor = 'rgb(128, 128, 128)';
  currentLi.style.transform = 'rotate(0)';
});
orderedList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

// salvar-tarefas
btnSalveTask.addEventListener('click', () => {
  const contentList = Array.from(main[0].children[2].children[0].children);
  const containerSave = contentList.map((el) => ({
    text: el.innerText,
    className: el.className,
    style: el.style.backgroundColor,
  }));
  localStorage.setItem('saveList', JSON.stringify(containerSave));
});

// remover-selecionado
btnRemoveSelected.addEventListener('click', () => {
  const findItem = Array.from(main[0].children[2].children[0].children);
  const newOutput = findItem.filter((el) => el.style.backgroundColor !== 'rgb(128, 128, 128)');
  orderedList.innerHTML = '';
  newOutput.forEach((el) => {
    orderedList.appendChild(el);
  });
});
