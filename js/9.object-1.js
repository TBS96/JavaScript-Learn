// In JS, Objects are represented as {}. Object has property/key and value

// Suppose we need to store details of an object Prantik, so we write it as:

// var prantikColor = "Black";
// var prantikAge = 28;
// var prantikHeight = 5.9;
// var prantikRelationship = "Single";
// var prantikLocation = "India";
// var prantikEmail = "prantik@gmail.com";
// var prantikFriends = ["Sayan", "Chandrani", "Jit"];
// var prantikIsTakla = false;


// So, we are writing details of Prantik declaring in each variables, which is tire-some. So, instead, we can write them all in one variable as an object.

var prantik = {
    color: "Black",
    "full Name": "Prantik Ghosh",
    age: 28,
    height: 5.9,
    relationship: "Single",
    location: "India",
    friends: ["Sayan", "Chandrani", "Jit"],
    email: "prantik@gmail.com",
    isTakla: false
};
// console.log(prantik);   //displays all above data
// console.log(prantik.age, prantik.color);   //to display specific data from all


// Another way to retrieve data:
// console.log(prantik["age"]);


// If we want to access a property that is enclosed in "", like eg.: "full Name", then in console.log(prantik.full name) wont work. In VSCode, if we put . then it will automatically suggest us to write it in [], eg.: console.log(prantik["full Name"]) as shown below. This is the best practice to retrieve data:
// console.log(prantik["full Name"]);


console.log(prantik.friends);   //shows all friends from array
console.log(prantik.friends[2]);   //shows specified name from array