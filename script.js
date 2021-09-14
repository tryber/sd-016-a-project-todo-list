var listItemCounter = 0;        
var list = document.getElementById('lista-tarefas');
let entry = document.createElement('li');

function changeText2() {   
    var input = document.getElementById('texto-tarefa').value;
    entry = document.createElement('li');
    entry.id='list-item'+listItemCounter++;
    entry.appendChild(document.createTextNode(input));
    list.appendChild(entry);
    document.getElementById('texto-tarefa').value = "" ;
  
    addBackgroundColor();
}

let selecionado = document.getElementById("lista-tarefas");

function addBackgroundColor () {
    
    for (let i = 0; i < list.childNodes.length; i += 1) {
        list.childNodes[i].addEventListener('click', function (e) {
            selecionado.classList.remove('color');
            list.childNodes[i].className = 'color';
            selecionado = list.childNodes[i]
        });
} }




