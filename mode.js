// let distionary = {
//     "fullName": "Danial",
// };

// const fullName = distionary["fullName"];
// // Getting and printing the value from Dictionary/Object
// console.log("fullName", fullName);

// console.log('distionary["fullName"]', distionary["fullName"]);

// console.log('distionary["fatherName"]', distionary["fatherName"]);

// // update value in dictionary/Object
// distionary["fullName"] = "Yusra Noor Arian";


// let copyFrequency = {
//     5: 2,
//     4: 3,
//     1: 0,
//     8: 9,
// };

// console.log("copyFrequency[4]", copyFrequency[4]);
// console.log("copyFrequency[4]", copyFrequency[4] || 0);

// copyFrequency[4] = 1;



// mode of an array
let arrayArgument = [4, 1, 2, 2, 3, 4, 4, 5];


// let traceFrequency = {
//     4: 3,
//     1: 1,
//     2: 2,
//     3: 1,
//     5: 1
// };
function findMode(arrayArgument) {
    let frequency = {}; // empty object/disctionary = key/value pair
    let mode = arrayArgument[0];  // assuming first value in array is the mode
	let maxCount = 0; // keep track of max frequency of mode number 

    for (let valueInArray of arrayArgument) {
        // frequency[4] = (undef || 0 )+ 1 = 1
        // frequency[1] = (undef || 0) +1 = 1 
        // frequency[2] = (undef || 0) +1 = 1
        // frequency[2] = (1 || 0) +1 = 2
        // frequency [3] = (undef || 0) +1 = 1
        // freuency [4] = (1 || 0) +1 = 2
        // frequency [4] = (2 || 0) +1 = 3
        // frequency [5] = (undef || 0) +1 = 1
        frequency[valueInArray] = (frequency[valueInArray] || 0) + 1;
        // frequency[4] ==> 1 > 0 = true  
        // frequency [1] ==> 1 > 1 false
        // frequency [2] ==> 1 > 1 false
        // frequency [2] ==> 2 > 1 true
        // frequency [3] ==> 1 > 1 false
        // frequency [4] ==> 2 > 2 false
        // frequency [4] ==> 3 > 2 true
        // frequency [5] ==> 1 > 3 false
        if (frequency[valueInArray] > maxCount) {
            // maxcount = 1
            //maxcount = 2
            //maxCount = 3
            maxCount = frequency[valueInArray]; 
            // mode = 4
            // mode =2
            // mode = 4
            mode = valueInArray; 
        }
    }

    return mode;
    //4
}


console.log(findMode(arrayArgument)); 
