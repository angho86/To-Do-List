const currentProject = JSON.parse(localStorage.getItem("currentProject"));
const todoList = document.querySelector(".todo-list");
const projectName = document.getElementById("project-name");
obj = JSON.parse(localStorage.getItem("Projects"));





projectName.innerText = currentProject;

function deleteTask(project, index){
    const projects = JSON.parse(localStorage.getItem("Projects"));
    
    for(let i =0; i < projects.length; i++){
      if(projects[i].title === project){
        projects[i].uzduotys.splice(index, 1);
        break;
      }
    }

    localStorage.setItem("Projects", JSON.stringify(projects));

  }
  
function completeTask(project, index){
    const projects = JSON.parse(localStorage.getItem("Projects"));
  
    for(let i =0; i < projects.length; i++){
      if(projects[i].title === project){
        projects[i].uzduotys[index][1] = "Y";
        console.log(projects[i].uzduotys[1]);
        break;
      }
    }   

    localStorage.setItem("Projects", JSON.stringify(projects));
}



function init() {

    todoList.innerHTML = "";

for (let x in obj) {

    let konkretiUzduotis;

    if(obj[x].title === currentProject) {
        
        for (let i in obj[x].uzduotys) {

            konkretiUzduotis = obj[x].uzduotys[i][0];
         
            const todoDiv = document.createElement("div");

            todoDiv.classList.add("list-element");

            const todoLi = document.createElement("li");

            todoLi.innerText = konkretiUzduotis;

            if(obj[x].uzduotys[i][1] === "Y") {
                todoDiv.classList.add("completed");
            }

            todoDiv.appendChild(todoLi);

            // complete button 

            const completeBtn = document.createElement("button");

            completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
        
            completeBtn.classList.add("complete-btn");

            completeBtn.onclick = function() {completeTask(obj[x].title, i)};
        
            todoDiv.appendChild(completeBtn);

            // trash button

            const trashBtn = document.createElement("button");

            trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;

            trashBtn.classList.add("trash-btn");

            trashBtn.onclick = function() {deleteTask(obj[x].title, i)};

            todoDiv.appendChild(trashBtn);

            todoList.appendChild(todoDiv);

        }

        break;
    }
}

}



init();


