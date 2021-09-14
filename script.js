//chamando ítens do HTML
const createList = document.querySelector('ol');
const addInput = document.querySelector('input');
const workButton = document.querySelector('button');
const assigment = [];

// usei for, a lista é um array.Usar variável para fixar o Index
function putColor () {
    const aList = document.querySelectorAll('li');
    for (let index = 0; index < aList.length; index += 1) {
        const theList = aList[index];
        theList.style.backgroundColor = 'unset'; // quando colocar a cor no body, ele retorna nada
    }
}

// quando acontece o event.target a cor muda pra cinza
// A propriedade event.target pode ser usada para implementar a delegação de eventos. Assumindo que existe uma variável 
//'list' contendo uma  instância de elemento ul de html.
function changeColor(event) {
    putColor();
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// a função abaixo cria a lista de tarefas
function appearItem() {

    workButton.addEventListener('click', function() {
        const getList = document.createElement('li');
        getList.addEventListener('click', changeColor); // evento junto com a função anterior para mudança e remoção de cor, indicando seleção
        getList.innerText = addInput.value;
        createList.appendChild(getList);
        addInput.value = '';
    });
}

appearItem()

//*function adicionarItem () {

//const lista = document.createElement('li');
//lista.innerText = addInput.value;
//createList.appendChild(lista);
//addInput.value = '';
//};

   
   // workButton.addEventListener('click', adicionarItem);
//requisito 5 e 6, acima, feito com o auxilio do Leandro, Bruno, Cristiane, Priscila, Pedro e Brunão - T 16 / A

//function corDeFundo () {
//createList.addEventListener('click', function(event) {
//event.target.style.background = "rgb(128,128,128)";
//});

