// import pkg from "./backend/variables.js";
// const {doubleww} = pkg;
// doubleww(10);

// //import { double } from './backend/variables.js';
// var count = 0
// //document.getElementById("button1").addEventListener("click",testclass);
// function testclass(){
//     //document.getElementById("button1").innerHTML = double(10);
// }
//console.log(double(10));
//import Bubble from './extrafile.js'
document.getElementById("button1").addEventListener("click",testclass);
//const user = require('../backend/variables.js');
//var myObjhere = "inTests";
var bubblearr = []

function testclass(){
    //user.getCollege(2);
    //console.log(user.getCollege(4));    
    //document.getElementById("button1").innerHTML = double(10);
    for(let i = 0;i<3;i++)
    {
        bubblearr.push(Bubble(i,10-i));
    }
    var temp = bubblearr[0];
    document.getElementById("button1").innerHTML = temp;
}
// console.log(user.getName(10));
// console.log(user.getCollege());