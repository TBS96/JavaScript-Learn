// var name = "Prantik";
// var name = "Deepa";
// var name = "Subhash";

// var keyword creates problems while declaring variables of same names. to minimize this, JS v.ES6 brought 'let' and 'const' keywords, to declare variables.

// var x = 10;
// let y = 50;
// const z = 100;
// console.log(x, y, z);   //mostly used
// console.table([x, y, z]);


// If we use 'let' for declaring a variable with same name, then compiler will show a syntax error mentioning "Identifier 'x' has already been declared". So unlike var keyword, 'let' helps us from completely minimizing these errors in code.
// let x=10;
// let x=50;
// console.log(x);

// let num = 10;
// num = 30;
// num = 50;
// console.log(num);   // o/p: 50


// If we use 'const' for declaring a variable with same name, then compiler will show a syntax error mentioning "Identifier 'num' has already been declared". So unlike var keyword, 'const' helps us from completely minimizing these errors in code.
// const num = 20;
// const num = 50;
// console.log(num);


const num = 60;
num = 80;
console.log(num);   // We get a TypeError as 'const' means constant, so it shows an error "Assignment to constant variable." This means we cant update a variable's value when using 'const'.

// Note:
// 'let' helps us to update or replace or reassign a variable's value with same name, whereas in 'const', it wont allow us to update to replace.