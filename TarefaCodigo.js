let pressBut = document.getElementById('criar-tarefa');

let newItem = document.getElementById('texto-tarefa').innerText;

let putItemList = document.createElement('li');

pressBut = document.addEventListener('click', getItem);

function getItem() {

    console.log('feito');
}