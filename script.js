window.onload = function() {
    const createLIst = document.querySelector('#criar-tarefas')
    const list = document.querySelector('#lista-tarefas')
    const AddTarefa = document.querySelector('#criar-tarefa')
    const entrada = document.querySelector('#texto-tarefa')
    
    

    
    AddTarefa.addEventListener('click',function(){     
        let addli = document.createElement('li')
        let fii = list.appendChild(addli)   
        fii.innerHTML=entrada.value
        fii.className='fii';
        let itenLIs = document.querySelectorAll('.fii')
        entrada.value = ''
        //console.log(itenLIs.length)
        addli.addEventListener('click',function(event){
            //console.log(elementos.style.backgroundColor.includes('rgb(128, 128, 128)'))            
            for(let i = 0; i < itenLIs.length; i=i+1){
                let elementos = itenLIs[i]
                console.log(elementos.style.backgroundColor.includes('white'))
                if(elementos.style.backgroundColor='rgb(128, 128, 128)'){
                    
                    console.log(elementos+"dsdsd")
                    elementos.style.backgroundColor="red";                
                }
            }
            event.target.style.backgroundColor='rgb(128, 128, 128)';
           
            
                
        })
    })

    

    
}