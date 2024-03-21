// 'this' keyword when used globally:
// console.log(this);  // o/p: {}
// console.log(typeof this);  // o/p: object


// 'this' keyword when used inside function:
// function testThis()
// {
//     console.log(this);
// }
// testThis();
// o/p:
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */



// How and where to use 'this' keyword:

// Example-1:
const user1 = {
    fName: "Prantik",
    lName: "Ghosh",
    message: function()
    {
        // console.log(`Hello All! My name is ${user1.fName} & I'm using ${product.productName}`);
        console.log(`Hello All! My name is ${this.fName} & I'm using ${product.productName}`);
    }
};
const product = {
    productName: "iPad",
    age: 28
};
user1.message();
// o/p: Hello All! My name is Prantik & I'm using iPad


// Example-2:
const user2 = {
    fName: "Prantik",
    lName: "Ghosh",
    message: function()
    {
        console.log(this);
    }
};
user2.message();
// o/p: { fName: 'Prantik', lName: 'Ghosh', message: [Function: message] }
user2.fName = 'Toyen';
user2.message();
// o/p: { fName: 'Toyen', lName: 'Ghosh', message: [Function: message] }


// Example-3: Normal function:
// function test()
// {
//     let myName = "Prantik Ghosh";
//     console.log(this.myName);
// }
// test();
// o/p: undefined   ('this' doesn't work in normal function)


// Example-4: Arrow function:
const test = () => {
    let myName = "Prantik Ghosh";
    console.log(this.myName);
};
test();
// o/p: undefined   ('this' doesn't work in arrow function)



// Note: 'this' refers contents of its parent & works with object only.