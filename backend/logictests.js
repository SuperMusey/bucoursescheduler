var arr_of_arr = [["T","G","H"],
                ["W","E","R","S","M"],
                ["Q","L"]];
var myMap = new Map();
var letter = ["A","B","C"];
myMap.set("A",["1","2","3","4","5"]);
myMap.set("B",["1","2","3"]);
myMap.set("C",["1","2","3","4"]);
var letterget = ["A","C"];
var values = [];
printAll_MAP(myMap,0,...values);
function printAll_MAP(map_func, size_){
    if(size_>=map_func.size){
        console.log(values);
        //check(stringsofar);
        return;
    }
    for(let i = 0;i<map_func.get(letter[size_]).length;i++){
        values.push(map_func.get(letter[size_])[i]);
        printAll_MAP(map_func,size_+1);
        values.pop();
    }
}

var testarr = [1,2,3];
//funcarr(8,...testarr);
function funcarr(var_){
    console.log(testarr[1]);
    console.log(var_)
}

var copyMap = new Map();
function getcopy(){
    for(let i =0;i<letterget.length;i++){
        copyMap.set(letterget[i],myMap.get(letterget[i]));
    }
    console.log(copyMap.size);
    console.log(copyMap.get(letter[0])[0]);
}
//getcopy();

//console.log(arr_of_arr[0][0]);
//printAll(arr_of_arr,0,"");
// function printAll(arr_of_arr_func, size_, stringsofar){
//     if(size_>=arr_of_arr_func.length){
//         console.log(stringsofar);
//         //check(stringsofar);
//         return;
//     }
//     for(let i = 0;i<arr_of_arr_func[size_].length;i++){
//         printAll(arr_of_arr_func,size_+1,stringsofar+arr_of_arr_func[size_][i]);
//     }
// }

// function check(stringsofar){
//     if(stringsofar.charAt(1) == 'E')
//     {
//         console.log("This does have E");
//     }
//     return;
// }

