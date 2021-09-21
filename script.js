let botaoAdd = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let lista = document.getElementById('lista-tarefas');
let botaoRmv = document.getElementById('apaga-tudo');
let finalizado = document.getElementById('remover-finalizados');

botaoAdd.addEventListener('click', function (event) {

    let textoInput = input.value;
    let tarefa = document.createElement('li');
    tarefa.innerText = textoInput;


    if (textoInput.length) { //verificação de input não vazio.
        lista.append(tarefa);
        input.value = "";
    }
    tarefa.addEventListener('click', function (event) {

        let tarefas = document.getElementsByTagName('li');
        if (tarefas.length > 1) {
            for (let index = 0; index < tarefas.length; index++) {
                if (tarefas[index].style.backgroundColor != '') {
                    tarefas[index].style.backgroundColor = '';

                }

            }

        }

        event.target.style.backgroundColor = "rgb(128, 128, 128)";

    })
    tarefa.addEventListener('dblclick', function (event) {
        if (event.target.style.textDecoration == "") {
            event.target.style.textDecoration = "line-through";
            event.target.classList.add('completed');
        } else {
            event.target.style.textDecoration = "";
            event.target.classList.remove('completed');
        }



    })


})
botaoRmv.addEventListener('click', function (event) {
    lista.innerHTML = '';


})

finalizado.addEventListener('click', function (event) {


    let completadas = lista.getElementsByClassName('completed');
    for (let index = 0; index < completadas.length; index++) {
        completadas[index].remove();
    }

    

    
})





