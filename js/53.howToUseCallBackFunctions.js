// Example-1: How to use setTimeout() function:

// console.log('First-1');
// // console.log('Second-2');
// setTimeout(function(){
//     console.log('Second-2');
// },5000);
// console.log('Third-3');
// o/p:
// First-1
// Third-3
// Second-2 (this will show after 5000ms i.e., 5s)




// Example-2: Hold & complete tasks for first function and then execute the second function:

const first = (a,b,callback) => {
    setTimeout(() => {
        console.log(a+b);
        callback();
    }, 5000);
};

const second = () => {
    console.log("Second-2");
};

first(10,46,second);
// second();


// Note: To get rid of JS from executing the second function w/o completion of tasks of the first function(this mainly happens when we try to fetch data from another server, it takes some time to load. If it takes time to load, then JS simply moves to the next function):
// callback(): used before ES6
// promise(): used after ES6 launched
// async(): used after ES8 launched