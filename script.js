window.onload = function() {
    const list = document.querySelector('#lista-tarefas')
    const AddTarefa = document.querySelector('#criar-tarefa')
    const entrada = document.querySelector('#texto-tarefa')
    const apagarTudo = document.querySelector('#apaga-tudo')
    
    

    apagarTudo.addEventListener('click',function() {
       //let liste = document.getElementsByName('ol')
       let item = document.querySelectorAll('#fii')
       console.log(item)
       //list.removeChild(item)
       for (let i = 0; i < item.length; i=i+1){
        list.removeChild(item[i])
       }            
    })    

    function tt(event){
        let itenLIs = document.querySelectorAll('#fii')
        
        for(let i = 0; i < itenLIs.length; i=i+1){
            console.log(itenLIs[i])
            console.log("ssss"+itenLIs[i].style.backgroundColor)
            if(itenLIs[i].style.backgroundColor=="rgb(128, 128, 128)"){
                itenLIs[i].style.backgroundColor="white";                
            }
            
        }
        event.target.style.backgroundColor="rgb(128, 128, 128)"
    }
    
    AddTarefa.addEventListener('click',function(){     
        let addli = document.createElement('li')
        list.appendChild(addli) 
        //consolelet fii = list.appendChild(addli)   
        addli.innerHTML=entrada.value
        addli.id='fii';      
        
        entrada.value = ''
        addli.addEventListener('click',function(event){  
                      
            tt(event)           
            event.target.style.backgroundColor='rgb(128, 128, 128)';          
                           
        })
        addli.addEventListener('dblclick',function(event){
            
            if(event.target.className=="completed"){
                               console.log("rerere")
                event.target.style.textDecoration='';
                event.target.className='nocompleted'
                
            } else if(event.target.className!="completed"){

                event.target.className='completed';
            event.target.style.textDecoration='line-through solid rgb(0, 0, 0)';
            }
            
        })
    })   
}