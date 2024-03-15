let myDate = new Date();

// console.log(typeof myDate);     // o/p: object
// console.log(myDate);     // o/p: Fri Mar 15 2024 15:47:25 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());    // o/p: Fri Mar 15 2024


// With get:

// console.log(myDate.getDate());      // o/p: 15
// console.log(myDate.getDay());      // o/p: 5 (as its 5th day of week)
// console.log(myDate.getFullYear());  // o/p: 2024
// console.log(myDate.toLocaleDateString());   // o/p: 15/3/2024
// console.log(myDate.getMonth()); // o/p: 2 (as January is 0, Feb is 1)
// console.log(`${myDate.getHours()} : ${myDate.getMinutes()}`);   // o/p: 16 : 5
// console.log(myDate.getSeconds());    //o/p: 60
// console.log(myDate.getMilliseconds());   // o/p: 200
// console.log(myDate.getDate() + "/" + myDate.getMonth() + "/" + myDate.getFullYear());    // o/p: 15/2/2024 (2 as January is 0)
// console.log(myDate.getTime());  // o/p: 1710501600175 (milliseconds since Jan 1,1970)


// With set:

// myDate.setDate(17);
// console.log(myDate);    // Sun Mar 17 2024 16:12:17 GMT+0530 (India Standard Time)
// copied as object from browser: "2024-03-17T10:42:17.625Z"
// console.log(myDate.toDateString());     // o/p: Sun Mar 17 2024


// Passing values to Date() as integer(whole number):

// myDate = new Date(2018,11,15,12,34,50,200);
// // console.log(myDate);    // o/p: 2018-12-15T07:04:50.200Z
// console.log(myDate.getTime());  //o/p: 1544857490200 (miliseconds from given date till now)


// Passing values to Date() as string:

myDate = new Date("October 18, 2024 10:12:36");
console.log(myDate);    // o/p: 2024-10-18T04:42:36.000Z