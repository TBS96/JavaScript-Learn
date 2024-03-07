// most important things in JS: object and event-listener
// Another way to declare an object is: Object.create. Its not needed much for now.


var myObj = {
    name: "Prantik Ghosh",
    email: "prantik@gmail.com",
    age: 28,
    isSingle: true,
    nextObj: {
        favMovies: "Taare Zameen Par",
        favColor: "Blue"
    }
};

// To add data into object myObj from outside the block:
// myObj.friends = ["Sayan", "Chandrani", "Jit"];
// myObj.favNum = 7;


// To add data into object nextObj from outside the block:
// myObj.nextObj.favFood = "Biryani";


// To change or replace or override name/data in myObj object from outside the block(without doing it manually):
// myObj.name = "Deepa Ghosh";


// To delete a data/property from an object, here incase myObj:
// delete myObj.name;


// console.log(myObj);


// Access data from objects using dot(.) notation:
// console.log(myObj.nextObj.favColor);

// Access data from objects using square [] notation:
// console.log(myObj["name"]);


// To freeze/lock a property in declared objects so that no one can change its value:
Object.freeze(myObj);   //locking object myObj

myObj.name = "Subhash Ghosh";

console.log(myObj.name);


// nextObj is an object inside myObj object. So we can also call it as nested object.