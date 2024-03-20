// for of loop mainly used with array. can also be used with objects.

// Example-1:
// const numbers = [12,65,78,96,77];
// for(let number of numbers)
// {
//     console.log(number);
// }
// o/p:
// 12
// 65
// 78
// 96
// 77


// Example-2:
const products = {
    name: "Watch",
    color: "Black",
    price: 2500
};
// to convert an object into array:
const keyS = Object.keys(products);
// console.log(keyS);
// o/p:
// [ 'name', 'color', 'price' ]

// now we can use for of loop:
// for(let key of keyS)
// {
//     console.log(key);
// }
// o/p:
// name
// color
// price

for(let key of keyS)
{
    console.log(products[key]);
}
// o/p:
// Watch
// Black
// 2500


// Example-3:
const myName = "Prantik";
for(let x of myName)
{
    console.log(x);
}
// o/p:
// P
// r
// a
// n
// t
// i
// k