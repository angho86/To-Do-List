const obj = [
    {
        title: "Dojek", 
        uzduotys: [ ["Task1", "Y"], ["Task2", "N"],["Task3", "Y"], ["Task4", "N"], ["Task5", "Y"] ], 
        status: "N",
    },
    {
        title: "Naujas Projektas", 
        uzduotys: [ ["Task1", "Y"], ["Task2", "N"],["Task3", "Y"], ["Task4", "N"], ["Task5", "N"] ], 
        status: "N",
    },
    {
        title: "To Do List", 
        uzduotys: [ ["Task1", "Y"], ["Task2", "N"],["Task3", "Y"], ["Task4", "N"], ["Task5", "Y"] ], 
        status: "N"
    },
    {
        title: "Baigiamasis", 
        uzduotys: [ ["Task1", "N"], ["Task2", "N"],["Task3", "N"], ["Task4", "N"], ["Task5", "N"] ], 
        status: "N"
    },
    {
        title: "Kazkas", 
        uzduotys: [ ["Task1", "Y"], ["Task2", "N"],["Task3", "Y"], ["Task4", "N"], ["Task5", "Y"] ], 
        status: "N"
    }

];

localStorage.setItem("Projects", JSON.stringify(obj));
localStorage.setItem("currentProject", JSON.stringify("Dojek"));