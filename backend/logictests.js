var arr_of_arr = [["T","G","H"],
                ["W","E","R","S","M"],
                ["Q","L"]];

var letterget = ["A","C"];


var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [];
arr3.push(arr1);
arr3.push(arr2);
//console.log(arr3);

var values = [];
var check = [];
var myMap = new Map();
myMap.set("A",["1","2","3","4","5"]);
myMap.set("B",["1","2","3"]);
myMap.set("C",["1","2","3","4"]);
var letter = ["A","B","C"];
printAll_MAP(myMap,0,...values);
function printAll_MAP(map_func, size_){
    if(size_>=map_func.size){
        //console.log(values);
        let pushed_arr = [];
        let size_combo_temp = values.length;
        for(let i = 0;i<size_combo_temp;i++){
            pushed_arr[i] = values[i];
        }
        check.push(pushed_arr);
        //check(stringsofar);
        return;
    }
    for(let i = 0;i<map_func.get(letter[size_]).length;i++){
        values.push(map_func.get(letter[size_])[i]);
        printAll_MAP(map_func,size_+1);
        values.pop();
    }
}
for(let i = 0; i<check.length;i++){
    for(let j = 0;j<check[i].length;j++){
        console.log(check[i][j]);
    }
    console.log("________________");
}
//console.log(check);

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

