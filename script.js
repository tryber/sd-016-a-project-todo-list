const header = document.createElement('header');
document.body.appendChild(header);

const titleH1 = document.createElement('h1');
titleH1.innerHTML = 'Minha Lista de Tarefas';
titleH1.style.textAlign = 'center';
header.appendChild(titleH1);

const titleH2 = document.createElement('h2');
titleH2.id = 'funcionamento';
titleH2.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
titleH2.style.textAlign = 'center';
header.appendChild(titleH2);

const main = document.createElement('main');
document.body.appendChild(main);

const containerInput = document.createElement('div');
containerInput.id = 'containerInput';
main.appendChild(containerInput);

const inputTasks = document.createElement('input');
inputTasks.id = 'texto-tarefa';
inputTasks.placeholder = 'Insira sua nova tarefa';
containerInput.appendChild(inputTasks);

const btnAdd = document.createElement('button');
btnAdd.id = 'criar-tarefa';
btnAdd.innerText = 'Adicionar';
containerInput.appendChild(btnAdd);

const orderedList = document.createElement('ol');
orderedList.id = 'lista-tarefas';
orderedList.style.userSelect = 'none';
orderedList.style.width = '100vw';
main.appendChild(orderedList);

const btnClear = document.createElement('button');
btnClear.innerText = 'Limpar';
btnClear.id = 'apaga-tudo';
containerInput.appendChild(btnClear);

const btnAllClear = document.createElement('button');
btnAllClear.innerText = 'Concluídos';
btnAllClear.id = 'remover-finalizados';
containerInput.appendChild(btnAllClear);

btnClear.addEventListener('click', () => {
  orderedList.innerHTML = '';
});

btnAllClear.addEventListener('click', () => {
  const findItem = Array.prototype.slice.call(main.children[1].children);
  const newOutput = findItem.filter((el) => el.className !== 'clickItem completed');
  orderedList.innerHTML = '';
  newOutput.forEach((el) => {
    console.log(el);
    orderedList.appendChild(el);
  });
});
// /clickItem
btnAdd.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.classList.add('clickItem');
  newItem.innerHTML = inputTasks.value;
  orderedList.appendChild(newItem);
  inputTasks.value = '';
});

orderedList.addEventListener('click', (event) => {
  const listLi = document.querySelectorAll('li');
  const currentLi = event.target;
  for (let index = 0; index < listLi.length; index += 1) {
    listLi[index].style.backgroundColor = 'white';
  }
  currentLi.style.backgroundColor = 'rgb(128,128,128)';
});
orderedList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
