var the_combo = [];
var arr_of_combo = [];
//var values = [];
var dataMap = new Map();
dataMap.set("CASPY212",[{prof: "Butler",rating:4.5,starttime:930,endtime:1045,days:["T","R"]},
                        {prof: "Hu",rating:1.0,starttime:1400,endtime:1515,days:["T","R"]},
                        {prof:"Suarez",rating:2.5,starttime:1700,endtime:1815,days:["T","R"]}]);
dataMap.set("ENGEC327",[{prof:"Densmore",rating:3.8,starttime:1430,endtime:1615,days:["M","W"]}]);
dataMap.set("CASMA225",[{prof:"Lin",rating:4.1,starttime: 1010,endtime: 1100,days:["M","W","F"]},
                        {prof: "Divac",rating:3.3,starttime:1230,endtime:1345,days:["T","R"]},
                        {prof:"Sheshmani",rating:0,starttime:905,endtime:955,days:["M","W","F"]},
                        {prof:"Weinstein",rating:3.9,startttme:1325,endtime:1415,days:["M","W","F"]}]);
dataMap.set("ENGEC311",[{prof: "Joshi",rating:3.3,starttime:1220,endtime:1405,days:["M","W"]}]);
dataMap.set("ENGEC411",[{prof: "Scrodinger",rating: 4.2,starttime:1050,endtime:1125,days:["T","R"]},
                        {prof: "Maria",rating: 2.2,starttime:1730,endtime:1810,days:["M","F"]}]);
dataMap.set("CASPS251",[{prof:"Shim",rating: 4.8,starttime:1830,endtime:2100,days:["M","W"]}]);

var selected_courses = ["CASPY212","ENGEC327","CASMA225","ENGEC311","ENGEC411","CASPS251"];
getCombinationC(dataMap,0,...the_combo)

var onecombo = [];
function getCombinationC(map_f,size_){
    if(size_>=map_f.size){
        let combo_size = the_combo.length;
        let temp_storage = []
        for(let i = 0;i<combo_size;i++){
            temp_storage[i] = the_combo[i];
        }
        onecombo = temp_storage;
        if(checkCombo(...onecombo)){
            let setrating = avgRating(...onecombo);
            temp_storage.push(setrating);
            arr_of_combo.push(temp_storage);
        }
        //console.log(arr_of_combo);
        return;
    }
    for(let i = 0;i<map_f.get(selected_courses[size_]).length;i++){
        the_combo.push(map_f.get(selected_courses[size_])[i]);
        getCombinationC(map_f,size_+1);
        the_combo.pop();
    }
}

function compare(a,b){
    const firstSetrating = a[a.length - 1];
    const secondSetrating = b[b.length - 1];
    let comparision = 0;
    if(firstSetrating>secondSetrating){
        comparision = 1;
    } else if(secondSetrating<firstSetrating){
        comparision -1;
    }
    return comparision;
}
const compareddata = arr_of_combo.sort((a,b)=>b[b.length-1]-a[a.length-1]);
const comparedarr = arr_of_combo.sort(compare);
console.log(compareddata.length);
for(let i = 0; i<compareddata.length;i++){
    console.log(compareddata[i][compareddata[i].length - 1]);
    // for(let j = 0;j<arr_of_combo[i].length;j++){
    //     console.log(arr_of_combo[i][j]);
    // }
    // console.log("________________");
}

//console.log(arr_of_combo);

// var onecombo = arr_of_combo[0];
// console.log(onecombo);
// console.log(checkCombo(...onecombo));
function checkCombo(){
    let size_combo = onecombo.length;
    for(let i = 0;i<size_combo;i++){
        let active_class = onecombo[i];
        for(let j = i+1;j<size_combo;j++){
            let check_class = onecombo[j];
            //Check if they have common days
            const contains = active_class.days.some(element=>{
                return check_class.days.includes(element);
            })
            if(contains == true){
                let active_class_start_time = active_class.starttime;
                let active_class_end_time = active_class.endtime;
                let check_class_start_time = check_class.starttime;
                let check_class_end_time = check_class.endtime;
                if(active_class_start_time>=check_class_start_time && active_class_start_time<=check_class_end_time){
                    return false;
                }
                if(active_class_end_time>=check_class_start_time && active_class_end_time<=check_class_end_time){
                    return false;
                }
            }
        }
    }
    return true;
}

function avgRating(){
    let given_length = onecombo.length;
    let sum = 0;
    for(let i = 0;i<given_length;i++){
        sum = sum+onecombo[i].rating;
    }
    let avgrate = sum/given_length;
    return avgrate;
}


var arrcomp = [[{val: "crow"},7],[{val: "plo"},13],[{val: "freck"},2],[{val: "lattle"},1]]
const sorteddata = arrcomp.sort((a,b)=>b[1]-a[1]);
//console.log(sorteddata);

var arrtest = []
//modifyarr();
function modifyarr(){
    arrtest.push(1);
    arrtest.push(2);
}

//console.log(arrtest);

var test_arr =[];
for(let i = 0;i<5;i++){
    //console.log(fibonacci(i));
}
//console.log(test_arr);

function fibonacci(num) {
    if(num < 2) {
        test_arr.push('a');
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}


// var myMap = new Map();
// myMap.set("A",[{prof: "james"},{prof: "varsh"},{prof: "hola"},{prof: "molen"},{prof: "kand"}]);
// myMap.set("B",[{prof: "mens"},{prof: "womens"},{prof: "polo"}]);
// myMap.set("C",[{prof: "suck"},{prof: "rock"},{prof: "meh"},{prof: "bleh"}]);
// //var letter = ["A","B","C"];
// //printAll_MAP(dataMap,0,...values);
// function printAll_MAP(map_func, size_){
//     if(size_>=map_func.size){
//         console.log(values);
//         return;
//     }
//     for(let i = 0;i<map_func.get(letter[size_]).length;i++){
//         values.push(map_func.get(letter[size_])[i]);
//         printAll_MAP(map_func,size_+1);
//         values.pop();
//     }
// }