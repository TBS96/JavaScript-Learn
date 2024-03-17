// map() works similarly as forEach(). map() can return elements using loop from one array to another array, whereas its not possible with forEach().

// const numbers = [2,5,6,7,9];
// numbers.map((n) => {
//     console.log(n*2);
// });
// o/p:
// 4
// 10
// 12
// 14
// 18

// When there was no map(), we used for loop:
// const numbers = [2,5,6,7,9];
// let a = [];
// for(i=0; i<numbers.length; i++)
// {
//     a[i]=numbers[i] * 2;
// }
// console.log(a);
// o/p: [ 4, 10, 12, 14, 18 ]


// After map() was introduced, it helped us write code in simple and short way:

// const numbers = [2,5,6,7,9];
// const result = numbers.map((n) => {
//     return n*2;
// });
// console.log(result);
// o/p: [ 4, 10, 12, 14, 18 ]

// OR

const numbers = [2,5,6,7,9];
const result = numbers.map((n) => n*3);
console.log(result);
// o/p: [ 6, 15, 18, 21, 27 ]
// As we can see above, using map(), if we return array elements, then it will return as array only.