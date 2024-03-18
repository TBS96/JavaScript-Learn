// slice() and splice() are array methods, used to cut-out some elements individually from an array and use it for different purposes.


// slice(): copies elements from original array to new array, keeping original array unchanged. (Ctrl+C)

// Using integer array:
// const numbers = [10,20,30,40,50,60,70,80,90];

// numbers.slice(startIndex, lastIndex)
// const x = numbers.slice(2,5);  // o/p: [ 30, 40, 50 ]
// const x = numbers.slice(0,-2);  // o/p: [ 10, 20, 30, 40, 50, 60, 70 ]
// console.log(x);
// console.log(numbers);  // o/p: [ 10, 20, 30, 40, 50, 60, 70 ]


// Using string array:
// const friends = ["Prantik", "Deepa", "Subhash", "Roton"];

// // numbers.slice(startIndex, lastIndex)
// // const y = friends.slice(1,3);   // o/p: [ 'Deepa', 'Subhash' ]
// const y = friends.slice(1,-1);  // o/p: [ 'Deepa', 'Subhash' ]
// console.log(y);



// splice(): cuts elements from original array to new array. (Ctrl+X)

// // Using integer array:
// const numbers = [10,20,30,40,50,60,70,80,90];
// // numbers.splice(startIndex, deleteCount)  // deleteCount means it will delete number of elements mentioned after startIndex from the array

// const x = numbers.splice(2,5);
// console.log("New Array:",x);    // o/p: New Array: [ 30, 40, 50, 60, 70 ]
// console.log("Intial Array:",numbers);   // o/p: Intial Array: [ 10, 20, 80, 90 ]    as we can see, 5 elements deleted from initial array from index = 2

// Using integer array- to delete and add new elements in initial array:
const numbers = [10,20,30,40,50,60,70,80,90];
// numbers.splice(startIndex, deleteCount, addingElementsToInitialArray)
const x = numbers.splice(1, 7, 111,...numbers);
console.log("New Array:",x);    // o/p: [ 20, 30, 40, 50, 60, 70, 80 ]
console.log("Intial Array:",numbers);   // o/p: Intial Array: [ 10, 111, 10, 20, 30, 40,  50, 60, 70, 80, 90,  90 ]