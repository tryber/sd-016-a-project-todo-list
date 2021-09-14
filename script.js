let botao = document.querySelector('#criar-tarefa');
let text = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas')
let btnApagar = document.querySelector('#apaga-tudo');
let btnFinalizados = document.querySelector('#remover-finalizados');

function adicionaTarefa (){ 
   
      let novoItem =  document.createElement("li");
        lista.appendChild(novoItem);
        novoItem.classList.add('line')
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

    function riscaTarefa (event){
       for (let key in lista.children){
           let selecionado = lista.children[key];
           if (event.target === selecionado){
               //metodo .toggle copiado do código do Lenny, avisei a ele, metodo que quando tem a classe ele remove e quando não tem ele adiciona.
               selecionado.classList.toggle('completed');
               if (selecionado.classList.contains('completed')){
                   selecionado.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
               } else {
                   selecionado.style.textDecoration = 'none';
               }
           }
       }        
    };

    lista.addEventListener('dblclick', riscaTarefa);

    function apagarTarefas (event){
        let apagar = document.querySelectorAll('.line')
        if (event.target = btnApagar){
         for (let i =0; i < apagar.length; i+=1){
           let itemApagar = apagar[i];
           console.log(itemApagar);
            itemApagar.remove();
         }
        
        }
    }

    function excluiFinalizados (){
        let excluiFinalizados = document.querySelectorAll('.completed');
            for (let key in excluiFinalizados){
                excluiFinalizados[key].remove();
            }
    }
    btnApagar.addEventListener('click', apagarTarefas);
    btnFinalizados.addEventListener('click', excluiFinalizados);
