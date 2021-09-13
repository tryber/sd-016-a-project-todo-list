let botao = document.querySelector('#criar-tarefa');
let text = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas')

function adicionaTarefa (){ 
   
      let novoItem =  document.createElement("li");
        lista.appendChild(novoItem);
        novoItem.innerText = text.value;
        text.value = "";
}
    
    botao.addEventListener ('click', adicionaTarefa);

    function selecionarTarefa (event){
     if (document.querySelectorAll('.selected').length > 0){
         document.querySelector('.selected').style.backgroundColor = document.body.style.backgroundColor;
         document.querySelector('.selected').classList.remove('selected');
     }
        event.target.classList.add('selected');
        event.target.style.backgroundColor = "rgb(128, 128, 128)";
    }

    lista.addEventListener('click',selecionarTarefa);
