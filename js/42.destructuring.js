// Example-1:

// const jokes ={
//     id: 841,
//     title: "Jokes 1",
//     releaseDate: 2002
// };

// Without destructuring:
// console.log(jokes.id);   // 841
// console.log(jokes.title);    // Jokes 1
// console.log(jokes.releaseDate);  // 2002

// Destructuring, i.e., without using dot notation:
// const {id,title,releaseDate} = jokes;
// console.log(title);     //Jokes 1
// console.log(id);    // 841
// console.log(releaseDate);   // 2002



// Example-2:

// const numbers = [5,6,4,7,9];

// // Without destructuring:
// // console.log(numbers[2]);     // 4

// // Destructuring, i.e., without using dot notation:
// const [n1,n2,n3,n4,n5] = numbers;
// console.log(n1);    // 5
// console.log(n2);    // 6
// console.log(n3);    // 4
// console.log(n4);    // 7
// console.log(n5);    // 9



// Example-3:

const friendsInfo = {
    id: 59,
    myName: "Prantik Ghosh",
    age: 28,
    moreInfo: {
        profession: "NPD Engineer",
        phoneNo: 9876543210,
        address: "Kolkata-700001"
    }
};

// Destructuring, i.e., using dot notation only with nested objects:
const {id,myName,age,moreInfo} = friendsInfo;
console.log(id);    // 59
console.log(myName);  // Prantik Ghosh
console.log(age);   // 28
console.log(moreInfo.profession, moreInfo.phoneNo, moreInfo.address);   // NPD Engineer 9876543210 Kolkata-700001

// Destructuring is like initializing variables with existing object or array, as shown above. Destructuring can also be done with functions. By using destructuring, we can extract values from arrays and objects in a single line of code, making it easier to understand what the code is doing. This is particularly useful when working with large data structures, as it allows us to focus on the essential parts of the data rather than getting lost in the details.