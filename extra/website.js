const projects = document.getElementById("dropDown");
projects.addEventListener('click',dropDown);

const listItems = document.getElementById("dropDowns");

function dropDown(){
    if (projects.getAttribute("class") === "hidden"){
        listItems.style.visibility = "visible";
        projects.setAttribute("class", "shown");
        console.log("here");
    }
    else{
        listItems.style.visibility = "hidden";
        projects.setAttribute("class", "hidden");
    }
}