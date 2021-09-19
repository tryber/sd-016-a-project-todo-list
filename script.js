let botao = document.querySelector('#criar-tarefa');
let text = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas')
let btnApagar = document.querySelector('#apaga-tudo');
let btnFinalizados = document.querySelector('#remover-finalizados');
let btnSalvar = document.querySelector('#salvar-tarefas');
let btnExcluiSelecionado = document.querySelector('#remover-selecionado');

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

    function apagarTarefas (){
        let apagar = document.querySelectorAll('.line')
         for (let i = apagar.length -1; i >= 0; i-=1){
           let itemApagar = apagar[i];
            itemApagar.remove();
         }
        
    }

    function excluiFinalizados (){
        let excluiFinalizados = document.querySelectorAll('.completed');
        
            for (let key = 0;key < excluiFinalizados.length; key+=1){
                let excluir = excluiFinalizados[key];
                excluir.remove();
            }
    }
    btnApagar.addEventListener('click', apagarTarefas);
    btnFinalizados.addEventListener('click', excluiFinalizados);

    function salvarTarefas (){
        let listaSalvar =[];
        let salvoRisco = [];
        for (let key = 0; key < lista.children.length; key+=1){
            let salvar = lista.children[key].innerText;
            if (lista.children[key].classList.contains('completed')){
                salvoRisco.push(salvar);
            } else {
                listaSalvar.push(salvar);
            };          
            
        }; 
        localStorage.setItem('lista', JSON.stringify(listaSalvar));
        localStorage.setItem('riscados', JSON.stringify(salvoRisco));
    };

    // Desafio feito com auxilio do Leandro Bonfim.
    function exbirItensSalvos (){
        if (localStorage.getItem('lista')){
        let exibiItem = JSON.parse(localStorage.getItem('lista'));
        for (i = 0; i < exibiItem.length ; i +=1){
            let novaLista = document.createElement('li');
            novaLista.classList.add('line');
            novaLista.innerText = exibiItem[i];
            lista.appendChild(novaLista);
        }
    } if (localStorage.getItem('riscados')){
        let exibiItemRiscado = JSON.parse(localStorage.getItem('riscados'));
        for (i = 0; i < exibiItemRiscado.length ; i +=1){
            let novaListaRiscada = document.createElement('li');
            novaListaRiscada.innerText = exibiItemRiscado[i];
            novaListaRiscada.classList.add('completed');
            novaListaRiscada.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
            lista.appendChild(novaListaRiscada);
    }
}
}


    btnSalvar.addEventListener('click', salvarTarefas);
    window.addEventListener('load', exbirItensSalvos); 
    
    function excluirSelecionado(){
        let selecionado = document.querySelector('.selected');
        selecionado.remove();
    };

    btnExcluiSelecionado.addEventListener('click', excluirSelecionado);