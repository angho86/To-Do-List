
const currentName = JSON.parse(localStorage.getItem("currentProject"))
obj = JSON.parse(localStorage.getItem("Projects"));
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", saveToDo);

function saveToDo(e){

    e.preventDefault();

    let task = todoInput.value.trim();

    if(!task) {
        alert("Neivedete jokios uzduoties!!!!");
        return;
    }

    if(!obj || !Array.isArray(obj)) {
        rodo("Projektas neapibreztas arba nera masyvas");

    }

    for (let x in obj){

        if(obj[x].title === currentName) {

            const uzduociuMasyvas = obj[x].uzduotys || [];
     
            uzduociuMasyvas.push([task, "N"]);

            obj[x] = {
                title: obj[x].title,
                uzduotys: uzduociuMasyvas,
                status: "U",
                prior: "Y"

            }

            localStorage.setItem("Projects", JSON.stringify(obj));

            todoInput.value = "";

            return refresh();
        }
    }

    alert("Projektas nerastas");

    
}



