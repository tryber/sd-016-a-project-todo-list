// Global functions
const taskListClass = '.task-list';

// Function to create element li and return its creation.
function createListElement() {
  const createLi = document.createElement('li');
  createLi.classList.add('task-list-single-task');
  const getListParentElement = document.querySelector(taskListClass);
  return getListParentElement.appendChild(createLi);
}

// Function to set back color shadow of a task list element.
function cleanAllSelectedItems() {
  const getListParentElementChildren = document.querySelector(taskListClass).children;
  for (let index = 0; index < getListParentElementChildren.length; index += 1) {
    const liIndexPosition = getListParentElementChildren[index];
    liIndexPosition.style.backgroundColor = 'unset';
  }
}

// Function to clear all tasks as the clear button is clicked.
function clearAllTasks() {
  const getClearAllButton = document.querySelector('.task-list-clear-button');
  const getListParentElement = document.querySelector(taskListClass);
  const getListChildElements = getListParentElement.getElementsByClassName('task-list-single-task');
  getClearAllButton.addEventListener('click', () => {
    while (getListChildElements[0]) {
      getListChildElements[0].parentNode.removeChild(getListChildElements[0]);
    }
  });
}
clearAllTasks();
/*
SOURCE - While loop extracted from:
https://stackoverflow.com/questions/13555785/remove-all-child-from-node-with-the-same-class-pure-js
*/

// Function to set a different background to the clicked task.
function setLiBackgroundStyleOnClick() {
  const getListParentElementChildren = document.querySelector(taskListClass).children;
  console.log(getListParentElementChildren);
  for (let index = 0; index < getListParentElementChildren.length; index += 1) {
    const liIndexPosition = getListParentElementChildren[index];
    console.log(liIndexPosition);
    liIndexPosition.addEventListener('click', () => {
      cleanAllSelectedItems();
      liIndexPosition.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

// Function to set a line through to the clicked task.
function setLineThroughToCompletedTask() {
  const getListParentElementChildren = document.querySelector(taskListClass).children;
  for (let index = 0; index < getListParentElementChildren.length; index += 1) {
    const liIndexPosition = getListParentElementChildren[index];
    console.log(liIndexPosition);
    liIndexPosition.addEventListener('dblclick', () => {
      liIndexPosition.style.textDecorationLine = 'line-through';
    });
  }
}

// Function to add a input value to the task list.
function onClickInputTextOnTaskList() {
  const getTaskListAddButtonElement = document.querySelector('.task-list-add-button');
  // Event Listener
  getTaskListAddButtonElement.addEventListener('click', () => {
    const getTaskListInputElement = document.querySelector('.task-list-input');
    const listElementFuncReturn = createListElement();
    const textContainer = getTaskListInputElement.value;
    getTaskListInputElement.value = '';
    listElementFuncReturn.append(textContainer);
    setLiBackgroundStyleOnClick();
    setLineThroughToCompletedTask();
  });
}
onClickInputTextOnTaskList();
