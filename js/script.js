//variables/queries
const btn = document.querySelector('.btn');
const TodoArr = [];

// User submits item to Todo Array
btn.addEventListener('click', e => {
  e.preventDefault();

  let item = document.forms.todoForm.todoItem;
  console.log(item.value);
  item.value= '';
});
