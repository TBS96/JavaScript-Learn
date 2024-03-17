// Example-1:
const heros = ["Allu", "Hrittik", "Shahid", "Salman", "ShahRukh"];

heros.forEach((h1) => {
    console.log(h);
});

// OR

// heros.forEach(function(h2){
//     console.log(h2);
// });

// OR

// heros.forEach(nayoks);
// function nayoks(h3)
// {
//     console.log(h3);
// }
// o/p:
// Allu
// Hrittik
// Shahid
// Salman
// ShahRukh

// Example-2:
// const numbers = [1,2,3,4,5,6,7,8,9];
// numbers.forEach((n)=>{
//     console.log(n + 5);
// });
// o/p:
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14

const numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach((n)=>{
    console.log(n);
    if(n===5)
    {
        console.log("Five");
    }
});
// console.log(result);    // o/p: undefined
// o/p:
// 1
// 2
// 3
// 4
// 5
// Five
// 6
// 7
// 8
// 9


// forEach() is used to loop on an array.
// forEach() cant return outside the function. if trying to return outside function it will show o/p as "undefined".