// ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

let textInput = document.getElementById('texto-tarefa')
let roadButton = document.querySelector('#criar-tarefa')
roadButton.innerHTML = 'Adicionar Tarefa'
function addAssign () {
    let ordList = document.getElementById('lista-tarefas');
    let newListItem = document.createElement('li');
    newListItem.innerText = textInput.value
    ordList.appendChild(newListItem)
}
roadButton.addEventListener('click', addAssign)

// Ordene os itens da lista de tarefas por ordem de criação
