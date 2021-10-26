const input = document.querySelector('#texto-tarefa');
const botaoAdd = document.querySelector('#criar-tarefa');
const listaOl = document.querySelector('#lista-tarefas');
const btnDelete = document.getElementById('apaga-tudo');
const btnRemoveFinalizados = document.getElementById('remover-finalizados');
botaoAdd.addEventListener('click',function(){
    let liElement = document.createElement('li');
    if(input.value != ''){ //n criar elemento com input vazio;
    liElement.innerText = input.value;
    listaOl.appendChild(liElement);
    liElement.classList.add('lista');
    input.value = '';
    }

    liElement.addEventListener('click',function(event){
        const tarefas = document.getElementsByClassName('lista');
        if(tarefas.length > 1){
            for(let index = 0; index < tarefas.length; index +=1){
                if(tarefas[index].style.backgroundColor != ''){ // conferindo se tem backgroundColor;
                    tarefas[index].style.backgroundColor = ''; // removendo backgroundColor.
                }
            }
        }
        event.target.style.backgroundColor = 'rgb(128,128,128)';
    })

    liElement.addEventListener('dblclick',function(event){
        if(event.target.style.textDecoration == ''){
            event.target.style.textDecoration = "line-through";
            event.target.classList.add('completed');
        } else{
            event.target.style.textDecoration ='';
            event.target.classList.remove('completed');
        }
        console.log(event.target);
    })

    btnDelete.addEventListener('click',function(){ // https://www.horadecodar.com.br/2021/06/27/remover-todos-os-elementos-filhos-com-javascript/
        listaOl.innerHTML="";
    })

    btnRemoveFinalizados.addEventListener('click',function(){
        const completed = document.getElementsByClassName('completed');
        for(let index =0; index < completed.length;index +=1){
            completed[index].remove();
        }
        
    })

})


