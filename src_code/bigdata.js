//Variables from the content.txt, which will later
//contain the variables from the main content. - modified contenst of content.txt
//Idea is to have these in a seperate file - fulfilled
//WARNING: This is ALL the content of ALL courses, vs the original
//idea of having the file contain only the courses we wanna take.
//PsedoCode:
//dataMap.set(course,[{prof:"",rating:,starttime:,endtime:,days:[]}]<as many as there are subsections>)
//do for each course 
const dataMap = new Map();
dataMap.set("CASPY212",[{prof: "Butler",rating:4.5,starttime:930,endtime:1045,days:["T","R"]},
                        {prof: "Hu",rating:1.0,starttime:1400,endtime:1515,days:["T","R"]},
                        {prof:"Suarez",rating:2.5,starttime:1700,endtime:1815,days:["T","R"]}]);
dataMap.set("ENGEC327",[{prof:"Densmore",rating:3.8,starttime:1430,endtime:1615,days:["M","W"]}]);
dataMap.set("CASMA225",[{prof:"Lin",rating:4.1,starttime: 1010,endtime: 1100,days:["M","W","F"]},
                        {prof: "Divac",rating:3.3,starttime:1230,endtime:1345,days:["T","R"]},
                        {prof:"Sheshmani",rating:0,starttime:905,endtime:955,days:["M","W","F"]},
                        {prof:"Weinstein",rating:3.9,starttime:1325,endtime:1415,days:["M","W","F"]}]);
dataMap.set("ENGEC311",[{prof: "Joshi",rating:3.3,starttime:1220,endtime:1405,days:["M","W"]}]);
dataMap.set("ENGEC411",[{prof: "Scrodinger",rating: 4.2,starttime:1050,endtime:1125,days:["T","R"]},
                        {prof: "Maria",rating: 2.2,starttime:1730,endtime:1810,days:["M","F"]}]);
dataMap.set("CASPS251",[{prof:"Shim",rating: 4.8,starttime:1830,endtime:2100,days:["M","W"]}]);


// const college_arr = ["ENGEC327",
//                      "CASPY212", 
//                      "CASPY212", 
//                      "CASPY212", 
//                      "CASMA225", 
//                      "CASMA225", 
//                      "CASMA225", 
//                      "CASMA225",
//                      "ENGEC311",
//                      "ENGEC411",
//                      "ENGEC411",
//                      "CASPS215"];
// const prof_arr =    ["Densmore",
//                      "Butler",
//                      "Hu",
//                      "Suarez",
//                      "Lin",
//                      "Divac",
//                      "Sheshmani",
//                      "Weinstein",
//                      "Joshi",
//                      "Shien",
//                      "Scrodinger",
//                      "Diluc"];
// const rating =      [3.8,4.5,1.0,2.5,4.1,3.3,0,3.9,3.3,3.6,4.2,4.5];
// const class_start_time = [1430,930,1400,1700,1010,1230,905,1325,1220,1100,1200,1600];
// const class_end_time = [1615,1045,1515,1815,1100,1345,955,1415,1405,1330,1250,1730];
// const days = ["MW","TR","TR","TR","MWF","TR","MWF","MWF","MW","TRF","MWF","MW"];

// const test_data = [1,2];

// function makeData(college,dept,course,prof,rating,starttime,endtime,days){
//     var dataObj = {
//         college: college,
//         dept: dept,
//         course: course,
//         prof:prof,
//         rating: rating,
//         starttime: starttime,
//         endtime: endtime,
//         days: days
//     };
//     return dataObj;
// }
// var data_of_courses = [];
// function returndata(){
//     data_of_courses.push(makeData(ENG,EC,311,Lin,3.6,1300,1440,["M","W","F"]));
//     data_of_courses.push(makeData(ENG,EK,330,TallBoi,4.6,1200,1255,["T","R","F"]));
//     return data_of_courses;
// }

//pushes dont work

