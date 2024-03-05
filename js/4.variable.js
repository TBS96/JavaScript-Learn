// To declare variables with naming conventions(camel-case: if using more than one word for naming variables, then use it as 'eggPrice'. Most recommended for JS):


// For integer values:
// 40
var eggPrice = typeof 40;

// 28
var age = 28;

// 200
var taxiFare = 200;

console.log(eggPrice, age, typeof taxiFare);


// For String:
var myName = 'Prantik Ghosh';
var momName = "Deepa Ghosh";
var homeAddress = "96, MM NAGAR. KOL-108";

console.log(myName, momName, homeAddress);


var name = typeof "Prantik\'s";
console.log(name);


// For Boolean:
var isSubs = typeof true;
var isNotSub = false;

console.log(isSubs, typeof isNotSub);

// 1: true
// 0: false


// To update a value(in future):
 var x = "Prantik";
 x = "Deepa";   //updated value-1
 x = "Subhash";   //updated value-2

 console.log(x);    // it will print the updated value of x, as console.log() line is below the above lines. JS reads everything line-wise, so in JS its very imp. to maintain the order.