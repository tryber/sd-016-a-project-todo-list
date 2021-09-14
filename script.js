//Área para recuperação de elementos -%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const buttonAdc = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
//Área para recuperação de elementos -%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




///Área para chamar funções %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
createLi()
removeList()
///Área para chamar funções %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




///Área para criar funções %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function createLi (){
  //Ao clicar no botão "Criar tarefa" Cria Li com texto do imput
  buttonAdc.addEventListener('click', function() {
    if (input.value != '') {
      let li = document.createElement('li')
      li.innerHTML = input.value;
      ol.appendChild(li)
      input.value = '';
    }
    }
  )
}

//-----------------------------------------------------
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
///Área para criar funções -%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//Área para estilizar a página usando Style %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 

input.style.backgroundColor = "yellow";
input.style.fontSize = "15px";
input.style.fontWeight = "900";
let body = document.querySelector('body');
body.style.backgroundColor = "rgb( 150, 150, 150)";
// body.style.textAlign = "center";


buttonAdc.style.backgroundColor = "black";
buttonAdc.style.color = "white";
buttonAdc.style.fontSize = '20px';
//Área para estilizar a página usando Style %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

/**
 *Vou Adicionar ainda:
 
 lista.removeChild(itens[0])

 */