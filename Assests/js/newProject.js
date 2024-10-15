
const modalBtn = document.getElementById("change-project");
const modalWindow = document.querySelector(".modal-window");
const closeBtn = document.getElementById("close");
const selectProject = document.getElementById("chose-project");
const modInput = document.getElementById("modal-input");

modalBtn.addEventListener("click", change_project_name);
closeBtn.addEventListener("click", close_modal_window);
selectProject.addEventListener('change', change_selected_project);

const projects = JSON.parse(localStorage.getItem("Projects"));


// Modal window



function project(){

    project_name = modInput.value;
    
    projectName.innerText = project_name;

    let obj = {
        title: project_name,
        uzduotys: [],
        status: "U",
        prior: "N"
    };

    projects.push(obj);

    localStorage.setItem(`Projects`, JSON.stringify(projects));
    localStorage.setItem(`currentProject`, JSON.stringify(`${project_name}`));

    modalWindow.style.display = "none";

    modInput.value ="";

    refresh();
}

function projectFilter(){

    const stop = projects.length;

    selectProject.innerHTML = "";

    projects.forEach((project) => {
        const option = document.createElement("option");
        option.textContent = project.title;
        option.value = project.title;
        option.disabled = false;

        if (project.status === "Y") {
            option.classList.add("complete-prj");
        }

        selectProject.appendChild(option);
    });

  
}

function change_selected_project(){
    console.log("bet kas")
    const selectedOption = selectProject.options[selectProject.selectedIndex];
    console.log(selectedOption);
    const selectedProjectId = selectedOption.value;
    // ;
    localStorage.setItem("currentProject", JSON.stringify(`${selectedProjectId}`));

}

function change_project_name(){

    

    projectFilter();

    modalWindow.style.display = "flex";
    
}

function close_modal_window(){

    modalWindow.style.display = "none";

}
