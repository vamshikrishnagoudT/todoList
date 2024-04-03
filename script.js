let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton=document.getElementById("addTodoButton");


let todoList = [
  {
    text: "Learn HTML",
    uniqueNo:1
  },
  {
    text: "Learn CSS",
    uniqueNo:2
  },
  {
    text: "Learn JavaScript",
    uniqueNo:3
  }
];

let todoscount=todoList.length;


function  onTodoStatusChange(checkBoxId,labelId){
    let checkBoxElement=document.getElementById(checkBoxId);
    console.log(checkBoxElement.checked);
    let labelElement=document.getElementById(labelId);
    // if (checkBoxElement.checked===true){
    //     labelElement.classList.add("checked");
        
    // }else{
    //  labelElement.classList.remove("checked");   
    // }
    labelElement.classList.toggle("checked");
}
function onDeleteTodo(todoId){
    let todoElement=document.getElementById(todoId);
   todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let checkBoxId="checkBox"+todo.uniqueNo;
    let labelId="label"+todo.uniqueNo;
    let todoId="todo"+todo.uniqueNo;
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
 todoElement.id=todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkBoxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick=function(){
      onTodoStatusChange(checkBoxId,labelId);
  };
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for",checkBoxId);
  labelElement.classList.add("checkbox-label");
  labelElement.id=labelId;
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick=function(){
      onDeleteTodo(todoId);
  };
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function  onAddTodo(){
   
    let userInputELement= document.getElementById("todoUserInput");
    let userInputValue=userInputELement.value;
     if (userInputELement.value===""){
         alert("Enter Valid Text");
         return;
     }
    todoscount=todoscount+1;
    let newTodo={
       
        text:userInputValue,
        uniqueNo:todoscount
       
    };
     createAndAppendTodo(newTodo);
     userInputELement.value="";
     
     
}

addTodoButton.onclick=function(){
    onAddTodo();
    
};