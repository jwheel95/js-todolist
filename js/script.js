//variables/queries
const btn = document.querySelector('.btn');
const todoUl = document.querySelector('.todo-ul');
const doneUl = document.querySelector('.done-ul');
const todoArr = [];
const donezoArr = [];

// User submits item to Todo Array
btn.addEventListener('click', e => {
  e.preventDefault();

  let item = document.forms.todoForm.todoItem;
  if (item.value.length > 0) {
    todoArr.push(item.value);
    createList();
    item.value= ''; //clears entry form
  };
});

// Create List Items from Array
function createList() {
  todoUl.innerHTML = ''; //clears out existing list
  for (let task of todoArr) {
    const todoLi = document.createElement('li');
    todoLi.classList.add('col-10', 'offset-1', 'list-item');

    const checkBox = document.createElement('i');
    checkBox.classList.add('far', 'fa-square', 'glyphicon');
    checkBox.addEventListener('click', e => {
      checkTask(e.target);
    })

    const editBox = document.createElement('i')
    editBox.classList.add('fas', 'fa-edit', 'glyphicon');
    editBox.addEventListener('click', e => {
      editTask(e.target);
    })

    const deleteBox = document.createElement('i');
    deleteBox.classList.add('fas', 'fa-minus-square', 'glyphicon');
    deleteBox.addEventListener('click', e => {
      deleteTask(e.target);
    })

    todoLi.textContent = task;
    todoLi.append(checkBox, editBox, deleteBox);
    todoUl.appendChild(todoLi);
  }
};

//Create Done Items from Array
function doneList() {
  doneUl.innerHTML = ''; //clears out existing list
  for(let task of donezoArr) {
    const doneLi = document.createElement('li');
    doneLi.classList.add('col-10', 'offset-1', 'list-item', 'strike');

    const checkedBox = document.createElement('i');
    checkedBox.classList.add('far', 'fa-check-square', 'glyphicon');
    checkedBox.addEventListener('click', e => {
      uncheckTask(e.target);
    })

    const deleteBox = document.createElement('i');
    deleteBox.classList.add('fas', 'fa-minus-square', 'glyphicon');
    deleteBox.addEventListener('click', e => {
      deleteCompleteTask(e.target);
    })

    doneLi.textContent = task;
    doneLi.append(checkedBox);
    doneLi.append(deleteBox);
    doneUl.appendChild(doneLi);
  }
}

//Function for removing items from Array
const removeFromArr = (arr, item) => {
  for(let i = 0; i <= arr.length; i++) {
    if(arr[i] === item) {
      arr.splice(i, 1)
    }
  };
};

// Mark Complete function
function checkTask(box) {
  box.parentElement.classList.add('strike');
  box.classList.remove('fa-square');
  box.classList.add('fa-check-square');
  donezoArr.push(box.parentElement.textContent);
  setTimeout(markComplete, 800);
  function markComplete() {
    removeFromArr(todoArr, box.parentElement.textContent);
    createList();
    doneList();
  }
}

// Mark Incomplete function
function uncheckTask(box) {
  box.parentElement.classList.remove('strike');
  box.classList.remove('fa-check-square');
  box.classList.add('fa-square');
  todoArr.push(box.parentElement.textContent);
  setTimeout(markIncomplete, 800);
  function markIncomplete() {
    removeFromArr(donezoArr, box.parentElement.textContent);
    createList();
    doneList();
  }
}

// Edit function
function editTask() {

}

// Delete functions
function deleteTask(box) {
  box.parentElement.parentElement.removeChild(box.parentElement);
  removeFromArr(todoArr, box.parentElement.textContent);
};

function deleteCompleteTask(box) {
  box.parentElement.parentElement.removeChild(box.parentElement);
  removeFromArr(donezoArr, box.parentElement.textContent);
};
