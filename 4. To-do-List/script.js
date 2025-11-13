const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const section = document.getElementById("section");


addBtn.addEventListener("click", function(){

    let textValue = input.value;

    if(textValue==""){
        alert("enter some text");
    }
    else{
        createTodo(textValue);
    }

    // clearing value:
    input.value="";

    // saving data on local storage:
    // saveTodo();

}, false);


// function createTodo:
function createTodo(textValue){

    const div = document.createElement("div");
    div.classList.add("todo-list");

    const p = document.createElement("p");
    p.classList.add("todo-text");

    const iTick = document.createElement("i");
    iTick.classList.add("fa-solid","fa-check", "tickBtn");
    // iTick.id="tickBtn";

    const iDel = document.createElement("i");
    iDel.classList.add("fa-solid", "fa-trash", "deleteBtn");
    // iDel.id="deleteBtn";
    

    p.innerText = textValue;
    
    div.appendChild(p);
    div.appendChild(iTick);
    div.appendChild(iDel);
    section.appendChild(div);


    // logic for complete todo:
    iTick.addEventListener("click", function(){

        p.classList.toggle("completed");

        // saving data on local storage:
        // saveTodo();

    }, false);

    
    // logic for delete todo:
    iDel.addEventListener("click", function(e){

        e.target.parentElement.remove();

        // saving data on local storage:
        // saveTodo();

    }, false);

}

// function for saving the data: local storage:

function saveTodo(){
    localStorage.setItem("data", section.innerHTML);
}


// funtion for showing todo:
function showTodo(){
    section.innerHTML = localStorage.getItem("data");
}

// showTodo();





