// const events = require('events');
// const fs = require('fs');
// const readline = require('readline');

// (async function processLineByLine() {
// try {
//     const rl = readline.createInterface({
//     input: fs.createReadStream('content.txt'),
//     crlfDelay: Infinity
//     });

//     rl.on('line', (line) => {
//     //console.log(`Line from file: ${line}`);
//     let splitline = line.split(/[,]/);
//     //console.log(splitline);
//     course_id.push(splitline[0]);
//     prof_name.push(splitline[1]);
//     rating.push(splitline[2]);
//     class_start_time.push(splitline[3]);
//     class_end_time.push(splitline[4]);
//     days.push(splitline[5]);
//     //console.log(course_id[2]);
//     });

//     await events.once(rl, 'close');
// } catch (err) {
//     console.error(err);
// }
// })();




//This was all in main

// const events = require('events');
// const fs = require('fs');
// const readline = require('readline');

// global.course_id = new Array();
// global.prof_name = new Array();
// global.rating = new Array();
// global.class_start_time = new Array();
// global.class_end_time = new Array();
// global.days = new Array();
// global.test = 1;

// // function ReadFile(filename){
// //     var rl = readline.createInterface({
// //         input : fs.createReadStream(filename),
// //         output : process.stdout,
// //         terminal: false
// //     });
// //     rl.on('line', function (line) {
// //      //console.log(text);
// //      let splitline = line.split(/[,]/);
// //      ProcessFile(splitline)
// //      console.log(test+" in process");
// //      global.test = test;
// //     });
// //     console.log(test+" out process");
// //     // (async function processLineByLine() {
// //     //     try {
// //     //         const rl = readline.createInterface({
// //     //         input: fs.createReadStream('content.txt'),
// //     //         crlfDelay: Infinity
// //     //         });
        
// //     //         rl.on('line', (line) => {
// //     //             let splitline = line.split(/[,]/);
// //     //             ProcessFile(splitline);
// //     //         //console.log(`Line from file: ${line}`);
// //     //         });
        
// //     //         await events.once(rl, 'close');
// //     //     } catch (err) {
// //     //         console.error(err);
// //     //     }
// //     //     })(); 
// // }  

// async function readFileAsText(file) {
//     let result_text = await new Promise((resolve) => {
//         let fileReader = new FileReader();
//         fileReader.onload = (e) => resolve(fileReader.result);
//         fileReader.readAsText(file);
//     });

//     console.log(result_text); // aGV5IHRoZXJl...

//     return result_text;
// }

// function ProcessFile(splitline){
//     //console.log(splitline[0]);
//     global.course_id.push(splitline[0]);
//     global.prof_name.push(splitline[1]);
//     global.rating.push(splitline[2]);
//     global.class_start_time.push(splitline[3]);
//     global.class_end_time.push(splitline[4]);
//     global.days.push(splitline[5]);
//     test = 1100;
//     //console.log(course_id);
// }

// function testing(){
//     test = 10;
// }



