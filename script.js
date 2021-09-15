//chamando ítens do HTML
const createList = document.querySelector('ol');
const addInput = document.querySelector('input');
const workButton = document.querySelector('button');
const assigment = [];

//requisito feito com o auxilio do Bruno, Victor (monitor) e Cristiane - T 16 / A
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
//requisito feito com o auxilio do Bruno, Victor (monitor) e Cristiane - T 16 / A
function changeColor(event) {
    putColor();
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
// função para dois cliques e riscar a palavra quando 
//finalizada e tirar o risco quando clicar novamente duas vezes
//requisito feito com o auxilio da Cristiane e Camila - T 16 / A
function scratchTask (event){
    console.log("Duplo clique para riscar");
    if(event.target.className === 'completed') {
        event.target.classList.remove('completed')
    }else{
        event.target.className = 'completed';
    }
}


// a função abaixo cria a lista de tarefas
//requisito feito com o auxilio do Bruno, Victor (monitor) e Cristiane - T 16 / A
function appearItem() {

    workButton.addEventListener('click', function() {
        const getList = document.createElement('li');
        getList.addEventListener('click', changeColor);
        getList.addEventListener('dblclick', scratchTask);  // evento junto com a função anterior para mudança e remoção de cor, indicando seleção//
        getList.innerText = addInput.value;
        getList.classList.add("listaUm");
        createList.appendChild(getList);
        addInput.value = '';
    });
}


appearItem()


// Função para fazer o botão de apagar tudo funcionar;
// Quesito feito com o auxílio do Rafael e do Emerson - Turma 16 - A
const getClearButton = document.getElementById('apaga-tudo');
getClearButton.addEventListener('click', function(){
    const getClear = document.querySelectorAll('li');
    
       for (let index = 0; index < getClear.length; index += 1) {
        createList.removeChild(getClear[index]);
       }
    });



//let getClearButton = document.querySelector('button'));
   // let getClear = document.querySelectorAll('li');


   