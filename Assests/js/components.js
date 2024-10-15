const expBar = document.querySelector(".bar");
const options = document.querySelector(".select-filter");



let addExp = 0;

function rodyt(a){
    console.log(a);
}

todoList.addEventListener("click", checkDelete);
options.addEventListener("click", filterTodo);

function checkDelete(e){

    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        
        const todo = item.parentElement;

        todo.classList.add("fall");

        todo.addEventListener('transitionend', e => {

          todo.remove();

        });
      }

      if (item.classList[0] === "complete-btn") {

        const todo = item.parentElement;

        todo.classList.toggle("completed");

        exp();

      }
}

function exp() {
    const current = JSON.parse(localStorage.getItem("currentProject"));
    const projects = JSON.parse(localStorage.getItem("Projects"));
    let tasksNumber = 0;
    
  console.log(current);

    let exp = 0;
    
    for(let x in projects){
        if(projects[x].title === current){
            tasksNumber = projects[x].uzduotys.length;
            
            break;
        }
    }
    if(tasksNumber > 0){
    exp = (100 / tasksNumber);
        
    addExp = addExp + exp;

    expBar.style.width = addExp+'%';
    }

    if(addExp >= 100) {
        alert("Sveikiname, Projektas pabaigtas!!!");
        addExp = 0;

        for(let i = 0; i < projects.length; i++){
          if(projects[i].title === current){
            projects[i] = {
              title: projects[i].title,
              uzduotys: projects[i].uzduotys,
              status: "Y",
              prior: "N",
            }

            localStorage.setItem("Projects", JSON.stringify(projects));
          }
        }
    }
}

function filterTodo(e) {
    const todos = [...todoList.childNodes].filter(node => node instanceof HTMLElement);

    todos.forEach(function(todo) {

      switch (e.target.value) {

        case "all":

          todo.style.display = "flex";

          break;

        case "completed":

          if (todo.classList.contains("completed")) {

            todo.style.display = "flex";

          } else {

            todo.style.display = "none";
          }

          break;

        case "uncompleted":

          if (!todo.classList.contains("completed")) {

            todo.style.display = "flex";

          } else {

            todo.style.display = "none";
          }

        
      }
    });
}



function refresh() {
  window.location.reload();
}


