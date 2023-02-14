const todoForm = document.querySelector(" .todo-form ");
const todoInput = document.querySelector(" .todo-input");
const todoItems = document.querySelector(" .todo-items");

let todos = [];

// add eventlistner to form submit
todoForm.addEventListener("submit" , function(event){
  //  prevent submit button from submitting form
  event.preventDefault();

  // adding text in input field and pass in addTodo Function
  addTodo( todoInput.value );
});

// addTodo function 
function addTodo( element ){

  if( element !== "" ){
    const todo = {
      id : Date.now(),
      name : element,
      check : false
    };

    todos.push(todo);
    addToLocalStorage(todos);

    todoInput.value = "";
  }

}

// renderTodo function 
function renderTodo( todos ){

  todoItems.innerHTML = "";
  todos.forEach(  function(item){

    //  check if items is check or not
    const checked = item.check ? "checked" : null;
    
    // create li
    const li = document.createElement("li");
    li.setAttribute( "class" , "item" );
    li.setAttribute( "data-key" , item.id);

    if( item.check === true ){
      li.classList.add("checked");
    }

    li.innerHTML = `
    <input class="checkbox" type="checkbox" ${checked}>
    ${item.name}
    <button class="delete-button">X</button>
    `;

    todoItems.append(li);
  });

}

//  addToLocalStorage 
function addToLocalStorage( todos ){
  localStorage.setItem("todos" , JSON.stringify(todos) );
  renderTodo(todos);
}

// getFromLocalStorage when you refersh page
function getFromLocalStorage( ){
  const refernce = localStorage.getItem("todos");
  if( refernce ){
    todos = JSON.parse(refernce);
    renderTodo(todos);
  }

}

getFromLocalStorage();

// toggle the value to completed and not completed
function toggle(id) {
  todos.forEach(function(item) {
    // use == not ===, because here types are different. One is number and other is string
    if (item.id == id) {
      // toggle the value
      item.completed = !item.completed;
    }
  });
addToLocalStorage(todos);
}
// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
  // filters out the <li> with the id and updates the todos array
  todos = todos.filter(function(item) {
    // use != not !==, because here types are different. One is number and other is string
    return item.id != id;
  });
// update the localStorage
  addToLocalStorage(todos);
}
// initially get everything from localStorage
getFromLocalStorage();
// after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-button and checkbox
todoItemsList.addEventListener('click', function(event) {
  // check if the event is on checkbox
  if (event.target.type === 'checkbox') {
    // toggle the state
    toggle(event.target.parentElement.getAttribute('data-key'));
  }
// check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});




