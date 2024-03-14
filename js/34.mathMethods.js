// let x = 15.1;
// let result = Math.round(x);     // o/p: 15
// let result = Math.ceil(x);     // o/p: 16
// let result = Math.floor(x);     // o/p: 15
// let result = Math.trunc(x);     // o/p: 15 removes the values after decimal
// let result = Math.sign(x);     // o/p: 1. gives 1 if x is +ve. -1 if x is -ve and 0 if x is 0.
// let result = Math.abs(x);     // o/p: if x = -15.1 then it gives as +ve no. = 15.1
// let result = Math.random();     // o/p: random numbers as 0.xxxxxxxx
// let result = Math.random() * 20;
// console.log(result);


// Generate random nos. from 1 - 60 with round off:
// let randomNum = Math.round(Math.random() * 60);
// console.log(randomNum);


// Generate random nos. from 1 - 10 with round off using loop:
for(let i=0; i<5;i++)
{
    let randomNum = Math.round(Math.random() * 10);
    console.log(randomNum);
}