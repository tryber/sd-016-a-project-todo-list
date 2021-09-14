var listItemCounter = 0;        
var list = document.getElementById('lista-tarefas');
let color = 'rgb(128,128,128)';
let entry = document.createElement('li');
// const li = document.getElementsByClassName('li');
function changeText2() {

    
    var input = document.getElementById('texto-tarefa').value;
    entry = document.createElement('li');
    entry.id='list-item'+listItemCounter++;
    entry.appendChild(document.createTextNode(input));
    list.appendChild(entry);
    document.getElementById('texto-tarefa').value = "" ;
    console.log(entry);
}


function addBackgroundColor () {
    // entry.style.backgroundColor = color;
    // console.log(entry);
    // const change = list.getElementById('li');
    list.addEventListener('click', function() {
    list.querySelector('li').style.backgroundColor = 'rgb(128,128,128)';
    console.log(list.lastElementChild)
   })       
}
addBackgroundColor();

// entry.addEventListener('click', addBackgroundColor);

// for (let i = 0; i < list.length; i += 1) {
//     list[i].addEventListener('click', function (e) {
//         list[i].style.backgroundColor = color;
//         // entry[i].style.backgroundColor = "red";
//         console.log(list);
//     });
// }



