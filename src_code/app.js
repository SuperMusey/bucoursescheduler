
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
var arr_of_valid_combo = [];
var compared_arr_of_valid_combo = [];
var selected_courses = [];//the UNIQUE classes the user selects
document.getElementById("subbutton--course").addEventListener("click",loadClass);
function loadClass(){
    document.getElementById("subbutton--course").removeEventListener("click",loadClass);
    document.getElementById("subbutton--course").innerHTML = "SUBMITTED";
    var spanclasses_read = document.getElementsByName("spanclasses");
    if(spanclasses_read[0].innerHTML=="COURSE#1"){
        // selected_courses[0] = "CASAS311";
        // selected_courses[1] = "CASBI531";
        // selected_courses[2] = "CASBI552";
        // selected_courses[3] = "QSTAC222";
        // selected_courses[4] = "QSTMO221";
        //problem caused by--
        selected_courses[0] = "CFATH497";
        selected_courses[1] = "CFATH599";
        selected_courses[2] = "CASBI211";
        selected_courses[3] = "KHCHC501";
        selected_courses[4] = "KHCST111";
    }else{    
        for(let i = 0;i<5;i++)//set to 5 as that is what we are allowing now
        {
            //Put in check to see if course entered is not empty and actually a course
            selected_courses.push(spanclasses_read[i].innerHTML.replace(/\s/g,""));  
        }
    }
    //selected_courses = ["ENGEC327","CASMA225","ENGEC311","ENGEC411","CASPS251"];
    //t-document.getElementById("test--js").innerHTML = (dataMap.get("CASPY212"))[0].days[0];
    gatherData();
    compared_arr_of_valid_combo = arr_of_valid_combo.sort((a,b)=>b[b.length-1]-a[a.length-1]);
    nextTable()
    //document.getElementById("test--js").innerHTML = compared_arr_of_valid_combo[0][compared_arr_of_valid_combo[0].length - 1];
    //displayData();
}

//Extract the info about the courses selected from the big data
//MAY need to be async
var courseMap = new Map()
var the_combo = [];
function gatherData(){
    let hasClass = true;
    //t-document.getElementById("test--js").innerHTML = selected_courses[1];works
    for(let i=0;i<selected_courses.length;i++){
        if(!dataMap.has(selected_courses[i])){
            document.getElementById("test--js").innerHTML = "A certain course does not exist in our data!";
            hasClass = false;
        }
        else
            courseMap.set(selected_courses[i],dataMap.get(selected_courses[i]));
    }
    //document.getElementById("test--js").innerHTML = courseMap.get(selected_courses[0])[0].prof;
    //t-we get the proper courseMap
    if(hasClass)
        getCombination(courseMap,0,...the_combo)  
}

//Get all viable combinations
//MAY need to be async
var forCombo = [];
function getCombination(map_,size_){
    if(size_>=map_.size){
        let combo_size = the_combo.length;
        let temp_storage = []
        for(let i = 0;i<combo_size;i++){
            temp_storage[i] = the_combo[i];
        }
        forCombo = temp_storage;
        if(checkCombo(...forCombo)){
            let avg_rating = calcAvgRating(...temp_storage);
            temp_storage.push(avg_rating);
            arr_of_valid_combo.push(temp_storage);
        }
        return;
    }
    for(let i = 0;i<map_.get(selected_courses[size_]).length;i++){
        the_combo.push(map_.get(selected_courses[size_])[i]);
        getCombination(map_,size_+1);
        the_combo.pop();
    }
}

//Check if a combination is valid, where each combo is 5 classes for now
//consider start and end time and days
//May need to be async
//temp_storage is an array of objects as stated in bigdata.js of size of the number of courses selected
function checkCombo(){
    
    let size_combo = forCombo.length;
    for(let i = 0;i<size_combo;i++){
        let active_class = forCombo[i];
        let active_class_multipleInstances = active_class.days.length
        for(let p = 0;p<active_class_multipleInstances;p++){
            for(let j = i+1;j<size_combo;j++){
                let check_class = forCombo[j];
                let check_class_multipleInstances = check_class.days.length; //check for multiple instances of same course
                for(let q = 0;q<check_class_multipleInstances;q++){
                    let arranged_exist = false;
                    let contains = false;
                    if(active_class.days[p] == "Arranged"||check_class.days[q] == "Arranged"){
                         arranged_exist = true;
                         //document.getElementById("test--js").innerHTML = "true";
                    }
                    else{
                        contains = active_class.days[p].some(element=>{
                        return check_class.days[q].includes(element);//DEAL WITH ARRANGED
                        })//Check if they have common days
                    }
                        if(contains == true||arranged_exist == true){
                            let active_class_start_time = active_class.starttime[p];
                            let active_class_end_time = active_class.endtime[p];
                            let check_class_start_time = check_class.starttime[q];
                            let check_class_end_time = check_class.endtime[q];
                            if(active_class_start_time>=check_class_start_time && active_class_start_time<=check_class_end_time){
                                return false;
                            }
                            if(active_class_end_time>=check_class_start_time && active_class_end_time<=check_class_end_time){
                                return false;
                            }
                        }                  
                }  
            }
        }
    }
    return true;
}

//Calculate Average rating
function calcAvgRating(){
    let given_length = forCombo.length;
    let sum = 0;
    for(let i = 0;i<given_length;i++){
        sum = sum+forCombo[i].rating;
    }
    let avgrate = sum/given_length;
    return avgrate;
}


//Display the grid of valid combos in website
document.getElementById("next_table").addEventListener("click",nextTable);
document.getElementById("prev_table").addEventListener("click",prevTable);
var tableid = "datatable"
var iteration_num_in_valid_combo = -1;
function nextTable(){
    if(iteration_num_in_valid_combo < compared_arr_of_valid_combo.length - 1){
        iteration_num_in_valid_combo++;
        displayController();
    }else{
        document.getElementById("test--js").innerHTML = "We can't find any valid combination of those classes :(";
    }
}
function prevTable(){
    //document.getElementById("test--js").innerHTML = "click";
    if(iteration_num_in_valid_combo > 0){
        iteration_num_in_valid_combo--;
        displayController();
    }
}
function displayController(){
    //document.getElementById("test--js").innerHTML = compared_arr_of_valid_combo.length;
    document.getElementById("count_table_number").innerHTML = iteration_num_in_valid_combo;
    var table = document.getElementById(tableid);
    var  rowCount = table.rows.length;
    for (var i = 1; i < rowCount; i++) {
        table.deleteRow(1);
    }
    var n = compared_arr_of_valid_combo[iteration_num_in_valid_combo][compared_arr_of_valid_combo[iteration_num_in_valid_combo].length - 1];
    var rounded = Math.round((n + Number.EPSILON) * 100) / 100;
    document.getElementById("avg_rating").innerHTML = rounded;
    for(let i = 0;i<compared_arr_of_valid_combo[0].length - 1;i++){
        createRows(i)
    }
}
function createRows(row_num){
    
    var table = document.getElementById(tableid);
    var  rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    extra_starttime = "";
    extra_endtime = "";
    extra_days = "";

    var course_cell = row.insertCell(0);
    course_cell.innerHTML = selected_courses[row_num];
    var course_cell = row.insertCell(1);
    course_cell.innerHTML = compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].prof;
    var course_cell = row.insertCell(2);
    course_cell.innerHTML = compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].rating;
    var course_cell = row.insertCell(3);
    if(compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].starttime.length>1){extra_starttime = "\r\n"+ compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].starttime[1]};
    course_cell.innerHTML = compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].starttime[0]+extra_starttime;
    var course_cell = row.insertCell(4);
    if(compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].endtime.length>1){extra_endtime = "\r\n"+ compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].endtime[1]};
    course_cell.innerHTML = compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].endtime[0]+extra_endtime;
    var course_cell = row.insertCell(5);
    if(compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].days.length>1){extra_days = "\r\n"+ compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].days[1].join()};
    course_cell.innerHTML = compared_arr_of_valid_combo[iteration_num_in_valid_combo][row_num].days[0].join()+extra_days;
}


















