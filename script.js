window.onload = function() {
    const list = document.querySelector('#lista-tarefas')
    const AddTarefa = document.querySelector('#criar-tarefa')
    const entrada = document.querySelector('#texto-tarefa')
    const apagarTudo = document.querySelector('#apaga-tudo')
    const removeFinalidated = document.querySelector('#remover-finalizados')
    const salvarTarefas = document.querySelector('#salvar-tarefas')

    salvarTarefas.addEventListener('click',function(e) {
        let item = document.querySelectorAll('#fii')
        let arr = [];
        console.log(item+"hhhhhhhh")
        for (let i = 0; i < item.length; i=i+1){
            console.log(item[i].innerHTML+"oooooo")
            arr.push(item[i].innerHTML)                        
           }
           
           console.log(arr)
           localStorage.setItem('item',arr)

    })   

    apagarTudo.addEventListener('click',function() {
       let item = document.querySelectorAll('#fii')
       for (let i = 0; i < item.length; i=i+1){
        list.removeChild(item[i])
       }
       //localStorage.setItem('item',JSON.stringify(item[i]))
       localStorage.setItem('item','')            
    })
    
    removeFinalidated.addEventListener('click',function() {
        let item = document.querySelectorAll('.completed')
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

    function addTa(){     
        let addli = document.createElement('li')
        list.appendChild(addli) 
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
    }

    function addTaAber(inpu){     
        let addli = document.createElement('li')
        list.appendChild(addli) 
        addli.innerHTML=inpu
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
    }

    function chamaAber(){
        let item = localStorage.getItem('item')
        function separator(stru) {
            let arraS = stru.split(',')
            return arraS
        }
        //console.log(length)
        let itens = separator(item)
        console.log(itens)
        if(itens!=""){
            for(let i=0; i< itens.length; i=i+1){
            
                addTaAber(itens[i])
            }

        }
        
        
    }
    
    
    AddTarefa.addEventListener('click', addTa)
    //chamaAber()   
}

