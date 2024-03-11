let burgerPrice = 90;
let myBudget = 70;

// if burgerPrice is less than myBudget, then i'll have it:
// if(burgerPrice < myBudget){
    // console.log("I'll have it");    //condition is false, so no o/p
// }

// if burgerPrice is greater than myBudget, then cant have it:
// if(burgerPrice > myBudget){
    // console.log("I cant have it");    //condition is true
// }

// Now updating the price of myBudget to 70 & check if burgerPrice is less than or equal to myBudget, then i'll have it:
// myBudget = 90;
// if(burgerPrice <= myBudget){
//     console.log("I'll have it");    //condition is true
// }

// Now updating the price of myBudget to 100 & check if burgerPrice is greater than or equal to myBudget, then i cant have it:
myBudget = 100;
if(burgerPrice >= myBudget){
    console.log("I cant have it");    //condition is false
}
else{
    console.log("Bring more money");   // printed
}