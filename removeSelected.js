let removeButton = document.getElementById('remover-selecionado');
function removeSelected(){
    listt.children[selected].remove();
    fixListItensIds();
}
removeButton.addEventListener('click', removeSelected);