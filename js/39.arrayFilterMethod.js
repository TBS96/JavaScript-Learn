// filter() means to search/filter-out elements from an array.


const numbers = [8,2,9,6,4,3,5,10,1,7];

const myNum = numbers.filter((n) => n > 4);
console.log(myNum);
// o/p: [ 8, 9, 6, 5, 10, 7 ]

// OR

// const myNum = numbers.filter((n) => {
//     return n > 4;
// });
// console.log(myNum);
// o/p: [ 8, 9, 6, 5, 10, 7 ]


// Example of multiple objects in an array. From below, we want to filter-out those whose profession is actor:
// const heroNames = [
//     {name: "Hrittik", age: 45, profession: "Actor"},
//     {name: "Salman", age: 58, profession: "Actor"},
//     {name: "Arijit", age: 42, profession: "Singer"},
//     {name: "Stan Lee", age: 92, profession: "Film-maker"},
//     {name: "Roton", age: 24, profession: "Lecturer"},
//     {name: "Balam", age: 53, profession: "Singer"},
// ];
// const single = heroNames.filter((h) => h.profession === "Actor");
// console.log(single);
// o/p:
// [
//     { name: 'Hrittik', age: 45, profession: 'Actor' },
//     { name: 'Salman', age: 58, profession: 'Actor' }
// ]

// Now, we want to filter-out those whose age <= 40 is actor:
const heroNames = [
    {name: "Hrittik", age: 45, profession: "Actor"},
    {name: "Salman", age: 58, profession: "Actor"},
    {name: "Arijit", age: 42, profession: "Singer"},
    {name: "Stan Lee", age: 92, profession: "Film-maker"},
    {name: "Roton", age: 24, profession: "Lecturer"},
    {name: "Balam", age: 53, profession: "Singer"},
];
const single = heroNames.filter((h) => h.age <= 40);
console.log(single);
// o/p: [ { name: 'Roton', age: 24, profession: 'Lecturer' } ]