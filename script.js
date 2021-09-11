const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

// Add list itens to ol
function addListItem() {
    let listItem = document.createElement('li')
    listItem.innerText = input.value;
    list.appendChild(listItem);

    input.value = '';
}

button.addEventListener('click', addListItem);

// Add id to list itens
function addId() {
    for (let i = 0; i < list.children.length; i += 1) {
        list.children[i].id = i;
    }
}

button.addEventListener('click', addId);

// Add background color to selected list item

let selected = -1;

function clean(selectedID){
    for(let i = 0; i < list.children.length; i += 1){
        if(selectedID !== i){
            let id = i.toString();
            document.getElementById(id).style.backgroundColor = 'white';
        }
    }
}

button.addEventListener('click', () => {
    for (let i = 0; i < list.children.length; i += 1) {
        list.children[i].addEventListener('click', () => {
            let id = i.toString();
            selected = i;
            document.getElementById(id).style.backgroundColor = 'rgb(128, 128, 128)';
            clean(selected);
        });
    }
})

