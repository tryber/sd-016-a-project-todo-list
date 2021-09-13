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

