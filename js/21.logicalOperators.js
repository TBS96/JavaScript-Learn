let isMatricPassed = true;
let income = 20000;
let iPhone = 2;


// all conditions must be satisfied when using &&. Here, all conditions are satisfied.
// if(isMatricPassed === true && income >= 20000 && iPhone > 1){
//     console.log("Proposal Accepted");
// }
// else{
//     console.log("Proposal Rejected");
// }


// any one condition must be satisfied when using ||. Here, no conditions are satisfied.
// if(isMatricPassed === false || income > 20000 || iPhone >= 3){
//     console.log("Proposal Accepted");
// }
// else{
//     console.log("Proposal Rejected");
// }

// using && || operator. Here only one condition is satisfied.
if((isMatricPassed === true && income >= 20000) || iPhone === 1){
    console.log("Proposal Accepted");
}
else{
    console.log("Proposal Rejected");
}