
var list = document.getElementById('lista-tarefas');

function changeText2() {

    
    var input = document.getElementById('texto-tarefa').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(input));
    list.appendChild(entry);
    document.getElementById('texto-tarefa').value = "" ;
}



