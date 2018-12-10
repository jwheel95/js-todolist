//variables/queries
const btn = document.querySelector('.btn');
const todoUl = document.querySelector('.todo-ul');
const todoArr = [];
const donezoArr = [];

// User submits item to Todo Array
btn.addEventListener('click', e => {
  e.preventDefault();

  let item = document.forms.todoForm.todoItem;
  if (item.value.length > 0) {
    todoArr.push(item.value);
    console.log(todoArr);
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
    checkBox.classList.add('far', 'fa-square');

    const editBox = document.createElement('i')
    editBox.classList.add('fas', 'fa-edit');

    const deleteBox = document.createElement('i');
    deleteBox.classList.add('fas', 'fa-minus-square');

    todoLi.textContent = task;
    todoLi.append(checkBox, editBox, deleteBox);
    todoUl.appendChild(todoLi);
  }
};
