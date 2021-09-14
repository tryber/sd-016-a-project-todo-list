const createList = document.getElementById("#lista-tarefas")
const addInput = document.getElementById('#texto-tarefa')
const workButton = document.getElementById("#criar-tarefa")


function adicionarItem () {

const lista = document.createElement('li');
lista.innerText = addInput.value;
creatList.appendChild(lista);
addInput.value = '';
};

   
    workButton.addEventListener('click', adicionarItem);



