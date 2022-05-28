
//sumbit button to LOAD the classes into the WEBSITE but not into code
//Does not need to be async
var countclass = 0;
document.getElementById("subbutton").addEventListener("click",displayclass);
function displayclass(){
    var spanclass = document.getElementsByName("spanclasses");
    let collegename = document.getElementById('college').value;
    let deptname = document.getElementById('dept').value;
    let coursename = document.getElementById('course').value;
    //Put in check to see if course entered is valid
    spanclass[countclass].textContent = collegename + " " + deptname + " " + coursename;
    countclass = countclass + 1;
    if(countclass == 5)
    {
        countclass = 0;
    }
}

//submit button to GET selected courses into the CODE
//Does not need to be async
var selected_courses = [];
document.getElementById("subbutton--course").addEventListener("click",loadClass);
function loadClass(){
    document.getElementById("subbutton--course").innerHTML = "SUBMITTED";
    var spanclasses_read = document.getElementsByName("spanclasses");
    for(let i = 0;i<5;i++)
    {
        //Put in check to see if course entered is not empty and actually a course
        selected_courses.push(spanclasses_read[i].innerHTML.replace(/\s/g,""));  
    }
    //document.getElementById("test--js").innerHTML = selected_courses[1];
}

//Extract the info about the courses selected from the big data
//May need to be async
async function gatherData(){
    document.getElementById("test--js").innerHTML =test_data[0];
}
















