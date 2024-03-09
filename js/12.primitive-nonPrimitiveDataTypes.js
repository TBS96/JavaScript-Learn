// 1. Primitive Data Types:
// a) Number
// b) String
// c) Boolean
// d) null
// e) undefined
// f) Symbol
// g) BigInt

// 2. Non-Primitive / Reference Data Types:
// a) Object
// b) Array
// c) Function
// d) Date


// Below given, works as stack memory. Data will change if copied & updated.
// var person = "Prantik";
// console.log(person);    // o/p: Prantik
// var newPerson = person;
// person = "Deepa";

// console.log(person);
// console.log(newPerson);



// Below given 'object', works as heap memory. Data will not change, as data can be manipulated later if necessary and sticks to the initial data.
var person1 = {
    name: "Prantik"
};
var newPerson1 = person1;

// Now, after changing name to Deepa:
person1.name = "Deepa";

// console.log(person1);   // o/p: { name: 'Prantik' }
// console.log(newPerson1);   // o/p: { name: 'Prantik' }

// Now, after changing name to Deepa:
console.log(person1);   // o/p: { name: 'Deepa' }
console.log(newPerson1);   // o/p: { name: 'Deepa' }


// In non-primitive datatypes, data can't be copied. If changed in one place, then it will change everywhere and give same result. As it dont take stack memory, it takes heap memory.

// Whereas, in primitive datatypes, data can be copied and store in different variable, as it takes stack memory which means. data will store in separate stacks or separate memory blocks.


// Primitive datatype eg:
// console.log(5 === 5);   // o/p: true. as its datatype is 'Number' which is primitive data type, so asmentioned earlier, primitive data types stored as stack memory.

// Non-primitive datatype eg:
// console.log({} === {});     // o/p: false. as JS compares objects by reference(Non-primitive), and not by value(Primitive). It stores data in heap memory.