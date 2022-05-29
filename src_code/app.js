
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
var selected_courses = [];//the UNIQUE classes the user selects
document.getElementById("subbutton--course").addEventListener("click",loadClass);
function loadClass(){
    document.getElementById("subbutton--course").innerHTML = "SUBMITTED";
    var spanclasses_read = document.getElementsByName("spanclasses");
    for(let i = 0;i<5;i++)
    {
        //Put in check to see if course entered is not empty and actually a course
        selected_courses.push(spanclasses_read[i].innerHTML.replace(/\s/g,""));  
    }
    //document.getElementById("test--js").innerHTML = (dataMap.get("CASPY212"))[0].days[0];
    gatherData();
}

//Extract the info about the courses selected from the big data
//MAY need to be async
var courseMap = new Map()
var the_combo = [];
function gatherData(){
    for(let i=0;i<selected_courses.length;i++){
        courseMap.set(selected_courses[i],dataMap.get(selected_courses[i]));
    }
    getCombination(0,...the_combo)
}

//Get all viable combinations
//MAY need to be async
function getCombination(size_){
    if(size_>=courseMap.size){
        checkCombo(...the_combo);
        return;
    }
    for(let i = 0;i<courseMap.get(selected_courses[size_]).length;i++){
        the_combo.push(courseMap.get(selected_courses[size_])[i]);
        getCombination(size_+1);
        the_combo.pop();
    }
}

//Check if a combination is valid
//consider start and end time and days
//May need to be async
//the_combo is an array of objects as stated in bigdata.js of size of the number of courses selected
function checkCombo(){
    //the_combo[0].prof;
    let size_combo = the_combo.length;
    for(let i = 0;i<size_combo;i++){
        var active_class = the_combo[i];
        for(let j = i+1;j<size_combo;j++){
            var check_class = the_combo[j];
            const contains = active_class.days.some(element=>{
                return check_class.days.includes(element);
            })
            if(contains == true){
                
            }
        }
    }
}


















