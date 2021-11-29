function addTodo(e) 
{
  e.preventDefault();
  // Intial get by ID
  let todos = document.getElementById("todos");
  let listTodos = document.getElementById("listTodo");
  let toastMessages = document.getElementById("toastMessages");

  if (todos.value == "" || null) 
  {
    // Null Block Messages
    toastMessages.innerHTML = "Please Enter the value";
    todos.value = "";
  } 
  else 
  {
    // Working Block
    toastMessages.innerHTML = "";
    console.log(todos.value);

    // Create Elements
    let xLi = document.createElement("li");
    let xTxt = document.createTextNode(todos.value);
    let xBtn = document.createElement("button");

    // TextNode Styling
    xTxt.className = 'ActualContent'
    xLi.style.fontSize = "20px";

    // Button Attributes
    xBtn.innerHTML = "<img src='./img/bin.png' width='100%' height='100%'/>";
    xBtn.className = "xBtn";

    // Delete Functionality
    xBtn.onclick = function(){
      listTodos.removeChild(xBtn.parentElement)
    }

    // Binding the elements
    xLi.appendChild(xTxt);  
    xLi.append(xBtn);

    // For Stack Procedure
    let index = listTodos.firstElementChild

    if(index === null)
    {
      listTodos.appendChild(xLi);
    }
    else
    {
      listTodos.insertBefore(xLi,index);
    }

    // Check functionality
    xLi.onclick = function(){
      xLi.style.textDecoration = 'line-through'
      xLi.style.color = 'red'
    }

    // UnCheck the functionality
    xLi.ondblclick = function(){
      xLi.style.textDecoration = 'none'
      xLi.style.color = 'black'
    }

    // Empty the textbox
    todos.value = "";
  }
}

// Clear all the todo list
function clearAllTodos() 
{
  let listTodos = document.getElementById("listTodo");
  listTodos.innerText = "";
}

let form = document.getElementById("formTodo");

// attach event listener
form.addEventListener("submit", addTodo, true);