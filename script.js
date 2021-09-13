function adicionaTarefa (){
    let botao = document.querySelector('#criar-tarefa');
    let text = document.querySelector('#texto-tarefa');
    let lista = document.querySelector('#lista-tarefas')
    botao.addEventListener ('click', function(){
      let novoItem =  document.createElement("li");
        lista.appendChild(novoItem);
        novoItem.innerText = text.value;
        text.value = "";
    })
}
adicionaTarefa();

function alteraCorItemLista (event){
    let itemLista = document.querySelector('ol')
    itemLista.addEventListener('click',function(event){
        event.target.style.backgroundColor = "rgb(128, 128, 128)"
    })
}
alteraCorItemLista();