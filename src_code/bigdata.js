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

//For Data stucture Team READ:
//each dataMap.set() contains an array of objects where each object is a lecture of the course key
//Example: dataMap.set("CASPS251",[{prof:"Shim",rating: 4.8,starttime:1830,endtime:2100,days:["M","W"]}]);
//course key is CASPS251 and the array contains objects (this contains only 1) which is the lecture
//THE STRUCTURE OF OUTPUT:
//for each class do:
//dataMap.set("<course>",[n# of lectures of <course> in objects {} seperated by ,])
//in each object it is {prof:"<NAME",rating:NUMBER,starttime:NUMBER,endtime:NUMBER,days:['day1','day2',etc]}
//so a course with 3 lectures would have 3 such objects in the array of size 3 seperated by ,'s

