// const college_arr = ["ENGEC327",
//                      "CASPY212", 
//                      "CASPY212", 
//                      "CASPY212", 
//                      "CASMA225", 
//                      "CASMA225", 
//                      "CASMA225", 
//                      "CASMA225",
//                      "ENGEC311"];
// const prof_arr = [Densmore,
//                   Butler,
//                   Hu,
//                   Suarez,
//                   Lin,
//                   Divac,
//                  Sheshmani,
//                  Weinstein,
//                  Joshi];

// function doubleww(n){
//     return n;
// }
//  export {doubleww};

const getName = (n) => {
    return n*10;
  };
  const getCollege = (index) => {
    college_arr = ["ENGEC327",
    "CASPY212", 
    "CASPY212", 
    "CASPY212", 
    "CASMA225", 
    "CASMA225", 
    "CASMA225", 
    "CASMA225",
    "ENGEC311"];
    return college_arr[index];
  };
  
  exports.getName = getName;
  exports.getCollege = getCollege;
