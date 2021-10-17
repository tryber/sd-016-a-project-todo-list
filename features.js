//Features.js: do inglês, gambiarras

const saveList = document.getElementById('salvar-tarefas');
const deleteList = document.getElementById('apaga-tudo');
const description = document.getElementById('funcionamento');
const mvUp = document.getElementById('mover-cima');
const mvDown = document.getElementById('mover-baixo');
const removeItem = document.getElementById('remover-selecionado');
const removeCompleted = document.getElementById('remover-finalizados');
const taskInsert = document.getElementById('texto-tarefa');
const addItem = document.getElementById('criar-tarefa');

// Salva todas as tarefas - início
saveList.addEventListener('mouseover', (pointer) => {
  addIcon('save-list-hover.png', pointer.target);
  insertMessageInDescription('Salvar lista');
});

saveList.addEventListener('mouseout', (pointer) => {
  addIcon('save-list.png', pointer.target);
  insertMessageInDescription();
});

saveList.addEventListener('click', (pointer) => {
  setTimeout(() => {
    insertMessageInDescription('A lista foi salva com êxito!');
    description.style.backgroundColor = '#82E0AA';
  }, 1200);

  setTimeout(() => {
    insertMessageInDescription();
    description.style.background = 'none';
  }, 3900);
});
// final

// Apagar tudo - início
deleteList.addEventListener('mouseover', (pointer) => insertMessageInDescription('Deletar lista'));

deleteList.addEventListener('mouseout', (pointer) => insertMessageInDescription());

deleteList.addEventListener('click', (pointer) => {
  setTimeout(() => {
    insertMessageInDescription('Sua lista foi deletada com sucesso!');
    description.style.backgroundColor = '#E74C3C';
  }, 1200);
  setTimeout(() => {
    insertMessageInDescription();
    description.style.background = 'none';
  }, 3900);
});
// final

// Mover para cima - início
mvUp.addEventListener('mouseover', (pointer) => {
  addIcon('up-arrow-hover.png', pointer.target);
  insertMessageInDescription('Subir item');
});

mvUp.addEventListener('mouseout', (pointer) => {
  addIcon('up-arrow.png', pointer.target);
  insertMessageInDescription();
});
// final

// Mover para baixo - início
mvDown.addEventListener('mouseover', (pointer) => {
  addIcon('down-arrow-hover.png', pointer.target);
  insertMessageInDescription('Descer item');
});

mvDown.addEventListener('mouseout', (pointer) => {
  addIcon('down-arrow.png', pointer.target);
  insertMessageInDescription();
});
// final

// Remover item selecionado - início
removeItem.addEventListener('mouseover', (pointer) => {
  addIcon('trash-hover.png', pointer.target);
  insertMessageInDescription('Excluir item selecionado');
});

removeItem.addEventListener('mouseout', (pointer) => {
  addIcon('trash.png', pointer.target);
  insertMessageInDescription();
});
// final

// Remover itens completos na lista - início
removeCompleted.addEventListener('mouseover', (pointer) => {
  addIcon('clear-hover.png', pointer.target);
  insertMessageInDescription('Limpar itens completos');
});

removeCompleted.addEventListener('mouseout', (pointer) => {
  addIcon('clear.png', pointer.target);
  insertMessageInDescription();
});
// final

// Texto da nova tarefa - início
taskInsert.addEventListener('click', () => {
  insertMessageInDescription('Você pode adicionar uma tarefa pressionando a tecla \'Enter\'')
  setTimeout(() => insertMessageInDescription(), 9000);
});
// final

// Criar tarefa - início
addItem.addEventListener('mouseover', (pointer) => insertMessageInDescription('Adicionar item a lista'));

addItem.addEventListener('mouseout', (pointer) => insertMessageInDescription());

addItem.addEventListener('click', (pointer) => {
  if(taskInsert.value != '') {
    setTimeout(() => addIcon('add-finish.gif', pointer.target), 300);    
    setTimeout(() => addIcon('add.png', pointer.target), 1800);
  }
});
// final

// Funções auxiliares - início
function addIcon(nameIcon, tag){
  tag.src = `icons/${nameIcon}`;
}

function insertMessageInDescription(text = 'Clique duas vezes em um item para marcá-lo como completo'){
  description.innerText = text;
}
// final