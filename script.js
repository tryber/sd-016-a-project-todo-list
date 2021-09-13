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
main.appendChild(orderedList);

btnAdd.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.classList.add('clickItem');
  newItem.innerHTML = inputTasks.value;
  newItem.addEventListener('click', () => {
    newItem.style.backgroundColor = 'gray';
  });
  orderedList.appendChild(newItem);
  inputTasks.value = '';
});
