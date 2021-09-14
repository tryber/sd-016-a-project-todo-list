const createList = document.getElementById("lista-tarefas")
const addInput = document.getElementById("texto-tarefa")
const workButton = document.getElementById("criar-tarefa")


function adicionarItem () {

const lista = document.createElement('li');
lista.innerText = addInput.value;
createList.appendChild(lista);
addInput.value = '';
};

   
    workButton.addEventListener('click', adicionarItem);
//requisito 5 e 6, acima, feito com o auxilio do Leandro, Bruno, Cristiane, Priscila, Pedro e Brunão - T 16 / A

function corDeFundo () {
createList.addEventListener('click', function(event) {
event.target.style.background = "rgb(128,128,128)";
});
}

corDeFundo();

