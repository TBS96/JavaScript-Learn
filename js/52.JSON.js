// JSON stands for JavaScript Object Notation. An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format. JSON works as converter. It creates communication between client side and server side. JSON is a text format for storing and transporting data. JSON is "self-describing" and easy to understand.

// fetching data from backend/API as JSON format & then converting it to programmable code:
// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// console.log(JSON.parse(text));

// o/p:
// {
//     employees: [
//       { firstName: 'John', lastName: 'Doe' },
//       { firstName: 'Anna', lastName: 'Smith' },
//       { firstName: 'Peter', lastName: 'Jones' }
//     ]
// }


// Sending data to backend in the form of JSON:
const person = {
    fName: "Prantik",
    lName: "Ghosh",
    age: 28
};
// console.log(person);     // o/p: { fName: 'Prantik', lName: 'Ghosh', age: 28 }
console.log(JSON.stringify(person));    // o/p: {"fName":"Prantik","lName":"Ghosh","age":28}