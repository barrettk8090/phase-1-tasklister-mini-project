document.addEventListener("DOMContentLoaded", () => {
  //Save form to the variable 'form'
  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", function(e) { //removes default refresh behavior of form submission
    e.preventDefault();
    let formvalue = e.target.new_task_description.value;
    buildToDo(formvalue) //passes the user-input form value into the buildToDo function ; 
    form.reset();
  } )


  function buildToDo(todo){
    let li = document.createElement('li') // set the action of creating an li to a variable
    let btn = document.createElement('button') // set the action of creating a button to a variable 
    btn.addEventListener("click", handleDelete) //add delete event listener to btn
    btn.textContent = "X"; // give button text content of X 
    li.textContent = todo + "  "; // give the list item the text content of the passed-in variable/text 
    document.getElementById("tasks").appendChild(li); // append new list items to the #tasks ID as a child 
    li.appendChild(btn); // append new buttons as a child to the list item 
  }

  function handleDelete(e){
    e.target.parentNode.remove();
  }

//PRIORITY DROPDOWN PICKER - COME BACK TO THIS (changes todo item)

// const priorityPicker = document.getElementById("priorityPicker")
// priorityPicker.addEventListener("change", function() {
//   const selectedColor = priorityPicker.value;
//   formvalue.style.color = selectedColor;

  
// })

});