// Example-1:


// let aN = [100,200,300];

// let a1 = [10,20,30];

// let a2 = [a1,40,50,60];     // [ [ 10, 20, 30 ], 40, 50, 60 ]

// let a2 = [...a1,40,50,60];  // [ 10, 20, 30, 40, 50, 60 ]

// let a2 = [40,50,60,...a1];  // [ 40, 50, 60, 10, 20, 30 ]

// let a2 = [40,...a1,50,60];    // [ 40, 10, 20, 30, 50, 60 ]

// let a2 = [...aN,40,...a1,50,60,...a1];  // [ 100, 200, 300, 40, 10, 20,  30,  50, 60, 10, 20,  30 ]

// let a3 = a1;    //storing a1 data to new variable a3 as a copy.

// console.log(a2);



// Example-2:

// let arr1 = [1,2,3,4];
// function sum(n1,n2,n3,n4)
// {
//     return n1 + n2 + n3 + n4;
// }
// console.log(sum(...arr1));  // o/p: 10



//// Example-3:

let array = [5,7,1,3,6,8];
console.log(...array);  // o/p: 5 7 1 3 6 8
console.log(Math.min(...array));     // o/p: 1
console.log(Math.max(...array));     // o/p: 8


// Spread operator separates elements.