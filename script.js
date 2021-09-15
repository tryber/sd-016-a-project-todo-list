//Área para recuperação de elementos -%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let body = document.querySelector('body');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const buttonAdc = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
const lis = document.querySelector('li');
///Área para chamar funções %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
createLi()
removeList()
styles()
///Área para criar funções %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function createLi (){
  //Ao clicar no botão "Criar tarefa" Cria Li com texto do imput
  buttonAdc.addEventListener('click', function() {
    let linha = ol.childNodes.length + 1;
    let idLine = 'tarefa' + linha;
    if (input.value != '') {
      let li = document.createElement('li')
      li.innerHTML = input.value;
      li.id = idLine;
      ol.appendChild(li)
      input.value = '';
    }
    }
  )
}

function removeList() {
  // Ao clicar no botão "Limpar lista" A lista é apagada.
  //peguei referências no w3schools.com
  buttonClear.addEventListener('click', function() {
    for ( let i = ol.childNodes.length; i >0; i -= 1) {
      if (ol.childNodes.length >= 0 ){
        ol.removeChild(ol.childNodes[0])
      }
    }
    
  }
  )
}
//Área para estilizar a página usando Style %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 
function styles (){
input.style.backgroundColor = "yellow";
input.style.fontSize = "15px";
input.style.fontWeight = "900";

body.style.backgroundColor = "rgb( 150, 150, 150)";
buttonAdc.style.backgroundColor = "black";
buttonAdc.style.color = "white";
buttonAdc.style.fontSize = '20px';
}
function painttask () {
 ol.addEventListener('click', (event) => {
     
     if (event.target.style.backgroundColor === 'rgb(128, 128, 128)' ) {
        event.target.style.backgroundColor = 'rgb( 150, 150, 150)';
 } else {
  for (let ind = 0 ; ind < ol.childNodes.length ; ind += 1) {
    document.getElementsByTagName('li')[ind].style.backgroundColor = "rgb( 150, 150, 150)"
  }
   event.target.style.backgroundColor = "rgb(128, 128, 128)"
  
 }
}
 )
}
painttask()