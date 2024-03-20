// for in loop mainly works with Object. can also be used with array.

// Example-1:
// const person = {
//     fName: "Prantik",
//     lName: "Ghosh",
//     age: 28,
// };
// for(let eachPersonKey in person)
// {
//     console.log(eachPersonKey);
// }
// o/p:
// fName
// lName
// age

// for(let eachPersonKey in person)
// {
//     console.log(person[eachPersonKey]);
// }
// o/p:
// Prantik
// Ghosh
// 28


// Example-2:
const numbers = [65,78,14,35];
// for(let number in numbers)
// {
//     console.log(number);
// }
// o/p:
// 0
// 1
// 2
// 3

for(let number in numbers)
{
    console.log(numbers[number]);
}
// o/p:
// 65
// 78
// 14
// 35