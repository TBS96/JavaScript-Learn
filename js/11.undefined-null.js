var x;
x = 10;
console.log(x);     // o/p: undefined.
console.log(typeof x);     // 'x' is undefined type of datatype

var y = null;
console.log(typeof y);  // o/p: object (bug in JS).

// Actually null is nothing.


// to check whether null & undefined are equal or not:
console.log(undefined == null);

// to 'hard check' whether null & undefined are equal or not:
console.log(undefined === null);