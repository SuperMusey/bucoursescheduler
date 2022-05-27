//Variables from the content.txt, which will later
//contain the variables from the main content.
//Idea is to have these in a seperate file
//WARNING: This is ALL the content of ALL courses, vs the original
//idea of having the file contain only the courses we wanna take.
const college_arr = ["ENGEC327",
                     "CASPY212", 
                     "CASPY212", 
                     "CASPY212", 
                     "CASMA225", 
                     "CASMA225", 
                     "CASMA225", 
                     "CASMA225",
                     "ENGEC311"];
const prof_arr =    ["Densmore",
                     "Butler",
                     "Hu",
                     "Suarez",
                     "Lin",
                     "Divac",
                     "Sheshmani",
                     "Weinstein",
                     "Joshi"];
const rating =      [3.8,4.5,1.0,2.5,4.1,3.3,0,3.9,3.3];
const class_start_time = [1430,930,1400,1700,1010,1230,905,1325,1220];
const class_end_time = [1615,1045,1515,1815,1100,1345,955,1415,1405];
const days = ["MW","TR","TR","TR","MWF","TR","MWF","MWF","MW"];

//sumbit button to LOAD the classes into the WEBSITE but not into code
//Does not need to be async
var countclass = 0;
document.getElementById("subbutton").addEventListener("click",displayclass);
function displayclass(){
    var spanclass = document.getElementsByName("spanclasses");
    let collegename = document.getElementById('college').value;
    let deptname = document.getElementById('dept').value;
    let coursename = document.getElementById('course').value;

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
        selected_courses.push(spanclasses_read[i].innerHTML.replace(/\s/g,""));  
    }
    //document.getElementById("test--js").innerHTML = selected_courses[1];
}













