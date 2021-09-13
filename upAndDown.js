let listt = document.getElementById('lista-tarefas');
let upButton = document.getElementById('mover-cima');

//selected = selected list item id

function upButtonFunction() {
    // Change elements id's
    if (selected > 0) {
        let listArray = list.children;

        let aux = listArray[selected].innerText;
        let auxClass = listArray[selected].className;

        listArray[selected].innerText = listArray[selected - 1].innerText;
        listArray[selected].className = listArray[selected - 1].className;

        listArray[selected - 1].innerText = aux;
        listArray[selected - 1].className = auxClass;

        listArray[selected - 1].style.backgroundColor = 'rgb(128, 128, 128)';
        listArray[selected].style.backgroundColor = 'white';

        selected = selected - 1;
    }
}

upButton.addEventListener('click', upButtonFunction);

let downButton = document.getElementById('mover-baixo');

downButton.addEventListener('click', () => {
    if (selected < listt.children.length-1 && selected !== -1) {
        let listArray = list.children;

        let aux = listArray[selected].innerText;
        let auxClass = listArray[selected].className;

        listArray[selected].innerText = listArray[selected + 1].innerText;
        listArray[selected].className = listArray[selected + 1].className;

        listArray[selected + 1].innerText = aux;
        listArray[selected + 1].className = auxClass;

        listArray[selected + 1].style.backgroundColor = 'rgb(128, 128, 128)';
        listArray[selected].style.backgroundColor = 'white';

        selected += 1;
    }
})